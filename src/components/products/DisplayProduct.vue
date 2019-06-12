<template>
	<div class="display-catalog-2">
  <h1></h1>
	<section class="py-6 bg-gray-100"> 
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-8">
            <p class="subtitle text-secondary">Hurry up, these are expiring soon.</p>
            <h2>Last minute deals</h2>
          </div>
          <div class="col-md-4 d-lg-flex align-items-center justify-content-end"><a href="category.html" class="text-muted text-sm">
               
              See all deals<i class="fas fa-angle-double-right ml-2"></i></a></div>
        </div>
        <swiper v-bind:options="swiperOption">
            <swiper-slide class="h-auto px-2" v-for="product in products" v-bind:key="product.id">
              <ProductCard v-bind:product="product"/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </section>		
	</div>
</template>

<script>

  import ProductCard from '@/components/products/ProductCard.vue'

  export default {
    name: "display-product",
    components: {
      ProductCard
    },
    data() {
      return {
        products: null, 
        swiperOption: {
          slidesPerView: 3,
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
    },
    methods: {
      getProducts: function(){
        const baseURI = 'http://localhost:5000/products'
        this.$http.get(baseURI)
        .then(result => {
          this.products = result.data['products']; 
        })
        .catch(error =>{
          alert(error);
        })
      }
    },
    created: function(){
      this.getProducts()
    }
  }
</script>