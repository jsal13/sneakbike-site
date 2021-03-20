import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ResourceMap from '../views/ResourceMap.vue';
import RunnerTroubleshooting from '../views/RunnerTroubleshooting.vue';
import RunnerSetup from '../views/RunnerSetup.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/resource-map',
    name: 'ResourceMap',
    component: ResourceMap,
  },
  {
    path: '/runner-troubleshooting',
    name: 'RunnerTroubleshooting',
    component: RunnerTroubleshooting,
  },
  {
    path: '/setup',
    name: 'RunnerSetup',
    component: RunnerSetup,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
