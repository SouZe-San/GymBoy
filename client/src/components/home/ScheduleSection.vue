<template>
    <section class="under-section membership-section">
      <div class="container">
        <h2 class="section-title">Membership Plans</h2>
        <p class="section-subtitle">Choose the plan that fits your lifestyle and fitness goals</p>
        
        <div class="plans-container">
          <div class="plan-card">
            <div class="plan-header">
              <h3 class="plan-name">Basic</h3>
              <div class="plan-price">$29<span>/month</span></div>
            </div>
            <ul class="plan-features">
              <li>Access to gym facilities</li>
              <li>Basic fitness assessment</li>
              <li>2 group classes per week</li>
              <li>Locker room access</li>
            </ul>
            <button class="plan-btn">Get Started</button>
          </div>
          
          <div class="plan-card featured">
            <div class="plan-badge">Most Popular</div>
            <div class="plan-header">
              <h3 class="plan-name">Premium</h3>
              <div class="plan-price">$49<span>/month</span></div>
            </div>
            <ul class="plan-features">
              <li>Unlimited gym access</li>
              <li>Comprehensive fitness assessment</li>
              <li>Unlimited group classes</li>
              <li>1 personal training session/month</li>
              <li>Nutrition consultation</li>
            </ul>
            <button class="plan-btn">Get Started</button>
          </div>
          
          <div class="plan-card">
            <div class="plan-header">
              <h3 class="plan-name">Elite</h3>
              <div class="plan-price">$79<span>/month</span></div>
            </div>
            <ul class="plan-features">
              <li>24/7 gym access</li>
              <li>Advanced fitness assessment</li>
              <li>Unlimited group classes</li>
              <li>4 personal training sessions/month</li>
              <li>Custom nutrition plan</li>
              <li>Recovery zone access</li>
            </ul>
            <button class="plan-btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

/* Membership Section */
.membership-section {
  /* background-color: #0a0a0a; */
  padding: 5rem 0;

  h2,p{text-align:center;}
  .section-title{
    font-size: 4.5rem;
    color: var(--nav-btn-bg);
    font-family: 'Mogen';
    
  }
}

.plans-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5rem;
  padding: 0px 5rem;
  margin-top: 3rem;
}

.plan-card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 30px;
  padding: 2rem;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
}

.plan-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(255, 51, 51, 0.2);
}

.plan-card.featured {
  border: 2px solid #ff3333;
  transform: scale(1.05);
}

.plan-card.featured:hover {
  transform: scale(1.05) translateY(-10px);
}

.plan-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-highLight);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.8rem;
}

.plan-header {
  text-align: center;
  margin-bottom: 2rem;
}

.plan-name {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.plan-price {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ff3333;
}

.plan-price span {
  font-size: 1rem;
  color: #ccc;
}

.plan-features {
  list-style-type: none;
  padding: 0;
  margin-bottom: 2rem;
}

.plan-features li {
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #ddd;
}

.plan-features li:last-child {
  border-bottom: none;
}

.plan-btn {
  width: 100%;
  background: var(--color-highLight);
  color: white;
  border: none;
  padding: 1rem;
  font-weight: bold;
  border-radius: 3rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.plan-btn:hover {
  background-color: #e62e2e;
}

@media (prefers-color-scheme:light) {
  .plan-card{
    /* background-: var(--svg-bg-color); */
    background-color: rgba(136, 136, 136, 0.08);
    backdrop-filter: blur(2rem);
    border: 1px solid #57575716;
    color: #000;

}
.plan-name{
  color: #000;
}

.plan-features li{
  color: #000;  
}
}
</style>