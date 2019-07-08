<template>
  <div class="profile-step2">
    <div style="height: 8px; top: 71px;" class="progress rounded-0 sticky-top">
      <div role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
    </div>
    <section class="py-5">
      <div class="container">
        <p class="subtitle text-primary">Fill up your information</p>
        <h1 class="h2 mb-5">Travel Information<span class="text-muted float-right">Step 2</span></h1>
        <div class="row form-block">
          <div class="col-lg-4">
            <h4>Travel Information</h4>
            <p class="text-muted text-sm"> Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
          </div>
          <div class="col-lg-7 ml-auto">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">Mode of Travel *</label>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="mode_of_travel_0" name="mode_of_travel" class="custom-control-input" v-model="mode_of_travel" value="Air">
                    <label for="mode_of_travel_0" class="custom-control-label">Air</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="mode_of_travel_1" name="mode_of_travel" class="custom-control-input" v-model="mode_of_travel" value="Land">
                    <label for="mode_of_travel_1" class="custom-control-label">Land</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="mode_of_travel_2" name="mode_of_travel" class="custom-control-input" v-model="mode_of_travel" value="Sea">
                    <label for="mode_of_travel_2" class="custom-control-label">Sea</label>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">Purpose of Travel *</label>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="purpose_of_travel_0" name="purpose_of_travel" class="custom-control-input" v-model="purpose_of_travel" value="Holiday">
                    <label for="purpose_of_travel_0" class="custom-control-label">Holiday</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="purpose_of_travel_1" name="purpose_of_travel" class="custom-control-input" v-model="purpose_of_travel" value="Visit Friend/Relative">
                    <label for="purpose_of_travel_1" class="custom-control-label">Visit Friend/Relative</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="purpose_of_travel_2" name="purpose_of_travel" class="custom-control-input" v-model="purpose_of_travel" value="Government Mission">
                    <label for="purpose_of_travel_2" class="custom-control-label">Government Mission</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="purpose_of_travel_3" name="purpose_of_travel" class="custom-control-input" v-model="purpose_of_travel" value="Incentive">
                    <label for="purpose_of_travel_3" class="custom-control-label">Incentive</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="purpose_of_travel_4" name="purpose_of_travel" class="custom-control-input" v-model="purpose_of_travel" value="Business">
                    <label for="purpose_of_travel_4" class="custom-control-label">Business</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="purpose_of_travel_5" name="purpose_of_travel" class="custom-control-input" v-model="purpose_of_travel" value="Other">
                    <label for="purpose_of_travel_5" class="custom-control-label">Other</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">Number of Visits to Boracay *</label>
                  <input name="name" id="visits" class="form-control" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">Intended Length of Stay (Nights) *</label>
                  <input name="name" id="form_city" class="form-control" required>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label">Package Tour *</label>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="tour_0" name="tour" class="custom-control-input" required>
                    <label for="tour_0" class="custom-control-label">Yes</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="tour_1" name="tour" class="custom-control-input" required>
                    <label for="tour_1" class="custom-control-label">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row form-block">
          <div class="col-lg-4">
            <h4>Accomocation in Boracay</h4>
            <p class="text-muted text-sm">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.</p>
          </div>
          <div class="col-lg-7 ml-auto">
            <div class="form-group mb-5">
              <label for="form_neighbourhood" class="form-label">Resort/Cottage Name/Address of Relative or Friend/Other *</label>
              <textarea name="name" id="form_neighbourhood" rows="2" aria-describedby="hoodHelp" class="form-control" required></textarea><small id="hoodHelp" class="form-text text-muted mt-2">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</small>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="form_city" class="form-label">Place Visited before Boracay *</label>
                  <input name="name" id="form_city" class="form-control" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="form_state" class="form-label">Place Visited after Boracay *</label>
                  <input name="name" id="form_state" class="form-control" required>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row form-block flex-column flex-sm-row">
          <div class="col text-center text-sm-left">
            <router-link to="step1" class="btn btn-link text-muted"><i class="fa-chevron-left fa mr-2"></i>Back</router-link>
          </div>
          <div class="col text-center text-sm-right"><button type='submit' class="btn btn-primary px-3">Next step<i class="fa-chevron-right fa ml-2"></i></button></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
  import * as AWS from 'aws-sdk';
  import VSelect from '@/components/custom/vue-bootstrap-select.vue'
  import moment from 'moment'
  
  export default {
      name: 'profile-step2',
      components: {
        VSelect
      },
      data() {
        return {
          mode_of_travel: '',
          purpose_of_travel : ''
        }
      },
      methods: {
        updateUser: function(){
            var attributeList = []  
  
            var input_list = 
              [
                {
                   Name : 'custom:first_name',
                   Value : this.first_name
                },
                {
                   Name : 'custom:middle_name',
                   Value : this.middle_name
                },
                {
                   Name : 'custom:last_name',
                   Value : this.last_name
                },
                {
                   Name : 'custom:gender',
                   Value : this.gender
                },
                {
                   Name : 'custom:birth_date',
                   Value : this.birth_date
                },
                {
                   Name : 'custom:country_of_residence',
                   Value : this.country_of_residence
                },
                {
                   Name : 'custom:country_of_birth',
                   Value : this.country_of_birth
                },
                {
                   Name : 'custom:occupation',
                   Value : this.occupation
                },
                {
                   Name : 'custom:locality',
                   Value : this.locality
                },
                {
                   Name : 'custom:civil_status',
                   Value : this.civil_status                
                }
              ]
                
            input_list.forEach(function(element){
                attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute(element));
            });
  
            var cognitoUserPoolId = 'ap-southeast-1_GUM0JtMJC';  // example: 'us-east-1_abcd12345'
            var cognitoUserPoolClientId = '5hvshfmgob5beudv0ukdj0ej'; // example: 
  
            var data = { 
              UserPoolId : cognitoUserPoolId,
              ClientId : cognitoUserPoolClientId
            };
  
            var userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
            var cognitoUser = userPool.getCurrentUser();
  
  
            if (cognitoUser != null) {
                cognitoUser.getSession(function(err, session) {
                    if (err) {
                        alert(err);
                        return;
                    }
                    console.log('session validity: ' + session.isValid());
                });
            }
            
            cognitoUser.updateAttributes(attributeList, function(err, result) {
                if (err) {
                    console.log(err);
                    alert(err.message);
                    return;
                }
                console.log('call result: ' + result);
            });
        },
        printData: function(){
            console.log(this.first_name)
            console.log(this.last_name)
            console.log(this.middle_name)
            console.log(this.gender)
            console.log(this.birth_date)
            console.log(this.country_of_birth)
            console.log(this.country_of_residence)
            console.log(this.occupation)
            console.log(this.locality)
            console.log(this.civil_status)
  
        },
        getCountriesList: function() {
          this.$http.get('https://restcountries.eu/rest/v1/all').then(result=> {
            result.data
            var temp = []
  
            result.data.forEach(function(element){
              temp.push(element.name)
            })
  
            this.country_list = temp
  
          })
        },
      },
      created: function() {
        this.getCountriesList()
      },
      beforeRouteLeave(to, from, next) {
        //validates all fields
        this.$validator.validateAll().then((result) => {
          if (result) {
            next();
            return;
          }
        alert('Correct the errors!');
        });
      }
    }
</script>