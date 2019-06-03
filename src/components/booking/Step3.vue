<template>
    <div class="booking-step3">
	<div style="height: 8px; top: 71px;" class="progress rounded-0 sticky-top">
      <div role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
    </div>
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <p class="subtitle text-primary">Book your holiday home</p>
            <h1 class="h2 mb-5"> Confirm and pay <span class="text-muted float-right">Step 3</span>      </h1>
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
              <form action="#">
                <div class="d-flex justify-content-between align-items-end mb-4">
                  <h5 class="mb-0">Pay with your card</h5>
                  <div class="text-muted"><i class="fab fa-cc-amex fa-2x mr-2"> </i><i class="fab fa-cc-visa fa-2x mr-2"> </i><i class="fab fa-cc-mastercard fa-2x"></i></div>
                </div>
                <select name="payment" id="form_payment" data-style="btn-selectpicker" class="selectpicker form-control mb-3">
                  <option value="">Visa •••• 5687</option>
                  <option value="">Mastercard •••• 4569</option>
                </select>
                <button type="button" data-toggle="collapse" data-target="#addNewCard" aria-expanded="false" aria-controls="addNewCard" data-expanded-text="Close" data-collapsed-text="Add a new card" class="btn btn-link btn-collapse pl-0 text-muted">Add a new card</button>
                <div id="addNewCard" class="row collapse">
                  <div class="form-group col-md-6">
                    <label for="card-name" class="form-label">Name on Card</label>
                    <input type="text" name="card-name" placeholder="Name on card" id="card-name" class="form-control">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="card-number" class="form-label">Card Number</label>
                    <input type="text" name="card-number" placeholder="Card number" id="card-number" class="form-control">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="expiry-date" class="form-label">Expiry Date</label>
                    <input type="text" name="expiry-date" placeholder="MM/YY" id="expiry-date" class="form-control">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="cvv" class="form-label">CVC/CVV</label>
                    <input type="text" name="cvv" placeholder="123" id="cvv" class="form-control">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="zip" class="form-label">ZIP</label>
                    <input type="text" name="zip" placeholder="123" id="zip" class="form-control">
                  </div>
                </div>
              </form>
            </div>
            <div class="text-block">
              <h6>Cancellation policy</h6>
              <p class="text-sm text-muted">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of .</p>
              <p class="text-sm text-muted">He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the flounde.</p>
            </div>
            <div class="row form-block flex-column flex-sm-row">
              <div class="col text-center text-sm-left"><a href="step2" class="btn btn-link text-muted"> <i class="fa-chevron-left fa mr-2"></i>Back</a>
              </div>
              <div class="col text-center text-sm-right"><a href="confirmed" class="btn btn-primary px-3">
                   
                  Next step<i class="fa-chevron-right fa ml-2"></i></a></div>
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