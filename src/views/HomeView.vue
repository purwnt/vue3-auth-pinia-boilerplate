<template>
  <main>
    <div class="mt-40 text-center">
      <h2>Welcome to App</h2>
      <p>
        <RouterLink class="underline text-blue-500" to="/login"
          >Login</RouterLink
        >
        to continue
      </p>
      <p>{{ authStore.token }}</p>
      <p>{{ authStore.isAuthenticated }}</p>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
</script>
