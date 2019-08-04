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
  var appclient_id  = '19mgjrlikq9nljgcfjo0k1ajja'

  export default {
    name: 'signup',
    data(){
      return {
        email_address: '',
        password: '',
        confirmPw: '',
        auth: ''
      }
    },
    methods: {
      initCognitoSDK: function() {
        
      },
      signUpFacebook : function(){
        this.auth.getSession();
      },
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
      }
    },
    created() {

          var authData = {
            ClientId : appclient_id, // Your client id here
            AppWebDomain : 'app-hetchly.auth.ap-southeast-1.amazoncognito.com',
            TokenScopesArray : ['email'], 
            // RedirectUriSignIn : 'https://dbfwr72c6o722.cloudfront.net/',
            // RedirectUriSignOut : 'https://dbfwr72c6o722.cloudfront.net/',
            RedirectUriSignIn : 'http://localhost:8080',
            RedirectUriSignOut : 'http://localhost:8080',
            IdentityProvider : 'Facebook', // e.g. 'Facebook',
            UserPoolId : cognitoUserPoolId, // Your user pool id here
          };

          this.auth = new CognitoAuth(authData)
          console.log(this.auth)
          
          this.auth.userhandler = {
            onSuccess: function (result) {
              console.log('LoginCognitoAuth, onSuccess: login successful')
              // getting tokens
              let accessToken = result.getAccessToken().getJwtToken()
              let idToken = result.getIdToken().getJwtToken()
              let refreshToken = result.getRefreshToken().getToken()

              //saving tokens to local storage
              window.localStorage.setItem('accessToken', accessToken)
              window.localStorage.setItem('idToken', idToken)
              window.localStorage.setItem('refreshToken', refreshToken)

              // getting information about the user from the token - using sjcl to decode from base64
              let idTokenPayload = idToken.split('.')[1]
              let payload = JSON.parse(sjcl.codec.utf8String.fromBits(sjcl.codec.base64url.toBits(idTokenPayload)))
              console.log('id token decoded content, payload:')
              console.log(payload)
              let userGroup = payload['cognito:groups']
              if (userGroup && userGroup.length > 0) {
                window.localStorage.setItem('userGroup', userGroup)
              } else {
                userGroup = 'clientGroup'
                window.localStorage.setItem('userGroup', userGroup)
              }
              let userSub = payload['sub']
              console.log('setting local storage: userSub, userState, username')

              // setting some parameters for my application - these are watched by Vue to verify if the use is signed in
              window.localStorage.setItem('userSub', userSub)
              window.localStorage.setItem('userState', 'signedIn')
              window.localStorage.setItem('username', payload['cognito:username'])
              window.location.assign(Config.BASE_URL)
            },
            onFailure: function (err) {
              // not doing anytnig on failure - Vue will check 'userState' in localstorage and if not set to 'signIn' - will treat as user never signed in...
              alert('Error!' + err)
            }
          }

          console.log("authdata set")

          var redirect_url = window.location.href;
          this.auth.parseCognitoWebResponse(redirect_url);
    }
  }
</script>
