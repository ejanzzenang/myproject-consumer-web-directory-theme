import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/SignUp.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('./views/Products.vue'),
    },
    {
      path: '/products/:product_id',
      name: 'product_detail',
      component: () => import('./components/products/ProductDetail.vue'),
      props: true,

    },
    {
      path: '/booking',
      name: 'booking',
      component: () => import('./views/Booking.vue'),
      children: [
        {
          path: 'step1',
          component: () => import('./components/booking/Step1.vue'),
        },
        {
          path: 'step2',
          component: () => import('./components/booking/Step2.vue'),
        },
        {
          path: 'payment',
          component: () => import('./components/booking/Step3.vue'),
        },
        {
          path: 'confirmed',
          component: () => import('./components/booking/Step4.vue'),
        },
      ],
    },
  ],
});
