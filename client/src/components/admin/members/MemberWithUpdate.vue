<template>
    <div class="card_bg member_row">
 <div class="member-item">
            <div style="display: flex; gap: 1rem; align-items: center;">
                <div class="user-img">
                <UserIcon style="width: 20px;" />
            </div>
            <div class="user-info font-tt-regular" style="display: flex; gap: 2rem; align-items: center;">
                <EditableInputs
              :value="userName"
              :onChange="updateUserName"
              displayAs="h1"
            />
            <span class="flex-center">
<MailIcon style="width: 25px;"/>
              <EditableInputs
             
              :value="email"
              :onChange="updateEmail"
              displayAs="h4"
              />
            </span>
            <span class="flex-center">
<PhoneIcon style="width: 25px;"/>
                <EditableInputs
              :value="phone"
              :onChange="updatePhone"
              displayAs="p"
            />
            </span>

            </div>
            </div>
            <div style="display: flex; gap: 1rem; align-items: center;"><div class="date">{{joinDate  }}</div>
            <span class="badge" :class="packageClasses[packageName]">
              
                <EditableInputs
              value=""
              :selectedPackage="packageName"
              :onChange="updatePackage"
              type="select"
              displayAs="span"
            />
              
            </span>
            <span class="badge" :class="statusClasses[paymentStatus]">
                               {{ paymentStatus }}
            </span></div>
        </div>

      <div style="display: flex; align-items: center; justify-content: end; gap:.5rem;">  <button class="button btn update" :disabled="!isUpdating" >
          <SquarePen/>  update
        </button>
        <button class="button btn delete"> <CircleX />
delete        </button></div>
    </div>
</template>

<script setup lang="ts">
import UserIcon from '@/components/icon/UserIcon.vue';
import EditableInputs from './EditableInputs.vue';
import {PhoneIcon, MailIcon,CircleX ,SquarePen} from 'lucide-vue-next';


// classes

const packageClasses = {
  premium: 'silver',
  elite: 'pro',
  basic: 'basic',
};

const statusClasses = {
  Pending: 'pending',
  Clear: 'clear',
};

const {preUserName, preEmail,prePhone, prePackageName, prePaymentStatus ,joinDate} = defineProps<{
  preUserName: string;
  preEmail: string;
  prePhone: string;
  prePackageName: "premium" | "elite" | "basic";
  prePaymentStatus: "Pending" | "Clear";
  joinDate:string;
}>();

import { ref, watchEffect } from 'vue';
import { memberUpdate } from '@/services/admin';
import { axiosErrorHandler } from '@/api';
const userName = ref(preUserName);
const email = ref(preEmail);
const phone = ref(prePhone);
const packageName = ref<"premium" | "elite" | "basic">(prePackageName);
const paymentStatus = ref<"Pending"|"Clear">(prePaymentStatus);
const updateUserName = (newValue: string ) => {
  userName.value = newValue; 
};
const updateEmail = (newValue: string ) => {
  email.value = newValue;
};
const updatePhone = (newValue: string ) => {
  phone.value = newValue; 
};
const updatePackage = (newValue: string ) => {
  packageName.value = newValue as "premium" | "elite" | "basic"; 
};


const isUpdating = ref(false);

watchEffect(() => {
  // previous data and new data doesn't match then update true

  isUpdating.value = 
    userName.value !== preUserName ||
    email.value !== preEmail ||
    phone.value !== prePhone ||
    packageName.value !== prePackageName ||
    paymentStatus.value !== prePaymentStatus;
  
});


const updateDetails = async() =>{
  if (!isUpdating.value) return;
  try {
  await memberUpdate(userName.value, email.value, phone.value, packageName.value);
  } catch (error) {
    axiosErrorHandler(error, "Error updating member details");
  }
}

</script>

<style scoped>

.inline{
  display: inline;
}

.member_row{
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 2rem;
    padding: 0 1rem;
    &:not(:last-child) {
        margin-bottom: .8rem;
    }
}
.member-item {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
}
.user-info{
    color: white;
}
.user-img{
background-color: rgba(240, 248, 255, 0.189);
border:1px solid rgba(159, 157, 157, 0.467);
border-radius: 50%;
aspect-ratio: 1;
  width: 40px;

  display: flex;
    align-items: center;
    justify-content: center;
}

.badge{
    font-weight: 600;
    padding: 2px 14px;
    text-align: center;
    border-radius: 15px;
    color :black;
    border:1px solid transparent;
}

.pending{
  
  
  background-color: #00bf425c;
  color: #04ff5a;
  border-color: #04ff5a;
  
}
.clear{
   border-color: rgba(255, 255, 255, 0.249);
  background: #bdbdbd24;
  color: rgb(206, 205, 205);
}
.pro{
    color: #f7be55;
    border-color: #f7b955;
    background-color: #975b0036;
}

.basic{
    color: #75aaff;
    border-color: #0061ff;
    background-color: #005f9336;
}

.silver{
    color: #9e9e9e;
    border-color: #9e9e9e;
    background-color: #f5f5f5;
}



button{

    margin: 0;
    padding: 0.2rem 1rem;
}
.btn{
   
    /* border-radius: 0.375rem; */
    font-weight: 500;
    /* font-size: 1rem; */
    cursor: pointer;
    display: flex;
    align-items: center;
    gap:.2rem;
    justify-content: space-between;
  svg{
    width: 20px;
  }
}

.delete{
    color: var(--color-highLight);
    border-color: var(--color-highLight);
    background-color: rgba(68, 17, 10, 0.196);
}
.update{
  background-color: white;
  color: black;
}
.update:disabled{
  background-color: #aeaeae8c;
  color: #111111a3;
  border: none;
}
</style>