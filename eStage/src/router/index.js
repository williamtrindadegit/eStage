import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Dashboard from "../views/Dashboard.vue";
import ZoomUser from "../components/ZoomUser.vue";
import ZoomStage from "../components/ZoomStage.vue";
import InternshipDashboard from "@/components/InternshipDashboard.vue";
import LoginPage from "@/components/LoginPage.vue";
import FormCandidateView from "@/views/FormCandidateView.vue";
import FormInternShipOfferView from "@/views/FormInternShipOfferView.vue";
import FormInternShipRequestView from "@/views/FormInternShipRequestView.vue";
import FormEnterpriseView from "@/views/FormEnterpriseView.vue";

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
    {
      path: "/InternshipDashboard",
      name: "InternshipDashboard",
      component: InternshipDashboard,
    },
    {
      path: "/LoginPage",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/addcandidate",
      name: "addcandidate",
      component: FormCandidateView,
    },
    {
      path: "/editcandidate/:id",
      name: "editcandidate",
      component: FormCandidateView,
    },
    {
      path: "/addinternshipoffer",
      name: "addinternshipoffer",
      component: FormInternShipOfferView,
    },
    {
      path: "/editinternshipoffer/:id",
      name: "editinternshipoffer",
      component: FormInternShipOfferView,
    },
    {
      path: "/addinternshiprequest",
      name: "addinternshiprequest",
      component: FormInternShipRequestView,
    },
    {
      path: "/editinternshiprequest/:id",
      name: "editinternshiprequest",
      component: FormInternShipRequestView,
    },
    {
      path: "/addenterprise",
      name: "addenterprise",
      component: FormEnterpriseView,
    },
    {
      path: "/editenterprise/:id",
      name: "editenterprise",
      component: FormEnterpriseView,
    },
  ],
});

export default router;
