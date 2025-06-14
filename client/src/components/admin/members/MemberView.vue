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
        <MemberItem/>
        <MemberItem/>
        <MemberItem/>
        <MemberItem/>
        <MemberItem/>
     </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import MemberItem from './MemberItem.vue';

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