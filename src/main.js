import Vue from 'vue';
import App from './App.vue';

//for Vuex Store
import { store } from './store'
 

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

import Axios from 'axios';
Vue.prototype.$http = Axios;

import DateRangePicker from '@gravitano/vue-date-range-picker';
Vue.use(DateRangePicker);

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

// jQuery
require('@/assets/vendor/jquery/jquery.min.js');

// bootstrap
import 'bootstrap';

// css
require('@/assets/vendor/nouislider/nouislider.css');
require('@/assets/vendor/magnific-popup/magnific-popup.css');
require('@/assets/css/style.default.css');
require('@/assets/css/custom.css');

// As a global method
// require('@/assets/vendor/object-fit-images/ofi.min.js');
// require('@/assets/vendor/magnific-popup/jquery.magnific-popup.min.js');
// require('@/assets/vendor/smooth-scroll/smooth-scroll.polyfills.min.js');

import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
