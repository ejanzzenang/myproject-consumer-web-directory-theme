<template>
  <div class="login">
    <div class="container-fluid px-3">
      <div class="row min-vh-100">
        <div class="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
          <div class="w-100 py-5 px-md-5 px-xl-6 position-relative">
            <div class="mb-5">
              <img src="../assets/img/hetchly-logo.svg" alt="..." style="max-width: 10rem;" class="img-fluid mb-3">
              <h2>Welcome back</h2>
            </div>
            <router-link to="/" class="close-absolute mr-md-5 mr-xl-6 pt-5">
              <svg class="svg-icon w-3rem h-3rem">
                <use xlink:href="#close-1"> </use>
              </svg>
            </router-link>
            <div class="form-validate" id="loginForm">
              <div class="form-group">
                <label for="loginUsername" class="form-label"> Email Address</label>
                <input name="loginUsername" id="loginUsername" type="email" placeholder="name@address.com" autocomplete="off" required data-msg="Please enter your email" class="form-control" v-model="email">
              </div>
              <div class="form-group mb-4">
                <div class="row">
                  <div class="col">
                    <label for="loginPassword" class="form-label"> Password</label>
                  </div>
                  <div class="col-auto">
                    <router-link to="forgot" class="form-text small">Forgot password?</router-link>
                  </div>
                </div>
                <input name="loginPassword" id="loginPassword" placeholder="Password" type="password" required data-msg="Please enter your password" class="form-control" v-model="password">
              </div>
              <button @click="loginUser" class="btn btn-lg btn-block btn-primary">Sign in</button>
              <hr data-content="OR" class="my-3 hr-text letter-spacing-2">
            </div>
            <button @click="signUpFacebook"class="btn btn btn-outline-primary btn-block btn-social mb-3"><i class="fa-2x fa-facebook-f fab btn-social-icon"> </i>Connect <span class="d-none d-sm-inline">with Facebook</span></button>
            <p class="text-center"><small class="text-muted text-center">Don't have an account yet? <a href="/signup">Sign Up</a></small></p>
          </div>
        </div>
        <div class="col-md-4 col-lg-6 col-xl-7 bG"></div>
      </div>
    </div>
  </div>
</template>
<style>
  .bG {
  background: url(../assets/img/photo/photo-1497436072909-60f360e1d4b1.jpg) center center;
  background-size: cover;
  }
</style>
<script>
  import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
  import * as AWS from 'aws-sdk';
  var cognitoUserPoolId = process.env.VUE_APP_USER_POOL_ID;
  var cognitoUserPoolClientId = process.env.VUE_APP_USER_POOL_CLIENT_ID; 
  var awsRegion = process.env.VUE_APP_AWS_REGION;

  export default {
    name: 'login',
    data(){
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      loginUser() {

        var navigate = this.$router;
        var store = this.$store;
        var email = this.email;
        var password = this.password;


        function loggedInDisplay() {
          //changes the value of store to loggedIn
          store.commit('login')
          window.location.replace('/');
        }

        var userPoolId = localStorage.getItem('userPoolId');
        var clientId = localStorage.getItem('clientId');
        var identityPoolId = localStorage.getItem('identityPoolId');
        var loginPrefix = localStorage.getItem('loginPrefix');

        var poolData = {
          UserPoolId: userPoolId, // Your user pool id here
          ClientId: clientId // Your client id here
        };
        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

        var authenticationData = {
          'UserName': email,
          'Password': password
        }

        var userData = {
          Username: email,
          Pool: userPool
        };

        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
        
        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
          onSuccess: function(result) {
            
            console.log('access token \n' + result.getAccessToken().getJwtToken());

            var sessionTokens = {
              IdToken: result.getIdToken(),
              AccessToken: result.getAccessToken(),
              RefreshToken: result.getRefreshToken()
            };
            
            console.log("Session tokens: ")
            console.log(sessionTokens)

            localStorage.setItem('sessionTokens', JSON.stringify(sessionTokens));

            //POTENTIAL: Region needs to be set if not already set previously elsewhere.
            AWS.config.region = awsRegion;
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
              IdentityPoolId: identityPoolId, // your identity pool id here
              Logins: {
                // Change the key below according to the specific region your user pool is in.
                loginPrefix: sessionTokens.IdToken.jwtToken
              }
            });
            localStorage.setItem('awsConfig', JSON.stringify(AWS.config));
            localStorage.setItem('email', email);

            loggedInDisplay();
          },
          onFailure: function(err) {
            console.log(err);
            alert(err.message);

            if(err.code === "UserNotConfirmedException"){
              // perform resend confirmation
              cognitoUser.resendConfirmationCode(function(err, result) {
                if (err) {
                    alert(err);
                    return;
                   }

                   alert("confirmation resent!")
                   window.location.replace('/confirm');
              });
            }
          },

        });
      },
      signUpFacebook: function(){
        var store = this.$store;
        // this.$store.state.auth.getSession();
        console.log(this.$store.state.auth);
        store.commit('login')
        console.log(this.$store.state.auth.getSession());
        alert("works!!");
      }
    },
    mounted() {
    }
  }
</script>