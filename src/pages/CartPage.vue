<template>
    <div class="cart-page">
      <CartList 
        :items="cartItems"
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
  import { ref, computed } from "vue";
  import CartList from "../components/CartList/CartList.vue";
  import OrderForm from "../components/OrderForm/OrderForm.vue";
  
  // Пример данных
  const cartItems = ref([
    { id: 1, title: "Кружка", price: 1200, qty: 1, image: "/cup.jpg" },
    { id: 2, title: "Тарелка", price: 2500, qty: 2, image: "/plate.jpg" }
  ]);
  
  const totalPrice = computed(() =>
    cartItems.value.reduce((s, i) => s + i.price * i.qty, 0)
  );
  
  function updateQty(id, qty) {
    const item = cartItems.value.find(el => el.id === id);
    if (!item) return;
    if (qty < 1) qty = 1;
    item.qty = qty;
  }
  
  function removeItem(id) {
    cartItems.value = cartItems.value.filter(i => i.id !== id);
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
  