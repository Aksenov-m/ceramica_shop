<template>
    <nav class="toolbar">
        <ToolbarItem v-for="item in items" :key="item.id" :img="item.img" :text="item.text" />
    </nav>
</template>
<script setup>
import ToolbarItem from "./ToolbarItem.vue";

import image from "./image.svg";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector from "./vector.svg";

const items = [
    {
        id: 1,
        text: "Главная",
        img: image,
    },
    {
        id: 2,
        text: "Магазин",
        img: vector2,
    },
    {
        id: 3,
        text: "О мастере",
        img: vector3,
    },
    {
        id: 4,
        text: "Корзина",
        img: vector,
    }
];

</script>

<style scoped>
.toolbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #F5F5F5;
    border-radius: 12px;
    box-shadow: 0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    padding: 12px 16px;
    width: calc(100% - 40px);
    max-width: 340px;
    box-sizing: border-box;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    z-index: 1000;
    min-height: 80px;
}

@media (max-width: 380px) {
    .toolbar {
        width: calc(100% - 40px);
        left: 20px;
        transform: none;
    }
}
</style>