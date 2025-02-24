<template>
    <div class="circle-container" :class="{padding}">
       
       <template v-for="img in imageArray">
           <div class="img-circle" :class="{mid : size === 'mid', small: size === 'small', border}"><img :src="img" alt="cirImg" srcset="" loading="lazy"></div>
    </template>

        
    </div>
</template>

<script setup lang="ts">


 defineProps<{
    padding?: boolean;
    size: "mid" | "small" | "large";
    imageArray: string[];
    border?:boolean
}>()



</script>

<style scoped>
    .circle-container.padding{
        padding-left: 2rem;
    }
    .circle-container{
        display: flex;
        align-items: center;
    }
    .circle-container .img-circle{
        aspect-ratio: 1;
        border-radius: 50%;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .circle-container .img-circle.border{
        border: 1px solid;
    }
    .circle-container .img-circle.mid{
        margin-right: -10%;
        width: 90px;
        height: 90px;
    }
    .circle-container .img-circle.small{
        width: 40px;
        height: 40px;
        margin-right: -15%;
    }
</style>
