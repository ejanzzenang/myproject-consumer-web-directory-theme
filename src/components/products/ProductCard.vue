<template class="product-card">
    <!-- place item-->
    <div data-marker-id="59c0c8e33b1527bfe2abaf92" class="w-100 h-100">
      <div class="card h-100 border-0 shadow">
        <div class="card-img-top overflow-hidden gradient-overlay"> <img v-bind:src="product.image_url" alt="Modern, Well-Appointed Room" class="img-fluid"/><a href="detail-rooms.html" class="tile-link"></a>
        </div>
        <div class="card-body d-flex align-items-center">
          <div class="w-100">
            <h6 class="card-title"><a href="detail-rooms.html" class="text-decoration-none text-dark">{{product.name }}</a></h6>
            <div class="d-flex card-subtitle mb-3">
              <p class="flex-grow-1 mb-0 text-muted text-sm ellipsis">{{product.description}}</p>
              <p class="flex-shrink-1 mb-0 card-stars text-xs text-right"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i>
              </p>
            </div>
            <p class="card-text text-muted"><span class="h4 text-primary">Php. {{product.price}}</span> per night</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
 export default {
  name: 'ProductCard',
  props: ['product'],
  data(){
    return {
      obj: this.product
    }
  }
}
</script>

<style scoped>
    .ellipsis {
    text-overflow: ellipsis;

    /* Required for text-overflow to do anything */
    white-space: nowrap;
    overflow: hidden;
  }
</style>


