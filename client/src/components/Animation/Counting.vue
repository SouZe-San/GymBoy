<script setup lang="ts">
import { motion  as m} from 'motion-v';
import { ref, onMounted, computed, watchEffect, watch } from 'vue'

const props = defineProps<{
  targetNumber: number
  duration?: number
  prefix?: string
  suffix?: string
  inView: boolean
}>()

const currentNumber = ref(0)
const isAnimating = ref(false)

const digits = computed(() => {
  return String(currentNumber.value).padStart(String(props.targetNumber).length, '0').split('')
})

const generateNumbers = () => {
  return Array.from({ length: 10 }, (_, i) => i)
}

const animateToNumber = () => {
  isAnimating.value = true

  const start = 0
  const end = props.targetNumber
  const duration = props.duration || 2500
  const startTime = performance.now()
    
  const updateNumber = (currentTime: number) => {
    console.log('updating number')
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Custom easing function for smooth acceleration and deceleration
    const easeInOutBack = (x: number): number => {
      const c1 = 1.70158
      const c2 = c1 * 1.525

      return x < 0.5
        ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
        : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2
    }
    
    currentNumber.value = Math.floor(start + (end - start) * easeInOutBack(progress))
    
    if (progress < 1) {
      requestAnimationFrame(updateNumber)
    } else {
      isAnimating.value = false
    }
  }

  requestAnimationFrame(updateNumber)
}

// watchEffect(()=>{
//     if (props.inView) {
//         console.log('in view');
//         animateToNumber()
//     }
// })


// Watch for changes in `inView` prop
watch(() => props.inView, (newVal) => {
  if (newVal) {
    // Reset the current number and animation state
    // currentNumber.value = 0; // Reset to 0 before starting the animation
    // isAnimating.value = false; // Reset animation state
    animateToNumber(); // Start the animation
  }
});
</script>

<template>
  <!-- <div class="counter-container"> -->
    <div class="counter-wrapper">
      <span v-if="prefix" class="affix">{{ prefix }}</span>
      <div class="digits-container">
        <div 
          v-for="(digit, index) in digits" 
          :key="index"
          class="digit-slot"
        >
          <m.div 
            class="digit-track"
         
            :initial="{
              transform: 'translateY(0)',

            }"
            :animate="{
              transform: `translateY(${-digit * 10}%)`
            }"
            
            :transition="{
              duration: 2,
              ease: [0.4, 0, 0.2, 1]
            }"
          >
            <!-- :style="{
              transform: `translateY(${-digit * 10}%)`
            }" -->
            <div 
              v-for="num in generateNumbers()"
              :key="num"
              class="digit"
            >
              {{ num }}
            </div>
          </m.div>
        </div>
      </div>
      <span v-if="suffix" class="affix">{{ suffix }}</span>
    </div>
  <!-- </div> -->
</template>

<style scoped>

.counter-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* gap: 0.25rem; */
}

.digits-container {
  display: flex;
  gap: 0.2rem;
}

.digit-slot {
  position: relative;
 width: 2.3rem;
  height: 6rem;
  /* background: linear-gradient(to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(240, 240, 240, 1) 100%); */
  border-radius: 0.5rem;
  overflow: hidden;
  /* box-shadow: 
    inset 0 0 10px rgba(0, 0, 0, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.1); */
}

.digit-track {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* transition: transform 2.5s cubic-bezier(0.4, 0, 0.2, 1); */
}

.digit {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
 font-size: 4rem;
font-family: "TT_hover-regular";
  /* font-weight: 700; */
  /* color: #1a1a1a; */
  color: currentColor;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}

.affix {
  font-size: 3rem;
  font-weight: 600;
  color: #666;
  margin: 0 0.5rem;
  font-family: "TT_hover-regular";
}


/* Hover effect */
.digit-slot:hover {
  transform: translateY(-2px);
}

/* Smooth transition for hover */
.digit-slot {
  transition: all 0.3s ease;
}
</style>