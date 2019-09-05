<template>
    <section>
      <div class="container-fluid px-0">
        <div class="instagram-slider">
        <swiper v-bind:options="swiperOption">
            <swiper-slide v-for="photo in photos" v-bind:key="photo.image_url">
              <div>
                <img v-bind:src="photo.image_url" v-bind:alt='photo.image_url' class="img-fluid hover-scale">
              </div>
            </swiper-slide>
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
        },
        photos: [
          {
            "image_url" :  require('../../assets/img/instagram/image-1.jpg')
          },
          {
            "image_url" : require('../../assets/img/instagram/image-2.jpg'),
          },
          {
            "image_url" : require('../../assets/img/instagram/image-3.jpg'),
          },
          {
            "image_url" : require('../../assets/img/instagram/image-4.jpg'),
          },
          {
            "image_url" : require('../../assets/img/instagram/image-5.jpg'),
          },
          {
            "image_url" : require('../../assets/img/instagram/image-6.jpg'),
          },
          {
            "image_url" : require('../../assets/img/instagram/image-7.jpg'),
          },
          {
            "image_url" : require('../../assets/img/instagram/image-8.jpg'),
          },
          {
            "image_url" : require('../../assets/img/instagram/image-9.jpg'),
          },
          {
            "image_url" : require('../../assets/img/instagram/image-10.jpg'),
          }
        ]
      }

    }
  }
</script>