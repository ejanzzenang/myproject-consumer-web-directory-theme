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
import SearchBar from '@/components/SearchBar.vue'
import Services from '@/components/Services.vue'
import DisplayCatalog1 from '@/components/DisplayCatalog1.vue'
import DisplayProducts from '@/components/products/DisplayProduct.vue'
import PhotoWheel from '@/components/PhotoWheel.vue'

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

