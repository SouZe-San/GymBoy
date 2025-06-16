import { computed, onMounted, ref } from "vue";
import { defineStore } from "pinia";

type UserRole = "member" | "admin" | null;
export const useAuthStore = defineStore("authStore", () => {
  const userRole = ref<UserRole>(localStorage.getItem("userRole") as UserRole);

  return { userRole };
});
