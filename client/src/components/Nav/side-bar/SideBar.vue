<template>
        <aside className="hidden md:flex h-screen w-64 flex-col border-r bg-sidebar fixed left-0 top-0 z-20">
      <div className="flex h-16 items-center border-b px-6">
        <h2 className="text-xl font-bold text-gym-primary">GymBoy</h2>
      </div>
      <div
      style="display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">


      <nav className="flex-1 space-y-1 p-4">
      
          <RouterLink
          v-for="item in navItems"
            :key="item.label"
            :to="item.href"
            exact-active-class="nav-link-active"
            class="nav-link"
            >
        
     
             <component :is="item.icon" class="h-5 w-5" />
            {{item.label}}
          </RouterLink>
      
      </nav>
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-gym-primary/10 p-1">
            <User className="h-5 w-5 text-gym-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">
              {{userType === 'admin' ? 'Gym Admin' : 'John Doe'}}
            </p>
            <p className="text-xs text-muted-foreground">{{userType}}</p>
          </div>
        </div>
      </div>
            </div>
    </aside>
</template>

<script setup lang="ts">
import { 
  LayoutDashboard, 
  FileText, 
  Bell, 
  Users, 
  Calendar, 
  User,
  Mail
} from 'lucide-vue-next';

import type { FunctionalComponent } from 'vue';
import { RouterLink } from 'vue-router';
const {userType } = defineProps<{
  userType: 'member' | 'admin';
}>();
interface NavItem {
  icon: FunctionalComponent;
  label: string;
  href: string;

}
  const memberNavItems: NavItem[] = [
    
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      href: '#dashboard',
     
    },
    {
      icon: FileText,
      label: 'Receipts',
      href: '#receipts',
    },
    {
      icon: Bell,
      label: 'Notifications',
      href: '#notifications',
    },
    {
      icon: User,
      label: 'Profile',
      href: '#profile',
    },
  ];

  const adminNavItems: NavItem[] = [
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      href: '/dashboard',
     
    },
    {
      icon: Users,
      label: 'Members',
      href: '/dashboard/members',
    },
    {
      icon: FileText,
      label: 'Payments',
      href: '/dashboard/payments',
    },
    {
      icon: Mail,
      label: 'Announcements',
      href: '/dashboard/announcements',
    },
    {
      icon: Calendar,
      label: 'Schedule',
      href: '/dashboard/schedule',
    },
  ];

  const navItems = userType === 'admin' ? adminNavItems : memberNavItems;
</script>

<style scoped>

aside {
   display: none;
background-color: var(--sidenav-bg);
  border-right: 1px solid #e0e0e038;
  position: fixed;
  backdrop-filter: blur(2rem);
  left: 0;
  top: 0;
  height: 100vh; 
  width: 16rem; 
  z-index: 20; 
  transition: background-color 0.3s ease; 
}

@media (min-width: 768px) {
  aside {
    display: flex;
    flex-direction: column; 
  }
}

aside .flex {
  display: flex;
  align-items: center;
  height: 4rem; 
; 
  padding: 0 1.5rem; 
}

aside h2 {
  font-size: 1.25rem; 
  font-weight: bold; 
  color: var(--gym-primary, #1d4ed8); 
}


nav {
  flex: 1; 
  padding: 1rem; 
}

.nav-link {
  display: flex; 
  align-items: center; 
  padding: 1rem 0;
  padding-left: 2rem;
  border-radius: 10px;
  color: var(--color-text); 
  margin: 10px 0;
  text-decoration: none; 
  transition: all 0.2s ease; 
background-color: #00000024;
  backdrop-filter: contrast(1.002);
  text-transform: uppercase;
  /*nt-family: "CoziAzure", sans-serif;
  font-size: 0.875rem; 
  font-weight: 500;  */
  letter-spacing: -0.2px; 
  overflow: hidden;
  transition: all 0.5s ease-in-out; 
  
  position: relative;
  &::before{
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
   width: 0%;
    height: 100%;
    /* background-color: #fd420f; */
    box-shadow: 0 0 -1px 0px #ff0000ba;
    transition: all 0.2s ease-in-out; 
  
  }
}

.nav-link:hover {
    background: #ff8d6b8c;
    /* color: #cfc4c4; */
  text-shadow: 0 0 3px #400000;
  backdrop-filter: blur(3rem) contrast(1.01);
  &::before{
  box-shadow:0 0 51px 142px #ff0000ba;
    /* width: 100%; */
  }
}

.nav-link-active {
  background-color: var(--active-bg, #ff3f2a); 
  color: var(--active-text-color, #ffffff); 
}


.nav-link .h-5 {
  height: 1.25rem; 
  width: 1.25rem; 
  margin-right: 0.5rem; 
}


.border-t {
  border-top: 1px solid var(--border-color, #e0e0e046); 
  padding: 1rem; 
}

.flex.items-center {
  display: flex; 
  align-items: center; 
}

.rounded-full {
  border-radius: 9999px; 
  background-color: rgba(29, 78, 216, 0.1); 
  padding: 0.25rem; 
}

.text-sm {
  font-size: 0.875rem; 
  font-weight: 500; 
}

.text-xs {
  font-size: 0.75rem; 
  color: var(--muted-foreground, #6b7280); 
}

.gap-3 {
  gap: 0.75rem; 
}

@media (prefers-color-scheme: dark) {
  aside{
    border-color: rgba(255, 255, 255, 0.159);
  }
}


</style>