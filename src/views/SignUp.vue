<template>
  <div class="signup">
        <div class="container-fluid px-3">
      <div class="row min-vh-100">
        <div class="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
          <div class="w-100 py-5 px-md-5 px-xl-6 position-relative">
            <div class="mb-4"><img src="../assets/img/logo-square.svg" alt="..." style="max-width: 4rem;" class="img-fluid mb-4">
              <h2>Sign up</h2>
              <p class="text-muted">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.</p>
            </div>
            <form class="form-validate">
              <div class="form-group">
                <label for="loginUsername" class="form-label"> Email Address</label>
                <input name="loginUsername" id="loginUsername" type="email" placeholder="name@address.com" autocomplete="off" required data-msg="Please enter your email" class="form-control">
              </div>
              <div class="form-group">
                <label for="loginPassword" class="form-label"> Password</label>
                <input name="loginPassword" id="loginPassword" placeholder="Password" type="password" required data-msg="Please enter your password" class="form-control">
              </div>
              <div class="form-group mb-4">
                <label for="loginPassword2" class="form-label"> Confirm your password</label>
                <input name="loginPassword2" id="loginPassword2" placeholder="Password" type="password" required data-msg="Please enter your password" class="form-control">
              </div>
              <button type="submit" id="signup" class="btn btn-lg btn-block btn-primary">Sign up</button>
              <hr data-content="OR" class="my-3 hr-text letter-spacing-2">
              <button class="btn btn btn-outline-primary btn-block btn-social mb-3"><i class="fa-2x fa-facebook-f fab btn-social-icon"> </i>Connect <span class="d-none d-sm-inline">with Facebook</span></button>
              <hr class="my-4">
              <p class="text-sm text-muted">By signing up you agree to Directory's <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.</p>
            </form>
            <a href="/" class="close-absolute mr-md-5 mr-xl-6 pt-5"> 
              <svg class="svg-icon w-3rem h-3rem">
                <use xlink:href="#close-1"> </use>
              </svg></a>
            </a>
          </div>
        </div>
        <div class="col-md-4 col-lg-6 col-xl-7 d-none d-md-block bG">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  
  .bG {
      background: url(../assets/img/photo/photo-1497436072909-60f360e1d4b1.jpg) center center;
      background-size: cover;
    } 

</style>


<script>
  import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';

  export default {
    name: 'signup',
    mounted() {
      
      var cognitoUserPoolId = process.env.VUE_APP_USER_POOL_ID;  // example: 'us-east-1_abcd12345'
      var cognitoUserPoolClientId = process.env.VUE_APP_USER_POOL_CLIENT_ID; // example: 'abcd12345abcd12345abcd12345'
      var navigate = this.$router;

      $(document).on('click', '#signup', function(event) {
        event.preventDefault();

        var poolData = {
          UserPoolId : cognitoUserPoolId,
          ClientId : cognitoUserPoolClientId
        };
        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

        var attributeList = [];


        var email = document.getElementById('loginUsername').value;
        var pw = document.getElementById('loginPassword').value;
        var confirmPw = document.getElementById('loginPassword2').value;
        var dataEmail = {
            Name : 'email',
            Value : email
        };

        var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

        attributeList.push(attributeEmail);

        if (pw === confirmPw) {
          userPool.signUp(email, pw, attributeList, null, function(err, result){
              if (err) {
                  alert(err.message);
                  return;
              }
              localStorage.setItem('email', email);
              alert("Successfully signed up!!")
              navigate.push('/confirm');
          });
        } else {
          alert('Passwords do not match.')
        }
      });
    }
  }
</script>
