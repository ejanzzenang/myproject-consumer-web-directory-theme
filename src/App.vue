<template>
  <div id="app">
    <Navigation/>
    <div class="navbar-margin"></div>
    <router-view/>
  </div>
</template>

<script type="text/javascript">
  // @ is an alias to /src
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'home',
  components: {
    Navigation
  }
}
</script>


<style type="text/css">
  #app {
    /*text-align: center;*/
  }
  .navbar-margin {
    margin-bottom: 50px;
  }

  /*extra css*/
  @import "https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700";
  @import "https://fonts.googleapis.com/css?family=Poppins:300,400,400i,700";
  @import "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css";
  @import "https://use.fontawesome.com/releases/v5.8.1/css/all.css";

</style>

