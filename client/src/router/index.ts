import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
      path: "/admin/members",
      name: "members",
      component: () => import("@/views/AllMembersView.vue"),
    },
  ],
});

export default router;
