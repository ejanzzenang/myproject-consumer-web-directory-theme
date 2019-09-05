<template>
	<div class="testimonials">
    <section class="py-7">
      <div class="container">
        <div class="text-center">
          <p class="subtitle text-primary">Testimonials</p>
          <h2 class="mb-5">Our dear customers said about us</h2>
        </div>
        <swiper v-bind:options="swiperOption" class="testimonials-slider testimonials">
            <swiper-slide class="px-3">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="../assets/img/avatar/avatar-1.jpg" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">Amazing travel experience. Hassle free. Great service.</p><strong>Jessica Watson</strong>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="px-3">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="../assets/img/avatar/avatar-2.jpg" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">Strongly recommended. Would definitely book tours again.</p><strong>John Smith</strong>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="px-3">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="../assets/img/avatar/avatar-3.jpg" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">Enjoyable experience. There are plenty of activites to choose from.</p><strong>Emily Dickson</strong>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="px-3">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="../assets/img/avatar/avatar-4.jpg" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">Hassle free booking. What you see is what you get. I would highly recommend!</p><strong>James Apples</strong>
                </div>
              </div>
            </swiper-slide>
          <div class="swiper-pagination"></div>
        </swiper>
      </div>
    </section>
	</div>
</template>

<script scoped>
    export default {
    data() {
      return {
        swiperOption:  {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        roundLengths: true,
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            565: {
                slidesPerView: 1
            }
        },
          // If we need pagination
          pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true
          },
      }
      }
    }
  }
</script>