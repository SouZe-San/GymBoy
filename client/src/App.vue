<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { watchEffect } from 'vue'

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

  
  <RouterView />
</template>

<style scoped>


</style>
