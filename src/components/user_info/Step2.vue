<template>
	<div class="user-step2">
    <div style="height: 8px; top: 71px;" class="progress rounded-0 sticky-top">
      <div role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
    </div>
    <section class="py-5">
      <div class="container">
        <p class="subtitle text-primary">Add new listing</p>
        <h1 class="h2 mb-5"> Texts <span class="text-muted float-right">Step 2</span>      </h1>
        <form>
          <div class="row form-block">
            <div class="col-lg-4">
              <h4>Description</h4>
              <p class="text-muted text-sm"> Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
            </div>
            <div class="col-lg-7 ml-auto">
              <div class="form-group mb-5">
                <label for="form_description" class="form-label">Describe your place to guests</label>
                <textarea name="name" id="form_description" rows="5" aria-describedby="descriptionHelp" class="form-control"></textarea><small id="descriptionHelp" class="form-text text-muted mt-2">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. &quot;What's happened to me?&quot; he thought. It wasn't a dream.    </small>
              </div>
              <div class="form-group mb-5">
                <label for="form_availability" class="form-label">Your availability</label>
                <textarea name="name" id="form_availability" rows="3" aria-describedby="availabilityHelp" class="form-control"></textarea><small id="availabilityHelp" class="form-text text-muted mt-2">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.    </small>
              </div>
              <div class="form-group mb-5">
                <label for="form_neighbourhood" class="form-label">Your neighbourhood</label>
                <textarea name="name" id="form_neighbourhood" rows="3" aria-describedby="hoodHelp" class="form-control"></textarea><small id="hoodHelp" class="form-text text-muted mt-2">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.    </small>
              </div>
            </div>
          </div>
          <div class="row form-block flex-column flex-sm-row">
            <div class="col text-center text-sm-left"><router-link to="step1" class="btn btn-link text-muted"><i class="fa-chevron-left fa mr-2"></i>Back</router-link>
            </div>
            <div class="col text-center text-sm-right"><router-link to="step3" class="btn btn-primary px-3">Next step<i class="fa-chevron-right fa ml-2"></i></router-link></div>
          </div>
        </form>
      </div>
    </section>
	</div>
</template>