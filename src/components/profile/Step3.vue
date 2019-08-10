<template>
  <div class="profile-step3">
    <div style="height: 8px; top: 71px;" class="progress rounded-0 sticky-top">
      <div role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
    </div>
    <section class="py-5">
      <div class="container">
        <p class="subtitle text-primary">Fill up your information</p>
        <h1 class="h2 mb-5">For Non-Filipino Residents<span class="text-muted float-right">Step 3</span></h1>
        <div class="row form-block">
          <div class="col-lg-4">
            <h4>Passport Information</h4>
            <p class="text-muted text-sm">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.</p>
          </div>
          <div class="col-lg-7 ml-auto">
            <div class="form-group">
              <label for="passport_number" class="form-label">Passport Number *</label>
              <input name="passport_number" class="form-control" v-model="passport_number" v-validate="'required'">
              <div v-show="errors.has('passport_number')" class="error">{{ errors.first('passport_number') }}</div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="place_of_issue" class="form-label">Place of Issue *</label>
                  <input name="place_of_issue" class="form-control" v-model="place_of_issue" v-validate="'required'">
                  <div v-show="errors.has('place_of_issue')" class="error">{{ errors.first('place_of_issue') }}</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="birthdate" class="form-label">Expiry Date *</label>
                  <div class="datepicker-container datepicker-container-right">
                    <date-range-picker 
                    v-model="expiry_date" 
                    :options="options" 
                    id="expiry_date" 
                    placeholder="Choose your dates"
                    name='expiry_date' 
                    class="form-control" 
                    v-validate:expiry_date="'required'"/>
                    <div v-show="errors.has('expiry_date')" class="error">{{ errors.first('expiry_date') }}</div>
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
                  <label for="country_region" class="form-label">Country / Region *</label>
                  <v-select :options="country_list" 
                    :searchable="true"
                    :labelTitle="'<select a country>'" 
                    v-model="country_region"
                    name='country_region'
                    v-validate:country_region="'required'"/>
                    <div v-show="errors.has('country_region')" class="error">{{ errors.first('country_region') }}</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="city_state" class="form-label">City/State *</label>
                  <input name="city_state" class="form-control required" v-model="city_state" v-validate="'required'">
                  <div v-show="errors.has('city_state')" class="error">{{ errors.first('city_state') }}</div>
                </div>
              </div>
            </div>
            <!-- Street-->
            <div class="form-group mb-5">
              <label for="address_1" class="form-label">Address 1 *</label>
              <textarea name="address_1" rows="2" aria-describedby="descriptionHelp" class="form-control" v-model="address_1" v-validate:address_1="'required'"></textarea>
              <div v-show="errors.has('address_1')" class="error">{{ errors.first('address_1') }}</div>
            </div>
            <div class="form-group mb-5">
              <label for="address_2" class="form-label">Address 2</label>
              <textarea name="address_2" rows="2" aria-describedby="descriptionHelp" class="form-control" v-model="address_2"></textarea>
              
            </div>
          </div>
        </div>
        <div class="row form-block flex-column flex-sm-row">
          <div class="col text-center text-sm-left">
            <router-link to="step2" class="btn btn-link text-muted"><i class="fa-chevron-left fa mr-2"></i>Back</router-link>
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
  import VSelect from '@/components/custom/vue-bootstrap-select.vue'
  import moment from 'moment'
  var cognitoUserPoolId = process.env.VUE_APP_USER_POOL_ID;
  var cognitoUserPoolClientId = process.env.VUE_APP_USER_POOL_CLIENT_ID; 
  var awsRegion = process.env.VUE_APP_AWS_REGION;

  export default {
      name: 'profile-step3',
      components: {
        VSelect
      },
      data() {
        return {
          passport_number: '',
          expiry_date: '06/10/2019',
          country_region: '',
          place_of_issue: '',
          city_state: '',
          address_1: '',
          address_2: '',
          country_list: [],
          options: {
              singleDatePicker: true,
              minYear: 2019,
              maxYear: +moment().format('YYYY')
          }
        }
      },
      methods: {
        updateUser: function(){
            var attributeList = []  
  
            var input_list = 
              [
                {
                   Name : 'custom:passport_number',
                   Value : this.passport_number
                },
                {
                   Name : 'custom:passport_place_issue',
                   Value : this.place_of_issue
                },
                {
                   Name : 'custom:passport_exp_date',
                   Value : this.expiry_date
                },
                {
                   Name : 'custom:f_country_region',
                   Value : this.country_region
                },
                {
                   Name : 'custom:f_city_state',
                   Value : this.city_state
                },
                {
                   Name : 'custom:f_address_1',
                   Value : this.address_1
                },
                {
                   Name : 'custom:f_address_2',
                   Value : this.address_2
                }
              ]
                
            input_list.forEach(function(element){
                attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute(element));
            });
  
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
            console.log(this.passport_number)
            console.log(this.expiry_date)
            console.log(this.country_region)
            console.log(this.city_state)
            console.log(this.place_of_issue)
            console.log(this.address_1)
            console.log(this.address_2) 
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
        validate: function() {
          //validates all fields
          this.$validator.validateAll().then((result) => {
            if (result) {
              // update user if successful
              this.updateUser()

              var navigate = this.$router;
              navigate.push('step4')
              return;
            }
            alert(result);
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

                  // *Note: cognito user attributes are not the same name as the v-model variables
                  this.passport_number = temp_info['custom:passport_number']
                  this.expiry_date = temp_info['custom:passport_exp_date']
                  this.country_region = temp_info['custom:f_country_region']
                  this.place_of_issue = temp_info['custom:passport_place_issue']
                  this.city_state = temp_info['custom:f_city_state']
                  this.address_1 = temp_info['custom:f_address_1']
                  this.address_2 = temp_info['custom:f_address_2']

              });
          }
        }  
      },
      created: function() {
        this.getCountriesList();
        this.getUserData();
      }
    }
  
  
  
</script>