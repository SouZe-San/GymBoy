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
        v-for="(bill, index) in mokeData"
        :key="index.toString()"
        :userName="bill.userName"
        :userEmail="bill.userEmail"
        :packageName="bill.packageName as 'premium' | 'elite' | 'basic'"
        :dueAmount="bill.dueAmount"

        />
        </div>
    </section>
</template>

<script setup lang="ts">
import BillCard from '@/components/admin/BillCard.vue';


const mokeData = [
{
    "userName": "Alice Smith",
    "userEmail": "alice.smith@example.com",
    "packageName": "premium",
    "dueAmount": 150.75
},{
    "userName": "Bob Johnson",
    "userEmail": "bob.johnson@example.com",
    "packageName": "elite",
    "dueAmount": 200.00
}
,{
    "userName": "Charlie Brown",
    "userEmail": "charlie.brown@example.com",
    "packageName": "basic",
    "dueAmount": 75.50
},{
    "userName": "Diana Prince",
    "userEmail": "diana.prince@example.com",
    "packageName": "premium",
    "dueAmount": 120.25
},{
    "userName": "Ethan Hunt",
    "userEmail": "ethan.hunt@example.com",
    "packageName": "elite",
    "dueAmount": 250.00
}




]

</script>

<style scoped>

</style>