import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TableauDeBord from "../views/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tableau-de-bord",
      name: "tableau-de-bord",
      component: TableauDeBord,
    },
  ],
});

export default router;
