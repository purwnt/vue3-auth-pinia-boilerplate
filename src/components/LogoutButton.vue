<template>
  <button @click="logout">
    <slot></slot>
  </button>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

defineProps({
  title: String,
});

const authStore = useAuthStore();
const router = useRouter();

function logout() {
  authStore.clearToken();
  router.push('/login');
}
</script>
