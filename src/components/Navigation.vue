<template>
   <nav class="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
      <div class="container-fluid">
        <div class="d-flex align-items-center"><a href="/" class="navbar-brand py-1"><img src="../assets/img/logo.svg" alt="Directory logo"></a>
        </div>
        <button type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
        <div id="navbarCollapse" class="collapse navbar-collapse">
          <form action="#" id="searchcollapsed" class="form-inline mt-4 mb-2 d-sm-none">
            <div class="input-label-absolute input-label-absolute-left input-reset w-100">
              <label for="searchcollapsed_search" class="label-absolute"><i class="fa fa-search"></i><span class="sr-only">What are you looking for?</span></label>
              <input id="searchcollapsed_search" placeholder="Search" aria-label="Search" class="form-control form-control-sm border-0 shadow-0 bg-gray-200">
              <button type="reset" class="btn btn-reset btn-sm"><i class="fa-times fas">           </i></button>
            </div>
          </form>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown"><a id="homeDropdownMenuLink" href="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle active">
                 
                Home</a>
              <div aria-labelledby="homeDropdownMenuLink" class="dropdown-menu"><a href="index.html" class="dropdown-item">Rooms</a><a href="index-2.html" class="dropdown-item">Restaurants</a></div>
            </li>
            </li>
            <li class="nav-item"><a id="logInButton" href="/login" class="nav-link">Sign in</a></li>
            <li class="nav-item"><a href="/signup" class="nav-link">Sign up</a></li>
            <li class="nav-item mt-3 mt-lg-0 ml-lg-3 d-lg-none d-xl-inline-block"><button id="logOutButton" class="btn btn-primary">Logout</button></li>
          </ul>
        </div>
      </div>
    </nav>  
</template>


<script>

export default {
  name: 'navigation',
  mounted(){
    $(document).on('click', '#logOutButton', function(event) {
      console.log("logged out")
      localStorage.clear();
      document.location.reload();
      
    }); 
  } 
} 

</script>
