<template>
  <div class="profile-step1">
    <div style="height: 8px; top: 71px;" class="progress rounded-0 sticky-top">
      <div role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
    </div>
    <section class="py-5">
      <div class="container">
        <p class="subtitle text-primary">Fill up your information</p>
        <h1 class="h2 mb-5"> Basic information <span class="text-muted float-right">Step 1</span></h1>
          <div class="row form-block">
            <div class="col-lg-4">
              <h4>Basic</h4>
              <p class="text-muted text-sm">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.</p>
            </div>
            <div class="col-lg-7 ml-auto">
              <div class="form-group">
                <label for="form_city" class="form-label">First Name *</label>
                <input name="first_name" id="form_city" class="form-control" v-validate="'required'" v-model="first_name">
                <div v-show="errors.has('first_name')" class="error">{{ errors.first('first_name') }}</div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="form_city" class="form-label">Middle Name</label>
                    <input name="middle_name" id="form_city" class="form-control" v-model="middle_name">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="form_state" class="form-label">Last Name *</label>
                    <input name="last_name" id="form_state" class="form-control" v-model="last_name" v-validate="'required'">
                    <div v-show="errors.has('last_name')" class="error">{{ errors.first('last_name') }}</div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label">Gender *</label>
                    <div class="custom-control custom-radio">
                      <input type="radio" id="gender_0" name="gender" class="custom-control-input" value="Male" v-model="gender" v-validate="'required'">
                      <label for="gender_0" class="custom-control-label">Male</label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input type="radio" id="gender_1" name="gender" class="custom-control-input" value="Female" v-model="gender" v-validate="'required'">
                      <label for="gender_1" class="custom-control-label">Female</label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input type="radio" id="gender_2" name="gender" class="custom-control-input" value="Others" v-model="gender" v-validate="'required'">
                      <label for="gender_2" class="custom-control-label">Others</label>
                    </div>
                  </div>
                  <div v-show="errors.has('gender')" class="error">{{ errors.first('gender') }}</div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="birth_date" class="form-label">Birth Date *</label>

                      <!-- need to format the date upon @input -->
                      <!-- https://github.com/charliekassel/vuejs-datepicker/issues/692 -->
                      
                      <datepicker v-model="birth_date" 
                                  name="birth_date"
                                  v-validate:birth_date="'required'"
                                  :bootstrap-styling="true"
                                  format="yyyy-MM-dd"
                                  @input="birth_date = fixDate($event)"/>

                      <div v-show="errors.has('birth_date')" class="error">{{ errors.first('birth_date') }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row form-block">
            <div class="col-lg-4">
              <h4>Additional Information</h4>
              <p class="text-muted text-sm">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.</p>
            </div>
            <div class="col-lg-7 ml-auto">
              <div class="form-group">
                <label for="form_country_of_residence" class="form-label">Country of Residence *</label>

                <vue-select 
                  v-model="country_of_residence" 
                  :options="country_list"
                  :clearable="false"
                  placeholder="Choose a Country"
                  v-validate:country_of_residence="'required'"
                  name='country_of_residence'
                  />

                <div v-show="errors.has('country_of_residence')" class="error">{{ errors.first('country_of_residence') }}</div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="form_country_of_birth" class="form-label">Country of Birth *</label>

                    <vue-select 
                      v-model="country_of_birth" 
                      :options="country_list"
                      :clearable="false"
                      placeholder="Choose a Country"
                      v-validate:country_of_birth="'required'"
                      name='country_of_birth'
                      />


                    <div v-show="errors.has('country_of_birth')" class="error">{{ errors.first('country_of_birth') }}</div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="form_state" class="form-label">Occupation *</label>
                    <input name="occupation" id="form_state" class="form-control" ref="occupation" v-model="occupation" v-validate="'required'">
                    <div v-show="errors.has('occupation')" class="error">{{ errors.first('occupation') }}</div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label">Locality *</label>
                    <div class="custom-control custom-radio">
                      <input type="radio" id="locality_0" name="locality" class="custom-control-input" v-model="locality" value="Foreign" v-validate="'required'">
                      <label for="locality_0" class="custom-control-label">Foreign</label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input type="radio" id="locality_1" name="locality" class="custom-control-input" v-model="locality" value="Local" v-validate="'required'">
                      <label for="locality_1" class="custom-control-label">Local</label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input type="radio" id="locality_2" name="locality" class="custom-control-input" v-model="locality" value="Aklanon" v-validate="'required'">
                      <label for="locality_2" class="custom-control-label">Aklanon</label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input type="radio" id="locality_3" name="locality" class="custom-control-input" v-model="locality" value="Non-Aklanon" v-validate="'required'">
                      <label for="locality_3" class="custom-control-label">Non-Aklanon</label>
                    </div>
                  </div>
                  <div v-show="errors.has('locality')" class="error">{{ errors.first('locality') }}</div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label">Status *</label>
                    <div class="custom-control custom-radio">
                      <input type="radio" id="status_0" name="status" class="custom-control-input" v-model="status" value="Senior Citizen" v-validate="'required'">
                      <label for="status_0" class="custom-control-label">Senior Citizen</label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input type="radio" id="status_1" name="status" class="custom-control-input" v-model="status" value="Child of 12" v-validate="'required'">
                      <label for="status_1" class="custom-control-label">Child of 12 Years Old or Below</label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input type="radio" id="status_2" name="status" class="custom-control-input" v-model="status" value="Other" v-validate="'required'">
                      <label for="status_2" class="custom-control-label">Other</label>
                    </div>
                  </div>
                  <div v-show="errors.has('status')" class="error">{{ errors.first('status') }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="row form-block flex-column flex-sm-row">
            <div class="col text-center text-sm-left">
              <router-link to="step0" class="btn btn-link text-muted"><i class="fa-chevron-left fa mr-2"></i>Back</router-link>
            </div>
            <div class="col text-center text-sm-right">
              <button class="btn btn-primary px-3" @click="validate">Next step<i class="fa-chevron-right fa ml-2"></i></button>
            </div>
          </div>

      </div>
    </section>
  </div>
</template>
<script>
  import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
  import * as AWS from 'aws-sdk';
  import vueSelect from 'vue-select'
  import Datepicker from 'vuejs-datepicker';
  import moment from 'moment';
  var cognitoUserPoolId = process.env.VUE_APP_USER_POOL_ID;
  var cognitoUserPoolClientId = process.env.VUE_APP_USER_POOL_CLIENT_ID; 
  var awsRegion = process.env.VUE_APP_AWS_REGION;

  export default {
      name: 'profile-step1',
      components: {
        Datepicker,
        vueSelect
      },
      data() {
        return {
          birth_date: '',
          first_name: '',
          middle_name: '',
          last_name: '', 
          gender: '',
          locality: '',
          status: '',
          country_list: [] ,
          country_of_birth: '',
          occupation: '',
          country_of_residence: ''
        }
      },
      methods: {
        updateUser: function(){
            var attributeList = [];  
            
            var input_list = 
              [
                {
                   Name : 'given_name',
                   Value : this.first_name
                },
                {
                   Name : 'middle_name',
                   Value : this.middle_name
                },
                {
                   Name : 'family_name',
                   Value : this.last_name
                },
                {
                   Name : 'gender',
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
                   Name : 'custom:status',
                   Value : this.status                
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
            console.log(this.first_name)
            console.log(this.last_name)
            console.log(this.middle_name)
            console.log(this.gender)
            console.log(this.birth_date)
            console.log(this.country_of_birth)
            console.log(this.country_of_residence)
            console.log(this.occupation)
            console.log(this.locality)
            console.log(this.status)
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
              navigate.push('step2')
              return;
            }
            alert('Correct the errors!');
          });
        },
        getUserData: function() {

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
                  this.first_name = temp_info['given_name']
                  this.last_name = temp_info['family_name']
                  this.middle_name = temp_info['middle_name']
                  this.gender = temp_info['gender']
                  this.birth_date = temp_info['custom:birth_date']
                  this.country_of_birth = temp_info['custom:country_of_birth']
                  this.country_of_residence = temp_info['custom:country_of_residence']
                  this.occupation = temp_info['custom:occupation']
                  this.locality = temp_info['custom:locality']
                  this.status = temp_info['custom:status']
              })
          }
        },
        fixDate(event){
          return moment(event).format('YYYY-MM-DD');
        }
      },
      created: function() {
        this.getCountriesList()
        this.getUserData()
      }
    }
</script>