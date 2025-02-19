import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useThemeStore = defineStore("themeChanger", () => {
  const isDark = ref<boolean>(window.matchMedia("(prefers-color-scheme: dark)").matches);

  const media = window.matchMedia("(prefers-color-scheme: dark)");

  const changeTheme = () => {
    // media.addEventListener("change", (event) => {
    //   console.log("Theme changed");
    //   if (event.matches != isDark.value) {
    //     isDark.value = !isDark.value;
    //   }
    // });
    isDark.value = !isDark.value;
  };

  return { isDark, changeTheme };
});
