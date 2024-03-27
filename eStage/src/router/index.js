import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Dashboard from "../views/Dashboard.vue";
import ZoomUser from "../components/ZoomUser.vue";
import ZoomStage from "@/components/ZoomStage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/zoomUser",
      name: "zoomUser",
      component: ZoomUser,
    },
    {
      path: "/zoomStage",
      name: "zoomStage",
      component: ZoomStage,
    },
  ],
});

export default router;
