<template>
	<div class="testimonials">
    <section class="py-7">
      <div class="container">
        <div class="text-center">
          <p class="subtitle text-primary">Testimonials</p>
          <h2 class="mb-5">Our dear customers said about us</h2>
        </div>
        <!-- Slider main container-->
        <swiper :options="swiperOption" class="testimonials-slider testimonials">
          <!-- Additional required wrapper-->
            <!-- Slides-->
            <swiper-slide class="px-3">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="../assets/img/avatar/avatar-3.jpg" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="px-3">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="../assets/img/avatar/avatar-3.jpg" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="px-3">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="../assets/img/avatar/avatar-3.jpg" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="px-3">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="../assets/img/avatar/avatar-3.jpg" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="px-3">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="../assets/img/avatar/avatar-3.jpg" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="px-3">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="../assets/img/avatar/avatar-3.jpg" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
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
        swiperOption: {
          slidesPerView: 2,
          spaceBetween: 20,
          roundLengths :true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
          },
          loop: true,
          breakpoints: {  
             1200 :{  
               slidesPerView: 3
            },
             991 :{  
              slidesPerView : 2
            },
             565 :{  
              slidesPerView :1
            }
         },
        }
      }
    }
  }
</script>