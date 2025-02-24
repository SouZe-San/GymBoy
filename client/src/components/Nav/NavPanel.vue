<script setup lang="ts">
defineProps<{
  isOpen:boolean;
}>()

</script>

<template>
<div
    class="nav-panel"
    :class="{ 'nav-panel-open': isOpen }"
  >
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#about">WorkOut</a></li>
        <li><a href="#services">Programs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
</div>

</template>

<style scoped>
.nav-panel {
  position: fixed;

 background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.5s cubic-bezier(1, 0, 0, 1);
  display: flex;

  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  border-radius: 0;
  top: 0;
  right: 0;
  z-index: 50;
  clip-path: polygon(100% 0, 100% 0, 100% 0, 100% 0);
  will-change: transform;
}

.nav-panel-open {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

nav {
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;
  transition-delay: 0s;
}

.nav-panel-open nav {
  opacity: 1;
  transform: scale(1);
  transition-delay: 0.3s;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

nav ul li {
  margin: 2rem 0;
  opacity: 0;
  overflow: hidden;
  transform: translateY(20px);
  transition: all 0.3s ease;
  
}

.nav-panel-open nav ul li {
  overflow: visible;
  opacity: 1;
  transform: translateY(0);
}


.nav-panel-open nav ul li:nth-child(1) { transition-delay: 0.4s; }
.nav-panel-open nav ul li:nth-child(2) { transition-delay: 0.5s; }
.nav-panel-open nav ul li:nth-child(3) { transition-delay: 0.6s; }
.nav-panel-open nav ul li:nth-child(4) { transition-delay: 0.7s; }

nav ul li a {
  font-size: 5rem;
  font-weight: 600;
  line-height: 1.1;
  font-family: "CosiAzure", sans-serif;
  color: currentColor;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  padding: 3px;
}

nav ul li a:hover {
  color: white;
    transform: scale(1.1);
    letter-spacing: 0.2rem;
}

@media (prefers-color-scheme: light){
  nav ul li a:hover {
  color: #0e1a26;
}
}
</style>