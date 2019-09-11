<template>
	<div class="product-catalog">
		<div class="container-fluid pt-5 pb-3 border-bottom px-lg-5">
      <div class="row">
        <div class="col-xl-8">
          <h1>Our Activities</h1>
        </div>
      </div>
    </div>
    <div class="container-fluid py-5 px-lg-5">
      <div class="row">
        <div class="col-lg-3 pt-3">
          <form action="#" autocomplete="off" class="pr-xl-3">
            <div class="mb-4">
              <label for="form_dates" class="form-label">Date</label>
               <datepicker 
                    name="form_dates"
                    v-model="booking_date"
                    :bootstrap-styling="true"
                    format="yyyy-MM-dd"/>
            </div>
            <div class="mb-4">
              <label for="form_guests" class="form-label">Guests</label>
              <vue-select
                v-model="guests" 
                :options="guests_list"
                :searchable="false"
                :clearable="false"
                name='guests'
                />
            </div>
            <div class="pb-4">
              <div id="moreFilters" class="collapse">
                <div class="filter-block">
                  <h6 class="mb-3">Location</h6>
                  <div class="form-group mb-4">
                    <select name="neighbourhood" id="form_neighbourhood" multiple data-style="btn-selectpicker" data-live-search="true" data-selected-text-format="count &gt; 1" title="" class="selectpicker form-control">
                      <option value="neighbourhood_0">Boracay</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <button type="button" data-toggle="collapse" data-target="#moreFilters" aria-expanded="false" aria-controls="moreFilters" data-expanded-text="Less filters" data-collapsed-text="More filters" class="btn btn-link btn-collapse pl-0 text-secondary">More filters</button>
              </div>
              <div class="mb-4">
                <button type="submit" class="btn btn-primary"><i class="fas fa-filter mr-1"></i>Filter</button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-9">
          <div class="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
            <div class="mr-3">
              <p class="mb-3 mb-md-0"><strong>12</strong> results found</p>
            </div>
            <div>
              <label for="form_sort" class="form-label mr-2">Sort by</label>
              <select name="sort" id="form_sort" data-style="btn-selectpicker" title="" class="selectpicker">
                <option value="sortBy_0">Most popular</option>
                <option value="sortBy_1">Recommended</option>
                <option value="sortBy_2">Newest</option>
                <option value="sortBy_3">Oldest</option>
                <option value="sortBy_4">Closest</option>
              </select>
            </div>
          </div>
          <div class="row">
	        <div data-marker-id="59c0c8e39aa2edasd626e485d" class="col-sm-6 col-xl-4 mb-5" v-for="product in products" v-bind:key="product.id">
          		<ProductCard2 v-bind:product="product"/> 
        	</div>
          </div>
          <!-- Pagination -->
          <nav aria-label="Page navigation example">
            <ul class="pagination pagination-template d-flex justify-content-center">
              <li class="page-item"><a href="#" class="page-link"> <i class="fa fa-angle-left"></i></a></li>
              <li class="page-item active"><a href="#" class="page-link">1</a></li>
              <li class="page-item"><a href="#" class="page-link">2</a></li>
              <li class="page-item"><a href="#" class="page-link">3</a></li>
              <li class="page-item"><a href="#" class="page-link"> <i class="fa fa-angle-right"></i></a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
	</div>
</template>
<script>
  import ProductCard2 from '@/components/products/ProductCard2.vue'
  import vueSelect from 'vue-select'
  import data from '@/assets/json/boracay.json'
  import moment from 'moment'
  import Datepicker from 'vuejs-datepicker';


  export default {
    name: "product-catalog",
    components: {
      ProductCard2,
      vueSelect,
      Datepicker
    },
    data() {
      return {
        products: data,
        booking_date: moment().toString(),
        guests_list: [
            1,2,3,4,5
        ],
        guests: 1
      }
    },
    methods: {
      getProducts: function(){
        const baseURI = 'http://localhost:5000/products'
        this.$http.get(baseURI)
        .then(result => {
          this.products = result.data['products']; 
        })
        .catch(error =>{
          alert(error);
        })
      }
    },
    created: function(){
      // this.getProducts()
    }
  }




</script>

