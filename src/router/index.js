import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/pages/Home.vue';
import About from '../components/pages/About.vue';
import NotFound from '../components/pages/NotFound.vue';

export const router = createRouter({
  history:createWebHistory(),
  routes:[
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/:pathMatch(.*)*', component: NotFound}
  ]
});