<template>
  <div class="home">
    <SearchBar/>
    <DisplayCatalog1/>
    <DisplayProducts/>
    <Testimonials/>
    <PhotoWheel/> 
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue'
import DisplayCatalog1 from '@/components/DisplayCatalog1.vue'
import DisplayProducts from '@/components/products/DisplayProduct.vue'
import Testimonials from '@/components/Testimonials.vue'
import PhotoWheel from '@/components/PhotoWheel.vue'

export default {
  name: 'home',
  components: {
    SearchBar, 
    DisplayCatalog1,
    DisplayProducts,
    Testimonials,
    PhotoWheel
  }
}

</script>

