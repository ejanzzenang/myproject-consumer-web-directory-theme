<template>
  <div class="profile-step0">
    <div style="height: 8px; top: 71px;" class="progress rounded-0 sticky-top">
      <div role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
    </div>
    <section class="py-5 py-lg-7">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <p class="subtitle text-primary">COMPLETE YOUR PROFILE</p>
            <h1 class="h2 mb-5">Let's get started!</h1>
            <p class="text-muted">Are you a Philippine Resident?</p>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <div class="custom-control custom-radio">
                    <input v-model="is_filipino_resident" type="radio" id="residency_0" name="residency" class="custom-control-input" v-validate="'required'" value="True">
                    <label for="residency_0" class="custom-control-label">I am a Philippine Resident</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input v-model="is_filipino_resident" type="radio" id="residency_1" name="residency" class="custom-control-input" v-validate="'required'" value="False">
                    <label for="residency_1" class="custom-control-label">I am a Non-Philippine Resident</label>
                    <div v-show="errors.has('residency')" class="error" role="alert">
                      {{"* " + errors.first('residency') }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="mb-5 mb-lg-0">
              <button @click="validate" class="btn btn-primary px-3">Next step<i class="fa-chevron-right fa ml-2"></i></button>
            </p>
          </div>
          <div class="col-lg-5 ml-auto d-flex align-items-center"><img src="../../assets/img/illustration/undraw_celebration_0jvk.svg" alt="" style="width: 400px;" class="img-fluid"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
  var cognitoUserPoolId = process.env.VUE_APP_USER_POOL_ID;
  var cognitoUserPoolClientId = process.env.VUE_APP_USER_POOL_CLIENT_ID; 
  var awsRegion = process.env.VUE_APP_AWS_REGION;

  export default {
      name: 'profile-step0',
        components: {
        },
        data() {
        return {
          is_filipino_resident: ''
         }
        },
        methods: {
          validate: function() {
          //validates all fields
            this.$validator.validateAll().then((result) => {
              if (result) {
                this.updateUser();

                var navigate = this.$router;
                navigate.push('step1')
                return;
              }
              alert('Correct the errors!');
            });
          },
          updateUser: function(){
            var attributeList = []  
  
            var input_list = 
              [
                {
                   Name : 'custom:is_filipino_resident',
                   Value : this.is_filipino_resident
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
                  this.is_filipino_resident = temp_info['custom:is_filipino_resident']
              })
          }
        }

      },
      mounted(){
        this.getUserData()
       
      }
    }
      
</script>