<template>
    <!-- <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M3 6h18M3 18h18"/></svg> -->

      <div class="hamburger" :class="{ 'is-active': isOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
</template>

<script setup lang="ts">
    const {isOpen} = defineProps({
        isOpen: Boolean
    })
</script>

<style scoped>
    svg{
        width: 2rem;
        height: 2rem;
    }

    
.hamburger {
  width: 2rem;
  /* width: 24px; */
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: currentColor;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.is-active span{
    height: 3px !important;
}

.hamburger.is-active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger.is-active span:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}
</style>