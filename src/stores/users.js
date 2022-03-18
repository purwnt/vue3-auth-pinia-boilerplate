import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '@/api/axios';

export const useUsersStore = defineStore('users', () => {
  const users = ref(null);

  async function fetchUsers() {
    const { data } = await api.get('/api/users/');
    users.value = data;
  }

  return {
    users,
    fetchUsers,
  };
});
