import { createRouter, createWebHistory } from 'vue-router';
import TeaList from '../pages/tea/TeaList.vue';

const routes = [
  { path: '/', component: TeaList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
