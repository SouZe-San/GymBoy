<template>
    <section class="dashboard-section">
             <SideBar :user-type="userRole"/>
    
<main>
    
    <router-view />

</main>
    </section>
</template>

<script setup lang="ts">
import SideBar from '@/components/Nav/side-bar/SideBar.vue';
import { RouterView } from 'vue-router';

import { useAuthStore } from '@/stores/useAuth';
const {userRole} = useAuthStore();

</script>

<style scoped>
section.dashboard-section{
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
main{
   padding-top: calc(var(--nav-height) - 2rem);
    flex-grow: 1;
    margin-left: 16rem;
    overflow-y: scroll;
    
   &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;   
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGdlbXxlbnwwfHx8fDE2OTY1NTQ3MjM&ixlib=rb-4.0.3&q=80&w=1080') no-repeat center center/cover;
    filter: blur(13rem);

   }
   &::after{
    content: "";
    position: absolute;
    bottom: 10px;
    left: 10PX;
    box-shadow: 0 0 55px 56px rgba(202, 42, 6, 0.508);
   }
}
section.inDashboard{
width: 100%;
padding: 0 2rem;
}

@media (max-width: 768px) {
  main{
    margin-left: 0;
  }
}
</style>