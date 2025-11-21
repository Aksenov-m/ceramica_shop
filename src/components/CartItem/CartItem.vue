<template>
    <div class="item">
      <img :src="item.image" class="photo" />
  
      <div class="info">
        <div class="name">{{ item.title }}</div>
        <div class="price">{{ item.price }} ₽</div>
  
        <div class="qty">
          <button @click="change(item.qty - 1)">−</button>
          <span>{{ item.qty }}</span>
          <button @click="change(item.qty + 1)">+</button>
        </div>
      </div>
  
      <button class="remove" @click="$emit('remove')">×</button>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    item: Object
  });
  
  const emit = defineEmits(["update-qty", "remove"]);
  
  function change(qty) {
    emit("update-qty", qty);
  }
  </script>
  
  <style scoped>
  .item {
    display: flex;
    background: white;
    padding: 12px;
    border-radius: 12px;
    margin-bottom: 12px;
    align-items: center;
  }
  
  .photo {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    object-fit: cover;
  }
  
  .info {
    flex-grow: 1;
    padding-left: 12px;
  }
  
  .name {
    font-size: 16px;
    font-weight: 500;
  }
  
  .price {
    font-size: 14px;
    margin-top: 4px;
  }
  
  .qty {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }
  
  .qty button {
    width: 28px;
    height: 28px;
    border: none;
    background: #f2eae3;
    border-radius: 6px;
    font-size: 18px;
  }
  
  .qty span {
    margin: 0 8px;
    font-size: 16px;
  }
  
  .remove {
    background: transparent;
    border: none;
    font-size: 24px;
    color: #aaa;
  }
  </style>
  