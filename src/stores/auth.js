import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { api } from '@/api/axios';

export const useAuthStore = defineStore('auth', () => {
  const token = ref(null);
  const isAuthenticated = computed(() => (token.value ? true : false));

  function setToken(newToken) {
    token.value = newToken;
    localStorage.setItem('access_token', newToken);
    api.defaults.headers.common['Authorization'] = 'Bearer ' + newToken;
  }

  function clearToken() {
    token.value = null;
    localStorage.removeItem('access_token');
    api.defaults.headers.common['Authorization'] = null;
  }

  async function login(payload) {
    try {
      const { data } = await api.post('/auth/', payload);
      setToken(data.token);
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  }
  return {
    token,
    isAuthenticated,
    setToken,
    clearToken,
    login,
  };
});
