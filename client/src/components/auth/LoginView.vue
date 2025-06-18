<template>
  <section class="login-page auth-page">
    <aside class="auth-panel">
      <!-- <img :src="img" alt="auth-img"> -->
      <h1>Log In Ka Page Hai</h1>
      <h3>Log in Karlo Kam Ayega !!!</h3>
    </aside>
    <aside class="auth-form">
      <form @submit="handleSubmit" method="post">
        <span class="shadow"></span>
        <span class="shadow"></span>

        <div className="selectionSection">
          <button
            type="button"
            @click="setUserType('member')"
            class="selection-btn"
            :class="{ active: userType === 'member' }"
          >
            Member
          </button>
          <button
            type="button"
            @click="setUserType('admin')"
            class="selection-btn"
            :class="{ active: userType === 'admin' }"
          >
            Admin
          </button>
        </div>
        <div class="input-box">
          <input type="email" name="email" placeholder="" required/>
          <label> Email </label>
          <MailIcon />
          <h5 className="verification"></h5>
        </div>
        <div class="input-box">
          <input type="password" name="password" placeholder=""  required/>
          <label> Password </label>
          <OpenEye />
          <h5 className="verification"></h5>
        </div>

        <button type="submit" class="submit-btn" ref="submit-btn">Log In</button>
        <div className="redirect_section mt-4">
          <h5>
            New Here?
            <span>
              <RouterLink to="/auth?type=register" style="text-decoration: none; color: inherit"
                >Sign In</RouterLink
              ></span
            >
          </h5>
        </div>
        <span class="shadow"></span>
      </form>
    </aside>
  </section>
</template>

<script setup lang="ts">
import {  ref } from "vue";

import OpenEye from "../icon/OpenEye.vue";
import { MailIcon } from "lucide-vue-next";
import { adminLogin, userLogin } from "@/services/auth";
import { axiosErrorHandler } from "@/api";
import { useRouter } from "vue-router";


type UserType = "member" | "admin";
const userType = ref<UserType>("member");
const setUserType = (type: UserType) => {
  userType.value = type;
};

const router = useRouter()

const handleSubmit = async (event: Event) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    alert("Please fill in all fields");
    return;
  }

  try {
    if (userType.value === "admin") {
      // Logic for admin login
      await adminLogin(email, password);
      localStorage.setItem("userRole", "admin");
    } else {
      await userLogin(email, password);
      localStorage.setItem("userRole", "member");
    }
    router.push("/dashboard");
  } catch (error) {
    axiosErrorHandler(error, "While Login");
  }
};
</script>

<style scoped>
.auth-page {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
  width: 100vw;
  perspective: 1000;
  > aside:nth-last-child(1) {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.auth-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  h1 {
    font-size: 3.5rem;
    color: var(--text-color);
    text-shadow: 0 0 10px #ffffff9b;
    font-family: "Mogen";
  }
  h3 {
    /* color: #e1e1e1a9;  */
    color: var(--color-border-hover);
    font-family: "TT_hover-regular", sans-serif;
  }
}

.auth-form {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  span.shadow {
    z-index: -1;
    position: absolute;
    top: 5%;
    left: -3%;
    box-shadow: 0 0 68px 56px #27ffebf5;

    &:nth-child(2) {
      top: 20%;
      left: unset;
      right: 0;
      box-shadow: 0 0 67px 59px #5b03fe9b;
    }
    &:nth-last-child(1) {
      bottom: 25px;
      top: unset;
      left: unset;
      right: 26px;
      box-shadow: 0 0 70px 63px #fb0be6ad;
    }
  }

  form {
    z-index: 1;
    margin-top: 8rem;
    width: 52%;
    aspect-ratio: 9/12;
    backdrop-filter: blur(3rem);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    justify-content: center;
    align-items: center;
    padding: 0 3rem;
    border-radius: 15px;

    background: #80808012;
    border: 1px solid #00000029;

    .selectionSection {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 1rem;
      margin-bottom: 2rem;
      .selection-btn {
        padding: 6px 20px;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 500;
        width: 44%;
        background: transparent;
        border: 1px solid #37353530;
      }
      .selection-btn.active {
        /* background: var(--color-highLight); */
        background-color: #e43a3a51;
        color: rgb(255, 34, 34);
        box-shadow: 0 0 10px 0px rgba(255, 255, 255, 0.08);
      }
    }

    .input-box {
      height: 3.6em;
      display: flex;
      /* background: var(--svg-bg-color); */
      background: transparent;
      position: relative;
      border: 2px solid #42424245;
      border-radius: 10px;
      transition: border-color 0.3s;
      align-items: center;
      padding: 0 1rem;
      width: 100%;

      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        background: transparent;
        font-size: 1.2rem;
        color: gray;

        &:not(:placeholder-shown) ~ label,
        &:focus-visible ~ label {
          background: #20222000;
          padding: 0 3px;
          color: #2b2b2b;

          backdrop-filter: blur(20px);
          transform: translate(10px, -26px) scale(0.9);
        }
      }

      label {
        position: absolute;
        color: rgb(176, 176, 176);

        transition: all 0.3s ease;
        pointer-events: none;
      }

      svg {
        width: 1.5rem;
        aspect-ratio: 1;
        filter: invert(0.5) saturate(0.32);
      }

      &:hover {
        border-color: #ffffff78;
      }

      h5.verification {
        position: absolute;
        bottom: -15px;
        width: 115%;
        font-size: 8px;
        color: #ff4d7ff5;
        letter-spacing: 3px;
      }

      h5#password {
        bottom: -26px;
      }
    }

    .submit-btn {
      width: 100%;
      background: var(--color-highLight);
      color: white;
      border: none;
      padding: 1rem;
      font-weight: 600;

      border-radius: 3rem;
      cursor: pointer;
      transition: all 0.3s;

      word-spacing: 4px;
    }

    .submit-btn:hover {
      background-color: #ff9494;
      color: rgb(255, 0, 0);
      text-shadow: 1px 1px 2px rgb(247, 247, 247);
      letter-spacing: 3px;
    }
  }
}

.redirect_section {
  color: var(--color-border);

  h5 span {
    position: relative;
    cursor: pointer;
    margin-left: 15px;
    padding-bottom: 5px;
    font-family: "Mogen";
    &::after {
      content: "";
      transition: width 0.3s ease-in-out;
      position: absolute;
      height: 2px;
      bottom: 0;
      left: 0;
      background: var(--color-highLight);
      width: 0%;
    }

    &:hover::after {
      width: 100%;
    }
  }
}

@media (prefers-color-scheme: dark) {
  .auth-form form {
    background: #dbd2d208;
    border: 1px solid #b1b1b130;

    .selectionSection .selection-btn {
      border: 1px solid #ffffff18;
    }

    .input-box {
      border-color: #ffffff45;
      input:not(:placeholder-shown) ~ label,
      input:focus-visible ~ label {
        color: white;
      }
    }
  }
  .auth-panel h1 {
    color: white;
  }

  .auth-page span.shadow {
    box-shadow: 0 0 68px 56px #009765f5;

    &:nth-child(2) {
      box-shadow: 0 0 67px 59px #005a8691;
    }

    &:nth-last-child(1) {
      box-shadow: 0 0 70px 63px #950088ad;
    }
  }
}
</style>
