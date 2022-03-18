<template>
  <header>
    <nav class="flex bg-blue-500 text-white py-3 px-3 text-sm">
      <RouterLink class="mx-2" to="/">Home</RouterLink>
      <RouterLink class="mx-2" to="/login">Login</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
