<template>
    <div class="card_bg member_row">
 <div class="member-item">
            <div style="display: flex; gap: 1rem; align-items: center;">
                <div class="user-img">
                <UserIcon style="width: 20px;" />
            </div>
            <div class="user-info font-tt-regular" style="display: flex; gap: 1rem; align-items: center;">
                <EditableInputs
              :value="userName"
              :onChange="updateUserName"
              displayAs="h1"
            />
                <EditableInputs
              value="sarah.j@example.com"
              :onChange="updateUserName"
              displayAs="h4"
            />
                <EditableInputs
              value="984045698345"
              :onChange="updateUserName"
              displayAs="p"
            />
               
            </div>
            </div>
            <div style="display: flex; gap: 1rem; align-items: center;"><div class="date">12/21/21</div>
            <span class="badge silver">
                Premium
            </span>
            <span class="badge clear">
                Clear
            </span></div>
        </div>

      <div style="display: flex; align-items: center; justify-content: end; gap:.5rem;">  <button class="button btn update">
          <SquarePen/>  update
        </button>
        <button class="button btn delete"> <CircleX />
delete        </button></div>
    </div>
</template>

<script setup lang="ts">
import UserIcon from '@/components/icon/UserIcon.vue';
import EditableInputs from './EditableInputs.vue';
import { DeleteIcon,CircleX ,SquarePen} from 'lucide-vue-next';
import { ref } from 'vue';
const userName = ref('Sarah Johnson');
const updateUserName = (newValue: string ) => {
  userName.value = newValue; // Update the ref with the new value
};

</script>

<style scoped>
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

.pro{
    color: #f7be55;
    border-color: #f7b955;
    background-color: #975b0036;
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
     background: var(--color-highLight);
    border-color: #ff2104;
}
.update{
   background-color: white;
    
    color: black;
}
</style>