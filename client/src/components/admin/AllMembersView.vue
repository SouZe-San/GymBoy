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


// const mokeUser : 
// { userName: string;
//   email: string;
//   phone: string;
//   packageName: "premium" | "elite" | "basic";
//   paymentStatus: "Pending" | "Clear"; joinDate:string;}[] = [
//   {
//     "userName": "Sarah Johnson",
//     "email": "sarah.j@example.com",
//     "phone": "984045698345",
//     "packageName": "premium",
//     "paymentStatus": "Clear",
//     joinDate: "20/05/25"
//   },
//   {
//     "userName": "Michael Smith",
//     "email": "michael.s@example.com",
//     "phone": "9876543210",
//     "packageName": "elite",
//     "paymentStatus": "Pending",
//     joinDate: "12/05/25"
//   },
//   {
//     "userName": "Emily Davis",
//     "email": "emily.d@example.com",
//     "phone": "9123456789",
//     "packageName": "basic",
//     "paymentStatus": "Clear",
//     joinDate: "10/05/25"
//   },
//   {
//     "userName": "Jessica Wilson",
//     "email": "jessica.w@example.com",
//     "phone": "9456781234",
//     "packageName": "elite",
//     "paymentStatus": "Clear",
//     joinDate: "10/05/25"
//   },
//   {
//     "userName": "David Brown",
//     "email": "david.b@example.com",
//     "phone": "9988776655",
//     "packageName": "premium",
//     "paymentStatus": "Pending",
//     joinDate: "02/05/25"
//   },
//   {
//     "userName": "Olivia Martinez",
//     "email": "olivia.m@example.com",
//     "phone": "8765432109",
//     "packageName": "premium",
//     "paymentStatus": "Pending",
//     joinDate: "20/04/25"
//   },
//     {
//     "userName": "James Anderson",
//     "email": "james.a@example.com",
//     "phone": "9876543211",
//     "packageName": "basic",
//     "paymentStatus": "Clear",
//     joinDate: "18/04/25"
//   },
//   {
//     "userName": "Liam Thompson",
//     "email": "liam.t@example.com",
//     "phone": "7654321098",
//     "packageName": "elite",
//     "paymentStatus": "Clear",
//     joinDate: "10/04/25"
//   }
 
// ]

const allUsers = ref<{
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