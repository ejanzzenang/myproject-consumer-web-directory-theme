<template>
  <div class="confirm">
    <section class="hero py-6 py-lg-7 text-white dark-overlay">
      <img src="../assets/img/photo/photo-1467987506553-8f3916508521.jpg" alt="Text page" class="bg-image">
      <div class="container overlay-content">
        <h1 class="hero-heading">Enter the code sent to the email you provided. Then, login again on the home page.</h1>
        <div class="form-group">
          <label for="confirmCode">Confirmation Code:</label>
          <div>
            <input type="number" class="form-control" id="confirmCode" placeholder="Enter Confirmation Code" name="confirmCode" v-model="confirmCode">
          </div>
        </div>
        <button @click="loginConfirm" class="btn btn-primary">Confirm</button>
      </div>
    </section>
  </div>
</template>
<style scoped>
  .bg-image{
  opacity: 0.7;
  }
</style>
<script>
  import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
  var cognitoUserPoolId = process.env.VUE_APP_USER_POOL_ID;
  var cognitoUserPoolClientId = process.env.VUE_APP_USER_POOL_CLIENT_ID; 
  var awsRegion = process.env.VUE_APP_AWS_REGION;

 	export default {
    name: 'confirm',
    data() {
      return { 
       	  confirmCode: '',
          email: '',
          password: ''
        }
      },
      methods: {
        loginConfirm: function(){

          var navigate = this.$route;

          this.confirmUser().then(res=> {

            var email = navigate.params.username;
            var password = navigate.params.password;

            console.log(email);
            console.log(password);

            this.loginUser(email, password);
            

          });
        },
     	  confirmUser: function(){

          var code = this.confirmCode
          var store = this.$store;
          var navigate = this.$route;

          return new Promise(function(resolve, reject){
        		var poolData = {
        			UserPoolId : cognitoUserPoolId,
        			ClientId : cognitoUserPoolClientId
        		}; 
        
        		var userName = localStorage.getItem('email');
        
        		var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        		var userData = {
        			Username : userName,
        			Pool : userPool
        		};
        
        		var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

            // confirm(cognitoUser);
            cognitoUser.confirmRegistration(code, true, function(err, result) {
              if (err) {
                  alert(err.message);
                  return;
              }
              alert('You have successfully confirmed.');
              resolve(result);
            });
          });
        },
        loginUser: function(email, password){
          var navigate = this.$router;
          var store = this.$store
          
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

              store.commit('login')
              window.location.replace('/');;


            },
            onFailure: function(err) {
              alert("Login failure: " + err.message);
            },
          });
          
          resolve();
        }
      }
  }
  
  
  
</script>