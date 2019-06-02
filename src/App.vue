<template>
  <div id="app">
    <Navigation/>
    <div class="navbar-margin"></div>
    <router-view/>
    <Footer/>

  </div>
</template>

<script type="text/javascript">
  // @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Navigation,
    Footer
  }
}

</script>
<style type="text/css">
  .navbar-margin {
    margin-bottom: 70px;
  }

  /*extra css*/
  @import "https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700";
  @import "https://fonts.googleapis.com/css?family=Poppins:300,400,400i,700";
  @import "https://use.fontawesome.com/releases/v5.8.1/css/all.css";

</style>

