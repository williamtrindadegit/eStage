import { createRouter, createWebHistory } from "vue-router";
import { useSession } from '@/stores/session';

import Dashboard from "@/views/Dashboard.vue";
import ZoomUser from "@/components/ZoomUser.vue";
import ZoomStage from "@/components/ZoomStage.vue";
import InternshipDashboard from "@/components/InternshipDashboard.vue";
import LoginPage from "@/components/LoginPage.vue";
import FormCandidateView from "@/views/FormCandidateView.vue";
import FormInternShipOfferView from "@/views/FormInternShipOfferView.vue";
import FormInternShipRequestView from "@/views/FormInternShipRequestView.vue";
import FormEnterpriseView from "@/views/FormEnterpriseView.vue";
import OffersDashboard from "@/views/OffresStage.vue";
import RequestDashboard from "@/views/DemandesStage.vue";
import Candidats from "@/views/Candidats.vue";
import Entreprises from "@/views/Entreprises.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Accueil",
      component: LoginPage,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/demandes-stage",
      name: "demandesStage",
      component: RequestDashboard,
    },
    {
      path: "/offres-stage",
      name: "offresStage",
      component: OffersDashboard,
    },
    {
      path: "/candidats",
      name: "candidats",
      component: Candidats,
    },
    {
      path: "/entreprises",
      name: "entreprises",
      component: Entreprises,
    },
    {
      path: "/zoomStage",
      name: "zoomStage",
      component: ZoomStage,
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

router.beforeEach((to, from, next) => {
  const sessionStore = useSession();
  if (sessionStore.loggedIn && to.path === '/') {
    // Si l'usager est connect� et qu'il tente d'acc�der � la route '/', on le redirige vers '/dashboard'
    next({ path: '/dashboard' });
  } else if (!sessionStore.loggedIn && to.path !== '/') {
    // Si l'usager n'est pas connect� et qu'il tente d'acc�der � une route autre que '/', on le redirige vers '/'
    next({ path: '/' });
  } else {
    // Sinon, on le laisse passer normalement dans les autres cas.
    next();
  }
});

export default router;
