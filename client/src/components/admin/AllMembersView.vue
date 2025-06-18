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

  
        <MemberWithUpdate
         v-for="(member, index) in allUsers"
         :id="member.id"
         :preEmail="member.email" 
         :prePackageName="member.membership_type"
         :prePaymentStatus="member.paymentStatus"
         :prePhone="member.phone"
         :preUserName="member.name"
         :key="index.toString()"
         :join-date="member.join_date"
        />
       
      

        <CreateMemberModal v-if="openModal" :toggle="toggleModal"/>
    </section>
</template>

<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next';
import MemberWithUpdate from './members/MemberWithUpdate.vue';
import CreateMemberModal from './members/CreateMemberModal.vue';
import { onMounted, ref } from 'vue';
import { getMembers } from '@/services/admin';
import { axiosErrorHandler } from '@/api';

const openModal = ref(false);

const toggleModal = () => {
    openModal.value = !openModal.value;
};

const allUsers = ref<{
    id:string
   name: string;
  email: string;
  phone: string;
  membership_type: "premium" | "elite" | "basic";
  paymentStatus: "Pending" | "Clear";
  join_date:string;
}[]>([]);
  

  onMounted(async () => {
   try {
    const {data} = await getMembers()
 
    allUsers.value = data.members.map((user:any) => ({
        ...user,
        paymentStatus: user.due_amount === 0 ? "Clear" : "Pending",
      }));
   } catch (error) {
    axiosErrorHandler(error, "Error fetching announcements");
   }
  });


</script>

<style scoped>

</style>