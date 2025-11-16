<template>
    <button class="toolbar-item" type="button">
        <img class="toolbar-item__icon" :src="img" :alt="text" />
        <span class="toolbar-item__text">{{ text }}</span>
    </button>
</template>
<script setup>
defineProps({   
  text: String,
  img: String,
});
</script>

<style scoped>
.toolbar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    background: none;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    transition: opacity 0.2s;
}

.toolbar-item:hover {
    opacity: 0.7;
}

.toolbar-item:active {
    opacity: 0.5;
}

.toolbar-item__icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
    color: #4B5563;
}

.toolbar-item__text {
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: #4B5563;
    line-height: 16px;
    text-align: center;
}
</style>