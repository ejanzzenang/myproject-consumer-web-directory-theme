<template>
	<div class="product-detail">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8"> 
          <div class="text-block">
            <h1>{{ product.name }}</h1>
            <div class="text-block"><img  v-bind:src="product.image_url"></div>
            <ul class="list-inline text-sm mb-4">
              <li class="list-inline-item mr-3"><i class="fa fa-users mr-1 text-secondary"></i> 4 guests</li>
              <li class="list-inline-item mr-3"><i class="fa fa-door-open mr-1 text-secondary"></i> 1 bedroom</li>
              <li class="list-inline-item mr-3"><i class="fa fa-bed mr-1 text-secondary"></i> 3 beds</li>
              <li class="list-inline-item mr-3"><i class="fa fa-bath mr-1 text-secondary"></i> 1 bath</li>
            </ul>
            <p class="text-muted font-weight-light">{{product.description}}</p>
          </div>
          <div class="text-block">
            <h5 class="mb-4">Gallery</h5>
            <div class="row gallery mb-3 ml-n1 mr-n1">
              <div class="col-lg-4 col-6 px-1 mb-2"><a href="../../assets/img/photo/photo-1426122402199-be02db90eb90.jpg" data-fancybox="gallery" title="Our street"><img v-bind:src="product.image_url" alt="..." class="img-fluid"></a></div>
            </div>
          </div>
          <div class="text-block">
            <p class="subtitle text-sm text-primary">Reviews    </p>
            <h5 class="mb-4">Listing Reviews </h5>
            <div class="media d-block d-sm-flex review">
              <div class="text-md-center mr-4 mr-xl-5"><img src="../../assets/img/avatar/avatar-8.jpg" alt="Padmé Amidala" class="d-block avatar avatar-xl p-2 mb-2"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
              <div class="media-body">
                <h6 class="mt-2 mb-1">Padmé Amidala</h6>
                <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i>
                </div>
                <p class="text-muted text-sm">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections     </p>
              </div>
            </div>
            <div class="media d-block d-sm-flex review">
              <div class="text-md-center mr-4 mr-xl-5"><img src="../../assets/img/avatar/avatar-2.jpg" alt="Luke Skywalker" class="d-block avatar avatar-xl p-2 mb-2"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
              <div class="media-body">
                <h6 class="mt-2 mb-1">Luke Skywalker</h6>
                <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i>
                </div>
                <p class="text-muted text-sm">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. &quot;What's happened to me?&quot; he thought. It wasn't a dream.     </p>
              </div>
            </div>
            <div class="media d-block d-sm-flex review">
              <div class="text-md-center mr-4 mr-xl-5"><img src="../../assets/img/avatar/avatar-3.jpg" alt="Princess Leia" class="d-block avatar avatar-xl p-2 mb-2"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
              <div class="media-body">
                <h6 class="mt-2 mb-1">Princess Leia</h6>
                <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i><i class="fa fa-xs fa-star text-gray-200"></i>
                </div>
                <p class="text-muted text-sm">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.     </p>
              </div>
            </div>
            <div class="media d-block d-sm-flex review">
              <div class="text-md-center mr-4 mr-xl-5"><img src="../../assets/img/avatar/avatar-4.jpg" alt="Jabba Hut" class="d-block avatar avatar-xl p-2 mb-2"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
              <div class="media-body">
                <h6 class="mt-2 mb-1">Jabba Hut</h6>
                <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i>
                </div>
                <p class="text-muted text-sm">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.     </p>
              </div>
            </div>
            <div class="py-5">
              <button type="button" data-toggle="collapse" data-target="#leaveReview" aria-expanded="false" aria-controls="leaveReview" class="btn btn-outline-primary">Leave a review</button>
              <div id="leaveReview" class="collapse mt-4">
                <h5 class="mb-4">Leave a review</h5>
                <form id="contact-form" method="get" action="#" class="form">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="name" class="form-label">Your name *</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" required="required" class="form-control">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="rating" class="form-label">Your rating *</label>
                        <select name="rating" id="rating" class="custom-select focus-shadow-0">
                          <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733; (5/5)</option>
                          <option value="4">&#9733;&#9733;&#9733;&#9733;&#9734; (4/5)</option>
                          <option value="3">&#9733;&#9733;&#9733;&#9734;&#9734; (3/5)</option>
                          <option value="2">&#9733;&#9733;&#9734;&#9734;&#9734; (2/5)</option>
                          <option value="1">&#9733;&#9734;&#9734;&#9734;&#9734; (1/5)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="email" class="form-label">Your email *</label>
                    <input type="email" name="email" id="email" placeholder="Enter your  email" required="required" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="review" class="form-label">Review text *</label>
                    <textarea rows="4" name="review" id="review" placeholder="Enter your review" required="required" class="form-control"></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Post review</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div style="top: 100px;" class="p-4 shadow ml-lg-4 rounded sticky-top">
            <p class="text-muted"><span class="text-primary h2">Php. {{product.price}}</span> per night</p>
            <hr class="my-4">
            <form id="booking-form" method="get" action="#" autocomplete="off" class="form">
              <div class="form-group">
                <label for="bookingDate" class="form-label">Your stay *</label>
                <div class="datepicker-container datepicker-container-right">
                  <date-range-picker v-model="myDate" :options="options" id="bookingDate" placeholder="Choose your dates" required="required" class="form-control"/>
                </div>
              </div>
              <div class="form-group mb-4">
                <label for="guests" class="form-label">Guests *</label>
                <select name="guests" id="guests" class="form-control">
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                </select>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">Book</button>
              </div>
            </form>
            <hr class="my-4">
            <div class="text-center">
              <p> <a href="#" class="text-secondary text-sm"> <i class="fa fa-heart"></i> Bookmark This Listing</a></p>
              <p class="text-muted text-sm">79 people bookmarked this place </p>
            </div>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>
<script type="text/javascript">
  
import data from '@/assets/json/boracay.json'
import moment from 'moment'

export default {
    name: 'product-detail',
    components: {
    },
    data() {
      return {
        product: '',
        products: data,
        swiperOption: {
            slidesPerView: 2,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
          },
        myDate: "06/10/2019",
        options: {
          singleDatePicker: true,
          minYear: 2019,
          maxYear: +moment().format("YYYY")
        }
        }
      },
      methods: {
      getProduct: function(product_id){
          const baseURI = 'http://localhost:5000/products/' + product_id;
          this.$http.get(baseURI)
          .then(result => {
            this.product = result.data['products'];
            console.log(this.product); 
          })
          .catch(error =>{
            alert(error);
          })
      },
      getProductLocal: function(product_id){
        return new Promise((resolve, reject) =>{
            this.products.forEach(function(el){
              if(el.id === product_id){
                resolve(el)
              }
            })
          })
        }
      },
      created: function(){
        console.log(this.$route.params.product_id)
        this.getProductLocal(this.$route.params.product_id)
        .then(data =>{
          this.product = data
        })

      }
  }
</script>

