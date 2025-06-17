<template>
  <div class="space-y-4">
    <div
      v-for="receipt in receipts"
      :key="receipt.id"
      class="flex items-center justify-between py-2 hover:bg-muted/50 rounded-md px-2 transition-colors"
    >
      <div class="flex items-center space-x-3">
        <div
          class="w-10 h-10 rounded-full flex-center bg-gym-accent"
        >
          <FileText style="width: 16px;" />
        </div>
        <div>
          <p class="font-medium">{{ receipt.description }}</p>
          <p class="text-sm text-muted-foreground">
            {{ formatDate(receipt.date) }}
          </p>
        </div>
      </div>
      <div class="flex items-center">
        <span class="font-medium mr-3">${{ receipt.amount.toFixed(2) }}</span>
        <button class="button">View</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FileText } from 'lucide-vue-next'; 

interface Receipt {
  id: string;
  date: string;
  amount: number;
  description: string;
  
}

// Mock data
const receipts = ref<Receipt[]>([
  {
    id: 'rec_123456',
    date: '2025-04-15',
    amount: 49.99,
    description: 'Monthly Membership Fee',
   
  },
  {
    id: 'rec_123457',
    date: '2025-03-15',
    amount: 49.99,
    description: 'Monthly Membership Fee',
  
  },
  {
    id: 'rec_123458',
    date: '2025-02-15',
    amount: 49.99,
    description: 'Monthly Membership Fee',
 
  },
]);

const formatDate = (dateString:string) => {
  return new Date(dateString).toLocaleDateString();
};

</script>

<style scoped>

.space-y-4 > * + * {
  margin-top: 1rem; 
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
  gap:1rem;
}

.justify-between {
  justify-content: space-between;
  transition: boxShadow .3s ease-in-out;
}

.py-2 {
  padding-top: 0.5rem; 
  padding-bottom: 0.5rem; 
}

.hover\:bg-muted\/50:hover {
 box-shadow: 0 2px 8px -5px #ffffff3a;
}

.rounded-md {
  border-radius: 0.375rem; 
}

.px-2 {
  padding-left: 0.5rem; 
  padding-right: 0.5rem; 
}

.transition-colors {
  transition: background-color 0.2s ease-in-out;
}

.w-10 {
  width: 2.5rem; 
}

.h-10 {
  height: 2.5rem; 
}

.rounded-full {
  border-radius: 9999px;
}

.bg-gym-accent {
  background-color: rgba(0, 255, 94, 0.219); 
  color:rgb(89, 255, 89);
}

.text-gym-accent {
  color: #ffffff; 
}

.font-medium {
  font-weight: 500; 
}

.text-sm {
  font-size: 0.875rem; 
}

.text-muted-foreground {
  color: rgba(204, 204, 204, 0.6);
}

.mr-3 {
  margin-right: 0.75rem; 
}

.button {
  padding: 0.5rem 1rem; 
  background-color: white;
  color: black;
  transition: background-color 0.2s ease-in-out;
}

.button:hover {
  background-color: rgba(214, 214, 214, 0.785); 
}

</style>
