<template>
	<div class="forgotPassword">
	    <section class="hero py-6 py-lg-7 text-white dark-overlay"><img src="../assets/img/photo/photo-1467987506553-8f3916508521.jpg" alt="Text page" class="bg-image">
	      <div class="container overlay-content">
	        <h1 class="hero-heading">Please enter the your email address for your account:</h1>
 			<form @submit.prevent="validateBeforeSubmit">
		        <div class="form-group">
		          <label for="email">Email Address</label>

		          <input type="text" class="form-control" id="email" placeholder="Enter email address" name="email" v-model="email">

		        </div>
		        <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#verfication_modal" @click="sendVerification">Confirm</button>
		      </form>
	      </div>
	    </section>
		<!-- Modal -->
		  <div class="modal fade" id="verfication_modal" role="dialog">
		    <div class="modal-dialog">
		      <!-- Modal content-->
		      <div class="modal-content">
		        <div class="modal-header">
		          <button type="button" class="close" data-dismiss="modal">&times;</button>
		        </div>
		        <div class="modal-body">
		        	<p>A verification code has been sent to your email.</p>
		        	<label for="verfication_code"><h4>Verification Code:</h4></label>
		          <input type="text" name="verfication_code" class="form-control" v-model="verification_code">
		        </div>
		        <div class="modal-footer">
		          <button type="button" class="btn btn-link text-muted" data-dismiss="modal">Close</button>
		          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#password_modal" data-dismiss="modal">Confirm</button>
		        </div>
		      </div>
		      
		    </div>
		  </div>
	     <!-- Modal -->
		  <div class="modal fade" id="password_modal" role="dialog">
		    <div class="modal-dialog">
		      <!-- Modal content-->
		      <div class="modal-content">
		        <div class="modal-header">
		          <button type="button" class="close" data-dismiss="modal">&times;</button>
		        </div>
		        <div class="modal-body">
		        	<p>Please enter your new password.</p>
		        	<label for="password"><h4>Password:</h4></label>
		          <input type="password" name="password" class="form-control" v-model="password">
		          <label for="confirm_password"><h4>Confirm Password:</h4></label>
		          <input type="password" name="confirm_password" class="form-control" v-model="confirm_password">
		        </div>
		        <div class="modal-footer">
		          <button type="button" class="btn btn-link text-muted" data-dismiss="modal">Close</button>
		          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="confirmNewPassword">Confirm</button>
		        </div>
		      </div>
		      
		    </div>
		  </div>


	</div>
</template>

<style scoped>
	.bg-image{
		opacity: 0.7;
	}
</style>

<script>
	import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
	var cognitoUserPoolId = 'ap-southeast-1_AQoxu5EIr'; 
	var cognitoUserPoolClientId = '19mgjrlikq9nljgcfjo0k1ajja';
  	export default {
    name: 'forgotPassword',
    data() {
      return { 
      	email: '',
      	verification_code: '',
      	password: '',
      	confirm_password: ''
      }
    },
    methods: {
	    sendVerification: function(){
	    	// works
	    	console.log("works")
	    	var navigate = this.$router 

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
		           	// navigate.push("/")
		        },
		        onFailure: function(err) {

		            alert(err.message);

		        }
		    });
      },
      confirmNewPassword: function(){
      		var navigate = this.$router 
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
		    
		    var code = this.verification_code
		    var pass = this.password

		    cognitoUser.confirmPassword(code, pass, {
	            onFailure(err) {
	                alert(err.message);
	            },
	            onSuccess() {
        		    alert("Success!");
	            },
	        });
    		console.log("Password Confirmed")
    		navigate.push("/")

      },
      validateBeforeSubmit: function(){
	    this.$validator.validateAll().then((result) => {
		    if (result) {
		      // eslint-disable-next-line
		      // this.sendVerification()
		      return;
		    }
		    	alert('Correct the errors!');
		  	});
		}
	  	
	  },
	  validate: function(){
	  	
	  }

		
	}

</script>