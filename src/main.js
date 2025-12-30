import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from 'pinia'

// Подключаем глобальные стили
import "./style.css";
const pinia = createPinia()
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
