// importo le funzioni di Vue Router
import { createRouter, createWebHistory } from "vue-router";

// importo le pagine che voglio usare
import HomePage from "../pages/HomePage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

//definisco il router e le rotte
const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/:pathMatch(.*)*", component: NotFoundPage },
  ],
});

export { router };
