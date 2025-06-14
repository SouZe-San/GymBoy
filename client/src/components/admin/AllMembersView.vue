<template>
    <section class="inDashboard">
        <div style=" margin-bottom: 1rem; display: flex; justify-content: space-between;">
         <div>
               <h1 class="title font-mogen">
            All Members
        </h1>
            <h4 class="subtitle" >
                Manage your members and their subscriptions
            </h4>
         </div>
         <button class="button card-link-btn" @click="toggleModal" >
            <CirclePlus :size="16" /> Add New
         </button>
        </div>

        <MemberWithUpdate />
        <MemberWithUpdate />
        <MemberWithUpdate />
        <MemberWithUpdate />
        <MemberWithUpdate />
        <MemberWithUpdate />

        <CreateMemberModal v-if="openModal" :toggle="toggleModal"/>
    </section>
</template>

<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next';
import MemberWithUpdate from './members/MemberWithUpdate.vue';
import CreateMemberModal from './members/CreateMemberModal.vue';
import { ref } from 'vue';

const openModal = ref(false);

const toggleModal = () => {
    openModal.value = !openModal.value;
};
</script>

<style scoped>

</style>