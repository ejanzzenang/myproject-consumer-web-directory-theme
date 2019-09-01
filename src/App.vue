<template>
  <div id="app">
    <div v-if="!['signup', 'login'].includes(this.$route.name)">
      <Navigation/>
      <div class="navbar-margin"></div>
    </div>
    <router-view/>
    <div v-if="!['signup', 'login'].includes(this.$route.name)">
      <Footer/>      
    </div>

    <!-- load this using the html loader -->
    <!-- https://stackoverflow.com/questions/50834598/inline-svg-in-vuejs-component -->
    <div v-html="require('!html-loader!@/assets/icons/orion-svg-sprite.svg')"></div>
  </div>
</template>
<script>
  import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
  import * as AWS from 'aws-sdk';
  import Navigation from '@/components/Navigation.vue'
  import Footer from '@/components/Footer.vue'
  import {CognitoAuth} from 'amazon-cognito-auth-js';
  var cognitoUserPoolId = process.env.VUE_APP_USER_POOL_ID;
  var cognitoUserPoolClientId = process.env.VUE_APP_USER_POOL_CLIENT_ID; 
  var awsRegion = process.env.VUE_APP_AWS_REGION;

  export default {
    name: 'home',
    components: {
      Navigation,
      Footer
    },
    data(){
      return {
        loggedIn: this.$store.state.loggedIn 
      }
    },
    methods:{
      refreshAWSCredentials() {
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
      },
      initializeStorage() {
          var identityPoolId = cognitoUserPoolId;
          var userPoolId = cognitoUserPoolId;
          var clientId = cognitoUserPoolClientId;
          var loginPrefix = 'cognito-idp.' + awsRegion + '.amazonaws.com/' + identityPoolId;

          localStorage.setItem('identityPoolId', identityPoolId);
          localStorage.setItem('userPoolId', userPoolId);
          localStorage.setItem('clientId', clientId);
          localStorage.setItem('loginPrefix', loginPrefix);
      },
      initCognitoSDK() {
          var navigate = this.$router;
          var store = this.$store;

          //https://aws.amazon.com/blogs/mobile/understanding-amazon-cognito-user-pool-oauth-2-0-grants/
          // Make sure to add openid to token scopes or else you'll never get an id token!!!
          // Make sure to add 'aws.cognito.signin.user.admin' so your access token will be valid to access the cognito userpool api!! 

          var authData = {
              ClientId : cognitoUserPoolClientId, 
              AppWebDomain : 'app-hetchly.auth.ap-southeast-1.amazoncognito.com',
              TokenScopesArray : ['email', 'openid', 'aws.cognito.signin.user.admin'], 
              RedirectUriSignIn : process.env.VUE_APP_REDIRECT_SIGNIN_URL,
              RedirectUriSignOut : process.env.VUE_APP_REDIRECT_SIGNOUT_URL,
              IdentityProvider : 'Facebook', 
              UserPoolId : cognitoUserPoolId, 
          };

          var auth = new CognitoAuth(authData)
            
          var userPoolId = localStorage.getItem('userPoolId');
          var clientId = localStorage.getItem('clientId');
          var identityPoolId = localStorage.getItem('identityPoolId');
          var loginPrefix = localStorage.getItem('loginPrefix');

          auth.userhandler = {
            // * E.g.
            onSuccess: function(result) {
              alert("successful!")
              store.commit('login');
            },
            onFailure: function(err) {
              alert(err);
            }          
          }

          return auth
      }
    },
    created(){

      // initialize login storage
      this.initializeStorage()
      console.log("Initialized local storage in App.vue")

      this.$store.state.auth = this.initCognitoSDK();
      console.log("Initialized cognitoSDK for login with fb");

      var curUrl = window.location.href;
      this.$store.state.auth.parseCognitoWebResponse(curUrl);

      var configString = localStorage.getItem('awsConfig');
      var config = JSON.parse(configString);

      if (config != null) {
        this.refreshAWSCredentials();
      }
    }
  }
</script>
<style scoped>
  .navbar-margin {
    margin-bottom: 72px;
  }

  /*extra css*/
  @import "https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700";
  @import "https://fonts.googleapis.com/css?family=Poppins:300,400,400i,700";
  @import "https://use.fontawesome.com/releases/v5.8.1/css/all.css";
</style>

