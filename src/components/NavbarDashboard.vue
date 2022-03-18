<template>
  <header>
    <nav class="flex bg-blue-500 text-white py-3 px-3 text-sm">
      <RouterLink class="mx-2" to="/users">Users</RouterLink>
      <button class="mx-2">Logout</button>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
