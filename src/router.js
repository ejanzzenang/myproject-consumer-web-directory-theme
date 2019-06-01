import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/signup',
      name: 'sigup',
      component: () => import('./views/SignUp.vue')
    },
    {
      path: '/booking',
      name: 'booking',
      component: () => import('./views/Booking.vue'),
      children: [
      {
        path: '',
        component: () => import('./components/booking/Step1.vue'),
      },
      {
        path: 'step2',
        component: () => import('./components/booking/Step2.vue'),
      },
      {
        path: 'step3',
        component: () => import('./components/booking/Step3.vue'),
      },
      {
        path: 'step4',
        component: () => import('./components/booking/Step4.vue'),
      }
      ]
    },

  ]
})
