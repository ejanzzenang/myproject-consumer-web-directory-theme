<template>
	<div class="forgotPassword">
	    <section class="hero py-6 py-lg-7 text-white dark-overlay"><img src="../assets/img/photo/photo-1467987506553-8f3916508521.jpg" alt="Text page" class="bg-image">
	      <div class="container overlay-content">
	        <h1 class="hero-heading">Please enter the your email address for your account:</h1>
 			<form @submit.prevent="validateBeforeSubmit">
		        <div class="form-group">
		          <label for="email">Email Address</label>
		          <input type="text" class="form-control" id="email" placeholder="Enter email address" name="email" v-model="email" v-validate="'required|email'">
            	<div v-show="errors.has('email')" class="error-white" role="alert">
      						{{"* " + errors.first('email') }}
    					</div>

		        </div>
		        <button type="submit" class="btn btn-primary">Confirm</button>
		      </form>
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
    name: 'forgotPassword',
    data() {
      return { 
      	email: ''
      }
    },
    methods: {
	    sendVerification: function(){

	    	var navigate = this.$router
      	var cognitoUserPoolId = 'ap-southeast-1_GUM0JtMJC';  // example: 'us-east-1_abcd12345'
	    	var cognitoUserPoolClientId = '5hvshfmgob5beudv0ukdj0ej'; // example: 

	    	var poolData = {
		      UserPoolId : cognitoUserPoolId,
		      ClientId : cognitoUserPoolClientId
		    };

	    	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
		    var userData = {
		        Username : this.email,
		        Pool : userPool
		    };

		    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

		    cognitoUser.forgotPassword({
		        onSuccess: function (result) {
		            console.log('call result: ' + result);
		           	navigate.push("/")
		        },
		        onFailure: function(err) {

		            alert(err.message);
		        },
		        inputVerificationCode() {
		            var verificationCode = prompt('Please input verification code ' ,'');
		            var newPassword = prompt('Enter new password ' ,'');
		            
		            cognitoUser.confirmPassword(verificationCode, newPassword, this);
		        }
		    });
      },
      validateBeforeSubmit: function(){
			  this.$validator.validateAll().then((result) => {
			    if (result) {

			      // eslint-disable-next-line
			      this.sendVerification()
			      return;
			    }

			    	alert('Correct the errors!');
			  	});
			}
	  	
	  }
		
	}

</script>