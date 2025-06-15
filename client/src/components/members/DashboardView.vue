<template>
     <section>
        <div style="margin-bottom: 1.5rem;display: flex; justify-content: space-between;">
       <div> <h1 class="welcome-text"
        >Welcome <span >Biri leo</span></h1>
        <p class="text-muted-foreground">
          Monitor your gym's performance and member activity.
        </p></div>



        <div style="  background: #71717121;display: flex; align-items: center; gap: 0.5rem; margin-top: 1rem; padding: 0 10px;" class="card_bg">
          <Calendar1Icon  />
          <span  >
16             days left in your membership
          </span>
        </div>
      </div>

           <div class="card-section">
        <StatCard
          title="Membership Status"
          value="Premium"
          description="Active since Jan 2023"
          :icon="Users"
          
        />
   
               <StatCard
          title="Payment Due"
          value="$12,450"
          :icon="FileText"
          description="This month"
          
        />
     
        </div>

            <div style="display: flex; gap: 1rem; width: 100%; margin-bottom: 2rem;">
         
          <article style="flex:1; padding: 1.5rem;" class="card_bg">
            <div style="display: flex; justify-content: space-between; margin-bottom: 3rem;">
        <div>
          <h1 class="card-title">
            Recent Announcement
          </h1>
          <h4>
          Manage upcoming announcements for your members
          </h4>
        </div>       
           <button class="button card-link-btn">
                 View All
           </button>
      </div>
            <NotificationList />
          </article>
          <article style="flex:1; padding: 1.5rem;" class="card_bg">
            <div style="display: flex; justify-content: space-between; margin-bottom: 3rem;">
        <div>
          <h1 class="card-title">
            Recent Announcement
          </h1>
          <h4>
          Manage upcoming announcements for your members
          </h4>
        </div>       
           <button class="button card-link-btn">
                  <RouterLink to="/member/notifications" style="color: white;">
                    View All</RouterLink>

           </button>
      </div>
            <NotificationList />
          </article>
        </div>
      </section>

</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import StatCard from '../StatCard.vue';
import NotificationList from './NotificationList.vue';

import { 
  Users,
  FileText,Calendar1Icon
} from 'lucide-vue-next';
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
.card-link-btn{
    width: 9rem;
    height: 3rem;
    padding: 0;
    display: block;
}

@media (width >= 48rem){
    .card-section{
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}
</style>