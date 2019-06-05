<template>
	<div class="products">
		<h1>Product Catalog</h1>
		<DisplayProducts/>
		<DisplayCatalog3/>
	</div>
</template>

<style scoped>
	h1 {
		margin-top: 100px;
		text-align: center;
	}	
</style>

<script type="text/javascript">
import DisplayProducts from '@/components/products/DisplayProduct.vue'
import DisplayCatalog3 from '@/components/DisplayCatalog3.vue'


export default {
name: 'products',
	components: {
		DisplayProducts,
		DisplayCatalog3
	}
}

</script>
