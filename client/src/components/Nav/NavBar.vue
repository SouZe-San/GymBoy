<template>
<header>
    <div class="auth-button nav-btn" style="position: relative; gap: 3rem;">
      <span></span>
      <p>
        <RouterLink to="/auth?type=login" style="text-decoration: none; color: inherit;">
        Log In</RouterLink>
      </p>
      <p class="hightLightText">
         <RouterLink to="/auth?type=register" style="text-decoration: none; color: inherit;">
        Sign Up</RouterLink>
      </p>
    </div>
      <NavPanel :is-open="isOpen"/>

      <div class="menu-button nav-btn" :style="{borderColor:colorObj.bg, color:colorObj.bg}"
      @click="toggleNav"
      aria-label="Toggle navigation">
<span :style="{
  background:colorObj.bg,
  
}"></span>
          <MenuIcon :is-open="isOpen"/>
        <p class="hightLightText" :style="{color:colorObj.color}"> {{ isOpen ? "Close" : "Menu" }}</p>
      </div>
</header>
</template>

<script setup lang="ts">
import { ref, watchEffect,watch } from 'vue';
import MenuIcon from '../icon/MenuIcon.vue';
import NavPanel from './NavPanel.vue';
import { useThemeStore } from '@/stores/theme';
import { useRouter,RouterLink } from 'vue-router';


const isOpen = ref(false)

const toggleNav = () => {
  isOpen.value = !isOpen.value
}

const themeStore = useThemeStore();


const colorObj = ref<{bg:string;color:string}>({
  bg:"#ffffff",
  color:"#0c0c0c"
})
const router = useRouter()


const path = router.currentRoute.value.path
watchEffect(()=>{
  if(!themeStore.isDark){

  if(path === "/"){

      window.addEventListener('scroll', () => {
            if ( window.scrollY >= (window.innerHeight - 20)) {
              
                colorObj.value.bg = "#0c0c0c";
                colorObj.value.color = "#ffffff";
                }
                else{
                  colorObj.value.bg = "#ffffff";
                  colorObj.value.color = "#0c0c0c";
                }
          }); 
    }
  else{
    colorObj.value.bg = "#0c0c0c";
    colorObj.value.color = "#ffffff";
  }

}
})


watchEffect(()=>{

    if(isOpen.value){
    document.body.style.overflow = "hidden";
  }
  else{
    document.body.style.overflow = "auto";
  }

})

  
</script>


<style scoped>

header {
  /* line-height: 1.5; */
  position: fixed;
  width: 100%;
  height: var(--nav-height);
  padding: 0 6rem;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 1rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.nav-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  border-radius: 7rem;

  border: 1.6px solid var(--nav-btn-bg);
  overflow: hidden;
  background: transparent;
  backdrop-filter: blur(4px);

  p{
    position: relative;
    z-index: 1;
   
  }

  span{
    position: absolute;
    width: 50%;
    height: 100%;
    background: var(--nav-btn-bg);
    z-index: 0;
    right: 0;
    border-radius: inherit;
    cursor: pointer;
  }


.hightLightText{
     color:var(--color-background);
  }
}


.auth-button{
  /* padding: 0.5rem 1rem; */
  padding:1rem 1.3rem;
}

.menu-button{
  cursor: pointer;
  position: relative;
  padding: 0.7rem 1.4rem;
  width: 10rem;
  z-index: 100;
  transition: all 0.3s ease;
}

.menu-button span{
  width: 60%;
  }

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

</style>