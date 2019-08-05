<template>
  <div id="app">
    <div class="show-nav" v-if="!['signup', 'login'].includes(this.$route.name)">
      <Navigation/>
      <div class="navbar-margin"></div>
    </div>
    <router-view/>
    <Footer v-if="!['signup', 'login'].includes(this.$route.name)"/>
  </div>
</template>

<script type="text/javascript">
  // @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
import {CognitoAuth} from 'amazon-cognito-auth-js';
var cognitoUserPoolId = 'ap-southeast-1_AQoxu5EIr'; 
var cognitoUserPoolClientId = '19mgjrlikq9nljgcfjo0k1ajja'; 
var appclient_id  = '19mgjrlikq9nljgcfjo0k1ajja'
var awsRegion = 'ap-southeast-1';

export default {
  name: 'home',
  components: {
    Navigation,
    Footer
  },
  methods:{
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
    initCognitoSDK: function() {
          var authData = {
              ClientId : appclient_id, 
              AppWebDomain : 'app-hetchly.auth.ap-southeast-1.amazoncognito.com',
              TokenScopesArray : ['email'], 
              RedirectUriSignIn : 'http://localhost:8080',
              RedirectUriSignOut : 'http://localhost:8080',
              IdentityProvider : 'Facebook', 
              UserPoolId : cognitoUserPoolId, 
            };

            var auth = new CognitoAuth(authData)
            
            auth.userhandler = {
              // * E.g.
              onSuccess: function(result) {
                alert("Sign in success");
              },
              onFailure: function(err) {
                alert("Error!" + err);
              }          
            }

            return auth
    },
    injectSvgSprite(path) {
          var ajax = new XMLHttpRequest();
          ajax.open("GET", path, true);
          ajax.send();
          ajax.onload = function(e) {
            var div = document.createElement("div");
            div.className = 'd-none';
            div.innerHTML = ajax.responseText;
            document.body.insertBefore(div, document.body.childNodes[0]);
          }
    }     
  },
  computed:{
  
  },
  created(){
    this.injectSvgSprite('https://demo.bootstrapious.com/directory/1-1/icons/orion-svg-sprite.svg');

    // initialize login storage
    this.initializeStorage()
    console.log("Initialized local storage in App.vue")

    // this.$store.state.auth = this.initCognitoSDK()

    // var curUrl = window.location.href;
    // auth.parseCognitoWebResponse(curUrl);
    // initialize auth object for login with facebook
    // var auth = this.initCognitoSDK()
    // console.log("Initialized cognitoSDK in App.vue")
    // console.log(auth)


    this.$store.state.auth = this.initCognitoSDK()
    // this.auth = this.initCognitoSDK()

    var curUrl = window.location.href;
    this.$store.state.auth.parseCognitoWebResponse(curUrl);
  },
  mounted(){

  }

}

</script>
<style type="text/css">
  .navbar-margin {
    margin-bottom: 72px;
  }

  /*extra css*/
  @import "https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700";
  @import "https://fonts.googleapis.com/css?family=Poppins:300,400,400i,700";
  @import "https://use.fontawesome.com/releases/v5.8.1/css/all.css";

</style>

