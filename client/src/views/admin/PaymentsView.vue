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
<BillCard/>
<BillCard/>
<BillCard/>
<BillCard/>
<BillCard/>
<BillCard/>
<BillCard/>
<BillCard/>
        </div>
    </section>
</template>

<script setup lang="ts">
import BillCard from '@/components/admin/BillCard.vue';
</script>

<style scoped>

</style>