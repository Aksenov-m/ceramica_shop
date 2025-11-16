<template>
  <header class="header-subsection">
    <div class="heading">
      <div class="logo-wrapper">
        <img :src="logo" alt="Aksenova logo" class="logo" />
      </div>
    </div>
    <div class="right-icons">
      <div class="cart-wrapper">
        <svg class="cart-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8V6C8 4.89543 8.89543 4 10 4H14C15.1046 4 16 4.89543 16 6V8M5 8H19L20 21H4L5 8Z" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="badge">2</div>
      </div>
      <svg class="menu-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12H21M3 6H21M3 18H21" stroke="#4B5563" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
  </header>
</template>

<script setup>
import logo from "./logo.svg";
</script>

<style scoped>
.header-subsection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: #FAF9F6;
  width: 100%;
  max-width: 380px;
  box-sizing: border-box;
  margin: 0 auto;
  overflow: hidden;
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
  font-family: "Inter", sans-serif;
}

.menu-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
</style>
