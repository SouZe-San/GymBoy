<template>
    <section class="inDashboard">
      
        <div style="display:flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
          <div>
            <h1 class="tracking-tight font-mogen">Payment Receipts</h1>
            <p class="">
              View and download your payment history and receipts.
            </p>
          </div>
         
            <button class="button card-link-btn">
              <Download style="width: 18px;" />
              Download All
            </button>
         
        </div>
      
        <div class="mid-section">
            <aside style="flex:1; padding: 1.5rem;" class="card_bg">
             <div style="margin-bottom: 3rem;">      <h1 class="card-title">
            Recent <br/> Transactions
          </h1>
          <h4>
          Your payment history for the last 3 months
          </h4>
        </div>   
            <RecentReceiptView />
            </aside>
          <aside style="flex: 1;">
            <ReciptDetails  :receipt="mockReceipt"/>
          </aside>
         
        </div>


    </section>
</template>

<script setup lang="ts">
import { Download } from 'lucide-vue-next';

import RecentReceiptView from '@/components/members/receipts/RecentReceiptView.vue';
import ReciptDetails from '@/components/members/receipts/ReciptDetails.vue';
const mockReceipt = {
    id: 'rec_123456',
    date: '2025-04-15',
    amount: 49.99,
    description: 'Monthly Membership Fee',
    status: 'completed',
    paymentMethod: 'Cash In Hand',
    items: [
      { name: 'Premium Membership', price: 49.99 }
    ]
  };

</script>

<style scoped>
.mid-section {
  display:flex; justify-content: space-between;  gap: 1rem;
}
@media (max-width: 768px) {
  .mid-section {
    flex-direction: column;
  }
}
</style>