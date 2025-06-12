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
          path: "",
          name: "dashboard-home",
          component: () => import("@/components/admin/DashboardView.vue"),
        },
        {
          path: "members",
          component: () => import("@/components/admin/AllMembersView.vue"),
        },
        {
          path: "bills",
          component: () => import("@/views/admin/PaymentsView.vue"),
        },
        {
          path: "announcements",
          component: () => import("@/views/admin/AnnouncementView.vue"),
        },
      ],
    },
  ],
});

export default router;
