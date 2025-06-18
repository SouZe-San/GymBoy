<template>
    <section class="about-section under-section" id="about">
  
        <aside>
            <div class="box image-box">
                <img :src="img" alt="some-img">
            </div>
            <div class="box-container">
                <div class="small-box box blob-box">
                      <h2>
                        Top-Tier <br> Training Facilities
                      </h2>
                      <p>
                        Our gym features top-tier training facilities equipped with the latest fitness technology. Enjoy a wide range of premium equipment and spacious training areas designed to enhance your workout experience and help you achieve your fitness goals.
                      </p>
                </div>
                <div class="small-box box blob-box">
                    <h2>
                        Tailored <br> Training Programs
                    </h2>
                    <p>Our expert trainers provide personalized workout plans tailored to your individual goals and fitness levels. Whether you're a beginner or an experienced athlete, we create customized programs to ensure you stay motivated and on track for success.</p>
                </div>
            </div>
        </aside>
        <aside>
            <div class="head-box box">
            
                <h1>Revitalize Your Body</h1>
                <h1>Ignite</h1>
                <h1>Your Journey</h1>

                <p>

                    Join our dynamic community of athletes and experience elite training in our cutting-edge facilities!
                </p>
                 <!-- Button -->

                 <ArrowButton :right="false" title="Fuel Your Passion" class="about-btn" />
            </div>
            <div class="mini-box-container " ref="secRef">
                <div class="mini-box box">
                    <div class="icon"> <CookedIcon/> </div>
                    <div class="mini-box-inside blob-box">
                       <Counting :in-view="isInView" :target-number="50" :duration="50"  suffix="+"/>
                        <p>
                            Expert Trainers
                        </p>
                    </div>
                </div>
                <div class="mini-box box">
                    <div class="icon"> <OrigamiIcon/> </div>
                    
                     <div class="mini-box-inside blob-box">
                        
                            <Counting :in-view="isInView" :target-number="100" :duration="50"  suffix="+"/>
                        
                        <p>
                            Weekly Classes
                        </p>
                     </div>
                </div>
                <div class="mini-box box">
                    <div class="icon"> <GraphIcon/> </div>
                     <div class="mini-box-inside blob-box" > 
                       
                            <Counting :in-view="isInView" :target-number="90" :duration="50"  suffix="%"/>
                    
                        <p>
                        Success Rate
                       </p>

                     </div>

                </div>
            </div>
        </aside>
    </section>
</template>

<script setup lang="ts">
import { ref ,onMounted} from 'vue';
// import img from '@/assets/images/landscape/sexy.jpg'
import img from '@/assets/images/landscape/yeollow.png'
import ArrowButton from '../ArrowButton.vue';
import CookedIcon from '../icon/CookedIcon.vue';
import OrigamiIcon from '../icon/OrigamiIcon.vue';
import GraphIcon from '../icon/GraphIcon.vue';
import { useInView} from 'motion-v';
import Counting from '../Animation/Counting.vue';


const boxes = ref<HTMLElement[]>([])
const secRef = ref<HTMLElement | null>(null)
const updateCursor = (e:MouseEvent) => {
    boxes.value.forEach(box => {
    
        const rect = box.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
   
    box.style.setProperty('--mouse-x', `${x}%`)
    box.style.setProperty('--mouse-y', `${y}%`)
  })

}


const isInView = useInView(secRef)

onMounted(() => {
    const section = document.getElementById('about')
    section!.addEventListener('mousemove', updateCursor)
    boxes.value = Array.from(document.querySelectorAll('.blob-box'))
})


</script>

<style scoped>

.blob-box{
    position: relative;
    padding: 1rem;
    background:rgba(136, 136, 136, 0.08);
    border: 1px solid #57575716;
    overflow: hidden;
    transition: border 0.27s ease-in-out;
    backdrop-filter: blur(2rem);
    cursor: pointer;
    
    &:hover {
        border: 1px solid #c6c6c655 ;
    }

    
}

