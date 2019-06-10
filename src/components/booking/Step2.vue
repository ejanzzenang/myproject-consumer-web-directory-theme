<template>
  <div class="booking-step2">
	  <div style="height: 8px; top: 71px;" class="progress rounded-0 sticky-top">
      <div role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
    </div>
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <p class="subtitle text-primary">Book your holiday home</p>
            <h1 class="h2 mb-5"> Who's coming? <span class="text-muted float-right">Step 2</span>      </h1>
            <div class="text-block">
              <div class="alert alert-warning text-sm mb-3">
                <div class="media align-items-center">
                  <svg class="svg-icon svg-icon svg-icon-light w-2rem h-2rem mr-3 text-reset">
                    <use xlink:href="#heart-1"> </use>
                  </svg>
                  <div class="media-body"><strong>This home is on people’s minds.</strong> It’s been viewed 43 times in the past week.</div>
                </div>
              </div>
            </div>
            <div class="text-block">
              <label for="form_guests" class="h5">Guests</label>
              <p class="text-sm text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in.</p>
              <div class="row">
                <div class="col-lg-6 mb-3">
                  <select name="guests" id="form_guests" data-style="btn-selectpicker" title=" " class="selectpicker form-control">
                    <option value="guests_0">1</option>
                    <option value="guests_1">2</option>
                    <option value="guests_2" selected>3</option>
                    <option value="guests_3">4</option>
                    <option value="guests_4">5</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="text-block">
              <h5>What's the main purpose of this trip?</h5>
              <p class="text-sm text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit.</p>
              <ul class="list-unstyled">
                <li>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="purpose_0" name="purpose" class="custom-control-input">
                    <label for="purpose_0" class="custom-control-label">Personal travel      </label>
                  </div>
                </li>
                <li>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="purpose_1" name="purpose" class="custom-control-input">
                    <label for="purpose_1" class="custom-control-label">Business travel      </label>
                  </div>
                </li>
              </ul>
            </div>
            <div class="text-block">
              <div class="media">
                <div class="media-body">
                  <h5>Say hello to your host</h5>
                  <p class="text-sm text-muted">His room, a proper human room although a little too small, lay peacefully between its four familiar .</p>
                </div><img src="../../assets/img/avatar/avatar-10.jpg" alt="Jack London" class="avatar ml-4">
              </div>
              <textarea name="hello" rows="4" class="form-control"></textarea>
            </div>
            <div class="row form-block flex-column flex-sm-row">
              <div class="col text-center text-sm-left"><router-link to="step1" class="btn btn-link text-muted"> <i class="fa-chevron-left fa mr-2"></i>Back</router-link>
              </div>
              <div class="col text-center text-sm-right"><router-link to="payment" class="btn btn-primary px-3">
                   
                  Next step<i class="fa-chevron-right fa ml-2"></i></router-link></div>
            </div>
          </div>
          <div class="col-lg-5 pl-xl-5">
           <!-- add booking panel here -->
           <BookingPanel/>
          </div>
        </div>
      </div>
    </section>
	</div>
</template>

<script>
  import BookingPanel from '@/components/booking/BookingPanel.vue'

  export default {
    name: 'step1',
    components: {
      BookingPanel
    }
  }
</script>
