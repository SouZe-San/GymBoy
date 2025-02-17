<template>
    <section class="about-section under-section" id="about">
        <aside>
            <div class="image-box box"></div>
            <div class="box-container">
                <div class="small-box box"></div>
                <div class="small-box box"></div>
            </div>
        </aside>
        <aside>
            <div class="head-box box"></div>
            <div class="mini-box-container ">
                <div class="mini-box box"></div>
                <div class="mini-box box"></div>
                <div class="mini-box box"></div>
            </div>
        </aside>
    </section>
</template>

<script setup lang="ts">
import { ref ,onMounted} from 'vue';


const cursorPosition = ref({ x: 0, y: 0 })

</script>

<style scoped>

.about-section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    
    aside{
        display: flex;
        flex-direction: column;
        /* justify-content: space-between;
        align-items: center; */
        height: 100%;
        width: 48%;
        .box{
            width: 100%;
            height: 100%;
            border: 1px solid;
            border-radius: 1rem;
            margin: 1rem 0;
        }
        /* .image-box{
            aspect-ratio: 16/9;
            background-color: aquamarine;
        } */
        .box-container{
            display: flex;
            justify-content: space-between;
            width: 100%;

            .small-box{
                width: 48%;
                aspect-ratio: 12/9;
                background-color: rgba(127, 255, 212, 0.142);
                margin: 1rem 0;
            }
        }
        .head-box{
           aspect-ratio: 5/4;
        }
        .mini-box-container{
            display: flex;
            justify-content: space-between;
            width: 100%;
            gap: 1rem;
            height: 100%;
            .mini-box{
                /* width: 30%; */
                height: 100%;
                background-color: rgba(240, 255, 255, 0.256);
                border-radius: 1rem;
                margin: 1rem 0;
            }
        }
    }
}

</style>