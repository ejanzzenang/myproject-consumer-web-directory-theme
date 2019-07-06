<template>
	<div class="profile-step3">
    <div style="height: 8px; top: 71px;" class="progress rounded-0 sticky-top">
      <div role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
    </div>
	  <section class="py-5">
      <div class="container">
        <p class="subtitle text-primary">Fill up your information</p>
        <h1 class="h2 mb-5">For Non-Filipino Residents<span class="text-muted float-right">Step 3</span></h1>
        <form id='form-step3' action='/profile/step4'>
            <div class="row form-block">
            <div class="col-lg-4">
              <h4>Passport Information</h4>
              <p class="text-muted text-sm">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.</p>
            </div>
            <div class="col-lg-7 ml-auto">
              <div class="form-group">
                <label for="form_city" class="form-label">Passport Number *</label>
                <input name="name" id="form_city" class="form-control" required>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="form_city" class="form-label">Place of Issue *</label>
                    <input name="name" id="form_city" class="form-control" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="birthdate" class="form-label">Expiry Date *</label>
                    <div class="datepicker-container datepicker-container-right">
                      <date-range-picker v-model="myDate" :options="options" id="bookingDate" placeholder="Choose your dates" required="required" class="form-control"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row form-block">
            <div class="col-lg-4">
              <h4>Location</h4>
              <p class="text-muted text-sm">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
            </div>
            <div class="col-lg-7 ml-auto">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="form_country_region" class="form-label">Country / Region *</label>
                    <select name="country_region" id="form_country_region" data-style="btn-selectpicker" title=" " data-live-search="true" class="selectpicker form-control" v-model="country_region" required>
                      <option v-for="country in country_list" v-bind:value="country.name">{{ country.name }}</option>
                    </select>
                     </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="form_city" class="form-label">City/State *</label>
                    <input name="name" id="form_city" class="form-control required">
                  </div>
                </div>                
              </div>

              <!-- Street-->
              <div class="form-group mb-5">
                <label for="form_description" class="form-label">Address 1 *</label>
                <textarea name="name" id="form_description" rows="2" aria-describedby="descriptionHelp" class="form-control" required></textarea>
              </div>
              <div class="form-group mb-5">
                <label for="form_description" class="form-label">Address 2</label>
                <textarea name="name" id="form_description" rows="2" aria-describedby="descriptionHelp" class="form-control" required></textarea>
              </div>
            </div>
          </div>
         <div class="row form-block flex-column flex-sm-row">
            <div class="col text-center text-sm-left"><a href="/profile/step2" class="btn btn-link text-muted"><i class="fa-chevron-left fa mr-2"></i>Back</a>
            </div>
            <div class="col text-center text-sm-right"><button type='submit' class="btn btn-primary px-3">Next step<i class="fa-chevron-right fa ml-2"></i></button></div>
        </div>
        </form>
      </div>
    </section>
	</div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'profile-step3',
    components: {
    },
    data() {
      return {
        myDate: "06/10/2019",
        country_list: null,
        options: {
          singleDatePicker: true,
          minYear: 2019,
          maxYear: +moment().format("YYYY")
        }
      }
    },
    methods: {
      printData: function(){
          console.log(this.$refs.first_name.value)
          console.log(this.$refs.last_name.value)
          console.log(this.$refs.middle_name.value)
          console.log(this.gender)
          console.log(this.country_of_birth)
          console.log(this.country_of_residence)
          console.log(this.$refs.occupation.value)
          console.log(this.locality)
          console.log(this.civil_status)
      },
      getCountriesList: function() {
        this.$http.get('https://restcountries.eu/rest/v1/all').then(result=> {
          this.country_list = result.data
        })
      }
    },
    created: function() {
      this.getCountriesList()
    }
  }

</script>