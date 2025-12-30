import { defineStore } from "pinia"

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    items: [],
  }),

  getters: {
    totalPrice(state) {
      return state.items.reduce((sum, item) => sum + item.price * item.qty, 0)
    },

    itemsCount(state) {
      return state.items.reduce((sum, item) => sum + item.qty, 0)
    },

    isInCart(state) {
      return (productId) => state.items.some(item => item.id === productId)
    },

    getItemQty(state) {
      return (productId) => {
        const item = state.items.find(item => item.id === productId)
        return item ? item.qty : 0
      }
    },
  },

  actions: {
    addItem(product) {
      // Проверяем доступное количество
      if (product.quantity !== undefined && product.quantity <= 0) {
        return false
      }

      const existingItem = this.items.find(item => item.id === product.id)
      
      if (existingItem) {
        // Проверяем лимит quantity
        if (product.quantity !== undefined && existingItem.qty >= product.quantity) {
          return false
        }
        existingItem.qty++
      } else {
        // Получаем первое фото для изображения (сортируем по is_main, как в CardSlider)
        let image = null
        if (product.photos && product.photos.length > 0) {
          const sortedPhotos = [...product.photos].sort((a, b) => (b.is_main === true) - (a.is_main === true))
          const firstPhoto = sortedPhotos[0]
          image = firstPhoto?.image_url || firstPhoto?.url || null
        }
        
        this.items.push({
          id: product.id,
          title: product.name || product.text,
          price: product.price,
          image: image,
          qty: 1,
          maxQuantity: product.quantity, // Сохраняем максимальное количество
        })
      }
      return true
    },

    removeItem(id) {
      this.items = this.items.filter(item => item.id !== id)
    },

    updateQty(id, qty) {
      const item = this.items.find(item => item.id === id)
      if (!item) return
      if (qty < 1) qty = 1
      // Проверяем лимит quantity если он установлен
      if (item.maxQuantity !== undefined && qty > item.maxQuantity) {
        qty = item.maxQuantity
      }
      item.qty = qty
    },

    canAddMore(productId, productQuantity) {
      if (productQuantity === undefined) return true
      if (productQuantity <= 0) return false
      const existingItem = this.items.find(item => item.id === productId)
      if (!existingItem) return true
      return existingItem.qty < productQuantity
    },

    clearCart() {
      this.items = []
    },
  },
})

