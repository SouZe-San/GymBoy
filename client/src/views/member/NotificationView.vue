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
import { axiosErrorHandler } from "@/api";
import NotificationList from "@/components/members/NotificationList.vue";
import type { I_Notification } from "@/components/members/NotificationList.vue";
import { getAnnouncements } from "@/services/memeber";
import { onMounted, ref } from "vue";

const notifications = ref<I_Notification[]>([]);

onMounted(async () => {
  try {
    const { data } = await getAnnouncements();
    notifications.value = data.notifications;
  } catch (error) {
    axiosErrorHandler(error, "Error fetching announcements");
  }
});
</script>

<style scoped>
.header-content {
  margin-bottom: 2rem;
}

.profile-title {
  font-size: 4rem;
  line-height: 0.8;
  font-weight: bold;
  color: white;
}
</style>
