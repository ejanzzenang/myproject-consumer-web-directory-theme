<template>
	<div class="product">
		<ProductIndex/>
        <router-view/>	
	</div>
</template>
<script>
    import ProductIndex from '@/components/products'

    export default {
    name: 'products',
        components: {
            ProductIndex
        }
    }

</script>
