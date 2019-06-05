<template>
  <div class="home">
    <SearchBar/>
    <AboutProduct/>
    <DisplayCatalog1/>
    <DisplayProducts/>
    <Testimonials/>
    <DisplayCatalog3/>
    <PhotoWheel/> 
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue'
import AboutProduct from '@/components/AboutProduct.vue'
import DisplayCatalog1 from '@/components/DisplayCatalog1.vue'
import DisplayProducts from '@/components/products/DisplayProduct.vue'
import Testimonials from '@/components/Testimonials.vue'
import DisplayCatalog3 from '@/components/DisplayCatalog3.vue'
import PhotoWheel from '@/components/PhotoWheel.vue'

export default {
  name: 'home',
  components: {
    SearchBar, 
    AboutProduct,
    DisplayCatalog1,
    DisplayProducts,
    Testimonials,
    DisplayCatalog3,
    PhotoWheel
  }
}

</script>

