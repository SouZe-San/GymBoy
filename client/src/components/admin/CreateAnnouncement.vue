<template>
    <section class="modal-bg">

        <form @submit="handleSubmit" method="post">
            <div class="modal-content card_bg">
                <h2>New Announcement</h2>
             
 <div class="input-box" style="margin: 1rem 0;">
       
                <input type="text" name="title"
              placeholder="" />
                <label>
                Title 
                </label>
               
        
        </div> 
 <div class="input-box" style="margin: 1rem 0;">
       
                <input type="text" name="description"
              placeholder="" />
                <label>
                Description 
                </label>
              
        
        </div> 

        <div class="input-box" >
       
            <select id="role" name="type" required>
                <option value="">type</option>
                <option value="general">General</option>
                <option value="event">Event</option>
                <option value="important">Important</option>
            </select>
        </div>

                <button type="submit" class="submit-btn" style="margin-top: 2rem; margin-bottom: .6rem;">Send</button>

                <button class="submit-btn cancel-btn" @click="toggle">Cancel</button>
            </div>
        </form>

    </section>
</template>

<script setup lang="ts">
import { axiosErrorHandler } from '@/api';
import { announcementCreate } from '@/services/admin';


defineProps<{
  toggle: () => void;
}>()

const handleSubmit = async  (event: Event) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const type = formData.get('type') as string;

  // Perform login logic here
try {
    await announcementCreate(title, description, type);
} catch (error) {
    axiosErrorHandler(error, "Error creating announcement");
}

};


</script>

<style scoped>
.modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.816);
    z-index: 1000;
    display: flex;
    justify-content: center;  
    align-items: center;

}

.modal-content{
    background-color: rgba(73, 73, 73, 0.552);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 400px;
}  
   .input-box {

                height: 3.3em;
                display: flex;
                /* background: var(--svg-bg-color); */
                background:  transparent;
                position: relative;
                border: 2px solid #cbcbcb45;
                border-radius: 10px;
                transition: border-color 0.3s;
                align-items: center;
                padding: 0 1rem;
                width: 100%;
        
                input,select{
                    width: 100%;
                    height: 100%;
                    border: none;
                    outline: none;
                    background: transparent;
                    font-size: 1.2rem;
                    color: gray;

                    
                    &:not(:placeholder-shown)~label,
                    &:focus-visible~label {
                      
              
                        background: #20222000;
                        padding: 0 3px;
                          color: #c9c9c9;
                    
                        backdrop-filter: blur(20px);
                        transform: translate(10px, -26px) scale(.9);
                    }
                }

               option{
                background: #7d7d7da5;
                color:black;
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
                    filter: invert(.5) saturate(.32);
                   

                }

                &:hover {
                    border-color: #ffffff78;
                }


           
            }

.submit-btn {
    width: 100%;
                background: var(--color-highLight);
                color: white;
                border: none;
                padding: .8rem 1rem;
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

.cancel-btn{
    background: transparent;
    border:1px solid var(--color-highLight);
}
</style>