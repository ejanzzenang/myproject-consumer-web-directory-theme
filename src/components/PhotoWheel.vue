<template>
    <section>
      <div class="container-fluid px-0">
        <div class="instagram-slider">
        <swiper v-bind:options="swiperOption">
            <swiper-slide><img src="../assets/img/instagram/instagram-1.jpg" alt="" class="img-fluid hover-scale"></swiper-slide>
            <swiper-slide><img src="../assets/img/instagram/instagram-2.jpg" alt="" class="img-fluid hover-scale"></swiper-slide>
            <swiper-slide><img src="../assets/img/instagram/instagram-3.jpg" alt="" class="img-fluid hover-scale"></swiper-slide>
            <swiper-slide><img src="../assets/img/instagram/instagram-4.jpg" alt="" class="img-fluid hover-scale"></swiper-slide>
            <swiper-slide><img src="../assets/img/instagram/instagram-5.jpg" alt="" class="img-fluid hover-scale"></swiper-slide>
            <swiper-slide><img src="../assets/img/instagram/instagram-6.jpg" alt="" class="img-fluid hover-scale"></swiper-slide>
            <swiper-slide><img src="../assets/img/instagram/instagram-7.jpg" alt="" class="img-fluid hover-scale"></swiper-slide>
            <swiper-slide><img src="../assets/img/instagram/instagram-8.jpg" alt="" class="img-fluid hover-scale"></swiper-slide>
            <swiper-slide><img src="../assets/img/instagram/instagram-9.jpg" alt="" class="img-fluid hover-scale"></swiper-slide>
            <swiper-slide><img src="../assets/img/instagram/instagram-10.jpg" alt="" class="img-fluid hover-scale"></swiper-slide>
            <swiper-slide><img src="../assets/img/instagram/instagram-11.jpg" alt="" class="img-fluid hover-scale"></swiper-slide>
            <swiper-slide><img src="../assets/img/instagram/instagram-12.jpg" alt="" class="img-fluid hover-scale"></swiper-slide>
            <swiper-slide><img src="../assets/img/instagram/instagram-13.jpg" alt="" class="img-fluid hover-scale"></swiper-slide>
            <swiper-slide><img src="../assets/img/instagram/instagram-14.jpg" alt="" class="img-fluid hover-scale"></swiper-slide>
        </swiper>
        </div>
    </div>
    </section>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 10,
          spaceBetween: 0,
        }
      }
    }
  }
</script>