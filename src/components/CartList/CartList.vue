<template>
    <div class="cart-list">
      <h2 class="title">Корзина</h2>
  
      <CartItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        @update-qty="$emit('update-qty', item.id, $event)"
        @remove="$emit('remove', item.id)"
      />
  
      <div class="total">
        <span>Итого</span>
        <span class="sum">{{ total }} ₽</span>
      </div>
    </div>
  </template>
  
  <script setup>
  import CartItem from "../CartItem/CartItem.vue";
  
  defineProps({
    items: Array,
    total: Number
  });
  </script>
  
  <style scoped>
  .title {
    font-family: "Playfair Display";
    font-size: 22px;
    margin-bottom: 16px;
  }
  
  .total {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    font-size: 20px;
    font-weight: 600;
  }
  .sum {
    font-weight: 700;
  }
  </style>
  