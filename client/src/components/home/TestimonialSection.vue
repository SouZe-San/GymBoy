<script setup lang="ts">
    import { ref } from 'vue';
    import fitness from '@/assets/images/testimonials/fitness.jpg'
    import img1 from '@/assets/images/overlap/001.jpg'
    import img3 from '@/assets/images/overlap/002.jpg'
    import img99 from '@/assets/images/hero/99.jpg'
    import img2 from '@/assets/images/testimonials/gym4.jpg'

    interface Testimonial {
        id: number;
        name: string;
        position: string;
        quote: string;
        image: string;
    }

    const currentIndex = ref(0);
    const totalTestimonials = ref(4);

    const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "John Smith",
        position: "Professional Tennis Player",
        quote: "As a professional tennis player, I rely on every advantage I can get. AthleteIQ has become my secret weapon. It's like having a personal sports psychologist, constantly providing me with data-driven insights.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Chris Patel",
        position: "Personal Trainer",
        quote: "This gym provides all the tools I need to help my clients succeed. The equipment is top-notch, and the atmosphere is incredibly motivating.",
        image: img1
    },
   
    {
        id: 3,
        name: "Anna Bennett",
        position: "Sports Psychology Student",
        quote: "As a sports psychology student, I've found AthleteIQ's insights into the psychological aspects of sports to be incredibly valuable.",
        image: img3
        
    },

    {
        id: 4,
        name: "Mark Thompson",
        position: "Fitness Enthusiast",
        quote: "Joining this gym has been a life-changing experience. The community support and expert trainers have helped me achieve my fitness goals faster than I ever imagined.",
        image: fitness
    },
    {
        id: 5,
        name: "Aisa Grimori",
        position: "College Soccer Coach",
        quote: "GumBoy provides me with the tools to analyze player performance in real-time. It has significantly improved our team's strategy and outcomes.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    
    {
        id: 6,
        name: "Rachel Adams",
        position: "Group Fitness Instructor",
        quote: "As an instructor, I appreciate the variety of classes offered here. The energy and motivation from both the staff and members make every workout enjoyable!",
        image: img99
    },
    

 {
        id: 7,
        name: "Sarah Miller",
        position: "High School Track Coach",
        quote: "AthleteIQ has become an indispensable tool for my coaching. It allows me to track training progress for each of my athletes and make more data-driven decisions during track season.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },


{
        id: 8,
        name: "Jessica Park",
        position: "Sports Researcher",
        quote: "GymBoy's depth of insights is a dream come true for sports researchers like me. The data-driven approach is invaluable in advancing our understanding of human performance.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    
    {
        id: 9,
        name: "Lucy Yagami",
        position: "Weight Loss Success Story",
        quote: "Thanks to the support from trainers and the community, I've lost over 30 pounds and feel healthier than ever. This gym is my second home!",
        image: img2
    },
    {
        id: 10,
        name: "Emily White",
        position: "Yoga Practitioner",
        quote: "The yoga classes here have helped me find balance and peace in my life. The instructors are knowledgeable and truly care about our well-being.",
        image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }

];

    const prevSlide = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
    } else {
        currentIndex.value = testimonials.length - 1;
    }
    };

    const nextSlide = () => {
    if (currentIndex.value+4 < testimonials.length - 1) {
        // currentIndex.value++;
        console.log(currentIndex.value);
        currentIndex.value = (currentIndex.value + 4) % testimonials.length;
    } else {
        currentIndex.value = 0;
    }
    };

    const goToSlide = (index: number) => {
    currentIndex.value = index;
    };


</script>

