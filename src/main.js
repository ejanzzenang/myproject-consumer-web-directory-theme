import Vue from 'vue'
import App from './App.vue'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import 'bootstrap-select'
// import 'core-js'
// import 'jquery'
// import 'leaflet'
// import 'magnific-popup'
// import 'nouislider'
// import 'object-fit-images'
// import 'popper.js'
// import 'prismjs'
// import 'smooth-scroll'
// import 'swiper'

// import Bootstrap from 'bootstrap'
// import BootstrapSelect from 'bootstrap-select'
// import CoreJS from 'core-js'
// import jQuery from 'jquery'
// import Leaflet from 'leaflet'
// import Magnific from 'magnific-popup'
// import Nouslider from 'nouislider'
// import ObjectFit from 'object-fit-images'
// import Popper from 'popper.js'
// import Prism from 'prismjs'
// import SmoothScroll from 'smooth-scroll'
// import Swiper from 'swiper'

// Vue.use(Bootstrap)
// Vue.use(BootstrapSelect)
// Vue.use(CoreJS)
// Vue.use(jQuery)
// Vue.use(Leaflet)
// Vue.use(Magnific)
// Vue.use(Nouslider)
// Vue.use(ObjectFit)
// Vue.use(Prism)
// Vue.use(SmoothScroll)
// Vue.use(Swiper)


import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
