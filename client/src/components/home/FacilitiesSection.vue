<template>
    <section class="under-section">
        <div class="center-div">
            
            <div class="in-box">
                <h1 style="text-align: center">
                    Facilities <br />
                    <span>&</span> <br />
                    Classes
                </h1>
                 <div class="img-container" ref="floatDiv">
                    <img :src="img1" alt="dj-img" loading="lazy">
                    <img :src="img2" alt="dj-img" loading="lazy">
                    <img :src="img3" alt="dj-img" loading="lazy">
                    <img :src="img4" alt="dj-img" loading="lazy">
                    <img :src="img5" alt="dj-img" loading="lazy">
                    <img :src="img6" alt="dj-img" loading="lazy">
                </div>
            </div>
            
        </div>

        <div v-for="(box, index) in boxes" :key="index.toString()" class="main-box" @mouseenter="handleMouseOver(index)" @mouseleave="handleMouseLeave">
            <div class="insider">
                <img :src="box.img" alt="strength is all" class="img-box" loading="lazy">
                <div class="text-box">
                    <div class="main-text">
                        <h1>{{ box.title }}</h1>
                    </div>
                    <ul>
                        <li v-for="(item, index) in box.classes" :key="index.toString()">
                            <h3>{{ item.name }}</h3>
                            <p>{{ item.description }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
import img1 from "@/assets/images/class/weight.jpg";
import img2 from "@/assets/images/class/web.jpg";
import img3 from "@/assets/images/class/mix.jpg";
import img4 from "@/assets/images/class/box.jpg";
import img5 from "@/assets/images/class/yoga.jpg";
import img6 from "@/assets/images/class/join.jpg";
import { ref } from "vue";


const boxes= [
    {
        img: img1,
        title: 'Strength Training Classes',
        classes: [
            { name: 'Weightlifting', description: 'Classes focused on building strength through free weights and machines.' },
            { name: 'CrossFit', description: 'A high-intensity workout that combines elements of weightlifting, cardio, and functional movements.' }
        ]
    },
    {
        img: img2,
        title: 'Specialty Classes',
        classes: [
            { name: 'Boot Camp', description: 'A mix of strength and cardio exercises in a group setting, often outdoors.' },
            { name: 'Barre', description: 'A workout that combines ballet, Pilates, and yoga for strength and flexibility.' },
            { name: 'Dance Fitness', description: 'Classes that incorporate various dance styles for a fun workout.' }
        ]
    },
    {
        img: img3,
        title: 'Group Fitness Classes',
        classes: [
            { name: 'Yoga', description: 'Classes focusing on flexibility, balance, and mindfulness.' },
            { name: 'Body Pump', description: 'Weightlifting classes that use barbells to build strength and endurance.' }
        ]
    },
    {
        img: img4,
        title: 'Personal Training Sessions',
        classes: [
            { name: 'Kickboxing', description: 'Combines martial arts techniques with cardio for a full-body workout.' },
            { name: 'Aerobics', description: 'Traditional aerobic classes that focus on cardiovascular fitness.' }
        ]
    },
    {
        img: img5,
        title: 'Wellness and Recovery Classes',
        classes: [
            { name: 'Meditation', description: 'Classes focused on mindfulness and relaxation techniques.' },
            { name: 'Stretching/Flexibility', description: 'Classes that emphasize stretching and mobility for recovery.' }
        ]
    },
    {
        img: img6,
        title: 'Family and Kids Classes',
        classes: [
            { name: 'Kids Fitness', description: 'Fun and engaging classes designed for children to promote physical activity.' },
            { name: 'Family Classes', description: 'Activities that encourage family participation, such as family yoga or dance.' }
        ]
    }
]


const floatDiv = ref<HTMLDivElement| null>(null)
const handleMouseOver = (index:number)=> {        
            if(floatDiv.value){
                floatDiv.value.style.opacity = '1';
                // floatDiv.value.style.transform = `translateY(${index * -100}%)`;
                
                floatDiv.value.style.transform = `translateY(${(index * -100)-(index*2)}%)`;
            }
        }
const handleMouseLeave = ()=> {
            if(floatDiv.value){
                floatDiv.value.style.opacity = '0';
                
            }
        }





</script>

<style scoped>
.under-section {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    justify-items: center;
    gap: 3rem;
    height: auto;
    clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0 100%);
    padding: 2rem 0;
}

.center-div {
    position: fixed;
    width: calc(100% / 5);
    aspect-ratio: 5/6;
    background-color: #f1f1f124;
    border: 1px solid #c6c6c628;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    backdrop-filter: blur(10px);
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
    overflow: hidden;

    

    h1 {
        font-size: 2rem;
        color: #f1f1f1;
        line-height: 1.1;
        font-family: 'CosiAzure';

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);

        span {
            font-size: 4rem;
            color: var(--color-highLight);
            text-shadow: 0 0 10px #000000;
        }
    }


    .in-box{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
        
        .img-container{
            position: absolute;
            /* z-index: -1; */
            width: inherit;
            height: inherit;
            opacity: 0;
            margin: 0;
            padding: 0;
            
            transition: transform 0.5s ease-in-out , opacity 0.3s ease-in-out;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                margin: 0;
                padding: 0;
            }
        }
    }
}

.main-box {
    width: 50%;
    aspect-ratio: 1;
    border: 1px solid #c6c6c62a;
    display: flex;
    border-radius: 3rem;
    position: relative;
    overflow: hidden;
    transition: scale 0.3s ease-in-out;
    box-shadow: 0px 4px 18px -11px rgba(0, 0, 0, 0.47);
    background: rgba(136, 136, 136, 0.05);

    .insider {
        flex: 1;
        display: flex;
        background: #ffffff08;
        backdrop-filter: blur(2rem);
        height: inherit;
        img {
            border: none;
            outline: none;
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            filter: blur(3px);
            opacity: 0;
            transition: opacity 0.4s ease-in-out;
        }

        .text-box {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: space-between;
            padding: 0 10px;
           
            color: white;
            transition: padding 0.3s ease-in-out;
        }

        .main-text {
            font-size: 2rem;
            line-height: 1;
            text-align: center;
            transition: all 0.3s ease-in-out;
            position: relative;
            top: 50%;
            color: var(--color-highLight);
            transform: translateY(-50%);

            /* font-family: 'MoonHouse'; */
            /* font-family: 'TT_hover-mid'; */
        }

        ul {
            /* font-size: 0.7rem; */
            transition: all 0.5s ease-in-out;
            opacity: 0;
            transform: translateY(120%);
        }
    }

    &:hover {
        scale: 1;
        box-shadow: 0px 4px 18px -11px transparent;
        border-color: transparent;

        .insider {
            img {
                opacity: 1;
            }

            .text-box {
                padding: 3rem 2rem;
                 background: #00000047;
            }

            .main-text {
                color: currentColor;
                font-size: 1.6rem;
                transform: translateY(0%);
                top: 5%;
            }

            ul {
                opacity: 1;
                transform: translateY(0%);
            }
        }
    }
}

@media (prefers-color-scheme: dark) {
    .main-box {
        box-shadow: 0px 4px 18px -11px rgba(232, 232, 232, 0.287);
        background:none;
    }
}
@media (prefers-color-scheme: light) {
    .center-div{
        
    background: var(----svg-bg-color);
    border-color: #21212137;
        h1{
            color: #000000;
        }
    }
}
</style>
