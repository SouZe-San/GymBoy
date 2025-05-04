<template>
        <aside className="hidden md:flex h-screen w-64 flex-col border-r bg-sidebar fixed left-0 top-0 z-20">
      <div className="flex h-16 items-center border-b px-6">
        <h2 className="text-xl font-bold text-gym-primary">FlexTrack</h2>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => (
          <a
          v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            :class="{'nav-link-active' : item.active}"
            class="nav-link"
          >
            <item.icon className="h-5 w-5" />
            {{item.label}}
          </a>
        ))}
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
import { FunctionalComponent } from 'vue';
const {userType } = defineProps<{
  userType: 'member' | 'admin';
}>();
interface NavItem {
  icon: FunctionalComponent;
  label: string;
  href: string;
  active?: boolean;
}
  const memberNavItems: NavItem[] = [
    
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      href: '#dashboard',
      active: true,
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
      href: '#dashboard',
      active: true,
    },
    {
      icon: Users,
      label: 'Members',
      href: '#members',
    },
    {
      icon: FileText,
      label: 'Payments',
      href: '#payments',
    },
    {
      icon: Mail,
      label: 'Announcements',
      href: '#announcements',
    },
    {
      icon: Calendar,
      label: 'Schedule',
      href: '#schedule',
    },
  ];

  const navItems = userType === 'admin' ? adminNavItems : memberNavItems;
</script>

<style scoped>

</style>