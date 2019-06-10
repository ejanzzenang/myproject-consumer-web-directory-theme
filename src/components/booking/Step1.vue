<template>
	<div class="booking-step1">
    <div style="height: 8px; top: 71px;" class="progress rounded-0 sticky-top">
      <div role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
    </div>
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <p class="subtitle text-primary">Book your holiday home</p>
            <h1 class="h2 mb-5"> Review house rules <span class="text-muted float-right">Step 1</span>      </h1>
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
              <h5 class="mb-4">1 night in London</h5>
              <div class="row mb-3">
                <div class="col-md-6 d-flex align-items-center mb-3 mb-md-0">
                  <div class="date-tile mr-3">
                    <div class="text-uppercase"> <span class="text-sm">Apr</span><br><strong class="text-lg">17</strong></div>
                  </div>
                  <p class="text-sm mb-0">Wednesday check-in<br>3PM - 7PM</p>
                </div>
                <div class="col-md-6 d-flex align-items-center">
                  <div class="date-tile mr-3">
                    <div class="text-uppercase"> <span class="text-sm">Apr</span><br><strong class="text-lg">18</strong></div>
                  </div>
                  <p class="text-sm mb-0">Thursday check-out<br>11AM</p>
                </div>
              </div>
            </div>
            <div class="text-block">
              <h5 class="mb-4">Things to keep in mind</h5>
              <ul class="list-unstyled">
                <li class="mb-2"> 
                  <div class="media align-items-center mb-3">
                    <div class="icon-rounded icon-rounded-sm bg-secondary-light mr-4"><i class="fa fas fa-child text-secondary fa-fw text-center"></i></div>
                    <div class="media-body"><span class="text-sm">Not suitable for children and infants - The entrance staircase doesn't have handrails</span></div>
                  </div>
                </li>
                <li class="mb-2"> 
                  <div class="media align-items-center mb-3">
                    <div class="icon-rounded icon-rounded-sm bg-secondary-light mr-4"><i class="fa fas fa-glass-cheers text-secondary fa-fw text-center"></i></div>
                    <div class="media-body"><span class="text-sm">No parties or events</span></div>
                  </div>
                </li>
                <li class="mb-2"> 
                  <div class="media align-items-center mb-3">
                    <div class="icon-rounded icon-rounded-sm bg-secondary-light mr-4"><i class="fa fa-smoking-ban text-secondary fa-fw text-center"></i></div>
                    <div class="media-body"><span class="text-sm">No smoking</span></div>
                  </div>
                </li>
                <li class="mb-2"> 
                  <div class="media align-items-center mb-3">
                    <div class="icon-rounded icon-rounded-sm bg-secondary-light mr-4"><i class="fa fa-cat text-secondary fa-fw text-center"></i></div>
                    <div class="media-body"><span class="text-sm">No pets</span></div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="row form-block flex-column flex-sm-row">
              <div class="col text-center text-sm-left">
              </div>
              <div class="col text-center text-sm-right"><router-link to="step2" class="btn btn-primary px-3">
                  
                  Next step<i class="fa-chevron-right fa ml-2"></i></router-link></div>
            </div>
          </div>
          <div class="col-lg-5 pl-xl-5">
            <!-- Add booking panel here -->
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
