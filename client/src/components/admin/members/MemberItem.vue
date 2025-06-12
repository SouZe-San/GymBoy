<template>
      <div class="member-item">
            <div style="display: flex; gap: 1rem; align-items: start;">
                <div class="user-img">
                <UserIcon style="width: 20px;" />
            </div>
            <div class="user-name font-tt-regular">
                <h2>
                    Sarah Johnson
                </h2>
                <h4 class="">
                    sarah.j@example.com
                </h4>
            </div>
            </div>
            <div style="display: flex; gap: 1rem; align-items: center;"><div class="date">12/21/21</div>
            <span class="badge pro">
                Gold
            </span></div>
        </div>
</template>

<script setup lang="ts">
import UserIcon from '@/components/icon/UserIcon.vue';
</script>

<style scoped>
.member-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
}

.user-img{
background-color: rgba(240, 248, 255, 0.189);
border:1px solid rgba(159, 157, 157, 0.467);
border-radius: 50%;
aspect-ratio: 1;
  width: 40px;

  display: flex;
    align-items: center;
    justify-content: center;
}

.badge{
    font-weight: 600;
    padding: 2px 14px;
    text-align: center;
    border-radius: 15px;
    color :black;
    border:1px solid transparent;
}

.pro{
    color: #f7be55;
    border-color: #f7b955;
    background-color: #975b0036;
}
</style>