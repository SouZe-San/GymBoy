<template >
    <div class="overflow-x-auto card_bg">
      <div style="display: flex; justify-content: space-between; margin-bottom: 3rem;">
        <div>
          <h1 class="card-title">
            Recent Announcement
          </h1>
          <h4>
          Manage upcoming announcements for your members
          </h4>
        </div>       
           <button class="button card-link-btn" @click="toggleModal">
                 <CirclePlus  :size="16"/> New 
           </button>
      </div>
    <table class="w-full">
      <thead>
        <tr class="text-left border-b " style="position: relative;">
          <th class="pb-3 font-medium font-cozi">Title</th>
          <th class="pb-3 font-medium  md_table-cell font-cozi">Date</th>
          <th class="pb-3 font-medium  md_table-cell font-cozi">Status</th>
          <th class="pb-3 font-medium  font-cozi">Type</th>
          <th class="pb-3 font-medium text-right font-cozi">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="announcement in announcements" :key="announcement.id" class="table-row">
          <td class="py-3 pr-4 font-tt-regular">
            <div class="font-medium">{{ announcement.title }}</div>
            <div class="text-sm text-muted-foreground truncate md_hidden" style="max-width: 200px;">
              {{ new Date(announcement.notification_date).toLocaleDateString() }}
            </div>
          </td>
          <td class="py-3 pr-4  md_table-cell font-tt-regular">
            {{ new Date(announcement.notification_date).toLocaleDateString() }}
          </td>
          <td class="py-3 pr-4 md_table-cell">
            <span class="badge" :class="announcement.status === 'scheduled' ? 'bg-gym-accent' : 'bg-draft'">
              {{ announcement.status }}
            </span>
          </td>
          <td class="py-3 pr-4">
            <span class="badge" :class="getTypeClass(announcement.type)">
              {{ announcement.type }}
            </span>
          </td>
          <td class="py-3 text-right space-x-1">
            <button  class="h-8 w-8" >
              <Edit class="h-4 w-4" />
            </button>
            <button  class="h-8 w-8 text-red-500" >
              <Trash2 class="h-4 w-4" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <CreateAnnouncement :toggle="toggleModal" v-if="openModal"/>
</template>

<script setup lang="ts">

import { Trash2, Edit, CirclePlus } from 'lucide-vue-next';
import CreateAnnouncement from './CreateAnnouncement.vue';
import { onMounted, ref } from 'vue';
import { axiosErrorHandler } from '@/api';
import { getAnnouncements } from '@/services/admin';

const openModal = ref(false);

const toggleModal = () => {
    openModal.value = !openModal.value;
};

interface Announcement {
  id: string;
  title: string;
  message: string;
  notification_date: string;
  status: 'draft' | 'scheduled' | 'sent';
  type: 'general' | 'important' | 'event';
}
  const getTypeClass = (type: 'general' | 'important' | 'event') => {
      switch (type) {
        case 'important':
          return "important";
        case 'event':
          return 'event';
        default:
          return 'default';
      }
    };

const announcements = ref<Announcement[]>([]);
const randomStatus = () => {
  const statuses = ['draft', 'scheduled'];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

  onMounted(async () => {
   try {
    const {data} = await getAnnouncements()
    announcements.value = data.announcements;
 
    announcements.value = announcements.value.map((announcement) => ({
        ...announcement,
        status: randomStatus() as Announcement['status'],
      }));
   } catch (error) {
    axiosErrorHandler (error, "Error fetching announcements");
   }
  });


</script>

<style scoped>
/* Custom CSS for the Vue component */

/* General styles */
.overflow-x-auto {
  overflow-x: auto;
  padding: 1.5rem;
}

.card-link-btn{
    background: var(--color-highLight);
    color: white;
    border-color: #ff2104;
    padding: 0.5rem 1rem;
    /* border-radius: 0.375rem; */
    font-weight: 500;
    /* font-size: 1rem; */
    cursor: pointer;
    display: flex;
    align-items: center;
    gap:.5rem;
    justify-content: space-between;
}

.badge{
    font-weight: 600;
    padding: 5px 14px;
    text-align: center;
    border-radius: 15px;
    color :black;
    border:1px solid transparent;
}

.w-full {
  width: 100%;
}

.text-left {
  text-align: left;
}


.pb-3 {
  padding-bottom: 1rem; /* 12px */
}

.font-medium {
  font-weight: 500;
}

.py-3 {
  padding-top: 1rem; /* 12px */
  padding-bottom: 1rem; /* 12px */
}

.pr-4 {
  padding-right: 1rem; /* 16px */
}

.hidden {
  display: none;
}

.md\:table-cell {
  display: table-cell; /* This will be applied at medium screen sizes and above */
}

.text-sm {
  font-size: 0.875rem; /* 14px */
}

.text-muted-foreground {
  color: #6b7280; /* Gray */
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bg-gym-accent {
  background-color: #00bf425c;
  color: #04ff5a;
  border-color: #04ff5a;
}
.bg-draft{
  border-color: #fff6;
  background: #ececec24;
  color: white;
}

.bg-red-50 {
  background-color: #fee2e2; /* Light red */
}

.bg-purple-50 {
  background-color: #f3e8ff; /* Light purple */
}

.bg-blue-50 {
  background-color: #ebf8ff; /* Light blue */
}

.border-red-500 {
  border-color: #f87171; /* Red */
}

.default{
    color: #75aaff;
    border-color: #0061ff;
    background-color: #005f9336;
}
.important{
    color: #ff0000;
    border-color: #ff0000;
    background-color: #92030336;
}
.event{
    color: #a855f7;
    border-color: #a855f7;
    background-color: #4e009736;
}

.border-purple-500 {
  border-color: #a855f7; /* Purple */
}

.border-blue-500 {
  border-color: #3b82f6; /* Blue */
}

.text-red-500 {
  color: #ff0000; /* Red */
}

.text-purple-500 {
  color: #a855f7; /* Purple */
}

.text-blue-500 {
  color: #3b82f6; /* Blue */
}

.space-x-1 > :not(:last-child) {
  margin-right: 0.25rem; /* 4px */
}

.text-right {
  text-align: right;
}

.h-8 {
  height: 2rem; /* 32px */
}

.w-8 {
  width: 2rem; /* 32px */
}

.h-4 {
  height: 1rem; /* 16px */
}

.w-4 {
  width: 1rem; /* 16px */
}

.text-red-500 {
  color: #f87171; /* Red */
}
tr.table-row{
    position: relative;
    &:last-child::after{
        content: none;
     
    }
    &:last-child{
        td{
            padding-bottom: 0;
        }
    }
}

tr::after{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
  width: 100%;
    height: 1px;
    background-color:  #f2f2f247;
}
/* Add any additional styles as needed */
.md_table-cell {
  display: none; /* This will be hidden at small screen sizes */
}
@media (width >= 48rem) {
  .md_table-cell {
    display: table-cell; /* This will be applied at medium screen sizes and above */
  }
  .md_hidden {
    display: none; /* This will be hidden at medium screen sizes and above */
  }
    
}

td button{
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
}

</style>
