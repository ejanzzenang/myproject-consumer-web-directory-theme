import Vue from 'vue'
import App from './App.vue'
import LoadScript from 'vue-plugin-load-script';
Vue.use(LoadScript);

// var mySwiper = new Swiper('.swiper-container', { /* ... */ });

// bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// css
require('@/assets/vendor/nouislider/nouislider.css')
require('@/assets/vendor/magnific-popup/magnific-popup.css')
require('@/assets/css/style.default.css')
require('@/assets/css/custom.css')
require('@/assets/img/favicon.png')

// As a global method

Vue.loadScript("https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.min.js")
.then(() => {
    require("@/assets/vendor/object-fit-images/ofi.min.js")
    require("@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js")
    require("@/assets/vendor/magnific-popup/jquery.magnific-popup.min.js")
    require("@/assets/vendor/smooth-scroll/smooth-scroll.polyfills.min.js")
    require("@/assets/vendor/bootstrap-select/js/bootstrap-select.min.js")
    require("@/assets/js/theme.js")
})
.then(() => {
    require("@/assets/vendor/jquery/jquery.min.js")
})
.catch(() => {
  // Failed to fetch script
});

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
