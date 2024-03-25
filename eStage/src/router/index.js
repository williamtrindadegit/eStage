import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Connexion from "../views/Connexion.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Connexion",
      name: "Connexion",
      component: Connexion,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});

export default router;
