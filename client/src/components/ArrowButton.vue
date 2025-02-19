<template>
    <div style="position: relative; display: inline-block;" v-if="right">
             <button class="btn button">{{ title }}</button>

        <span class="right-arrow-icon" >
          <ArrowInCircle/>
        </span>
    </div>

    <div style="position: relative; display: inline-block;" v-else >
                     <span class="left-arrow-icon">
                       <ArrowInCircle/>
                     </span>
                    <button class="btn button">{{ title }}</button>
                </div>
</template>

<script setup lang="ts">
import ArrowInCircle from './icon/ArrowInCircle.vue';




defineProps<{
    right: boolean;
    title:string;
}>()
</script>

<style scoped>
.btn{
       padding: 1.1rem 3.3rem; 
    }
    .left-arrow-icon{
        position: absolute;
      top: 50%;
        left: 0%;
      translate: 0 -45%;
        rotate: 270deg;
        svg{
            
            width: 2em;
    
        }
    }

    .right-arrow-icon{
        position: absolute;
      top: 50%;

      right: 0%;
      translate: 0 -45%;
    
        svg{
            width: 2em;
    
        }
    }
</style>