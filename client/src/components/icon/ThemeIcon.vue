<script setup lang="ts">
    import { AnimatePresence, motion as m } from 'motion-v';

   const props = defineProps<{
      isDark : boolean;
    }>()

    const sunPath ="M9.99984 13.3337C11.8408 13.3337 13.3332 11.8413 13.3332 10.0003C13.3332 8.15938 11.8408 6.66699 9.99984 6.66699C8.15889 6.66699 6.6665 8.15938 6.6665 10.0003C6.6665 11.8413 8.15889 13.3337 9.99984 13.3337Z"

    const moonPath = "M10 16C13.3137 16 16 13.3142 16 10.0003H15.998C10.8998 9.99971 9.10041 9.9995 10 4C6.68629 4 4 6.68584 4 9.99971C4 13.3136 6.68629 16 10 16Z"


      const raysVariants = {
        hidden: {
          strokeOpacity: 0,
          transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
          },
        },
        visible: {
          strokeOpacity: 1,
          transition: {
            staggerChildren: 0.05,
          },
        },
      };

      const rayVariant = {
        hidden: {
          pathLength: 0,
          opacity: 0,
          // Start from center of the circle
          scale: 0
        },
        visible: {
          pathLength: 1,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: "easeOut",
            // Customize timing for each property
            pathLength: { duration: 0.3 },
            opacity: { duration: 0.2 },
            scale: { duration: 0.3 }
          }
        },
      };


</script>

<template>
  <AnimatePresence>
   <m.svg viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg" fill="none">
      <m.g clip-path="url(#clip0_244_2)">
      <m.path
      :d="sunPath" 
      stroke="currentcolor" 
      stroke-width="1" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      :initial="isDark ? {
                          d: moonPath,
                          rotate: -360,
                          strokeOpacity: 1,
                          transition: { delay: 0.1 }} : 
                          {
                          d: sunPath,
                          rotate: 0,
                          strokeOpacity: 1
                          }"
      :transition="{ duration: 0.5 ,type:'spring'}"
      :animate="isDark ? {
                          d: moonPath,
                          rotate: -360,
                          strokeOpacity: 1,
                          transition: { delay: 0.1 }} : 
                          {
                          d: sunPath,
                          rotate: 0,
                          strokeOpacity: 1
                          }"


      />
      <m.g :variants="raysVariants"
      :initial="props.isDark ? 'hidden' : 'visible'"
      :animate="props.isDark ? 'hidden' : 'visible'"
      >
          <m.path :variants="rayVariant" :animate="props.isDark ?'hidden' : 'visible'" d="M10 1.66699V3.33366" stroke="currentcolor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          <m.path :variants="rayVariant" :animate="props.isDark ?'hidden' : 'visible'" d="M10 16.667V18.3337" stroke="currentcolor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          <m.path :variants="rayVariant" :animate="props.isDark ?'hidden' : 'visible'" d="M4.1084 4.1084L5.2834 5.2834" stroke="currentcolor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          <m.path :variants="rayVariant" :animate="props.isDark ?'hidden' : 'visible'" d="M14.7168 14.7168L15.8918 15.8918" stroke="currentcolor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          <m.path :variants="rayVariant" :animate="props.isDark ?'hidden' : 'visible'" d="M1.6665 10H3.33317" stroke="currentcolor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          <m.path :variants="rayVariant" :animate="props.isDark ?'hidden' : 'visible'" d="M16.6665 10H18.3332" stroke="currentcolor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          <m.path :variants="rayVariant" :animate="props.isDark ?'hidden' : 'visible'" d="M5.2834 14.7168L4.1084 15.8918" stroke="currentcolor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          <m.path :variants="rayVariant" :animate="props.isDark ?'hidden' : 'visible'" d="M15.8918 4.1084L14.7168 5.2834" stroke="currentcolor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
      </m.g>

      </m.g>
</m.svg>
</AnimatePresence>
</template>





<style scoped>

</style>