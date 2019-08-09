<template>
  <div class="signup">
        <div class="container-fluid px-3">
      <div class="row min-vh-100">
        <div class="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
          <div class="w-100 py-5 px-md-5 px-xl-6 position-relative">
            <div class="mb-4"><img src="../assets/img/hetchly-logo.svg" alt="..." style="max-width: 10rem;" class="img-fluid mb-4">
              <h2>Sign up</h2>
            </div>
              <div class="form-group">
                <label for="loginUsername" class="form-label">Email Address</label>
                <input name="loginUsername" id="loginUsername" type="email" placeholder="name@address.com" autocomplete="off" required data-msg="Please enter your email" class="form-control" v-model="email_address">
              </div>
              <div class="form-group">
                <label for="loginPassword" class="form-label">Password</label>
                <input name="loginPassword" id="loginPassword" placeholder="Password" type="password" required data-msg="Please enter your password" class="form-control" v-model="password">
              </div>
              <div class="form-group mb-4">
                <label for="loginPassword2" class="form-label">Confirm your password</label>
                <input name="loginPassword2" id="loginPassword2" placeholder="Password" type="password" required data-msg="Please enter your password" class="form-control" v-model="confirmPw">
              </div>
              <button @click="signUpUser" id="signup" class="btn btn-lg btn-block btn-primary">Sign up</button>              
              <hr data-content="OR" class="my-3 hr-text letter-spacing-2">
              <button @click="signUpFacebook" id="signupfb" class="btn btn btn-outline-primary btn-block btn-social mb-3"><i class="fa-2x fa-facebook-f fab btn-social-icon"> </i>Connect <span class="d-none d-sm-inline">with Facebook</span></button>
              <p class="text-center"><small class="text-muted text-center">Have an account? <router-link to="/login">Log in</router-link></small></p>
              <hr class="my-4">
              <p class="text-sm text-muted">By signing up you agree to Directory's <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.</p>
              <router-link to="/" class="close-absolute mr-md-5 mr-xl-6 pt-5"> 
              <svg class="svg-icon w-3rem h-3rem">
                <use xlink:href="#close-1"></use>
              </svg></router-link>
            </a>
          </div>
        </div>
        <div class="col-md-4 col-lg-6 col-xl-7 d-none d-md-block bG">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .bG {
      background: url(../assets/img/photo/photo-1497436072909-60f360e1d4b1.jpg) center center;
      background-size: cover;
    } 
</style>

<script>
  import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
  import {CognitoAuth} from 'amazon-cognito-auth-js';
  var cognitoUserPoolId = 'ap-southeast-1_AQoxu5EIr'; 
  var cognitoUserPoolClientId = '19mgjrlikq9nljgcfjo0k1ajja'; 

  export default {
    name: 'signup',
    data(){
      return {
        email_address: '',
        password: '',
        confirmPw: ''    
      }
    },
    methods: {
      signUpUser: function(){
        var navigate = this.$router;

        var poolData = {
          UserPoolId : cognitoUserPoolId,
          ClientId : cognitoUserPoolClientId
        };

        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

        var attributeList = [];
        
        var dataEmail = {
            Name : 'email',
            Value : this.email_address
        };

        var custom_fields = [
            // Step1
            'family_name',
            'given_name',
            'middle_name',
            'gender',
            'custom:birth_date',
            'custom:country_of_residence',
            'custom:country_of_birth',
            'custom:occupation',
            'custom:locality',
            'custom:status',
            // // Step2
            'custom:mode_of_travel', 
            'custom:purpose_of_travel', 
            'custom:num_visits_bora', 
            'custom:len_stay_bora', 
            'custom:package_tour', 
            'custom:address_bora', 
            'custom:place_vis_bef_bora', 
            'custom:dest_after_bora',
            // // Step3
            'custom:passport_number', 
            'custom:passport_place_issue', 
            'custom:passport_exp_date', 
            'custom:f_country_region', 
            'custom:f_city_state', 
            'custom:f_address_1', 
            'custom:f_address_2'
        ]

          var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
          attributeList.push(attributeEmail);

          custom_fields.forEach(function(element){
            attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute(
              {
                Name: element,
                Value: ''
              }
            ));
          });

          if (this.password === this.confirmPw) {
            console.log(this.email_address)
            console.log(this.password)

            var email = this.email_address;
            var password = this.password;

            userPool.signUp(email, password, attributeList, null, function(err, result){
                if (err) {
                    console.log(err.message)
                    alert(err.message);
                    return;
                }
                localStorage.setItem('email', email);
                alert("Successfully signed up!!")
                navigate.push('/confirm');
            });
          } else {
            alert('Passwords do not match.')
          }
      },
      signUpFacebook: function(){
        
        var store = this.$store;
        alert("works!!")
        store.commit('login')
        this.$store.state.auth.getSession()
      }
    }
  }
</script>
