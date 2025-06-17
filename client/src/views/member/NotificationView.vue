<template>
  <section class="inDashboard">
    <div class="header-content">
      <h1 class="profile-title font-mogen">All Notifications</h1>
      <p class="profile-description">View and manage your notifications.</p>
    </div>

    <!-- Notifications List -->
    <div class="notifications-list">
      <NotificationList :notifications="notifications" />
    </div>
  </section>
</template>

<script setup lang="ts">
import NotificationList from "@/components/members/NotificationList.vue";
import type { I_Notification } from "@/components/members/NotificationList.vue";

const notifications: I_Notification[] = [
  {
    id: "not_123456",
    title: "Gym will be closed for maintenance",
    description: "The gym will be closed on Sunday, May 5th for scheduled maintenance.",
    date: "2025-04-29",
    type: "announcement",
  },
  {
    id: "not_1256",
    title: "Gym will be closed for maintenance",
    description: "The gym will be closed on Sunday, May 5th for scheduled maintenance.",
    date: "2025-04-28",
    type: "announcement",
  },
  {
    id: "not_13454",
    title: "Your membership fee is due soon",
    description: "Your monthly membership fee of $49.99 is due on May 15, 2025.",
    date: "2025-04-25",

    type: "payment",
  },
  {
    id: "not_123458",
    title: "Yoga class schedule updated",
    description: "The schedule for yoga classes has been updated for the month of May.",
    date: "2025-04-20",

    type: "event",
  },
  {
    id: "not_123468",
    title: "Yoga class schedule updated",
    description: "The schedule for yoga classes has been updated for the month of May.",
    date: "2025-04-10",

    type: "event",
  },
  {
    id: "not_123454",
    title: "Your membership fee is due soon",
    description: "Your monthly membership fee of $49.99 is due on May 15, 2025.",
    date: "2025-03-25",

    type: "payment",
  },
  {
    id: "not_124458",
    title: "Yoga class schedule updated",
    description: "The schedule for yoga classes has been updated for the month of May.",
    date: "2025-03-21",

    type: "event",
  },
];
</script>

<style scoped>
.header-content {
  margin-bottom: 2rem;
}

.profile-title {
  font-size: 4rem;
  line-height: 0.8;
  font-weight: bold;
  color:white;
}
</style>
