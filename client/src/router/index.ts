import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardView from "@/views/dashboard/DashboardView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("@/views/AuthenticationView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      children: [
        {
          path: "members",
          component: () => import("@/components/admin/AllMembersView.vue"),
        },
      ],
    },
  ],
});

export default router;
