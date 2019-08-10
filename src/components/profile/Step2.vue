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
                    <input type="radio" id="mode_of_travel_0" name="mode_of_travel" class="custom-control-input" v-model="mode_of_travel" value="Air" v-validate="'required'">
                    <label for="mode_of_travel_0" class="custom-control-label">Air</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="mode_of_travel_1" name="mode_of_travel" class="custom-control-input" v-model="mode_of_travel" value="Land" v-validate="'required'">
                    <label for="mode_of_travel_1" class="custom-control-label">Land</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="mode_of_travel_2" name="mode_of_travel" class="custom-control-input" v-model="mode_of_travel" value="Sea" v-validate="'required'">
                    <label for="mode_of_travel_2" class="custom-control-label">Sea</label>
                  </div>
                  <div v-show="errors.has('mode_of_travel')" class="error">{{ errors.first('mode_of_travel') }}</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">Purpose of Travel *</label>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="purpose_of_travel_0" name="purpose_of_travel" class="custom-control-input" v-model="purpose_of_travel" value="Holiday" v-validate="'required'">
                    <label for="purpose_of_travel_0" class="custom-control-label">Holiday</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="purpose_of_travel_1" name="purpose_of_travel" class="custom-control-input" v-model="purpose_of_travel" value="Visit Friend/Relative" v-validate="'required'">
                    <label for="purpose_of_travel_1" class="custom-control-label">Visit Friend/Relative</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="purpose_of_travel_2" name="purpose_of_travel" class="custom-control-input" v-model="purpose_of_travel" value="Government Mission" v-validate="'required'">
                    <label for="purpose_of_travel_2" class="custom-control-label">Government Mission</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="purpose_of_travel_3" name="purpose_of_travel" class="custom-control-input" v-model="purpose_of_travel" value="Incentive" v-validate="'required'">
                    <label for="purpose_of_travel_3" class="custom-control-label">Incentive</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="purpose_of_travel_4" name="purpose_of_travel" class="custom-control-input" v-model="purpose_of_travel" value="Business" v-validate="'required'">
                    <label for="purpose_of_travel_4" class="custom-control-label">Business</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="purpose_of_travel_5" name="purpose_of_travel" class="custom-control-input" v-model="purpose_of_travel" value="Other" v-validate="'required'">
                    <label for="purpose_of_travel_5" class="custom-control-label">Other</label>
                  </div>
                <div v-show="errors.has('purpose_of_travel')" class="error">{{ errors.first('purpose_of_travel') }}</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">Number of Visits to Boracay *</label>
                  <input name="num_visits_bora" id="visits" class="form-control" v-model="num_visits_bora" v-validate="'required'">
                  <div v-show="errors.has('num_visits_bora')" class="error">{{ errors.first('num_visits_bora') }}</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label" >Intended Length of Stay (Nights) *</label>
                  <input name="len_stay_bora" id="form_city" class="form-control" v-model="len_stay_bora" v-validate="'required'">
                <div v-show="errors.has('len_stay_bora')" class="error">{{ errors.first('len_stay_bora') }}</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label">Package Tour *</label>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="package_tour_0" name="package_tour" class="custom-control-input" v-model="package_tour" value="Yes" v-validate="'required'">
                    <label for="package_tour_0" class="custom-control-label">Yes</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="package_tour_1" name="package_tour" class="custom-control-input" v-model="package_tour" value="No" v-validate="'required'">
                    <label for="package_tour_1" class="custom-control-label">No</label>
                  </div>
                <div v-show="errors.has('package_tour')" class="error">{{ errors.first('package_tour') }}</div>
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
              <label for="address_borac" class="form-label">Resort/Cottage Name/Address of Relative or Friend/Other *</label>
              <textarea name="address_bora" id="address_bora" rows="2" aria-describedby="hoodHelp" class="form-control" v-model="address_bora" v-validate:address_bora="'required'"></textarea>
              <div v-show="errors.has('address_bora')" class="error">{{ errors.first('address_bora') }}</div>
              <small id="hoodHelp" class="form-text text-muted mt-2">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</small>
              
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="form_city" class="form-label">Place Visited before Boracay </label>
                  <input name="name" id="form_city" class="form-control" v-model="place_vis_bef_bora">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="form_state" class="form-label">Destination after Boracay *</label>
                  <input name="destination_after_boracay" id="form_state" class="form-control" v-model="dest_after_bora" v-validate="'required'">
                  <div v-show="errors.has('destination_after_boracay')" class="error">{{ errors.first('destination_after_boracay') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row form-block flex-column flex-sm-row">
          <div class="col text-center text-sm-left">
            <router-link to="step1" class="btn btn-link text-muted"><i class="fa-chevron-left fa mr-2"></i>Back</router-link>
          </div>
          <div class="col text-center text-sm-right">
            <button @click="validate" class="btn btn-primary px-3">Next step<i class="fa-chevron-right fa ml-2"></i></button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
  import * as AWS from 'aws-sdk';
  import moment from 'moment'
  var cognitoUserPoolId = process.env.VUE_APP_USER_POOL_ID;
  var cognitoUserPoolClientId = process.env.VUE_APP_USER_POOL_CLIENT_ID; 
  var awsRegion = process.env.VUE_APP_AWS_REGION;

  export default {
      name: 'profile-step2',
      components: {
      },
      data() {
        return {
          mode_of_travel: '',
          purpose_of_travel : '',
          num_visits_bora: '',
          len_stay_bora: '',
          package_tour: '',
          address_bora: '',
          place_vis_bef_bora: '',
          dest_after_bora: ''
        }
      },
      methods: {
        updateUser: function(){
            var attributeList = []  
            console.log('Updating user...')
            var input_list = 
              [
                {
                   Name : 'custom:mode_of_travel',
                   Value : this.mode_of_travel
                },
                {
                   Name : 'custom:purpose_of_travel',
                   Value : this.purpose_of_travel
                },
                {
                   Name : 'custom:num_visits_bora',
                   Value : this.num_visits_bora
                },
                {
                   Name : 'custom:len_stay_bora',
                   Value : this.len_stay_bora
                },
                {
                   Name : 'custom:package_tour',
                   Value : this.package_tour
                },
                {
                   Name : 'custom:address_bora',
                   Value : this.address_bora
                },
                {
                   Name : 'custom:place_vis_bef_bora',
                   Value : this.place_vis_bef_bora
                },
                {
                   Name : 'custom:dest_after_bora',
                   Value : this.dest_after_bora
                }
              ]

            console.log(input_list)
                
            input_list.forEach(function(element){
                attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute(element));
            });
    
            var data = { 
              UserPoolId : cognitoUserPoolId,
              ClientId : cognitoUserPoolClientId
            };
            
            console.log('Getting cognito user')
            var userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
            var cognitoUser = userPool.getCurrentUser();
            
            console.log(cognitoUser)
  
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
            console.log(this.mode_of_travel)
            console.log(this.purpose_of_travel)
            console.log(this.num_visits_bora)
            console.log(this.len_stay_bora)
            console.log(this.package_tour)
            console.log(this.address_bora)
            console.log(this.place_vis_bef_bora)
            console.log(this.dest_after_bora)  
        },
        validate: function() {
          //validates all fields
          this.$validator.validateAll().then((result) => {
            if (result) {
              // update user if successful
              this.updateUser()

              var navigate = this.$router;
              navigate.push('step3')
              return;
            }
            alert('Correct the errors!');
          });
        },
        getUserData() {

          function fetchUserData(cognitoUser) {
            return new Promise(function(resolve, reject) {
              cognitoUser.getSession(function(err, session) {
                if (err) {
                  alert('Fetch user data: ' + err);
                  return;
                }
                console.log('session validity: ' + session.isValid());

                cognitoUser.getUserAttributes(function(err, result) {
                  if (err) {
                    console.log(err)
                    alert(err);
                    return;
                  }
                  resolve(result)
                });
              });
            });
          }

          var temp_info = {};

          var data = {
            UserPoolId: cognitoUserPoolId,
            ClientId: cognitoUserPoolClientId
          }


          var userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
          var cognitoUser = userPool.getCurrentUser();
          console.log(cognitoUser);

          if (cognitoUser != null) {

            var user_data = fetchUserData(cognitoUser)
              .then(result => {

                // transform user attribute data into a dict
                for (var i = 0; i < result.length; i++) {
                  let name = result[i].getName()
                  let val = result[i].getValue()
                  var obj = {
                    [name]: val
                  }
                  $.extend(temp_info, obj)
                }

              }).then(res => {
                  this.mode_of_travel = temp_info['custom:mode_of_travel']
                  this.purpose_of_travel = temp_info['custom:purpose_of_travel']
                  this.num_visits_bora = temp_info['custom:num_visits_bora']
                  this.len_stay_bora = temp_info['custom:len_stay_bora']
                  this.package_tour = temp_info['custom:package_tour']
                  this.address_bora = temp_info['custom:address_bora']
                  this.place_vis_bef_bora = temp_info['custom:place_vis_bef_bora']
                  this.dest_after_bora = temp_info['custom:dest_after_bora']
              })
          }
        }    
      },
      created(){
        this.getUserData();
      }

    }
</script>