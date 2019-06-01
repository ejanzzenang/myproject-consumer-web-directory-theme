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
              <div class="col text-center text-sm-left"><a href="booking/step2" class="btn btn-link text-muted"> <i class="fa-chevron-left fa mr-2"></i>Back</a>
              </div>
              <div class="col text-center text-sm-right"><a href="step4" class="btn btn-primary px-3">
                   
                  Next step<i class="fa-chevron-right fa ml-2"></i></a></div>
            </div>
          </div>
          <div class="col-lg-5 pl-xl-5">
            <div class="card border-0 shadow">
              <div class="card-body p-4">
                <div class="text-block pb-3">
                  <div class="media align-items-center">
                    <div class="media-body">
                      <h6> <a href="detail-rooms.html" class="text-reset">Modern Apt - Vibrant Neighborhood</a></h6>
                      <p class="text-muted text-sm mb-0">Entire home in New York</p>
                      <div class="mt-n1"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i>
                      </div>
                    </div><a href="detail-rooms.html"><img src="img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="" width="100" class="ml-3 rounded"></a>
                  </div>
                </div>
                <div class="text-block py-3">
                  <ul class="list-unstyled mb-0">
                    <li class="mb-3"><i class="fas fa-users fa-fw text-muted mr-2"></i>3 guests</li>
                    <li class="mb-0"><i class="far fa-calendar fa-fw text-muted mr-2"></i>Apr 17, 2019 <i class="fas fa-arrow-right fa-fw text-muted mx-3"></i>Apr 18, 2019</li>
                  </ul>
                </div>
                <div class="text-block pt-3 pb-0">
                  <table class="w-100">
                    <tbody>
                      <tr>
                        <th class="font-weight-normal py-2">$432.02 x 1 night</th>
                        <td class="text-right py-2">$432.02</td>
                      </tr>
                      <tr>
                        <th class="font-weight-normal pt-2 pb-3">Service fee</th>
                        <td class="text-right pt-2 pb-3">$67.48</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr class="border-top">
                        <th class="pt-3">Total</th>
                        <td class="font-weight-bold text-right pt-3">$499.50</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div class="card-footer bg-primary-light py-4 border-0">
                <div class="media align-items-center">
                  <div class="media-body">
                    <h6 class="text-primary">Flexible – free cancellation</h6>
                    <p class="text-sm text-primary opacity-8 mb-0">Cancel within 48 hours of booking to get a full refund. <a href="#" class="text-reset ml-3">More details</a></p>
                  </div>
                  <svg class="svg-icon svg-icon svg-icon-light w-3rem h-3rem ml-2 text-primary">
                    <use xlink:href="#diploma-1"> </use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
</template>