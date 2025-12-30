import { defineStore } from "pinia"
import { supabase } from "../../supabase"

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [],
    photos: [],

    loadingProducts: false,
    loadingPhotos: false,
    error: null,

    page: 0,
    limit: 10,
    allLoadedProducts: false,

    filters: {
      category: null,
    },
  }),

  getters: {
    loadingAll(state) {
      return state.loadingProducts || state.loadingPhotos
    },

    filteredProducts(state) {
      if (!state.filters.category) return state.products
      return state.products.filter(
        (p) => p.category === state.filters.category
      )
    },

    photosByProduct(state) {
      return (productId) =>
        state.photos.filter(
          (p) => p.ceramic_id === productId
        )
    },
  },

  actions: {
    async loadProducts() {
      if (this.loadingProducts || this.allLoadedProducts) return

      this.loadingProducts = true
      this.error = null

      try {
        const from = this.page * this.limit
        const to = from + this.limit - 1

        const { data, error } = await supabase
          .from("Ceramic")
          .select("*")
          .order("id", { ascending: true })
          .range(from, to)

        if (error) throw error

        if (!data.length) {
          this.allLoadedProducts = true
        } else {
          this.products.push(...data)
          this.page++
        }
      } catch (e) {
        this.error = e.message || "Ошибка загрузки товаров"
      } finally {
        this.loadingProducts = false
      }
    },

    async loadPhotos() {
      if (this.loadingPhotos) return

      this.loadingPhotos = true
      this.error = null

      try {
        const { data, error } = await supabase
          .from("Images")
          .select("*")
          .order("ceramic_id", { ascending: true })

        if (error) throw error

        this.photos = data
      } catch (e) {
        this.error = e.message || "Ошибка загрузки фотографий"
      } finally {
        this.loadingPhotos = false
      }
    },

    setFilter(key, value) {
      this.filters[key] = value
    },

    resetFilters() {
      this.filters.category = null
    },
  },
})
