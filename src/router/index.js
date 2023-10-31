import { createRouter, createWebHistory } from 'vue-router';

import MainPage from '@/pages/MainPage.vue';

const routes = [
   {
      path: '/',
      name: 'home',
      component: MainPage,
   },
   {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/AboutPage.vue'),
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
