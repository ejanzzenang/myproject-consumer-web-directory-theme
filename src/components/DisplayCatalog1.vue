<template>
	<div class="display-catalog-1">
    <section class="py-6 bg-white">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-8">
            <p class="subtitle text-primary">Stay and eat like a local</p>
            <h2>Our guides</h2>
          </div>
          <div class="col-md-4 d-lg-flex align-items-center justify-content-end"><a href="category.html" class="text-muted text-sm">
               
              See all guides<i class="fas fa-angle-double-right ml-2"></i></a></div>
        </div>
        <div class="row">
          <swiper v-bind:options="swiperOption" class="guides-slider">
              <swiper-slide class="h-auto px-2">
                <div class="card card-poster gradient-overlay mb-4 mb-lg-0"><a href="category.html" class="tile-link"></a><img src="../assets/img/photo/new-york.jpg" alt="Card image" class="bg-image">
                  <div class="card-body overlay-content">
                    <h6 class="card-title text-shadow text-uppercase">New York</h6>
                    <p class="card-text text-sm">The big apple</p>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="h-auto px-2">
                <div class="card card-poster gradient-overlay mb-4 mb-lg-0"><a href="category.html" class="tile-link"></a><img src="../assets/img/photo/paris.jpg" alt="Card image" class="bg-image">
                  <div class="card-body overlay-content">
                    <h6 class="card-title text-shadow text-uppercase">Paris</h6>
                    <p class="card-text text-sm">Artist capital of Europe</p>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="h-auto px-2">
                <div class="card card-poster gradient-overlay mb-4 mb-lg-0"><a href="category.html" class="tile-link"></a><img src="../assets/img/photo/barcelona.jpg" alt="Card image" class="bg-image">
                  <div class="card-body overlay-content">
                    <h6 class="card-title text-shadow text-uppercase">Barcelona</h6>
                    <p class="card-text text-sm">Dalí, Gaudí, Barrio Gotico</p>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="h-auto px-2">
                <div class="card card-poster gradient-overlay mb-4 mb-lg-0"><a href="category.html" class="tile-link"></a><img src="../assets/img/photo/prague.jpg" alt="Card image" class="bg-image">
                  <div class="card-body overlay-content">
                    <h6 class="card-title text-shadow text-uppercase">Prague</h6>
                    <p class="card-text text-sm">City of hundred towers</p>
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
          slidesPerView: 7,
          spaceBetween: 20,
          loop: true
        }
      }
    }
  }
</script>

