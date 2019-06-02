<template>
    <div class="booking-step4">
	<div style="height: 8px; top: 71px;" class="progress rounded-0 sticky-top">
      <div role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
    </div>
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <p class="subtitle text-primary">Book your holiday home</p>
            <h1 class="h2 mb-5"> Booking placed <span class="text-muted float-right">Step 4</span>      </h1>
            <div class="text-block">
              <p class="text-muted">Thank you for your booking, Ondrej. </p>
              <p class="text-muted mb-5">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
              <p class="text-center mb-5"><a href="user-booking-detail.html" class="btn btn-primary mx-2 mb-2"> <i class="far fa-file mr-2"></i>View your order</a><a href="#" class="btn btn-outline-muted mb-2">Or something else</a></p>
              <p class="mb-5 text-center"><img src="img/illustration/undraw_celebration_0jvk.svg" alt="" style="width: 400px;" class="img-fluid"></p>
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