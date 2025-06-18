<template>
  <div class="space-y-4">
    <div
      v-for="notification in notifications"
      :key="notification.id"
      :class="[
        'flex gap-4 p-3 rounded-md transition-colors read-notify',
      
        notification.type === 'event' ? 'border-event' :
        notification.type === 'payment' ? 'border-payment' : 
        notification.type === 'important' ? 'border-important' :'border-basic'
      ]"
    >
      <div
        :class="[
          'w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center',
          notification.type === 'event' ? 'event' :
          notification.type === 'payment' ? 'alert' :
          notification.type === 'important' ? 'important' :
          'basic'
        ]"
      >
        <component
          :is="getIcon(notification.type)"
          class="h-5 w-5"
        />
      </div>

      <div class="space-y-1">
        <div class="flex items-center justify-between">
          <h4 :class="['font-medium notify-title']">
            {{ notification.title }}
          </h4>
        </div>
        <p class="text-sm text-muted-foreground">{{ notification.message }}</p>
        <p class="text-xs text-muted-foreground">
          {{ formatDate(notification.notification_date) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { Mail, Bell, Calendar,Siren } from 'lucide-vue-next'; // Assuming you have a Vue version of lucide-react

   
export interface I_Notification {
        id: string;
        title:  string;
        message: string; 
        notification_date: string;
        type: 'general' | 'important' | 'payment' | 'event';
      }

defineProps<{notifications:I_Notification[]}>()

    const formatDate = (date : string) => {
      return new Date(date).toLocaleDateString();
    };

    const getIcon = (type :'general' | 'important'  |'payment' | 'event' ) => {
      switch (type) {
        case 'payment':
          return Bell;
        case 'event':
          return Calendar;
        case 'important':
          return Siren;
        default:
          return Mail;
      }
    };
</script>

<style scoped>
/* General Styles */
.read-notify{
   background-color: rgba(202, 202, 202, 0.2);
  border-left: 2px solid #f63b3b; /* Example primary color */
}
.notify-title{
    font-size: 1.5rem;
    line-height: 1.01; /* 16px */
    color:white;
}

.space-y-4 > * + * {
  margin-top: 1rem; /* 4 * 0.25rem = 1rem */
}

.flex {
  display: flex;
}

.gap-4 {
  gap: 1rem; /* 4 * 0.25rem = 1rem */
}

.p-3 {
  padding: 0.75rem; /* 3 * 0.25rem = 0.75rem */
}

.rounded-md {
  border-radius: 0.375rem; /* 6px */
}

.transition-colors {
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

/* Notification Backgrounds */
.bg-transparent {
  background-color: transparent;
}


.basic {
  background-color: rgba(161, 161, 161, 0.24);
  color: #ffffff; /* Light blue background */
}
.alert {
background-color: rgba(30, 113, 14, 0.48);
  color: #47ff47; /* Light red background */
}
.important {
background-color: rgba(113, 14, 34, 0.48);
  color: #f62a2a; /* Light red background */
}
.event {
  background-color: rgba(81, 0, 157, 0.376); /* Light purple background */
}

.border-l-2 {
  border-left-width: 2px;
}
.border-payment{
    border-left-color: #3bf654; 
     background-color: rgba(170, 255, 153, 0.2);
   
}
.border-basic{
    border-left-color: #ffffff;
     /* Example payment color */
}
.border-event{
    border-left-color: #6d3bf6;
     background-color: rgba(184, 153, 255, 0.2); /* Example payment color */
}
.border-important{
    border-left-color: #f63b3b;
    background-color: rgba(198, 101, 101, 0.2);
}
.border-primary {
    border: 1px solid;
  border-color: #b8b8b8aa; /* Example primary color */
}

/* Icon Container Styles */
.w-10 {
  width: 2.5rem; /* 10 * 0.25rem = 2.5rem */
}

.h-10 {
  height: 2.5rem; /* 10 * 0.25rem = 2.5rem */
}

.rounded-full {
  border-radius: 9999px; /* Fully rounded */
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

/* Notification Types */
.bg-blue-100 {
  background-color: #BFDBFE; /* Light blue background */
}

.text-blue-600 {
  color: #2563EB; /* Darker blue text */
}

.bg-gym-accent {
  background-color: rgba(251, 191, 36, 0.1); /* Light gym accent with transparency */
}

.text-gym-accent {
  color: #FBBF24; /* Gym accent color */
}

.bg-purple-100 {
  background-color: #E9D5FF; /* Light purple background */
}

.text-purple-600 {
  color: #7C3AED; /* Darker purple text */
}

/* Text Styles */
.font-medium {
  font-weight: 500; /* Medium font weight */
}

.text-gym-primary {
  color: #ffffff; /* Example gym primary color */
}

.text-sm {
  font-size: 0.875rem; /* 14px */
}

.text-xs {
  font-size: 0.75rem; /* 12px */
}

.text-muted-foreground {
  color: #d5d5d5; /* Example muted foreground color */
}

/* Space between elements */
.space-y-1 > * + * {
  margin-top: 0.25rem; /* 1 * 0.25rem = 0.25rem */
}

</style>
