<template>
       <div class="dashboard-stat"
        :class="className">
      <div
      style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
        <span class="text-muted-foreground"
        style="font-weight: 500;">{{title}}</span>
        <div class="text-muted-foreground"><component :is="icon" class="h-5 w-5" /></div>
      </div>
      <div
        style="display: flex; justify-content: space-between; align-items:flex-end ;">
        <div>
          <h3      
           style="font-weight: 700; font-size: 1.5rem;">{{value}}</h3>
   
            <p class="text-muted-foreground" v-if="description"
            style="font-size: 12px; margin-top: 4px;">{{description}}</p>
          
        </div>
  
          <div :class="trend?.isPositive ? 'text-green-500': 'text-red-500'"
            v-if="trend"
          style="display: flex; align-items: center; font-size: 12px;">
            <span>{{trend?.isPositive ? '↑' : '↓'}} {{Math.abs(trend?.value || 0)}}%</span>
          </div>
      
      </div>
    </div>
</template>

<script setup lang="ts">
import type { FunctionalComponent } from 'vue';
const {  title, 
  value, 
  icon, 
  description, 
  trend,
  className } = defineProps<{
  title: string;
  value: string | number;
icon: FunctionalComponent;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}>();
</script>

<style scoped>
.h-5 {
  height: 1.25rem; /* Height for icons */
  width: 1.25rem; /* Width for icons */
  margin-right: 0.5rem; /* Space between icon and text */
}
.text-muted-foreground {
    color: var(--text-color);
}
.text-green-500 {
    color: oklch(72.3% 0.219 149.579);
}
.text-red-500{
    color:oklch(63.7% 0.237 25.331);
}
.dashboard-stat {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: #d5d3d321;
    border-radius: 10px;
    border:1px solid transparent;
    box-shadow:  0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  }
</style>