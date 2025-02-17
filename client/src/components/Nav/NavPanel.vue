<script setup lang="ts">
import { motion as m, AnimatePresence,useAnimate ,stagger} from 'motion-v';
import { watchEffect } from 'vue';

const {isOpen}=defineProps<{
  
    isOpen:boolean;

}>()

// const ease = easeInOut(0.5)
const ease = [1,0,0, 1]
// const [scope, animate] = useAnimate()
// watchEffect( () => {
// const enterAnimation = async () => {
//   await animate('a', { y: 0, opacity: 1 }, {
//     delay: stagger(0.1),
//   })
// }
//   const exitAnimation = async () => {
//     await animate('a', { y:90, opacity: 0 }, {
//       delay: stagger(0.1),
//     })
//   }

//  if(isOpen){
// enterAnimation().then(()=>{
//   console.log('done')})
//  }else{
//  exitAnimation().then(()=>{
//   console.log('done')})
//  }
// })
</script>

<template>
  <!-- <div class="nav-container"> -->
<!-- <AnimatePresence
  >  
  
  <m.div
      
    v-show="isOpen"
      class="nav-panel"
      :class="{ 'nav-panel-open': isOpen }"
      :initial="{ clipPath: 'polygon(100% 0, 100% 0, 100% 0, 100% 0)' }"
      :animate="{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }"
      :exit="{ clipPath: 'polygon(100% 0, 100% 0, 100% 0, 100% 0)' ,transition:{delay:0.3}}"
      :transition="{ duration: 0.5,ease:ease, type:'tween',stiffness: 260,
      damping: 20, }"
    >
      <nav>
        <ul
        ref="scope">
          <li><m.a :initial="{ y: 90, opacity: 0 }" href="/">Home</m.a></li>
          <li><m.a :initial="{ y: 90, opacity: 0 }" href="#about">WorkOut</m.a></li>
          <li><m.a :initial="{ y: 90, opacity: 0 }" href="#services">Programs</m.a></li>
          <li><m.a :initial="{ y: 90, opacity: 0 }" href="#contact">Contact</m.a></li>
        </ul>
      </nav>
  </m.div>
</AnimatePresence>  -->
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
  <!-- </div> -->
</template>

<style scoped>
.nav-panel {
  position: fixed;
  /* top: 2rem;
  right: 2rem; */
  /* width: 48px;
  height: 48px; */
 background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  /* border-radius: 50%; */
  /* opacity: 1; */
  /* visibility: hidden; */
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
  /* width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  border-radius: 0;
  opacity: 1;
  visibility: visible;
  z-index: 50; */
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
/* font-family: "mogen", sans-serif; */
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