<template>
    <div class="card_bg" style="padding: 1.5rem;">

    
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
          <div>
            <h1 style="font-size: 2rem; color: white;" class="font-cozi">Receipt #123456</h1>
            <h4>
              {{new Date(receipt.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}}
            </h4>
          </div>
          <div class="h-10 w-10 rounded-full success flex-center">
            <FileText  style="width: 18px;"/>
          </div>
        </div>
      
      <div >
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-1">Billed To</h3>
            <h1 class="font-medium text-gym-accent">John Doe</h1>
            <p class="text-sm text-muted-foreground">john.doe@example.com</p>
          </div>
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-1">Payment Method</h3>
            <p class="font-medium text-gym-accent">{{receipt.paymentMethod}}</p>
            <p class="text-sm text-muted-foreground">Status: <span class="badge">{{receipt.status}}</span></p>
          </div>
        </div>

        <hr style="margin: 1.5rem .5rem; color: #ffffff2b;"/>
        
        <div>
          <h3 class="font-medium text-gym-accent">Details</h3>
         
            
            <div class="space-y-2"  v-if="receipt.items && receipt.items.length > 0">
              
                <div :key="index.toString()" class="flex justify-between" v-for="(item, index) in receipt.items">
                  <p>{{item.name}}</p>
                  <p class="font-medium">${{item.price.toFixed(2)}}</p>
                </div>
            
            </div>
        
            <div class="flex justify-between" v-else>
              <p>{{receipt.description}}</p>
              <p class="font-medium">${{receipt.amount.toFixed(2)}}</p>
            </div>
         
        </div>

      <hr style="margin: 1.5rem .5rem; color: #ffffff2b;"/>
        
        <div class="space-y-2">
          <div class="flex justify-between">
            <p class="text-muted-foreground">Subtotal</p>
            <p>${{subtotal.toFixed(2)}}</p>
          </div>
          <div class="flex justify-between">
            <p class="text-muted-foreground">Tax (10%)</p>
            <p>${{tax.toFixed(2)}}</p>
          </div>
          <div class="flex justify-between font-bold text-gym-accent font-roboto-flex" style="font-size: 1.3rem; ">
            <p>Total</p>
            <p>${{total.toFixed(2)}}</p>
          </div>
        </div>
      </div>

       <hr style="margin: 1.5rem .5rem;color: #ffffff2b;"/>
      <div class="flex justify-end">
        <button class="button btn">
          <Printer class="mr-2 h-4 w-4" />
          Print
        </button>
        <button class="button card-link-btn">
          <Download style="width: 18px ;margin-left: 8px;" />
          Download PDF
        </button>
      </div>
   
    </div>
</template>

<script setup lang="ts">
import { FileText, Download } from 'lucide-vue-next';


interface ReceiptDetailsProps {
  receipt: {
    id: string;
    date: string;
    amount: number;
    description: string;
    status: string;
    paymentMethod: string;
    items?: {
      name: string;
      price: number;
    }[];
  }
}

const {receipt} = defineProps<ReceiptDetailsProps>();
  const subtotal = receipt.items ? 
    receipt.items.reduce((acc, item) => acc + item.price, 0) : 
    receipt.amount;
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + tax;
  

</script>

<style scoped>
.justify-end {
  justify-content: flex-end;
}
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
  width: 3rem; /* 40px */
}

.h-10 {
  height: 3rem; /* 40px */
}

.rounded-full {
  border-radius: 9999px;
 
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
  color: rgba(227, 227, 227, 0.867); /* Adjust to your muted text color */
}

.mr-3 {
  margin-right: 0.75rem; /* 12px */
}

 .badge {
      font-weight: 500;
      text-transform: uppercase;
      /* max-width: rem; */
      /* min-width: 13rem; */
      font-size: 12px;
    
    }
 .success {
      color: #63f755;
      border-color: #2d9d56;
      background-color: #03c30d36;
    }
.btn {
  padding: 0.5rem 1rem; 
  background-color: white;
  color: black;
  transition: background-color 0.2s ease-in-out;
}

.button:hover {
  background-color: rgba(214, 214, 214, 0.785); 
}

</style>