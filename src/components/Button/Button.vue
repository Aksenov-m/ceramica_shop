<template>
  <button class="button">
      <div class="text-wrapper">Добавить в корзину</div>
  </button>
</template>

<script>

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
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
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
</style>
