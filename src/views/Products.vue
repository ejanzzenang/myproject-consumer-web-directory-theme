<template>
	<div class="product">
		<ProductIndex/>
        <router-view/>	
	</div>
</template>

<script type="text/javascript">
    import ProductIndex from '@/components/products'

    export default {
    name: 'products',
        components: {
            ProductIndex
        }
    }

</script>
