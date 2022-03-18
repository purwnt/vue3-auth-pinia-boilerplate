import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.defaults.headers.common['Authorization'] = null;

export { api };
