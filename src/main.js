import Vue from 'vue';
import App from './App.vue';

import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

import Axios from 'axios';
Vue.prototype.$http = Axios;

import DateRangePicker from '@gravitano/vue-date-range-picker';
Vue.use(DateRangePicker);


// jQuery
require('@/assets/vendor/jquery/jquery.min.js');

// bootstrap
import 'bootstrap';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// css
require('@/assets/vendor/nouislider/nouislider.css');
require('@/assets/vendor/magnific-popup/magnific-popup.css');
require('@/assets/css/style.default.css');
require('@/assets/css/custom.css');
require('@/assets/img/favicon.png');

// As a global method
require('@/assets/vendor/object-fit-images/ofi.min.js');
require('@/assets/vendor/magnific-popup/jquery.magnific-popup.min.js');
require('@/assets/vendor/smooth-scroll/smooth-scroll.polyfills.min.js');

import router from './router';

Vue.config.productionTip = false;

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    loggedIn: false,
  },
  mutations: {
    login(state){
      state.loggedIn = true;
    },
    logout(state){
      state.loggedIn = false;
    },
  },

});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
