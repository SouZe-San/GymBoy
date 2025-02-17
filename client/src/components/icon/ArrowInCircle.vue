<template>
   <svg viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2.5" cy="2.5" r="2.5" fill="#5DE9F8"/>
<g clip-path="url(#clip0_0_1)" class="arrow">
<path d="M1.875 1.875H3.125V3.125" stroke="white" stroke-width="0.333333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.875 3.125L3.125 1.875" stroke="white" stroke-width="0.333333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="3" height="3" fill="white" transform="translate(1 1)"/>
</clipPath>
</defs>
</svg>

</template>

<script setup lang="ts">

</script>

<style scoped>
svg{
   transition: all 0.3s ease;

   g, g path{
      transition: all 0.3s ease;
   }

}
   svg:hover{
      transform: scale(1.1);
     
      circle{
         transform: none;
         fill: azure;
       
      }
      g{
         path{
            stroke: black;
         }
         transform: translate(0.5px, -0.5px);
      }
   }
</style>