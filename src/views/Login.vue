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
            <a href="/" class="close-absolute mr-md-5 mr-xl-6 pt-5">
              <svg class="svg-icon w-3rem h-3rem">
                <use xlink:href="#close-1"> </use>
              </svg>
            </a>
            <form class="form-validate" id="loginForm">
              <div class="form-group">
                <label for="loginUsername" class="form-label"> Email Address</label>
                <input name="loginUsername" id="loginUsername" type="email" placeholder="name@address.com" autocomplete="off" required data-msg="Please enter your email" class="form-control">
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
                <input name="loginPassword" id="loginPassword" placeholder="Password" type="password" required data-msg="Please enter your password" class="form-control">
              </div>
              <button class="btn btn-lg btn-block btn-primary">Sign in</button>
              <hr data-content="OR" class="my-3 hr-text letter-spacing-2">
              <button class="btn btn btn-outline-primary btn-block btn-social mb-3"><i class="fa-2x fa-facebook-f fab btn-social-icon"> </i>Connect<span class="d-none d-sm-inline">with Facebook</span></button>
              <p class="text-center"><small class="text-muted text-center">Don't have an account yet? <a href="/signup">Sign Up</a></small></p>
            </form>
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

  export default {
    name: 'login',
    methods: {
      
    },
    mounted() {

      var cognitoUserPoolId = 'ap-southeast-1_jYdvhdSZb';
      var cognitoUserPoolClientId = '5gn9uui9lqbgsioioen085cr56';
      var awsRegion = 'ap-southeast-1';

      initializeStorage();

      var configString = localStorage.getItem("awsConfig");
      var config = JSON.parse(configString);

      var navigate = this.$router;
      var store = this.$store

      if (config != null) {
        refreshAWSCredentials();
        loggedInDisplay();
      }

      function loggedInDisplay() {
        //changes the value of store to loggedIn
        store.commit('login')
        navigate.push('/')
      }

      function initializeStorage() {
        var identityPoolId = cognitoUserPoolId;
        var userPoolId = cognitoUserPoolId;
        var clientId = cognitoUserPoolClientId;
        var loginPrefix = 'cognito-idp.' + awsRegion + '.amazonaws.com/' + identityPoolId;

        localStorage.setItem('identityPoolId', identityPoolId);
        localStorage.setItem('userPoolId', userPoolId);
        localStorage.setItem('clientId', clientId);
        localStorage.setItem('loginPrefix', loginPrefix);
      }

      function loginUser() {

        var userPoolId = localStorage.getItem('userPoolId');
        var clientId = localStorage.getItem('clientId');
        var identityPoolId = localStorage.getItem('identityPoolId');
        var loginPrefix = localStorage.getItem('loginPrefix');

        var poolData = {
          UserPoolId: userPoolId, // Your user pool id here
          ClientId: clientId // Your client id here
        };
        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

        var email = document.getElementById('loginUsername').value;
        var pwd = document.getElementById('loginPassword').value;

        var authenticationData = {
          'UserName': email,
          'Password': pwd
        }

        var userData = {
          Username: email,
          Pool: userPool
        };

        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
          onSuccess: function(result) {
            console.log('access token + \n' + result.getAccessToken().getJwtToken());

            var sessionTokens = {
              IdToken: result.getIdToken(),
              AccessToken: result.getAccessToken(),
              RefreshToken: result.getRefreshToken()
            };
            localStorage.setItem('sessionTokens', JSON.stringify(sessionTokens));

            //POTENTIAL: Region needs to be set if not already set previously elsewhere.
            AWS.config.region = 'ap-southeast-1';
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
              IdentityPoolId: identityPoolId, // your identity pool id here
              Logins: {
                // Change the key below according to the specific region your user pool is in.
                loginPrefix: sessionTokens.IdToken.jwtToken
              }
            });
            localStorage.setItem('awsConfig', JSON.stringify(AWS.config));
            localStorage.setItem('email', email);

            cognitoUser.getUserAttributes(function(err, result) {
              if (err) {
                console.log(err)
                alert(err);
                return;
              }
              for (var i = 0; i < result.length; i++) {
                console.log('attribute ' + result[i].getName() + ' has value ' + result[i].getValue());
                if (result[i].getName() == 'sub') {
                  console.log('Overwriting userId into local storage');
                  localStorage.setItem('userId', result[i].getValue());
                }
              }
            });

            loggedInDisplay();
          },
          onFailure: function(err) {
            alert(err.message);
          },

        });
      }

      function refreshAWSCredentials() {

        var userPoolId = localStorage.getItem('userPoolId');
        var clientId = localStorage.getItem('clientId');
        var identityPoolId = localStorage.getItem('identityPoolId');
        var loginPrefix = localStorage.getItem('loginPrefix');

        var poolData = {
          UserPoolId: userPoolId, // Your user pool id here
          ClientId: clientId // Your client id here
        }
        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        var cognitoUser = userPool.getCurrentUser();

        if (cognitoUser != null) {
          cognitoUser.getSession(function(err, result) {
            if (result) {
              console.log('You are now logged in.');
              cognitoUser.refreshSession(result.getRefreshToken(), function(err, result) {

                if (err) { //throw err;
                  console.log('In the err: ' + err);
                } else {
                  localStorage.setItem('awsConfig', JSON.stringify(AWS.config));
                  var sessionTokens = {
                    IdToken: result.getIdToken(),
                    AccessToken: result.getAccessToken(),
                    RefreshToken: result.getRefreshToken()
                  };
                  localStorage.setItem("sessionTokens", JSON.stringify(sessionTokens));

                }
              });

            }
          });
        }
      }

      $("#loginForm").submit(function(event) {
        event.preventDefault();
        loginUser();
      });

    }
  }
</script>