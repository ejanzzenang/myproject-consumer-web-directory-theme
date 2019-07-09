<template>
  <div class="confirm">
    <section class="hero py-6 py-lg-7 text-white dark-overlay">
      <img src="../assets/img/photo/photo-1467987506553-8f3916508521.jpg" alt="Text page" class="bg-image">
      <div class="container overlay-content">
        <h1 class="hero-heading">Enter the code sent to the email you provided. Then, login again on the home page.</h1>
        <div class="form-group">
          <label for="confirmCode">Confirmation Code:</label>
          <input type="number" class="form-control" id="confirmCode" placeholder="Enter Confirmation Code" name="confirmCode" v-model="confirmCode">
        </div>
        <button @click="confirmUser" class="btn btn-primary">Confirm</button>
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
   	export default {
     name: 'confirm',
     data() {
       return { 
       	confirmCode: ''
       }
     },
     methods: {
     	confirmUser: function(){
        var cognitoUserPoolId = 'ap-southeast-1_jYdvhdSZb'; 
        var cognitoUserPoolClientId = '5gn9uui9lqbgsioioen085cr56'; 
  
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
  		cognitoUser.confirmRegistration(this.confirmCode, true, function(err, result) {
  			if (err) {
  			    alert(err.message);
  			    return;
  			}
  			alert('You have successfully confirmed.')
  			window.location.replace('/');
  		});
  
     	}
     },
     mounted() {
       
   		
   	}
  }
  
  
  
</script>