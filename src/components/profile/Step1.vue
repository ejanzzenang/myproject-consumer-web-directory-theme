<template>
	<div class="profile-step1">
      <div style="height: 8px; top: 71px;" class="progress rounded-0 sticky-top">
        <div role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
      </div>
      <section class="py-5">
      <div class="container">
        <p class="subtitle text-primary">Fill up your information</p>
        <h1 class="h2 mb-5"> Basic information <span class="text-muted float-right">Step 1</span></h1>
        <form id="step1-form" action="/profile/step2">
          <div class="row form-block">
            <div class="col-lg-4">
              <h4>Basic</h4>
              <p class="text-muted text-sm">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.</p>
            </div>
            <div class="col-lg-7 ml-auto">
              <div class="form-group">
                <label for="form_city" class="form-label">First Name *</label>
                <input name="name" id="form_city" class="form-control" ref="first_name" required>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="form_city" class="form-label">Middle Name</label>
                    <input name="name" id="form_city" class="form-control" ref="middle_name" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="form_state" class="form-label">Last Name *</label>
                    <input name="name" id="form_state" class="form-control" ref="last_name" required>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                  <label class="form-label">Gender *</label>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="gender_0" name="gender" class="custom-control-input" value="Male" v-model="gender" required>
                    <label for="gender_0" class="custom-control-label">Male</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="gender_1" name="gender" class="custom-control-input" value="Female" v-model="gender" required>
                    <label for="gender_1" class="custom-control-label">Female</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="gender_2" name="gender" class="custom-control-input" value="Others" v-model="gender" required>
                    <label for="gender_2" class="custom-control-label">Others</label>
                  </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="birthdate" class="form-label">Birth Date *</label>
                    <div class="datepicker-container datepicker-container-right">
                      <date-range-picker v-model="myDate" :options="options" id="bookingDate" placeholder="Choose your dates" required='required' class="form-control"/>
                    </div>
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
                <select name="country" id="form_country_of_residence" data-style="btn-selectpicker" title=" " data-live-search="true" class="selectpicker form-control" v-model="country_of_residence" required>
                  <option v-for="country in country_list" v-bind:value="country.name">{{ country.name }}</option>
                </select>
              </div>
              <div class="row">
              <div class="col-md-6"> 
            <div class="form-group">
                <label for="form_country_of_birth" class="form-label">Country of Birth *</label>
                <select name="country" id="form_country_of_birth" data-style="btn-selectpicker" title=" " data-live-search="true" class="selectpicker form-control" v-model="country_of_birth" required>
                   <option v-for="country in country_list" v-bind:value="country.name">{{ country.name }}</option>
                </select>
              </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="form_state" class="form-label">Occupation *</label>
                    <input name="name" id="form_state" class="form-control" ref="occupation" required>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                  <label class="form-label">Locality</label>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="locality_0" name="locality" class="custom-control-input" v-model="locality" value="Foreign" required>
                    <label for="locality_0" class="custom-control-label">Foreign</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="locality_1" name="locality" class="custom-control-input" v-model="locality" value="Local" required>
                    <label for="locality_1" class="custom-control-label">Local</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="locality_2" name="locality" class="custom-control-input" v-model="locality" value="Aklanon" required>
                    <label for="locality_2" class="custom-control-label">Aklanon</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="locality_3" name="locality" class="custom-control-input" v-model="locality" value="Non-Aklanon" required>
                    <label for="locality_3" class="custom-control-label">Non-Aklanon</label>
                  </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label">Civil Status</label>
                    <div class="custom-control custom-radio">
                      <input type="radio" id="civil_status_0" name="civil_status" class="custom-control-input" v-model="civil_status" required>
                      <label for="civil_status_0" class="custom-control-label">Senior Citizen</label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input type="radio" id="civil_status_1" name="civil_status" class="custom-control-input" v-model="civil_status" required>
                      <label for="civil_status_1" class="custom-control-label">Adult</label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input type="radio" id="civil_status_2" name="civil_status" class="custom-control-input" v-model="civil_status" required>
                      <label for="civil_status_2" class="custom-control-label">Child of 12 Years Old or Below</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row form-block flex-column flex-sm-row">
            <div class="col text-center text-sm-left"><a href="/profile/step0" class="btn btn-link text-muted"><i class="fa-chevron-left fa mr-2"></i>Back</a>
            </div>
            <div class="col text-center text-sm-right">
              <button type="submit" class="btn btn-primary px-3" v-on:click="updateUser">Next step<i class="fa-chevron-right fa ml-2"></i></button>
            </div>
          </div>
        </form>
      </div>
    </section>
	</div>
</template>
<script>
  import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
  import * as AWS from 'aws-sdk';

  import moment from 'moment'

  export default {
      name: 'profile-step1',
      components: {
      },
      data() {
        return {
          myDate: '06/10/2019',
          gender: '',
          locality: '',
          civil_status: '',
          country_list: '',
          country_of_birth: '',
          country_of_residence: '',
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
                   Name : 'custom:first_name',
                   Value : this.$refs.first_name.value
                },
                {
                   Name : 'custom:middle_name',
                   Value : this.$refs.middle_name.value
                },
                {
                   Name : 'custom:last_name',
                   Value : this.$refs.last_name.value
                },
                {
                   Name : 'custom:gender',
                   Value : this.gender
                },
                {
                   Name : 'custom:birth_date',
                   Value : this.myDate
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
                   Value : this.$refs.occupation.value
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
                    alert(err);
                    return;
                }
                console.log('call result: ' + result);
            });
        },
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


