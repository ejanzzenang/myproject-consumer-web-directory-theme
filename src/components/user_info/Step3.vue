<template>
	<div class="user-step3">
    <div style="height: 8px; top: 71px;" class="progress rounded-0 sticky-top">
      <div role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
    </div>
	  <section class="py-5">
      <div class="container">
        <p class="subtitle text-primary">Add new listing</p>
        <h1 class="h2 mb-5"> Disposition and Amenities <span class="text-muted float-right">Step 3</span>      </h1>
        <form>
          <div class="row form-block">
            <div class="col-lg-4">
              <h4>Rooms and beds</h4>
              <p class="text-muted text-sm"> The number and types of beds you have determines how many guests can stay comfortably</p>
            </div>
            <div class="col-lg-7 ml-auto">
              <div class="row">
                <div class="col-lg-4">
                  <label class="form-label">Beds</label>
                  <div class="d-flex align-items-center">
                    <div class="btn btn-items btn-items-decrease">-</div>
                    <input type="text" value="1" disabled class="form-control input-items">
                    <div class="btn btn-items btn-items-increase">+</div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <label class="form-label">Bedrooms</label>
                  <div class="d-flex align-items-center">
                    <div class="btn btn-items btn-items-decrease">-</div>
                    <input type="text" value="1" disabled class="form-control input-items">
                    <div class="btn btn-items btn-items-increase">+</div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <label class="form-label">Bathrooms</label>
                  <div class="d-flex align-items-center">
                    <div class="btn btn-items btn-items-decrease">-</div>
                    <input type="text" value="1" disabled class="form-control input-items">
                    <div class="btn btn-items btn-items-increase">+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row form-block">
            <div class="col-lg-4">
              <h4>Amenities</h4>
              <p class="text-muted text-sm">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.</p>
            </div>
            <div class="col-lg-7 ml-auto">
              <div class="form-group">
                <label class="form-label">Available Amenities</label>
                <ul class="list-inline mb-0">
                  <li class="list-inline-item">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="amenities_0" name="amenities[]" class="custom-control-input">
                      <label for="amenities_0" class="custom-control-label text-muted">Kitchen    </label>
                    </div>
                  </li>
                  <li class="list-inline-item">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="amenities_1" name="amenities[]" class="custom-control-input">
                      <label for="amenities_1" class="custom-control-label text-muted">Shampoo    </label>
                    </div>
                  </li>
                  <li class="list-inline-item">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="amenities_2" name="amenities[]" class="custom-control-input">
                      <label for="amenities_2" class="custom-control-label text-muted">Heating    </label>
                    </div>
                  </li>
                  <li class="list-inline-item">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="amenities_3" name="amenities[]" class="custom-control-input">
                      <label for="amenities_3" class="custom-control-label text-muted">Air conditioning    </label>
                    </div>
                  </li>
                  <li class="list-inline-item">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="amenities_4" name="amenities[]" class="custom-control-input">
                      <label for="amenities_4" class="custom-control-label text-muted">Washer    </label>
                    </div>
                  </li>
                  <li class="list-inline-item">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="amenities_5" name="amenities[]" class="custom-control-input">
                      <label for="amenities_5" class="custom-control-label text-muted">Dryer    </label>
                    </div>
                  </li>
                  <li class="list-inline-item">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="amenities_6" name="amenities[]" class="custom-control-input">
                      <label for="amenities_6" class="custom-control-label text-muted">Wifi    </label>
                    </div>
                  </li>
                  <li class="list-inline-item">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="amenities_7" name="amenities[]" class="custom-control-input">
                      <label for="amenities_7" class="custom-control-label text-muted">Breakfast    </label>
                    </div>
                  </li>
                  <li class="list-inline-item">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="amenities_8" name="amenities[]" class="custom-control-input">
                      <label for="amenities_8" class="custom-control-label text-muted">Indoor fireplace    </label>
                    </div>
                  </li>
                  <li class="list-inline-item">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="amenities_9" name="amenities[]" class="custom-control-input">
                      <label for="amenities_9" class="custom-control-label text-muted">Buzzer/wireless intercom    </label>
                    </div>
                  </li>
                  <li class="list-inline-item">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="amenities_10" name="amenities[]" class="custom-control-input">
                      <label for="amenities_10" class="custom-control-label text-muted">Doorman    </label>
                    </div>
                  </li>
                  <li class="list-inline-item">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="amenities_11" name="amenities[]" class="custom-control-input">
                      <label for="amenities_11" class="custom-control-label text-muted">Hangers    </label>
                    </div>
                  </li>
                  <li class="list-inline-item">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="amenities_12" name="amenities[]" class="custom-control-input">
                      <label for="amenities_12" class="custom-control-label text-muted">Iron    </label>
                    </div>
                  </li>
                  <li class="list-inline-item">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="amenities_13" name="amenities[]" class="custom-control-input">
                      <label for="amenities_13" class="custom-control-label text-muted">Hair dryer    </label>
                    </div>
                  </li>
                  <li class="list-inline-item">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="amenities_14" name="amenities[]" class="custom-control-input">
                      <label for="amenities_14" class="custom-control-label text-muted">Laptop friendly workspace    </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
         <div class="row form-block flex-column flex-sm-row">
            <div class="col text-center text-sm-left"><router-link to="step2" class="btn btn-link text-muted"><i class="fa-chevron-left fa mr-2"></i>Back</router-link>
            </div>
            <div class="col text-center text-sm-right"><router-link to="step4" class="btn btn-primary px-3">Next step<i class="fa-chevron-right fa ml-2"></i></router-link></div>
        </div>
        </form>
      </div>
    </section>
	</div>
</template>