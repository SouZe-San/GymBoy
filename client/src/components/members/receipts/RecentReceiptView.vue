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
import { FileText } from 'lucide-vue-next'; // Ensure you have the correct import for lucide-vue
// Adjust the path as necessary

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
/* styles.css */

.space-y-4 > * + * {
  margin-top: 1rem; /* Adjust as needed for spacing */
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
}

.py-2 {
  padding-top: 0.5rem; /* 8px */
  padding-bottom: 0.5rem; /* 8px */
}

.hover\:bg-muted\/50:hover {
  background-color: rgba(0, 91, 6, 0.309); /* Adjust to your muted color */
}

.rounded-md {
  border-radius: 0.375rem; /* 6px */
}

.px-2 {
  padding-left: 0.5rem; /* 8px */
  padding-right: 0.5rem; /* 8px */
}

.transition-colors {
  transition: background-color 0.2s ease-in-out;
}

.w-10 {
  width: 2.5rem; /* 40px */
}

.h-10 {
  height: 2.5rem; /* 40px */
}

.rounded-full {
  border-radius: 9999px; /* Fully rounded */
}

.bg-gym-accent {
  background-color: rgba(0, 255, 94, 0.219); 
  color:rgb(89, 255, 89);/* Example color, adjust as needed */
}

.text-gym-accent {
  color: #ffffff; /* Example color, adjust as needed */
}

.font-medium {
  font-weight: 500; /* Medium weight */
}

.text-sm {
  font-size: 0.875rem; /* 14px */
}

.text-muted-foreground {
  color: rgba(0, 0, 0, 0.6); /* Adjust to your muted text color */
}

.mr-3 {
  margin-right: 0.75rem; /* 12px */
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
