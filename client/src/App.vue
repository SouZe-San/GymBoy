<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { watchEffect } from 'vue'
import NavBar from './components/Nav/NavBar.vue';

import { useThemeStore } from './stores/theme'

const themeStore = useThemeStore()

watchEffect(() => {
   window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
   
    if (event.matches != themeStore.isDark) {
        themeStore.changeTheme()
      }
  });
})


</script>

<template>

  <NavBar />
  
  <RouterView />
</template>

<style scoped>


</style>
