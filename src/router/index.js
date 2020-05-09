import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import VHome from '../components/VHome.vue';
import VServices from '../components/VServices.vue';
import VPortfolio from '../components/VPortfolio.vue';
import VAbout from '../components/VAbout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: VHome,
      },
      {
        path: '/services',
        name: 'Services',
        component: VServices,
      },
      {
        path: '/portfolio',
        name: 'Portfolio',
        component: VPortfolio,
      },
      {
        path: '/about',
        name: 'About',
        component: VAbout,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
