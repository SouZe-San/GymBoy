<template>

<section>
    <div class="floatBox">
            <h1>Make Ur Gym Better</h1>
            <p>Have any questions or concerns? Feel free to reach out to us.</p>
    </div>

    <div class="contact-section">
        <div class="contact-section_left">
            <img :src="img" alt="Logo">
        </div>
        <div class="contact-section_right">
            <div class="items">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headset"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/></svg>
                </span> 
                
                   <p> Support Available 24/7</p>

                </div>

                <div class="items">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </span>
                    <p>Phone: <a href="tel:+919849342803">123-456-7890</a></p>
                </div>
            <div class="items">

                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-at-sign"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>
                </span>
                <p>Email:
                    <a href="mailto:Dojdfj">
                        gymboy@help.com
                    </a>
                </p>
            </div>
        </div>
    </div>
</section>
</template>

<script setup lang="ts">

import img from '@/assets/images/logo.png'
</script>

<style scoped>
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .floatBox{
    
        position: absolute;
        top: -75%;
        background-color: #e70000;
        padding: 1rem;
        border-radius: 7.3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 70%;
        aspect-ratio: 12/3;
        h1{
            font-size: 4rem;
            font-family: "Mogen";
            color: aliceblue;
            line-height: 1;
        }
    }

    .contact-section{
        background-color: rgba(255, 255, 255, 0.05);
        padding: 1rem 8rem ;
        padding-top:5rem ;
        width: 100%;
        min-height: 30vh;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .contact-section_left{
            display: flex;
            
            justify-content: center;
            align-items: center;

            width: 15%;
      aspect-ratio: 1;
      border-radius: 2rem;
      overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    .contact-section_right{
        display: flex;
        max-width: 70%;
        flex: 1;
        justify-content: space-between;
        align-items: center;
    }

    .items{
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 1rem 0;

            p{
                font-size: 1.4rem;

                a{
                    color: #525252;
                    text-decoration: none;
                }
            }
    }
</style>