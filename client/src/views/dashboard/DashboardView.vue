<template>
    <section style="display: flex;" class="dashboard-section">
        <!-- SIdebar - nav -->
<SideBar user-type="admin"/>
<main>
    

    <!-- Main - dynamic View -->
    <router-view />

</main>
    </section>
</template>

<script setup lang="ts">
import SideBar from '@/components/Nav/side-bar/SideBar.vue';
import { RouterView } from 'vue-router';


</script>

<style scoped>

</style>