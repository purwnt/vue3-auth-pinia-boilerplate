import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'AppLayoutHomepage',
      },
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/users/UsersView.vue'),
      meta: {
        layout: 'AppLayoutDashboard',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
  ],
});

export default router;
