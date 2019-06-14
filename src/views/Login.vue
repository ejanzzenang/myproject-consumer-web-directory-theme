<template>
    <div class="login">
        <div class="container-fluid px-3">
          <div class="row min-vh-100">
            <div class="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
              <div class="w-100 py-5 px-md-5 px-xl-6 position-relative">
                <div class="mb-5"><img src="../assets/img/logo-square.svg" alt="..." style="max-width: 4rem;" class="img-fluid mb-3">
                  <h2>Welcome back</h2>
                </div>
                <a href="/" class="close-absolute mr-md-5 mr-xl-6 pt-5"> 
                  <svg class="svg-icon w-3rem h-3rem">
                    <use xlink:href="#close-1"> </use>
                  </svg>
                </a>
                <form class="form-validate">
                  <div class="form-group">
                    <label for="loginUsername" class="form-label"> Email Address</label>
                    <input name="loginUsername" id="loginUsername" type="email" placeholder="name@address.com" autocomplete="off" required data-msg="Please enter your email" class="form-control">
                  </div>
                  <div class="form-group mb-4">
                    <div class="row">
                      <div class="col">
                        <label for="loginPassword" class="form-label"> Password</label>
                      </div>
                      <div class="col-auto"><a href="#" class="form-text small">Forgot password?</a></div>
                    </div>
                    <input name="loginPassword" id="loginPassword" placeholder="Password" type="password" required data-msg="Please enter your password" class="form-control">
                  </div>
                  <div class="form-group mb-4">
                    <div class="custom-control custom-checkbox">
                      <input id="loginRemember" type="checkbox" class="custom-control-input">
                      <label for="loginRemember" class="custom-control-label text-muted"> <span class="text-sm">Remember me for 30 days</span></label>
                    </div>
                  </div>
                  <!-- Submit-->
                  <button class="btn btn-lg btn-block btn-primary">Sign in</button>
                  <hr data-content="OR" class="my-3 hr-text letter-spacing-2">
                  <button class="btn btn btn-outline-primary btn-block btn-social mb-3"><i class="fa-2x fa-facebook-f fab btn-social-icon"> </i>Connect <span class="d-none d-sm-inline">with Facebook</span></button>
                  <p class="text-center"><small class="text-muted text-center">Don't have an account yet? <a href="/signup">Sign Up                </a></small></p>
                </form>
              </div>
            </div>
            <div class="col-md-4 col-lg-6 col-xl-7 bG">
              <!-- Image-->
              
            </div>
          </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'login',
  props: {
    msg: String
  }
}
</script>

<style>
    .bG {
      background: url(../assets/img/photo/photo-1497436072909-60f360e1d4b1.jpg) center center;
      background-size: cover;
    }
    
</style>