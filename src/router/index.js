import { createRouter, createWebHistory } from "vue-router";
import MainSubsection from "../pages/MainSubsection.vue";
import CartPage from "../pages/CartPage.vue";
const routes = [
  { path: "/", name: "home", component: MainSubsection },
  { path: "/shopping", name: "shopping", component: CartPage },
//   { path: "/product/:id", name: "product", component: ProductPage, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }; // прокрутка наверх при переходе
  }
});

export default router;
