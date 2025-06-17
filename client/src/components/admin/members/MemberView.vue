<template>
    <div class="card_bg " style="padding: 2rem 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; align-items: center;">
        <div>
        <h1 class="card-title">
            Recent Members 
        </h1>
        <h4>
            New Members who recent joined
        </h4>
        </div>
        <button class="button card-link-btn">
<RouterLink to="/dashboard/members">View All</RouterLink>
        </button>
        </div>
     <div>
        <MemberItem v-for="(user, index) in mokeUser"
        :key="index.toString()"
        :user-name="user.userName"
        :email="user.email"
        :join-date="user.joinDate"
        :packageName="user.packageName as 'premium' | 'elite' | 'basic' "/>
     
     </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import MemberItem from './MemberItem.vue';



const mokeUser = [
{
    "userName": "Michael Smith",
    "email": "michael.s@example.com",
    "joinDate": "12/06/25",
    "packageName": "elite",
    
},
{
"userName": "Sarah Johnson",
"email": "sarah.j@example.com",
"joinDate": "20/05/25",
"packageName": "premium",
},
  {
    "userName": "Emily Davis",
    "email": "emily.d@example.com",
    "joinDate": "15/06/25",
    "packageName": "basic",
    "paymentStatus": "Clear"
  },
  {
    "userName": "Jessica Wilson",
    "email": "jessica.w@example.com",
    "joinDate": "14/06/25",
    "packageName": "elite",
    
  },
  {
    "userName": "David Brown",
    "email": "david.b@example.com",
    "joinDate": "14/06/25",
    "packageName": "premium",
   
  },
]

</script>

<style scoped>
.card-link-btn{
    background: var(--color-highLight);
    border-color: #ff2104;
    padding: 0.5rem 1rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap:.5rem;
    justify-content: space-between;
    margin: 0;
    a{
        color: white;
        text-decoration: none;
    }
}
.card-title{
font-size: 3rem;

}

</style>