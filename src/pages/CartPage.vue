<template>
    <div class="cart-page">
      <CartList 
        :items="cartItems"
        :total="totalPrice"
        @update-qty="updateQty"
        @remove="removeItem"
      />
  
      <OrderForm 
        :total="totalPrice"
        @submit="handleSubmit"
      />
    </div>
  </template>
  
  <script setup>
  import { storeToRefs } from "pinia";
  import { useCartStore } from "../stores/cartStore";
  import CartList from "../components/CartList/CartList.vue";
  import OrderForm from "../components/OrderForm/OrderForm.vue";
  
  const cartStore = useCartStore();
  const { items: cartItems, totalPrice } = storeToRefs(cartStore);
  
  function updateQty(id, qty) {
    cartStore.updateQty(id, qty);
  }
  
  function removeItem(id) {
    cartStore.removeItem(id);
  }
  
  async function handleSubmit(data) {
    console.log("Отправка данных:", data);
  
    // пример отправки
    const res = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  
    if (!res.ok) {
      alert("Ошибка отправки");
      return;
    }
  
    alert("Заказ успешно оформлен!");
  }
  </script>
  
  <style scoped>
  .cart-page {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 16px;
  }
  </style>
  