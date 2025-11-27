import { createRouter, createWebHistory } from "vue-router";
import MainSubsection from "../pages/MainSubsection.vue";
import CartPage from "../pages/CartPage.vue";
import AboutPage from "../pages/AboutPage.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  { path: "/", name: "home", component: MainSubsection },
  { path: "/shopping", name: "shopping", component: CartPage },
  { path: "/about", name: "about", component: AboutPage },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }; // прокрутка наверх при переходе
  }
});

export default router;
