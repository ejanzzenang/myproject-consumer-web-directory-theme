import Vue from 'vue';
import App from './App.vue';

// for Vue Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

// jQuery
require('@/assets/vendor/jquery/jquery.min.js');

// bootstrap
import 'bootstrap';

// css
require('@/assets/vendor/nouislider/nouislider.css');
require('@/assets/vendor/magnific-popup/magnific-popup.css');
require('@/assets/css/style.default.css');
require('@/assets/css/custom.css');

// import css for vue-select
import 'vue-select/dist/vue-select.css';

// for Vuex Store
import { store } from './store';

// for Axios
import Axios from 'axios';
Vue.prototype.$http = Axios;

// for Validation
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);


import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
