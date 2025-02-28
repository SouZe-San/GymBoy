<script setup lang="ts">
import AboutSection from '@/components/home/AboutSection.vue';
import ContactSection from '@/components/home/ContactSection.vue';
import FacilitiesSection from '@/components/home/FacilitiesSection.vue';
import HeroSection from '@/components/home/HeroSection.vue';
import ScheduleSection from '@/components/home/ScheduleSection.vue';
import TestimonialSection from '@/components/home/TestimonialSection.vue';

        
</script>
<template>
    <main style="padding-top:1rem;">
        <HeroSection/>
        <AboutSection/>
        <FacilitiesSection/>
        <ScheduleSection/>
        <TestimonialSection/>
        <ContactSection/>

    </main>
    <footer>
        <div class="footer"
        style="display: flex; justify-content: center; width: 100%; align-items: center; gap: 1rem;">
                <p>Gym<span>Boy</span></p> | 
                <p>© 2021 GymBoy. All Rights Reserved</p>
        </div>
    </footer>
</template>


<style scoped>

</style>