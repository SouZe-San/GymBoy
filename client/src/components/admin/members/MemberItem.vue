<template>
  <div class="member-item">
    <div style="display: flex; gap: 1rem; align-items: start">
      <div class="user-img">
        <UserIcon style="width: 20px" />
      </div>
      <div class="user-name font-tt-regular">
        <h2>{{ userName }}</h2>
        <h4 class="">{{ email }}</h4>
      </div>
    </div>
    <div style="display: flex; gap: 1rem; align-items: center">
      <div class="date">{{ joinDate }}</div>
      <span class="badge" :class="packageClasses[packageName]"> {{ packageName }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserIcon from "@/components/icon/UserIcon.vue";

const packageClasses = {
  premium: 'silver',
  elite: 'pro',
  basic: 'basic',
};

defineProps<{
  userName: string;
  email: string;
  joinDate: string;
  packageName: "premium" | "elite" | "basic";
}>();

</script>

<style scoped>
.member-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.user-img {
  background-color: rgba(240, 248, 255, 0.189);
  border: 1px solid rgba(159, 157, 157, 0.467);
  border-radius: 50%;
  aspect-ratio: 1;
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

}


.user-name{
    h2{
        color:white;
    }
}

.badge {
  font-weight: 600;
  padding: 2px 14px;
  text-align: center;
  border-radius: 15px;
  color: black;
  border: 1px solid transparent;
}

.pro {
  color: #f7be55;
  border-color: #f7b955;
  background-color: #975b0036;
}
.basic{
    color: #75aaff;
    border-color: #0061ff;
    background-color: #005f9336;
}

.silver{
    color: #9e9e9e;
    border-color: #9e9e9e;
    background-color: #f5f5f5;
}
</style>
