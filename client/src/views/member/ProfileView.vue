<template>
  <section class="inDashboard">
    <div class="profile-container">
      <!-- Header -->
      <div class="profile-header">
        <div class="header-content">
          <h1 class="profile-title font-mogen">Profile</h1>
          <p class="profile-description">
            Manage your account information and membership details.
          </p>
        </div>
        <button class="edit-button" @click="toggleEditMode">
          <span class="icon">✏️</span>
          {{ isEditing ? 'Save Changes' : 'Edit Profile' }}
        </button>
      </div>

      <!-- Main Content Grid -->
      <div class="content-grid">
        <!-- Personal Information Card -->
        <div class="info-card main-card card_bg">
          <div class="card-header">
            <h2 class="title">Personal Information</h2>
            <p class="card-description">Update your personal details here</p>
          </div>
          <div class="card-content">
            <div class="form-row">
              <div class="form-group">
                <label for="firstName" class="form-label">First Name</label>
                <input 
                  id="firstName" 
                  v-model="userInfo.firstName" 
                  :readonly="!isEditing"
                  class="form-input"
                  :class="{ 'editable': isEditing }"
                />
              </div>
              <div class="form-group">
                <label for="lastName" class="form-label">Last Name</label>
                <input 
                  id="lastName" 
                  v-model="userInfo.lastName" 
                  :readonly="!isEditing"
                  class="form-input"
                  :class="{ 'editable': isEditing }"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="email" class="form-label">Email</label>
              <input 
                id="email" 
                v-model="userInfo.email" 
                :readonly="!isEditing"
                class="form-input"
                :class="{ 'editable': isEditing }"
                type="email"
              />
            </div>
            <div class="form-group">
              <label for="phone" class="form-label">Phone Number</label>
              <input 
                id="phone" 
                v-model="userInfo.phone" 
                :readonly="!isEditing"
                class="form-input"
                :class="{ 'editable': isEditing }"
                type="tel"
              />
            </div>
            <div class="form-group">
              <label for="address" class="form-label">Address</label>
              <input 
                id="address" 
                v-model="userInfo.address" 
                :readonly="!isEditing"
                class="form-input"
                :class="{ 'editable': isEditing }"
              />
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="sidebar">
          <!-- Profile Avatar Card -->
          <div class="info-card avatar-card card_bg" style="padding: 1rem;">
            <div class="avatar-section">
              <div class="avatar">
                <span class="avatar-initials">{{ userInitials }}</span>
              </div>
              <h3 class="user-name">{{ userInfo.firstName }} {{ userInfo.lastName }}</h3>
              <p class="user-type">Premium Member</p>
            </div>
            <div class="contact-info">
              <div class="contact-item">
                <span class="contact-icon">📧</span>
                <span class="contact-text">{{ userInfo.email }}</span>
              </div>
              <div class="contact-item">
                <span class="contact-icon">📞</span>
                <span class="contact-text">{{ userInfo.phone }}</span>
              </div>
              <div class="contact-item">
                <span class="contact-icon">📅</span>
                <span class="contact-text">Member since {{ memberSince }}</span>
              </div>
            </div>
          </div>

          <!-- Membership Status Card -->
          <div class="info-card membership-card card_bg">
            <div class="card-header">
              <h3 class="title">Membership Status</h3>
            </div>
            <div class="card-content">
              <div class="status-item">
                <span class="status-label">Plan</span>
                <span class="badge premium-badge">Premium</span>
              </div>
              <div class="status-item">
                <span class="status-label">Status</span>
                <span class="badge active-badge">Active</span>
              </div>
              <div class="status-item">
                <span class="status-label">Expires</span>
                <span class="status-value">{{ membershipExpiry }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Reactive user information
const userInfo = ref({
  firstName: 'Emily',
  lastName: 'Davis',
  email: 'emily.d@example.com',
  phone: '+91 23456789',
  address: '123 Main St, City, State 12345'
})

// Edit mode state
const isEditing = ref(false)

// Computed properties
const userInitials = computed(() => {
  return `${userInfo.value.firstName.charAt(0)}${userInfo.value.lastName.charAt(0)}`
})

const memberSince = ref('Jan 2023')
const membershipExpiry = ref('May 15, 2025')

// Methods
const toggleEditMode = () => {
  if (isEditing.value) {
    // Save changes logic here
    console.log('Saving changes...', userInfo.value)
  }
  isEditing.value = !isEditing.value
}
</script>

<style scoped>

.profile-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.profile-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 768px) {
  .profile-header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.header-content h1.profile-title {
  font-size: 4rem;
  line-height: .9;
  font-weight: bold;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
}

.profile-description {
  color: #e2e2e2;
  line-height: 1;
  margin: 0;
}

.edit-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #ff1e1ef9;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.edit-button:hover {
  background-color: #901928;
}

.icon {
  font-size: 1rem;
}

.content-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

@media (min-width: 1024px) {
  .content-grid {
    grid-template-columns: 2fr 1fr;
  }
}

.info-card {
 
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  
}

.card-header {
  padding: 1.5rem 1.5rem 0;
}

.title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
}

.card-description {
  color: #acacac;
  margin: 0;
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #d9d9d9;
}

.form-input {
  padding: 0.75rem;
  border: 1px solid #d1d5db81;
  border-radius: 0.5rem;
  background-color: #b4b4b44d;
  color: #ffffff;
  transition: all 0.2s;
}

.form-input.editable {
  background-color: white;
  border-color: #f1f1f1;
}

.form-input:focus {
  outline: none;
  border-color: #dadada;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.avatar-card .card-header {
  text-align: center;
  padding: 1.5rem;
}

.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.avatar {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #1919193b;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
}

.user-name {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1;
  color: #ffffff;
  margin: 0;
}

.user-type {
    line-height: .8;
  color: #d6d6d6;
  margin: 0;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-icon {
  font-size: 1rem;
  color: #6b7280;
}

.contact-text {
  font-size: 0.875rem;
  color: #d9d9d9;
}

.membership-card .card-content {
  gap: 0.75rem;
}

.status-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.status-label {
  font-size: 0.875rem;
  color: #c0c0c0;
}

.status-value {
  font-size: 0.875rem;
  font-weight: 500;
  color: #666666;
}

.badge {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.premium-badge {
  background-color: #f63b51;
  color: white;
}

.active-badge {
  background-color: #dcfce7;
  color: #166534;
  border: 1px solid #bbf7d0;
}
@media (max-width: 768px) {
  .profile-container {
    margin-bottom: 8rem;
  }
}
</style>