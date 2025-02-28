<script setup lang="ts">

import img0 from '../../assets/images/overlap/000.jpg'
import img1 from '../../assets/images/overlap/001.jpg'
import img2 from '../../assets/images/overlap/002.jpg'
import img3 from '../../assets/images/overlap/110.jpg'
import img4 from '../../assets/images/overlap/111.jpg'

// Svg Components
import HeroSvg from '../icon/HeroSvg.vue'
import ChumyaSectionBg from '../icon/HeroSvg2.vue'
import ArrowInCircle from '../icon/ArrowInCircle.vue';
import ThemeIcon from '../icon/ThemeIcon.vue';
import AlarmIcon from '../icon/AlarmIcon.vue';
import HeartIcon from '../icon/HeartIcon.vue';
import logo from '../../assets/images/logo2.png'


import OverlapCircle from '../OverlapCircle.vue';
import { useThemeStore } from '@/stores/theme'


const imgArray_for_mid = [img2,img3,img0]
const imgArray_for_small = [img2,img4,img1]

const themeStore = useThemeStore()


</script>

<template>
    <section :style="{
        display: 'flex',
        padding: '0 1rem',
        width: '100%',
        height: '105vh',
    }">
       <aside style="width:60%; position: relative;"> 

        <div class="top-buttons">
            <div class="icon-item">
                <AlarmIcon />
            </div>
            <div class="icon-item" @click="themeStore.changeTheme">
                <ThemeIcon :is-dark="themeStore.isDark"/>
            </div>
            <div class="icon-item">
                <HeartIcon/>
            </div>
        </div>

        <div class="tagLine-container">
            <h4>Your Blueprint for Fitness Triumph.</h4>
        <div class="headline-box">

            <h1>
                Empowering
            </h1>
            <h1 style="display: flex;">
                Fitness <OverlapCircle padding size="mid" :image-array="imgArray_for_mid" />
            </h1>
            <h1>
                Through <span>Connection</span>
            </h1>
        </div>

        <div style="position: relative; display: inline-block;">
            <button class="hero-btn button">Get Started </button>
           <span class="arrow-icon">
             <ArrowInCircle/>
           </span>
        </div>
        </div>
        
        <div class="extra-details-container">
            <div class="right-div">
                <!-- bg Svg -->
                <HeroSvg/>
                <div class="upper-box">
                    <div class="logo">
                        <img :src="logo" alt="logo">
                    </div>
                    <p>
                        Data-Driven <br> Insights
                    </p>
                </div>
                <div class="under-box absolute">
                    <p>
                        Personalized Workouts
                    </p>

                         <svg width="32" height="16" style="width: 4.5rem;" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_250_2)">
                            <path d="M24.2163 5.33301L27.6758 8.29597L24.2163 11.2589" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M0.864746 8.2959L27.6756 8.2959" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_250_2">
                            <rect width="32" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>

                </div>
            </div>
            <div  class="left-div"> 
                <!-- background -->
                <ChumyaSectionBg/>

                <OverlapCircle size="small" class="absolute upper-box" :image-array="imgArray_for_small"/>
                <div class="under-box absolute under-box">
                    <p>
                       <span>1k+</span> <br> Members Cums Here
                    </p>
                   
                </div>
            </div>
        </div>

       </aside>
       <aside style=""> 
         </aside>
    </section>
</template>


<!-- Style -->
<style scoped>

aside{
    height: 100%;
   
}

aside:nth-child(1){
 display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items:flex-start ;
    height: 100%;
    padding-left: 2rem;

}
aside:nth-child(2){
    background:rgba(0, 255, 234, 0.37);
    flex-grow: 1; height: inherit; overflow: hidden;
    border-radius: 3rem;
    background: url('../../assets/images/hero/jpg.jpg') no-repeat ;
    background-size: cover; 


}


/* Right Box */

.top-buttons{
    width: 10rem;
    /* height: 4rem; */
    position: absolute;
   z-index: 5;
    top:2.8%;
    right: 8%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    .icon-item{
        width: 40px;
        aspect-ratio: 1;
        border: 1.3px solid ;
        border-radius: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        color: rgb(0, 0, 0);
        opacity: 0.8;
        transition: all 0.3s ease;
        svg{
            width: 2em;
        }
        &:hover{
            opacity: 1;
            border-color:rgba(143, 143, 143, 0.68) ;
            
        }
    }
}

/* Tag line style */
.tagLine-container{
    
    

    h4{
        font-size:1rem;
        font-family: "TT_hover-regular";

    }

    h1{
        font-size: 4.5rem;
        font-weight: 800;
        line-height: 1.3;
        
        font-family: "Mogen", sans-serif;

    }
    .hero-btn{
       padding: 1.1rem 3.3rem;


       &:hover {
        
        ~span svg{
        
            transform: scale(1.1);
     
            >circle{
                transform: none;
                fill: azure;
            
            }
            >g{
                path{
                    stroke: black;
                }
                transform: translate(0.5px, -0.5px);
            }
   
       }}
       
    }
    .arrow-icon{
        position: absolute;
      top: 50%;

      right: 0%;
      translate: 0 -45%;
    
        svg{
            width: 2em;
    
        }
    }
}



.extra-details-container{

    display: flex;
    width: 100%;
    margin-top: 7rem;
    gap: 2rem;

    .right-div,.left-div{
        position: relative;
        /* width: 80%; */
        height: 11rem;
        display: flex;
        flex-direction: column;
        color:var(--color-text);
        
        svg{
            /* position: absolute; */
            width: 100%;
            height: 100%;
        }

        p{
            color: currentColor;
        }
    }


    .right-div .upper-box{
        position: absolute;
      top: -15%;
      left: 22%;
        
        display: flex;
        align-items: flex-end;
        gap: 1rem;

        font-size: 1.05rem;
        

        .logo{
            width: 7rem;
            aspect-ratio: 1;
            background: var(--color-highLight);
            border-radius: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            backdrop-filter: drop-shadow(0 0 30px #000000);
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        p{
            margin-bottom: 10px;
            font-size: 1.2rem;
            line-height: 1.5;
            font-weight: 500;
          letter-spacing: 1px;
        }
    }

    .right-div .under-box{
        left: 5%;
        bottom: 10%;
      
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
        display: flex;
        gap: 2rem;
        
        p{
            
            font-size: 1.5rem;
            font-family: "TT_hover-regular";
        }

        svg{
            stroke-opacity: .75;
            animation: arrowJumping 2s infinite;
            color: var(--nav-btn-bg);
        }
    }


    .left-div {
        .upper-box{
            top: 5%;
            left: 2%;
        }

        .under-box{
            bottom: 10%;
            left: 10%;
            p{
                line-height: 1;
            }
            p span{
                font-size: 4rem;
                font-family: "TT_hover-regular";
                /* font-weight: 600; */
            }
        }
    }

}


@media(prefers-color-scheme: dark){


   .top-buttons .icon-item{
      opacity: 0.5;
        color: white;
    }

    .tagLine-container h4, .tagLine-container h1{
        color: white;
    }
    aside:nth-child(2){
    background: url('../../assets/images/hero/gym1.jpg') no-repeat ;
    background-size: cover; 
    background-position: center;

    
}
}




@keyframes arrowJumping {

    0% {
        transform: translateX(0%);
    }
    50% {
        transform: translateX(50%);
    }
    100% {
        transform: translateX(0%);
    }



}


</style>