<template>
    <div class="card_bg billCard">
        <h1 style="color: white; font-size: 1.5rem; ">{{ userName }}</h1>
        <h3 style="font-size: 14px;">{{ userEmail }}</h3>
        <p style="margin-top: 1rem;">
            <span >Package : </span>
            <span style="color: aliceblue; font-weight: 600;">{{ packageName.charAt(0).toUpperCase() + packageName.slice(1) }}</span>
        </p>
        <p>
            <span >Due Amount : </span>
            <span style="color: aliceblue; font-weight: 600;"> ₹{{ dueAmount }}</span>
        </p>

    <div style="margin-top: 1rem; display: flex;">
        <button class="button clear-btn" >Clear</button>
        <button class="button card-link-btn" style="margin-left: .5rem;" @click="sentAlert">
            <BellIcon style="width: 17px;"/> Alert</button>
    </div>
    </div>
</template>

<script setup lang="ts">
import { axiosErrorHandler } from '@/api';
import { sendNotification } from '@/services/admin';
import { BellIcon } from 'lucide-vue-next';

const {dueAmount} = defineProps<{
    userName: string;
    userEmail: string;
    packageName: "premium" | "elite" | "basic";
    dueAmount: number;
}>();


const sentAlert = async () =>{
    try {
        await sendNotification(dueAmount.toString())
    } catch (error) {
        axiosErrorHandler(error, "Error sending alert");
    }
}

</script>

<style scoped>
.billCard{
    padding: 10px 1rem;

    p:first-child{
        margin-top: 1rem;
    }
}
button{
    margin: 0;
    padding: 0.3rem 1rem;
}
.clear-btn:disabled{
    background-color: #bababa22;
    border-color: #bababa47;
    color: #00000057;
    cursor: not-allowed;
}

button.hover{
    opacity: .5;
}
</style>