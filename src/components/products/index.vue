<template>
	<div class="products">
		<h1>Product Catalog</h1>
		<DisplayCatalog2/>
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
	import DisplayCatalog2 from '@/components/DisplayCatalog2.vue'
	import DisplayCatalog3 from '@/components/DisplayCatalog3.vue'


export default {
name: 'products',
	components: {
		DisplayCatalog2,
		DisplayCatalog3
	}
}

</script>
