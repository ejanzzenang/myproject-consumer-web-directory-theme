<template>
  <div class="home">
    <SearchBar/>
    <AboutProduct/>
    <DisplayCatalog1/>
    <DisplayCatalog2/>
    <Testimonials/>
    <DisplayCatalog3/>
    <PhotoWheel/> 
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue'
import AboutProduct from '@/components/AboutProduct.vue'
import DisplayCatalog1 from '@/components/DisplayCatalog1.vue'
import DisplayCatalog2 from '@/components/DisplayCatalog2.vue'
import Testimonials from '@/components/Testimonials.vue'
import DisplayCatalog3 from '@/components/DisplayCatalog3.vue'
import PhotoWheel from '@/components/PhotoWheel.vue'

export default {
  name: 'home',
  components: {
    SearchBar, 
    AboutProduct,
    DisplayCatalog1,
    DisplayCatalog2,
    Testimonials,
    DisplayCatalog3,
    PhotoWheel,
    Footer
  }
}

</script>

