<template>
  <header>
    <nav class="flex bg-red-500 text-white py-3 px-3 text-sm items-center">
      <p class="mr-5 text-xl">Welcome to Dashboard</p>
      <RouterLink class="mx-2" to="/users">Users</RouterLink>
      <LogoutButton>Logout</LogoutButton>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import LogoutButton from '@/components/LogoutButton.vue';
</script>
