<template>
  <div class="signup">      
      <button @click="signUpFacebook">Sign in with Facebook</button>
    </div>
</template>


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
      signUpFacebook : function(){
        this.auth.getSession();
      }
    },
    created() {

          var authData = {
            ClientId : appclient_id, // Your client id here
            AppWebDomain : 'app-hetchly.auth.ap-southeast-1.amazoncognito.com',
            TokenScopesArray : ['email'], 
            RedirectUriSignIn : 'http://localhost:8080',
            RedirectUriSignOut : 'http://localhost:8080',
            IdentityProvider : 'Facebook', // e.g. 'Facebook',
            UserPoolId : cognitoUserPoolId, // Your user pool id here
          };

          this.auth = new CognitoAuth(authData)
          console.log(this.auth)
          
          this.auth.userhandler = {
            // * E.g.
            onSuccess: function(result) {
              alert("Sign in success");
              showSignedIn(result);
            },
            onFailure: function(err) {
              alert("Error!" + err);
            }          
          }

          console.log("authdata set")

          var redirect_url = window.location.href;
          this.auth.parseCognitoWebResponse(redirect_url);
    }
  }
</script>
