<template>
  <div class="card-container">
    <CardSlider :photos="photos" />
    <!-- <div class="card-image-placeholder" /> -->
    <h3 class="card-title">{{ text }}</h3>
    <span class="card-price">{{ price }} ₽</span>
    <Button 
      :product-id="id"
      :product-name="text || name"
      :product-price="price"
      :product-photos="photos"
      :product-quantity="quantity"
    />
  </div>
</template>

<script setup>
import Button from "../Button/Button.vue";
import CardSlider from "../CardSlider/CardSlider.vue";

defineProps({
  id: Number,
  photos: { type: Array, default: () => [] },    
  price: Number,    
  text: String,
  description: String,
  name: String,
  quantity: { type: Number, default: undefined },
});
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  margin-bottom: 32px;
  box-sizing: border-box;
  overflow: hidden;
}

.card-image {
  width: 100%;
  max-width: 100%;
  height: 358px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  margin-bottom: 12px;
}

.card-image-placeholder {
  width: 100%;
  height: 358px;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin-bottom: 12px;
}

.card-title {
  color: #333333;
  font-family: "Playfair Display", serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  margin: 0 0 8px 0;
  text-align: left;
}

.card-price {
  color: #D2B48C;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0 0 20px 0;
  text-align: left;
}
</style>
