<template>
  <div class="button-wrapper">
    <button 
      class="button" 
      :class="{ 
        'in-cart': isInCart, 
        'disabled': isDisabled && !isInCart 
      }"
      :disabled="isDisabled && !isInCart"
    >
      <button 
        v-if="isInCart"
        class="qty-button minus"
        @click.stop="handleDecrease"
      >−</button>
      
      <div class="text-wrapper" @click="!isInCart && handleAddToCart()">
        {{ buttonText }}
      </div>
      
      <button 
        v-if="isInCart"
        class="qty-button plus"
        @click.stop="handleIncrease"
        :disabled="isMaxReached"
      >+</button>
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useCartStore } from "../../stores/cartStore";

const props = defineProps({
  productId: Number,
  productName: String,
  productPrice: Number,
  productPhotos: { type: Array, default: () => [] },
  productQuantity: { type: Number, default: undefined },
});

const cartStore = useCartStore();
const { items } = storeToRefs(cartStore);

const isInCart = computed(() => cartStore.isInCart(props.productId));
const itemQty = computed(() => cartStore.getItemQty(props.productId));
const isDisabled = computed(() => {
  if (props.productQuantity === undefined) return false
  if (props.productQuantity <= 0) return true
  return !cartStore.canAddMore(props.productId, props.productQuantity)
});

const buttonText = computed(() => {
  if (props.productQuantity !== undefined && props.productQuantity <= 0) {
    return 'Нет в наличии'
  }
  if (isInCart.value) {
    return `В корзине (${itemQty.value})`
  }
  return 'Добавить в корзину'
});

const isMaxReached = computed(() => {
  if (props.productQuantity === undefined) return false
  return itemQty.value >= props.productQuantity
});

function handleAddToCart() {
  if (isDisabled.value) return
  
  cartStore.addItem({
    id: props.productId,
    name: props.productName,
    price: props.productPrice,
    photos: props.productPhotos,
    quantity: props.productQuantity,
  });
}

function handleIncrease() {
  if (isMaxReached.value) return
  cartStore.addItem({
    id: props.productId,
    name: props.productName,
    price: props.productPrice,
    photos: props.productPhotos,
    quantity: props.productQuantity,
  });
}

function handleDecrease() {
  cartStore.removeItem(props.productId)
}
</script>

<style scoped>
.button {
  all: unset;
  align-items: center;
  background-color: #b87333;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  max-width: 320px;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.2s;
  overflow: hidden;
  box-sizing: border-box;
  margin: 0 auto;
}

.button:hover {
  background-color: #a06228;
}

.button:active {
  background-color: #8d5420;
}

.button.in-cart {
  background-color: #4a9b4a;
}

.button.in-cart:hover {
  background-color: #3d7f3d;
}

.button.in-cart:active {
  background-color: #336633;
}

.button.disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  opacity: 0.6;
}

.button.disabled:hover {
  background-color: #cccccc;
}

.button.disabled:active {
  background-color: #cccccc;
}

.div-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-wrapper {
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
}

.button-wrapper {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
}

.qty-button {
  width: 32px;
  height: 32px;
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-radius: 6px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
}

.qty-button:hover:not(:disabled) {
  background-color: rgba(255, 255, 255, 0.3);
}

.qty-button:active:not(:disabled) {
  background-color: rgba(255, 255, 255, 0.4);
}

.qty-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.text-wrapper {
  flex: 1;
  user-select: none;
}
</style>
