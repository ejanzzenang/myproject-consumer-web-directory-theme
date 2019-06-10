<template>
  <div id="app">
    <div class="show-nav" v-if="!['signup', 'login'].includes(this.$route.name)">
      <Navigation/>
      <div class="navbar-margin"></div>
    </div>
    <router-view/>
    <Footer v-if="!['signup', 'login'].includes(this.$route.name)"/>
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

