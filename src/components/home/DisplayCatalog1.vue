<template>
	<div class="display-catalog-1">
    <section class="py-6 bg-white">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-8">
            <p class="subtitle text-primary">Stay and eat like a local</p>
            <h2>Our guides</h2>
          </div>
        </div>
        <div class="row">
          <swiper v-bind:options="swiperOption" class="guides-slider">
              <swiper-slide class="h-auto px-2" v-for="city in cities" v-bind:key="city.name">
                <div class="card card-poster gradient-overlay mb-4 mb-lg-0"><a v-bind:href="city.url_route" class="tile-link"></a>
                  <img v-bind:src="city.image_url" v-bind:alt="city.name" class="bg-image">
                  <!-- <img src="../assets/img/photo/coron.jpg" class="bg-image"> -->
                  <div class="card-body overlay-content">
                    <h6 class="card-title text-shadow text-uppercase">{{city.name}}</h6>
                    <p class="card-text text-sm">{{city.description}}</p>
                  </div>
                </div>
              </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
  </div>
</template>

<script scoped>

  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 5,
          spaceBetween: 15,
          loop: true
        },
        cities: [
          {
            "name" : "Boracay",
            "image_url" :  require('../../assets/img/photo/boracay.jpg'),
            "description" : "Boracay is ..",
            "url_route": "/products" 
          },
          {
            "name" : "Panglaw",
            "image_url" : require('../../assets/img/photo/panglaw.jpg'),
            "description" : "Panglaw is ..",
            "url_route": "#"  
          },
          {
            "name" : "Palawan",
            "image_url" : require('../../assets/img/photo/coron.jpg'),
            "description" : "Palawan is ..",
            "url_route": "#"  
          },
          {
            "name" : "Batanes",
            "image_url" : require('../../assets/img/photo/batanes.jpg'),
            "description" : "Batanes is ..",
            "url_route": "#"  
          },
          {
            "name" : "Bohol",
            "image_url" : require('../../assets/img/photo/bohol.jpg'),
            "description" : "Bohol is ..",
            "url_route": "#" 
          }
        ]
      }
    }
  }
</script>

