<template>
  <div class="home">
    <SearchBar/>
    <Services/>
    <DisplayCatalog1/>
    <DisplayProducts/>
    <PhotoWheel/> 
  </div>
</template>
<script>
// @ is an alias to /src
import SearchBar from '@/components/home/SearchBar.vue'
import Services from '@/components/home/Services.vue'
import DisplayCatalog1 from '@/components/home/DisplayCatalog1.vue'
import DisplayProducts from '@/components/products/DisplayProduct.vue'
import PhotoWheel from '@/components/home/PhotoWheel.vue'

export default {
  name: 'home',
  components: {
    SearchBar, 
    Services,
    DisplayCatalog1,
    DisplayProducts,
    PhotoWheel
  }
}

</script>

