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
                <div class="card card-poster gradient-overlay mb-4 mb-lg-0"><a href="category.html" class="tile-link"></a><img v-bind:src="city.image_url" v-bind:alt="city.name" class="bg-image">
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
          slidesPerView: 6,
          spaceBetween: 15,
          loop: true
        },
        cities: [
          {
            "name" : "Boracay",
            "image_url" : "https://via.placeholder.com/600X900",
            "description" : "Boracay is .." 
          },
          {
            "name" : "Baguio",
            "image_url" : "https://via.placeholder.com/600X900",
            "description" : "Baguio is .." 
          },
          {
            "name" : "Coron",
            "image_url" : "https://via.placeholder.com/600X900",
            "description" : "Coron is .." 
          },
          {
            "name" : "Tagaytay",
            "image_url" : "https://via.placeholder.com/600X900",
            "description" : "Tagaytay is .." 
          },
          {
            "name" : "La Union",
            "image_url" : "https://via.placeholder.com/600X900",
            "description" : "La Union is .." 
          }
        ]
      }
    }
  }
</script>

