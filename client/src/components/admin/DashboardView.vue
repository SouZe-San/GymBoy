<template>
    <section>
        <div style="margin-bottom: 1.5rem;">
        <h1 class="welcome-text"
        >Welcome <span >sexyGyme,</span></h1>
        <p class="text-muted-foreground">
          Monitor your gym's performance and member activity.
        </p>
      </div>
     <div class="card-section">
        <StatCard
          title="Total Members"
          value="246"
          :icon="Users"
          :trend="{ value: 12, isPositive: true }"
        />
        <StatCard
          title="Total Members"
          value="246"
          :icon="Users"
          :trend="{ value: 12, isPositive: true }"
        />
               <StatCard
          title="Revenue"
          value="$12,450"
          :icon="FileText"
          description="This month"
          :trend="{ value: 5, isPositive: true }"
        />
        <StatCard
          title="Total Members"
          value="246"
          :icon="Users"
          :trend="{ value: 12, isPositive: true }"
        />
        </div>

        <NotificationList/>
    </section>
</template>

<script setup lang="ts">
import NotificationList from './NotificationList.vue';
import { 
  Users,
  FileText
} from 'lucide-vue-next';
import StatCard from '../StatCard.vue';
</script>

<style scoped>
section{
width: 100%;
padding: 0 2rem;
}

.card-section{
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-bottom: 2rem;
}


@media (width >= 48rem){
    .card-section{
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}
</style>