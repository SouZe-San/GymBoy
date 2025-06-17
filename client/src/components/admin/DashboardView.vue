<template>
    <section>
        <div style="margin-bottom: 1.5rem;">
        <h1 class="welcome-text"
        >Welcome <span class="tag">Admin</span> <span class="username">AuntRose,</span></h1>
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
          title="New Members"
          description="This month"
          value="6"
          :icon="Users"
          :trend="{ value: 2, isPositive: true }"
        />
               <StatCard
          title="Revenue"
          value=" ₹12,450"
          :icon="FileText"
          description="This month"
          :trend="{ value: 5, isPositive: true }"
        />
               <StatCard
          title="Pending Payments"
          value=" 3"
          :icon="FileText"
          description="This month"
          :trend="{ value: 2, isPositive: false }"
        />
     
        </div>

        <div class="mid-section">
          <GraphView style="flex: 1;"/>
          <MemberView style="flex:1"/>
        </div>

        <NotificationList/>
    </section>
</template>

<script setup lang="ts">
import NotificationList from './NotificationList.vue';
import MemberView from './members/MemberView.vue';
import GraphView from './GraphView.vue';
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

.mid-section{
display: flex; gap: 1rem; width: 100%; margin-bottom: 2rem;
flex-direction: row;
}


@media (width >= 48rem){
    .card-section{
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}

@media (max-width: 768px) {
 .mid-section{
flex-direction: column;
}
}
</style>