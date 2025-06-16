<template>
    <component :is="userRole === 'admin' ? AdminDashboardView : MemberDashboardView" />
       
</template>

<script setup lang="ts">
import AdminDashboardView from '@/components/admin/DashboardView.vue';
import MemberDashboardView from '@/components/members/DashboardView.vue';
import { useAuthStore } from '@/stores/useAuth';
const { userRole } = useAuthStore();
</script>

<style scoped>

</style>