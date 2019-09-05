<template>
  <div class="searchbar">
    <section class="hero-home">
      <swiper v-bind:options="swiperOption" class="hero-slider">
        <div class="swiper-wrapper dark-overlay">
          <swiper-slide class="swiper-slide pic_1"></swiper-slide>
        </div>
      </swiper>
      <div class="container py-6 py-md-7 text-white z-index-20">
        <div class="row">
          <div class="col-xl-10">
            <div class="text-center text-lg-left">
              <p class="subtitle letter-spacing-4 mb-2 text-secondary text-shadow">Philippine Tourists</p>
              <h1 class="display-3 font-weight-bold text-shadow">Register Here</h1>
            </div>
            <div class="search-bar mt-5 p-3 p-lg-1 pl-lg-4">
              <form action="#">
                <div class="row">
                  <div class="col-lg-4 d-flex align-items-center form-group">
                    <input type="text" name="search" placeholder="What are you searching for?" class="form-control border-0 shadow-0">
                  </div>
                  <div class="col-lg-3 d-flex align-items-center form-group">
                    <div class="input-label-absolute input-label-absolute-right w-100">
                      <label for="location" class="label-absolute"><i class="fa fa-crosshairs"></i><span class="sr-only">City</span></label>
                      <input type="text" name="location" placeholder="Boracay" id="location" class="form-control border-0 shadow-0">
                    </div>
                  </div>

                  <div class="col-lg-5">
                    <div class="row">
                       <div class="col-lg-5">
                        <button type="submit" class="btn btn-primary btn-block rounded-xl h-100">Search</button>
                      </div>

                      <div class="or justify-content-center col-lg-1">or</div>

                     <div class="col-lg-6">
                      <a href="/signup">
                       <button  type=button class="btn btn-primary btn-block rounded-xl h-100">Register</button>
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pic_1 {
    background: url('../../assets/img/photo/banner-2.jpg') center;
    background-size: cover
  }

  .or {
    color:#868E96;
    margin-bottom:0px;
    text-align: center;
  }

</style>


<script>
  export default {
    data() {
      return {
        swiperOption: {
          el: '.hero-slider',
          effect: 'fade',
          speed: 2000,
          allowTouchMove: false,
          autoplay: {
              delay: 2000,
          },
        }
      }
    }
  }
</script>
