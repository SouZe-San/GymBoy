<template>
    <section class="inDashboard">
<div style=" margin-bottom: 1rem; display: flex; justify-content: space-between;">
         <div>
               <h1 class="title font-mogen">
            Bill Management
        </h1>
            <h4 class="subtitle" >
                Manage your members' payments and Alerts
            </h4>
         </div>
         
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 1rem;">

        <BillCard 
        v-for="(bill, index) in allUsers"
        :key="index.toString()"
        :userName="bill.name"
        :userEmail="bill.email"
        :dueAmount="bill.due_amount"
        :packageName="bill.membership_type"
        :id="bill.id"
        />
        </div>
    </section>
</template>

<script setup lang="ts">
import { axiosErrorHandler } from '@/api';
import BillCard from '@/components/admin/BillCard.vue';
import { getDueMembers } from '@/services/admin';
import { onMounted, ref } from 'vue';

 const allUsers = ref<{
    id:string
   name: string;
  email: string;
  due_amount:number;
  membership_type: "premium" | "elite" | "basic";
  
}[]>([]);
  

  onMounted(async () => {
   try {
    const {data} = await getDueMembers()
 
    allUsers.value = data.members;
   } catch (error) {
    axiosErrorHandler(error, "Error fetching members In BILL");
   }
  });


</script>

<style scoped>

</style>