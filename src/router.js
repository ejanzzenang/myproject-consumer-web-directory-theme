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
      path: '/forgot',
      name: 'forgot',
      component: () => import('./views/ForgotPassword.vue'),
      props: true,
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: () => import('./views/Confirm.vue'),
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
          name: 'step1',
          component: () => import('./components/booking/Step1.vue'),
        },
        {
          path: 'step2',
          name: 'step2',
          component: () => import('./components/booking/Step2.vue'),
        },
        {
          path: 'payment',
          name: 'payment',
          component: () => import('./components/booking/Step3.vue'),
        },
        {
          path: 'confirmed',
          name: 'confirmed',
          component: () => import('./components/booking/Step4.vue'),
        },
      ],
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue'),
      children: [
        {
          path: 'step0',
          name: 'profile-step0',
          component: () => import('./components/profile/Step0.vue'),
        },
        {
          path: 'step1',
          name: 'profile-step1',
          component: () => import('./components/profile/Step1.vue'),
        },
        {
          path: 'step2',
          name: 'profile-step2',
          component: () => import('./components/profile/Step2.vue'),
        },
        {
          path: 'step3',
          name: 'profile-step3',
          component: () => import('./components/profile/Step3.vue'),
        },
        {
          path: 'step4',
          name: 'profile-step4',
          component: () => import('./components/profile/Step4.vue'),
        },
      ],
    },
    {
      path: '/profile/:user_id',
      name: 'user-profile',
      component: () => import('./components/profile/MyProfile.vue'),
      props: true,

    }
  ],
});
