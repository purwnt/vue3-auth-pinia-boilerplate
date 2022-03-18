<template>
  <div>
    <h1>This is users page</h1>
    <p>{{ usersStore.users }}</p>
  </div>
</template>

<script setup>
import { useUsersStore } from '@/stores/users';
import { onMounted } from '@vue/runtime-core';

const usersStore = useUsersStore();

onMounted(() => {
  usersStore.fetchUsers();
});
</script>
