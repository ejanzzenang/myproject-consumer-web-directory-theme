<template>
	<div class="products">
		<ProductCatalog/>
	</div>
</template>
<style>
  h1 {
    margin-top: 100px;
    text-align: center;
  }
</style>
<script>
  import ProductCatalog from '@/components/products/ProductCatalog.vue';

  export default {
  name: 'products',
  	components: {
  		ProductCatalog
  	}
  }

</script>
