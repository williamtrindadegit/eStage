import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Dashboard from "../views/Dashboard.vue";
<<<<<<< HEAD
import ZoomUser from "../components/ZoomUser.vue";
=======
import InternshipDashboard from "@/components/InternshipDashboard.vue";
import LoginPage from "@/components/LoginPage.vue";
>>>>>>> origin/anelg

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
<<<<<<< HEAD
      path: "/zoomUser",
      name: "zoomUser",
      component: ZoomUser,
=======
      path: "/InternshipDashboard",
      name: "InternshipDashboard",
      component: InternshipDashboard,
    },
    {
      path: "/LoginPage",
      name: "LoginPage",
      component: LoginPage,
>>>>>>> origin/anelg
    },
  ],
});

export default router;
