<template>
	<div class="product-detail">
    <section>
        <!-- Additional required wrapper-->
        <swiper :options="swiperOption">
          <!-- Slides-->
          <swiper-slide>
            <a href="../../assets/img/photo/photo-1426122402199-be02db90eb90.jpg" data-toggle="gallery-top" title="Our street"><img src="../../assets/img/photo/photo-1426122402199-be02db90eb90.jpg" alt="Our street" class="img-fluid"></a>
          </swiper-slide>
          <swiper-slide>
            <a href="../../assets/img/photo/photo-1512917774080-9991f1c4c750.jpg" data-toggle="gallery-top" title="Outside"><img src="../../assets/img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="Outside" class="img-fluid"></a>
          </swiper-slide>
          <swiper-slide>
            <a href="../../assets/img/photo/photo-1494526585095-c41746248156.jpg" data-toggle="gallery-top" title="Rear entrance"><img src="../../assets/img/photo/photo-1494526585095-c41746248156.jpg" alt="Rear entrance" class="img-fluid"></a>
          </swiper-slide>
          <swiper-slide>
            <a href="../../assets/img/photo/photo-1484154218962-a197022b5858.jpg" data-toggle="gallery-top" title="Kitchen"><img src="../../assets/img/photo/photo-1484154218962-a197022b5858.jpg" alt="Kitchen" class="img-fluid"></a>
          </swiper-slide>
          <swiper-slide>
            <a href="../../assets/img/photo/photo-1522771739844-6a9f6d5f14af.jpg" data-toggle="gallery-top" title="Bedroom"><img src="../../assets/img/photo/photo-1522771739844-6a9f6d5f14af.jpg" alt="Bedroom" class="img-fluid"></a>
          </swiper-slide>
          <swiper-slide>
            <a href="../../assets/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" data-toggle="gallery-top" title="Bedroom"><img src="../../assets/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" alt="Bedroom" class="img-fluid"></a>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination swiper-pagination-white"></div>
        <div class="swiper-button-prev swiper-button-white"></div>
        <div class="swiper-button-next swiper-button-white"></div>

    </section>
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8"> 
          <div class="text-block">
            <p class="text-primary"><i class="fa-map-marker-alt fa mr-1"></i> Brooklyn, New York</p>
            <h1>Mid-Century Modern Garden Paradise</h1>
            <p class="text-muted text-uppercase mb-4">Entire Apartment </p>
            <ul class="list-inline text-sm mb-4">
              <li class="list-inline-item mr-3"><i class="fa fa-users mr-1 text-secondary"></i> 4 guests</li>
              <li class="list-inline-item mr-3"><i class="fa fa-door-open mr-1 text-secondary"></i> 1 bedroom</li>
              <li class="list-inline-item mr-3"><i class="fa fa-bed mr-1 text-secondary"></i> 3 beds</li>
              <li class="list-inline-item mr-3"><i class="fa fa-bath mr-1 text-secondary"></i> 1 bath</li>
            </ul>
            <p class="text-muted font-weight-light">Our garden basement apartment is fully equipped with everything you need to enjoy your stay. Very comfortable for a couple but plenty of space for a small family. Close to many wonderful Brooklyn attractions and quick trip to Manhattan. </p>
            <h6 class="mb-3">The space</h6>
            <p class="text-muted font-weight-light">Welcome to Brooklyn! We are excited to share our wonderful neighborhood with you. Our modern apartment has a private entrance, fully equipped kitchen, and a very comfortable queen size bed. We are happy to accommodate additional guests with a single bed in the living room, another comfy mattress on the floor and can make arrangements for small children with a portable crib and highchair if requested. </p>
            <p class="text-muted font-weight-light">Also in the apartment:</p>
            <ul class="text-muted font-weight-light"> 
              <li>TV with Netflix and DirectTVNow</li>
              <li>Free WiFi</li>
              <li>Gourmet Coffee/Tea making supplies</li>
              <li>Fresh Sheets and Towels</li>
              <li>Toaster, microwave, pots and pans and basic cooking needs like salt, pepper, sugar, and olive oil.</li>
              <li>Air Conditioning to keep you cool all summer!</li>
            </ul>
            <p class="text-muted font-weight-light">The apartment is surprisingly quiet for being in the heart of a vibrant, bustling neighborhood.</p>
            <h6 class="mb-3">Interaction with guests</h6>
            <p class="text-muted font-weight-light">We live in the two floors above the garden apartment so we are usually available to answer questions. The garden apartment is separate from our living space. We are happy to provide advice on local attractions, restaurants and transportation around the city. If there's anything you need please don't hesitate to ask!</p>
          </div>
          <div class="text-block">
            <h4 class="mb-4">Amenities</h4>
            <div class="row"> 
              <div class="col-md-6">
                <ul class="list-unstyled text-muted">
                  <li class="mb-2"><i class="fa fa-wifi text-secondary w-1rem mr-3 text-center"></i> <span class="text-sm">Wifi</span></li>
                  <li class="mb-2"><i class="fa fa-tv text-secondary w-1rem mr-3 text-center"></i> <span class="text-sm">Cable TV</span></li>
                  <li class="mb-2"><i class="fa fa-snowflake text-secondary w-1rem mr-3 text-center"></i> <span class="text-sm">Air conditioning</span></li>
                  <li class="mb-2"><i class="fa fa-thermometer-three-quarters text-secondary w-1rem mr-3 text-center"></i> <span class="text-sm">Heating</span></li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="list-unstyled text-muted">
                  <li class="mb-2"><i class="fa fa-bath text-secondary w-1rem mr-3 text-center"></i><span class="text-sm">Toiletteries</span></li>
                  <li class="mb-2"><i class="fa fa-utensils text-secondary w-1rem mr-3 text-center"></i><span class="text-sm">Equipped Kitchen</span></li>
                  <li class="mb-2"><i class="fa fa-laptop text-secondary w-1rem mr-3 text-center"></i><span class="text-sm">Desk for work</span></li>
                  <li class="mb-2"><i class="fa fa-tshirt text-secondary w-1rem mr-3 text-center"></i><span class="text-sm">Washing machine</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="text-block">
            <h4 class="mb-0">Amenities alternative</h4>
            <p class="subtitle text-sm text-primary mb-4">Alternative amenities display</p>
            <ul class="list-inline">
              <li class="list-inline-item mb-2"><span class="badge badge-pill badge-light p-3 text-muted font-weight-normal">Wifi</span></li>
              <li class="list-inline-item mb-2"><span class="badge badge-pill badge-light p-3 text-muted font-weight-normal">Cable TV</span></li>
              <li class="list-inline-item mb-2"><span class="badge badge-pill badge-light p-3 text-muted font-weight-normal">Air conditioning</span></li>
              <li class="list-inline-item mb-2"><span class="badge badge-pill badge-light p-3 text-muted font-weight-normal">Heating</span></li>
              <li class="list-inline-item mb-2"><span class="badge badge-pill badge-light p-3 text-muted font-weight-normal">Toiletteries</span></li>
              <li class="list-inline-item mb-2"><span class="badge badge-pill badge-light p-3 text-muted font-weight-normal">Equipped Kitchen</span></li>
              <li class="list-inline-item mb-2"><span class="badge badge-pill badge-light p-3 text-muted font-weight-normal">Desk for work</span></li>
              <li class="list-inline-item mb-2"><span class="badge badge-pill badge-light p-3 text-muted font-weight-normal">Washing machine</span></li>
            </ul>
          </div>
          <div class="text-block">
            <div class="media"><img src="../../assets/img/avatar/avatar-10.jpg" alt="Jack London" class="avatar avatar-lg mr-4">
              <div class="media-body">
                <p> <span class="text-muted text-uppercase text-sm">Hosted by </span><br><strong>Jack London</strong></p>
                <p class="text-muted text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                <p class="text-muted text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p class="text-sm"><a href="#">See Jack's 3 other listings <i class="fa fa-long-arrow-alt-right ml-2"></i></a></p>
              </div>
            </div>
          </div>
          <div class="text-block">
            <h5 class="mb-4">Listing location</h5>
            <div class="map-wrapper-300 mb-3">
              <div id="detailMap" class="h-100"></div>
            </div>
          </div>
          <div class="text-block">
            <h5 class="mb-4">Gallery</h5>
            <div class="row gallery mb-3 ml-n1 mr-n1">
              <div class="col-lg-4 col-6 px-1 mb-2"><a href="../../assets/img/photo/photo-1426122402199-be02db90eb90.jpg" data-fancybox="gallery" title="Our street"><img src="../../assets/img/photo/photo-1426122402199-be02db90eb90.jpg" alt="..." class="img-fluid"></a></div>
              <div class="col-lg-4 col-6 px-1 mb-2"><a href="../../assets/img/photo/photo-1512917774080-9991f1c4c750.jpg" data-fancybox="gallery" title="Outside"><img src="../../assets/img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="..." class="img-fluid"></a></div>
              <div class="col-lg-4 col-6 px-1 mb-2"><a href="../../assets/img/photo/photo-1494526585095-c41746248156.jpg" data-fancybox="gallery" title="Rear entrance"><img src="../../assets/img/photo/photo-1494526585095-c41746248156.jpg" alt="..." class="img-fluid"></a></div>
              <div class="col-lg-4 col-6 px-1 mb-2"><a href="../../assets/img/photo/photo-1484154218962-a197022b5858.jpg" data-fancybox="gallery" title="Kitchen"><img src="../../assets/img/photo/photo-1484154218962-a197022b5858.jpg" alt="..." class="img-fluid"></a></div>
              <div class="col-lg-4 col-6 px-1 mb-2"><a href="../../assets/img/photo/photo-1522771739844-6a9f6d5f14af.jpg" data-fancybox="gallery" title="Bedroom"><img src="../../assets/img/photo/photo-1522771739844-6a9f6d5f14af.jpg" alt="..." class="img-fluid"></a></div>
              <div class="col-lg-4 col-6 px-1 mb-2"><a href="../../assets/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" data-fancybox="gallery" title="Bedroom"><img src="../../assets/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" alt="..." class="img-fluid"></a></div>
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
            <p class="text-muted"><span class="text-primary h2">$120</span> per night</p>
            <hr class="my-4">
            <form id="booking-form" method="get" action="#" autocomplete="off" class="form">
              <div class="form-group">
                <label for="bookingDate" class="form-label">Your stay *</label>
                <div class="datepicker-container datepicker-container-right">
                  <input type="text" name="bookingDate" id="bookingDate" placeholder="Choose your dates" required="required" class="form-control">
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
                <button type="submit" class="btn btn-primary btn-block">Book your stay</button>
              </div>
            </form>
            <p class="text-muted text-sm text-center">Some additional text can be also placed here.</p>
            <hr class="my-4">
            <div class="text-center">
              <p> <a href="#" class="text-secondary text-sm"> <i class="fa fa-heart"></i> Bookmark This Listing</a></p>
              <p class="text-muted text-sm">79 people bookmarked this place </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-6 bg-gray-100">
          <DisplayCatalog2/>
    </div>
	</div>
</template>
<script type="text/javascript">
  
import DisplayCatalog2 from '@/components/DisplayCatalog2.vue'

export default {
    name: 'product-detail',
    components: {
      DisplayCatalog2,
    },
    data() {
      return {
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
          }
        }
      }
    }
</script>

