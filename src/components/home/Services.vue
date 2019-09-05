<template>
    <div class="services">
     <section class="py-6 bg-gray-100">
      <div class="container">
        <div class="text-center pb-lg-4">
          <p class="subtitle text-secondary">Choose from a variety of services</p>
          <h2 class="mb-5">Available Services</h2>
        </div>
        <div class="row">
          <div class="col-lg-4 mb-4 mb-lg-0 text-center" v-for="service in services" v-bind:key="service.id">
            <div class="px-0 px-lg-4 icon-box">
              <div class="icon-rounded bg-primary-light mb-4">
                <svg class="svg-icon text-primary w-2rem h-2rem">
                  <use v-bind:xlink:href="service.icon"></use>
                </svg>
              </div>
              <h3 class="h5">{{service.name}}</h3>
            </div>
          </div>
        </div>
        <div style="margin-top:5%"></div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
  name: 'services',
  data(){
    return {
      services: [
        { 
          "id" : 1,
          "name": "Activities",
          "icon": "#beach-1"
        },
        { 
          "id" : 2,
          "name": "Accommodations",
          "icon": "#real-estate-1"
        },
        {
          "id" : 3,
          "name": "Eats",
          "icon": "#dinner-1"
        },
        {
          "id" : 4,
          "name": "Local Transport",
          "icon": "#bus-1"
        },
        {
          "id" : 5,
          "name": "Airport Transfer",
          "icon": "#airplane-mode-1"
        },
        {
          "id" : 6,
          "name": "Wifi + Data Packages",
          "icon": "#world-map-1"
        },
        {
          "id" : 7,
          "name": "Insurance",
          "icon": "#shield-security-1"
        },
        {
          "id" : 8,
          "name": "Payments",
          "icon": "#pay-1"
        },
        {
          "id" : 9,
          "name": "Emergency",
          "icon": "#medical-emergency-1"
        }
      ]
    }
  },
  methods: {
  }  
} 
</script>
<style scoped>
  .icon-box {
    padding:2rem;

  }



</style>
