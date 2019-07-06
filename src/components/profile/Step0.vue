<template>
	<div class="profile-step0">
	    <div style="height: 8px; top: 71px;" class="progress rounded-0 sticky-top">
	      <div role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
	    </div>
		<section class="py-5 py-lg-7">
	      <div class="container">
       		<form id="residency" action='/profile/step1'>
		        <div class="row">
		          <div class="col-lg-5">
		            <p class="subtitle text-primary">COMPLETE YOUR PROFILE</p>
		            <h1 class="h2 mb-5">Let's get started!</h1>
		            <p class="text-muted">Are you a Philippine Resident?</p>
	              	<div class="row">
	                <div class="col-md-12">
	                  <div class="form-group">
	                  <div class="custom-control custom-radio">
	                    <input type="radio" id="residency_0" name="locality" class="custom-control-input" required>
	                    <label for="residency_0" class="custom-control-label">I am a Philippine Resident</label>
	                  </div>
	                  <div class="custom-control custom-radio">
	                    <input type="radio" id="residency_1" name="locality" class="custom-control-input required">
	                    <label for="residency_1" class="custom-control-label">I am a Non-Philippine Resident</label>
	                  </div>

	                  </div>
	                </div>
	              </div>
		            <p class="mb-5 mb-lg-0"><button type='submit' class="btn btn-primary px-3">Next step<i class="fa-chevron-right fa ml-2"></i></button></p>
		          </div>
		          <div class="col-lg-5 ml-auto d-flex align-items-center"><img src="../../assets/img/illustration/undraw_celebration_0jvk.svg" alt="" style="width: 400px;" class="img-fluid"></div>
		        </div>
	    	</form>
	      </div>
    </section>
	</div>
</template>
<script>
	
export default {
      name: 'profile-step0',
      components: {
      },
      data() {
        return {
          
         }
      },
      methods: {

      }
    }
	
</script>




