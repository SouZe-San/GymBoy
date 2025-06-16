<template>
    <div class="card_bg billCard">
        <h1>User Name</h1>
        <h3>userEmail@xyc.com</h3>
        <p style="margin-top: 1rem;">
            <span >Package : </span>
            <span >Premium</span>
        </p>
        <p>
            <span >Due Amount : </span>
            <span >00.00</span>
        </p>

    <div style="margin-top: 1rem; display: flex;">
        <button class="button clear-btn" >Clear</button>
        <button class="button card-link-btn" style="margin-left: .5rem;">
            <BellIcon style="width: 17px;"/> Alert</button>
    </div>
    </div>
</template>

<script setup lang="ts">
import { BellIcon } from 'lucide-vue-next';
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
</style>