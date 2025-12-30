import { defineStore } from "pinia"
import { computed } from "vue"

export const useOrderFormStore = defineStore("orderForm", {
  state: () => ({
    fields: {
      name: "",
      phone: "",
      email: "",
      address: "",
      agree: false,
    },

    touched: {
      name: false,
      phone: false,
      email: false,
      address: false,
      agree: false,
    },
  }),

  getters: {
    errors: (state) => {
      const e = {}

      if (state.touched.name && !state.fields.name.trim()) {
        e.name = "Введите имя"
      }

      if (state.touched.phone && !state.fields.phone.trim()) {
        e.phone = "Введите телефон"
      }

      if (state.touched.email) {
        if (!state.fields.email.trim()) {
          e.email = "Введите e-mail"
        } else if (
          !state.fields.email.includes("@") ||
          !state.fields.email.includes(".")
        ) {
          e.email = "Введите корректный e-mail"
        }
      }

      if (state.touched.address && !state.fields.address.trim()) {
        e.address = "Введите адрес"
      }

      if (state.touched.agree && !state.fields.agree) {
        e.agree = "Необходимо согласие"
      }

      return e
    },

    isValid() {
      return Object.keys(this.errors).length === 0
    },
  },

  actions: {
    setField(key, value) {
      this.fields[key] = value
    },

    touch(key) {
      this.touched[key] = true
    },

    touchAll() {
      Object.keys(this.touched).forEach((k) => {
        this.touched[k] = true
      })
    },

    reset() {
      Object.keys(this.fields).forEach((k) => {
        this.fields[k] = k === "agree" ? false : ""
      })
      Object.keys(this.touched).forEach((k) => {
        this.touched[k] = false
      })
    },
  },
})