.blob-box:hover{
    background: rgba(69, 69, 69, 0.05)
}

.blob-box:hover::after {
  opacity: 1;
}

.blob-box::after{
    content: "";
  position: absolute;
  z-index: -1;
  width: 0px;
  height: 0px;
  background: transparent;
  transition: opacity 0.3s ease-in-out,transform 0.3s ;
  box-shadow: 0 0 180px 50px #840202;
  left: var(--mouse-x);
  top: var(--mouse-y);

  opacity: 0;
}

.about-section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 100vh;

    
    aside{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 48%;
        .box{
            width: 100%;
            height: 100%;
            
            border-radius: 2rem;
            margin: 1rem 0;
        }
        .image-box{
            overflow: hidden;
            border: none;
            border-radius: 3rem;
            img{
                width: 100%;
                height: 100%;
                object-fit: fill;
                transition:all .3s ease-in-out;
                filter: grayscale(1);
            }
            
            &:hover{
                img{
                    filter: grayscale(0);
                    transform: scale(1.4);
                }
            }
        }
        .box-container{
            display: flex;
            justify-content: space-between;
            width: 100%;

            .small-box{
                width: 48%;
                aspect-ratio: 12/9;
                margin: 1rem 0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                h2{
                    font-size: 1.8rem;
                    
                    font-family: "TT_hover-mid",serif;
                }

                p{
                    font-size: 14px;
                    line-height: 1.4;
                }

            }
        }
        .head-box{
           aspect-ratio: 5/3.55;
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: flex-end;

           h1{
            font-size: 4.5rem;
            font-weight: 800;
            text-align: end;
            line-height: 1.3;
            font-family: "Mogen", sans-serif;
            word-spacing: -15px;
            &:nth-child(3){
                padding-right:2rem ;
            }
            &:nth-child(4){
                padding-right:3rem ;
            }
           }

           p{
            font-size: .8rem;
            text-align: end;
            font-family: "TT_hover-regular",serif;
           }

        

             .about-btn{
                margin-right: 4.5rem;
             }
           
        }
        .mini-box-container{
            display: flex;
            justify-content: space-between;
            width: 100%;
            gap: 1rem;
            height: 100%;
                    padding-bottom: 10px;

            .mini-box{
                width: 30%;
                height: 100%;
               
                border-radius: 1rem;
                margin: 1rem 0;
                background: none;              
                display: flex;
                position: relative;
                padding: 0;
                cursor: pointer;



                .icon{
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    z-index: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 5rem;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    background: var(--color-highLight);
                    /* background: #5DE9F8; */
                    transition: all 0.3s ;
                        
                    svg{
                            stroke: white;
                            transition:transform 0.4s ease-in-out, stroke .3s ease-in-out;
                        }
                
                }

                .mini-box-inside{
                    flex-grow: 1;
                    overflow: hidden;
                    border-radius: 2rem; 
                    clip-path: path("M59.1214 95.9485C77.5807 91.3135 92.0811 76.8199 96.941 58.1465L106.166 22.6999C109.649 9.32002 121.565 0 135.189 0H218.145C222.566 0 226.15 3.64065 226.15 8.13162V229.718C226.15 234.209 222.566 237.85 218.145 237.85H8.00531C3.5841 237.85 0 234.209 0 229.718V131.484C0 119.331 8.15938 108.745 19.7739 105.828L59.1214 95.9485Z");

                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;

                    p{
                        text-align: end;
                    }
                }

                &:hover{
                    .icon{
                        background: #ffffff;
                        svg{
                            transform: scale(.8);
                            stroke: #000000;
                        }
                    }
                }
            }
        }
    }
}

@media(prefers-color-scheme:dark){
    .blob-box{
       background: #6f6e6e1a;
        border: 1px solid #61616130;


        &::after{
            box-shadow: 0 0 180px 50px #c6c6c6;
        }
    }
    

    .about-section{
        aside{
            .head-box h1{
                color:white;
            }
        }
    }
    
}

</style>