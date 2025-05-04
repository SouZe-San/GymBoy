<template>
    <main>
     
            <component :is="authType === 'login' ? LoginView : SignupView" />
       
    </main>
</template>

<script setup lang="ts">

// get params form url
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import LoginView from '@/components/auth/LoginView.vue';
import SignupView from '@/components/auth/SignupView.vue';



const route = useRoute()
const authType = computed(() => {
      return route.query.type; // Access the 'type' query parameter
    });

</script>

<style scoped>

</style>