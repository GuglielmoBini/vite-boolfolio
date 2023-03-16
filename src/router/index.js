// importo le funzioni di Vue Router
import { createRouter, createWebHistory } from "vue-router";

// importo le pagine che voglio usare
import HomePage from "../pages/HomePage.vue";
import ProjectDetailsPage from "../pages/ProjectDetailsPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

//definisco il router e le rotte
const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes: [
    { path: "/", name: "home", component: HomePage },
    {
      path: "/projects/:id",
      name: "project-details",
      component: ProjectDetailsPage,
    },
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundPage },
  ],
});

export { router };
