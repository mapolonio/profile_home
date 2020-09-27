import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '@/views/NotFound';
import UnderConstruction from '@/views/UnderConstruction';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: 'under-construction', name: 'home' },
  {
    path: '/under-construction',
    name: 'under-construction',
    component: UnderConstruction
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
