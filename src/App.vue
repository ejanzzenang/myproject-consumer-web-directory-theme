<template>
  <div id="app">
    <Navigation/>
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
    text-align: center;
  }



</style>