<template>
	<div class="products">
		<ProductCatalog/>
	</div>
</template>

<style scoped>
	h1 {
		margin-top: 100px;
		text-align: center;
	}
</style>

<script type="text/javascript">
// import DisplayProducts from '@/components/products/DisplayProduct.vue'
import ProductCatalog from '@/components/products/ProductCatalog.vue';


export default {
name: 'products',
	components: {
		ProductCatalog
	}
}

</script>
