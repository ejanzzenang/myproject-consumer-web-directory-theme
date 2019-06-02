<template>
	<div class="product">
		<Products/>
		<router-view/>	
	</div>
</template>
<script>
	
// @ is an alias to /src
import Products from '@/components/products'


export default {
name: 'products',
	components: {
		Products
	}
}

</script>

<style scoped>
	


</style>