<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="testimonials-header">
        <h2 class="section-title">What Our Clients Say</h2>
        <div class="navigation-buttons">
          <button class="nav-button" @click="prevSlide">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          </button>
          <button class="nav-button" @click="nextSlide">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
      </div>
      
      <div class="counter">{{ String(currentIndex + 1).padStart(2, '0') }}/{{ String(testimonials.length).padStart(2, '0') }}</div>
      
      <div class="testimonials-container">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="testimonial.id"
          class="testimonial-card"
          :class="{ 'active': index === currentIndex }"
          :style="{ transform: `translateX(${(index - currentIndex) * 110}%)` }"
        >
          <div class="testimonial-background">
            <img :src="testimonial.image" :alt="testimonial.name" class="testimonial-image">
          </div>
          <div class="testimonial-content">
            
              <div class="testimonial-author">
                  <h3 class="author-name">{{ testimonial.name }}</h3>
                  <p class="author-position">{{ testimonial.position }}</p>
                </div>
                <div>
                    
                    <div class="quote-mark">"</div>
                    <p class="testimonial-text">
                        {{ testimonial.quote }}</p>
                </div>
          </div>
        </div>
      </div>
      

      <!-- Under dots -->
      <div class="testimonial-dots">
        <button 
          v-for="(testimonial, index) in testimonials" 
          :key="`dot-${testimonial.id}`"
          class="dot-button"
          :class="{ 'active': index === currentIndex }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
    .testimonials-section {
    padding-top: 5rem;
    overflow: hidden;
    height: 110vh;
    color: #333;
    margin-bottom: 15rem;
    }

    .container {
    max-width: 90%;
    /* max-width: 1200px; */
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    }

    .testimonials-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    }

    .section-title {
    font-size: 3.5rem;
    font-family:"Mogen", serif;
    font-weight: 700;
    color: var(--nav-btn-bg);
    margin: 0;
    }

    .navigation-buttons {
    display: flex;
    gap: 0.5rem;
    }

    .nav-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    svg{
                stroke: rgb(0, 0, 0);
            }
   
    }

    .nav-button:hover {
    background-color: #ff3333;
    
    svg{
        stroke: white;
        stroke-width: 2px;
    }
    }

    .arrow {
    font-size: 1.2rem;
    }

    .counter {
    font-size: 1rem;
    color: #6c757d;
    margin-bottom: 2rem;
    font-weight: 500;
    }

    .testimonials-container {
    position: relative;
    height: 400px;
    margin-bottom: 2rem;
    }

    .testimonial-card {
    position: absolute;
    width: 100%;
    max-width: 22rem;
    aspect-ratio: 4/4.7;
    border-radius: 16px;
    
    transition: all 0.5s ease;
    z-index: 1;
}

.testimonial-background {
    position: absolute;
    border-radius:inherit;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform-origin: bottom left;
    transition:transform 0.4s ease-in-out;
}

    .testimonial-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.8);
    }

    .testimonial-card:hover .testimonial-background {
        transform: rotate(-10deg);
    }

    .testimonial-card:hover .testimonial-content {
    /* background-color: rgba(0, 0, 0, 0.7); */
    /* color: white; */
        transform: rotate(10deg) translateY(10rem);
        background-color: var(--color-highLight);
    }


    .testimonial-content {
        position: relative;
        background-color: white;
        transform-origin: bottom left;
        z-index: 2;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: transform 0.4s ease-in-out, background-color 0.25s ease-in-out;
        padding:2rem 3rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
    }

    .quote-mark {
    font-size: 4rem;
    line-height: .2;
    color: var(--color-highLight);
    /* margin-bottom: 1rem; */
    font-family: Georgia, serif;
    }

        .testimonial-card:hover .quote-mark{
            color: white;
        
    }

    .testimonial-text {
    font-size: 1.1rem;
    line-height: 1.2;
    }



    .author-name {
    font-size: 1.6rem;
    font-weight: 700;
    /* margin: 0 0 0.25rem 0; */
    }

.author-position {
    font-size: 0.9rem;
    color: #6c757d;
    margin: 0;
    }

    .testimonial-card:hover .author-position {
    color: #ddd;
    }

    .testimonial-dots {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
    }

    .dot-button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #dee2e6;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    }

    .dot-button.active {
    background-color: var(--color-highLight);
    transform: scale(1.2);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
    .testimonial-card {
        max-width: 100%;
        height: 350px;
    }
    
    .testimonials-container {
        height: 450px;
    }
    
    .section-title {
        font-size: 2rem;
    }
    }

    @media (prefers-color-scheme: dark) {
        .testimonial-content{
            background-color: #191919c7;
            backdrop-filter: blur(4rem);
            color: white;
        }
         .nav-button {
             svg{
                stroke: rgb(255, 255, 255);
            }
        }
    }


    @media (max-width: 576px) {
    .testimonials-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
    
    .navigation-buttons {
        align-self: flex-end;
    }
    }
</style>