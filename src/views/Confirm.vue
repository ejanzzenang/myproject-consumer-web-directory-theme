<template>
	<div class="confirm">
	    <section class="hero py-6 py-lg-7 text-white dark-overlay"><img src="../assets/img/photo/photo-1467987506553-8f3916508521.jpg" alt="Text page" class="bg-image">
	      <div class="container overlay-content">
	        <h1 class="hero-heading">Enter the code sent to the email you provided. Then, login again on the home page.</h1>

	         <form id="userDetails">
		        <div class="form-group">
		          <label for="confirmCode">Confirmation Code:</label>
		          <input type="number" class="form-control" id="confirmCode" placeholder="Enter Confirmation Code" name="confirmCode">
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
    name: 'confirm',
    data() {
      return { 
      }
    },
    mounted() {
      
      var cognitoUserPoolId = process.env.VUE_APP_USER_POOL_ID;  // example: 'us-east-1_abcd12345'
      var cognitoUserPoolClientId = process.env.VUE_APP_USER_POOL_CLIENT_ID; // example: 'abcd12345abcd12345abcd12345'

      $(document).on('click', '.btn-primary', function(event) {
	    event.preventDefault();

	    var confirmCode = document.getElementById('confirmCode').value;

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
	    cognitoUser.confirmRegistration(confirmCode, true, function(err, result) {
	        if (err) {
	            alert(err.message);
	            return;
	        }
	        alert('You have successfully confirmed.')
	        window.location.replace('/');
	    });

  		});
  	}
	}



</script>