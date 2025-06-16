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
      path: "/admin/dashboard",
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
        {
          path: "schedule",
          component: () => import("@/views/admin/ScheduleView.vue"),
        },
      ],
    },
    {
      path: "/member",
      name: "dashboard-member",
      component: DashboardView,
      children: [
        {
          path: "dashboard",
          name: "dashboard-member-home",
          component: () => import("@/components/members/DashboardView.vue"),
        },
        {
          path: "receipts",
          name: "receipts",
          component: () => import("@/views/member/ReciptView.vue"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("@/views/member/ProfileView.vue"),
        },
        {
          path: "notifications",
          name: "notifications",
          component: () => import("@/views/member/NotificationView.vue"),
        },
      ],
    },
  ],
});

export default router;
