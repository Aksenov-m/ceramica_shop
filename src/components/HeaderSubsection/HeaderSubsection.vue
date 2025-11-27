<template>
  <header class="header-subsection">
    <div class="heading">
      <div class="logo-wrapper">
        <img :src="logo" alt="Aksenova logo" class="logo" />
      </div>
    </div>

    <div class="right-icons">
      <div class="cart-wrapper">
        <router-link to="/shopping" class="toolbar-item-link"></router-link>
        <svg class="cart-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M8 8V6C8 4.89543 8.89543 4 10 4H14C15.1046 4 16 4.89543 16 6V8M5 8H19L20 21H4L5 8Z"
            stroke="#4B5563"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div class="badge">2</div>
      </div>

      <!-- ИКОНКА ФИЛЬТРА -->
      <svg
       v-if="route.name === 'home'"
        class="filter-icon"
        width="24"
        height="24"
        viewBox="0 0 26 26"
        fill="none"
        @click.stop="toggleFilters"
      >
        <path
          d="M4 6H22L15.5 14.2V20L10.5 22V14.2L4 6Z"
          stroke="#4B5563"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
      </svg>
    </div>

    <!-- DROPDOWN -->
    <DropdownFilter
      v-model="isOpen"
      :items="[
        'Ёлочные игрушки',
        'Ожерелье',
        'Кулоны',
        'Вазы',
        'Серьги',
        'Обвесы'
      ]"
      @select="onSelect"
    />
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";   // ← подключаем роутер
import logo from "./logo2.svg";
import DropdownFilter from "../DropdownFilter/DropdownFilter.vue";

const route = useRoute(); // ← получаем текущий маршрут
console.log(route.name)
const isOpen = ref(false);

function toggleFilters() {
  isOpen.value = !isOpen.value;
}

function onSelect(category) {
  console.log("Выбрано:", category);
}
</script>

<style scoped>
.header-subsection {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: #FAF9F6;
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
  box-sizing: border-box;
}

.heading {
  display: flex;
  align-items: center;
}

.logo-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.logo {
  height: auto;
  max-height: 32px;
  width: auto;
  display: block;
}

.right-icons {
  display: flex;
  align-items: center;
  gap: 16px;
}

.cart-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-icon {
  width: 24px;
  height: 24px;
}

.badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #B87333;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
}

.filter-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform .2s ease;
}

.filter-icon:active {
  transform: scale(0.9);
}
</style>

