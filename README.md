
# Set up Vue.js Frontend using a Theme
## Prerequsites


- Git
```
$ git --version
git version 2.14.3 (Apple Git-98)
```
- npm
```
$ npm -v
6.7.0
```

- vue-cli
```
$ npm install -g @vue/cli
$ vue --version 
3.7.0
```

## Step 1: Create Frontend using VueJS, HTML, CSS and Bootstrap 4 - Directory Template
- Provides basic CRUD functionality for products
- The Service will be triggered by consumers via a web app
```
| WEBPAGE      | URI                                     | ACTION                      |
|--------------|-----------------------------------------|-----------------------------|
| HOME         | http://[hostname]/                      | Landing Page                |
| INDEX        | http://[hostname]/products              | Gets all products           |
| DETAIL       | http://[hostname]/products/<product_id> | Gets one product            |
| SIGNIN       | http://[hostname]/login                 | Logs the user in            |
| SIGNUP       | http://[hostname]/signup                | Signs up the user           |
| BOOK-1       | http://[hostname]/booking/step1         | Booking Step 1              |
| BOOK-2       | http://[hostname]/booking/step1         | Booking Step 2              |
| PAYMENT      | http://[hostname]/booking/payment       | Payment and Confirmation    |
| CONFIRMATION | http://[hostname]/booking/confirmed     | Confirmed                   |
```

### Step 1.1: Initialize Vue Project
```
$ cd ~/environment/
$ vue create myproject-consumer-web
$ cd myproject-consumer-web
$ npm run dev
```

### Step 1.2: Create a CodeCommit Repository
```bash
$ aws codecommit create-repository --repository-name myproject-consumer-web
```

### Step 1.3: Set up .gitignore
- Automatically created by vue create

### Step 1.4: Import Existing Project Folder to CodeCommit Repo
```bash
$ cd ~/environment/myproject-consumer-web
$ git init
$ git add .
$ git commit -m "Initial Commit"
$ git remote add origin https://git-codecommit.ap-southeast-1.amazonaws.com/v1/repos/myproject-consumer-web
$ git remote -v
$ git push origin master
```

### Step 1.5: Test Vue Application Locally
```
$ cd ~/environment/myproject-consumer-web
$ npm run serve
```

## Step 2: Setup Web Template (Bootstrap 4 - Directory Template)

### Step 2.1: 

Install dependencies:

In `myproject-consumer-web` add the following dependencies into `package.json`

```json
  "dependencies": {
    "bootstrap": "^4.3.1",
    "bootstrap-select": "^1.13.5",
    "jquery": "^3.3.1",
    "popper.js": "^1.15.0",
  },
```
In the terminal run the following: 
```
$ npm install --save-dev vue-plugin-load-script
```
after, run:
```
$ npm install
```

### Step 2.2: Import css and javascript dependencies to `main.js`

In `myproject-vuejs-web/src/main.js` add the following lines of code: 

```js
/* eslint-disable */

import Vue from 'vue'
import App from './App.vue'
import LoadScript from 'vue-plugin-load-script';

Vue.use(LoadScript);

// bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// css
require('@/assets/vendor/nouislider/nouislider.css')
require('@/assets/vendor/magnific-popup/magnific-popup.css')
require('@/assets/css/style.default.css')
require('@/assets/css/custom.css')
require('@/assets/img/favicon.png')

// As a global method

Vue.loadScript("https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.min.js")
.then(() => {
    require("@/assets/vendor/object-fit-images/ofi.min.js")
    require("@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js")
    require("@/assets/vendor/magnific-popup/jquery.magnific-popup.min.js")
    require("@/assets/vendor/smooth-scroll/smooth-scroll.polyfills.min.js")
    require("@/assets/vendor/bootstrap-select/js/bootstrap-select.min.js")
    require("@/assets/js/theme.js")
})
.then(() => {
    require("@/assets/vendor/jquery/jquery.min.js")
})
.catch(() => {
  // Failed to fetch script
});
```

Final Version of `main.js`:

```js
import Vue from 'vue'
import App from './App.vue'
import LoadScript from 'vue-plugin-load-script';
Vue.use(LoadScript);

// bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// css
require('@/assets/vendor/nouislider/nouislider.css')
require('@/assets/vendor/magnific-popup/magnific-popup.css')
require('@/assets/css/style.default.css')
require('@/assets/css/custom.css')
require('@/assets/img/favicon.png')

/* eslint-disable */
// As a global method

Vue.loadScript("https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.min.js")
.then(() => {
    require("@/assets/vendor/object-fit-images/ofi.min.js")
    require("@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js")
    require("@/assets/vendor/magnific-popup/jquery.magnific-popup.min.js")
    require("@/assets/vendor/smooth-scroll/smooth-scroll.polyfills.min.js")
    require("@/assets/vendor/bootstrap-select/js/bootstrap-select.min.js")
    require("@/assets/js/theme.js")
})
.then(() => {
    require("@/assets/vendor/jquery/jquery.min.js")
})
.catch(() => {
  // Failed to fetch script
});


import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```

### Step 2.3: Import CSS dependencies to `App.vue`

Add the following stylesheet imports inside the `<style>` tag of `App.vue`
```css
  /*extra css*/
  @import "https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700";
  @import "https://fonts.googleapis.com/css?family=Poppins:300,400,400i,700";
  @import "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css";
  @import "https://use.fontawesome.com/releases/v5.8.1/css/all.css";

```

Final version of `App.vue`:

```html
<template>
  <div id="app">
    <Navigation/>
    <router-view/>
  </div>
</template>

<script type="text/javascript">
  // @ is an alias to /src
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'home',
  components: {
    Navigation
  }
}
</script>


<style type="text/css">
  #app {
    text-align: center;
  }

  /*extra css*/
  @import "https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700";
  @import "https://fonts.googleapis.com/css?family=Poppins:300,400,400i,700";
  @import "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css";
  @import "https://use.fontawesome.com/releases/v5.8.1/css/all.css";

</style>
```

## Step 3: Setup Router Plugin

### Step 3.1: Add a router plugin
```bash
$ vue add router
```
Output:

```bash
? Use history mode for router? (Requires proper server setup for index fa
llback in production) Yes

🚀  Invoking generator for core:router...
📦  Installing additional dependencies...

added 1 package from 1 contributor and audited 24981 packages in 6.458s
found 0 vulnerabilities

✔  Successfully invoked generator for plugin: core:router
   The following files have been updated / added:

     .gitignore
     README.md
     babel.config.js
     package-lock.json
     package.json
     public/favicon.ico
     public/index.html
     src/App.vue
     src/assets/logo.png
     src/components/HelloWorld.vue
     src/main.js
     src/router.js
     src/views/About.vue
     src/views/Home.vue

   You should review these changes with git diff and commit them.

```
## Step 4: Set up Global Navbar and Footer

### Step 4A: Set up Global Navigation Bar
In `myproject-consumer-web/src/components/`
create a file called : `Navigation.vue`

Add the following code in `Navigation.vue`:

```html
<template>
   <nav class="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
      <div class="container-fluid">
        <div class="d-flex align-items-center"><a href="/" class="navbar-brand py-1"><img src="../assets/img/logo.svg" alt="Directory logo"></a>
          <form action="#" id="search" class="form-inline d-none d-sm-flex">
            <div class="input-label-absolute input-label-absolute-left input-reset input-expand ml-lg-2 ml-xl-3"> 
              <label for="search_search" class="label-absolute"><i class="fa fa-search"></i><span class="sr-only">What are you looking for?</span></label>
              <input id="search_search" placeholder="Search" aria-label="Search" class="form-control form-control-sm border-0 shadow-0 bg-gray-200">
              <button type="reset" class="btn btn-reset btn-sm"><i class="fa-times fas"></i></button>
            </div>
          </form>
        </div>
        <button type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
        <!-- Navbar Collapse -->
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
            <!-- Megamenu-->
            <li class="nav-item dropdown position-static"><a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle">Template</a>
              <div class="dropdown-menu megamenu py-lg-0">
                <div class="row">
                  <div class="col-lg-9">
                    <div class="row p-3 pr-lg-0 pl-lg-5 pt-lg-5">
                      <div class="col-lg-3">
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">Homepage</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a href="index.html" class="megamenu-list-link">Rooms   </a></li>
                          <li class="megamenu-list-item"><a href="index-2.html" class="megamenu-list-link">Restaurants   </a></li>
                        </ul>
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">Restaurants</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a href="category.html" class="megamenu-list-link">Category - Map on the top   </a></li>
                          <li class="megamenu-list-item"><a href="category-2.html" class="megamenu-list-link">Category - Map on the right   </a></li>
                          <li class="megamenu-list-item"><a href="category-3.html" class="megamenu-list-link">Category - no map   </a></li>
                          <li class="megamenu-list-item"><a href="detail.html" class="megamenu-list-link">Restaurant detail   </a></li>
                        </ul>
                      </div>
                      <div class="col-lg-3">
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">Rooms</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a href="category-rooms.html" class="megamenu-list-link">Category - Map on the top   </a></li>
                          <li class="megamenu-list-item"><a href="category-2-rooms.html" class="megamenu-list-link">Category - Map on the right   </a></li>
                          <li class="megamenu-list-item"><a href="category-3-rooms.html" class="megamenu-list-link">Category - no map   </a></li>
                          <li class="megamenu-list-item"><a href="detail-rooms.html" class="megamenu-list-link">Room detail   </a></li>
                        </ul>
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">Blog</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a href="blog.html" class="megamenu-list-link">Blog   </a></li>
                          <li class="megamenu-list-item"><a href="post.html" class="megamenu-list-link">Post   </a></li>
                        </ul>
                      </div>
                      <div class="col-lg-3">
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">Pages</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a href="contact.html" class="megamenu-list-link">Contact   </a></li>
                          <li class="megamenu-list-item"><a href="pricing.html" class="megamenu-list-link">Pricing   </a></li>
                          <li class="megamenu-list-item"><a href="text.html" class="megamenu-list-link">Text page   </a></li>
                          <li class="megamenu-list-item"><a href="faq.html" class="megamenu-list-link">F.A.Q.s  <span class="badge badge-info ml-1">New</span>   </a></li>
                          <li class="megamenu-list-item"><a href="coming-soon.html" class="megamenu-list-link">Coming soon   </a></li>
                        </ul>
                      </div>
                      <div class="col-lg-3">
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">User</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a href="/login" class="megamenu-list-link">Sign in   </a></li>
                          <li class="megamenu-list-item"><a href="/signup" class="megamenu-list-link">Sign up   </a></li>
                          <li class="megamenu-list-item"><a href="user-booking-1.html" class="megamenu-list-link">Booking process - 4 pages <span class="badge badge-warning ml-1">New</span>   </a></li>
                          <li class="megamenu-list-item"><a href="user-grid.html" class="megamenu-list-link">Bookings &mdash; grid view <span class="badge badge-warning ml-1">New</span>   </a></li>
                          <li class="megamenu-list-item"><a href="user-booking-detail.html" class="megamenu-list-link">Booking detail <span class="badge badge-warning ml-1">New</span>   </a></li>
                        </ul>
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">Host</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a href="user-add-0.html" class="megamenu-list-link">Add new listing - 6 pages   </a></li>
                          <li class="megamenu-list-item"><a href="user-list.html" class="megamenu-list-link">Bookings &mdash; list view <span class="badge badge-warning ml-1">New</span>   </a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="row megamenu-services d-none d-lg-flex pl-lg-5">
                      <div class="col-xl-3 col-lg-6 d-flex">
                        <div class="megamenu-services-item">
                          <svg class="svg-icon megamenu-services-icon">
                            <use xlink:href="#destination-map-1"> </use>
                          </svg>
                          <div>
                            <h6 class="text-uppercase">Best rentals</h6>
                            <p class="mb-0 text-muted text-sm">Find the perfect place</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-6 d-flex">
                        <div class="megamenu-services-item">
                          <svg class="svg-icon megamenu-services-icon">
                            <use xlink:href="#money-box-1"> </use>
                          </svg>
                          <div>
                            <h6 class="text-uppercase">Earn points</h6>
                            <p class="mb-0 text-muted text-sm">And get great rewards</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-6 d-flex">
                        <div class="megamenu-services-item">
                          <svg class="svg-icon megamenu-services-icon">
                            <use xlink:href="#customer-support-1"> </use>
                          </svg>
                          <div>
                            <h6 class="text-uppercase">020-800-456-747</h6>
                            <p class="mb-0 text-muted text-sm">24/7 Available Support</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-6 d-flex">
                        <div class="megamenu-services-item">
                          <svg class="svg-icon megamenu-services-icon">
                            <use xlink:href="#secure-payment-1"> </use>
                          </svg>
                          <div>
                            <h6 class="text-uppercase">Secure Payment</h6>
                            <p class="mb-0 text-muted text-sm">Secure Payment</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 d-none d-lg-block"><img src="img/photo/photo-1521170665346-3f21e2291d8b.jpg" alt="" class="bg-image"></div>
                </div>
              </div>
            </li>
            <!-- /Megamenu end-->
            <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a>
            </li>
            <li class="nav-item dropdown"><a id="docsDropdownMenuLink" href="index.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle ">
                 
                Docs</a>
              <div aria-labelledby="docsDropdownMenuLink" class="dropdown-menu dropdown-menu-right">
                <h6 class="dropdown-header font-weight-normal">Documentation</h6><a href="docs/docs-introduction.html" class="dropdown-item">Introduction </a><a href="docs/docs-directory-structure.html" class="dropdown-item">Directory structure </a><a href="docs/docs-gulp.html" class="dropdown-item">Gulp </a><a href="docs/docs-customizing-css.html" class="dropdown-item">Customizing CSS </a><a href="docs/docs-credits.html" class="dropdown-item">Credits </a><a href="docs/docs-changelog.html" class="dropdown-item">Changelog </a>
                <div class="dropdown-divider"></div>
                <h6 class="dropdown-header font-weight-normal">Components</h6><a href="docs/components-bootstrap.html" class="dropdown-item">Bootstrap </a><a href="docs/components-directory.html" class="dropdown-item">Theme </a>
              </div>
            </li>
            <li class="nav-item"><a href="/login" class="nav-link">Sign in</a></li>
            <li class="nav-item"><a href="/signup" class="nav-link">Sign up</a></li>
            <li class="nav-item mt-3 mt-lg-0 ml-lg-3 d-lg-none d-xl-inline-block"><a href="user-add-0.html" class="btn btn-primary">Add a listing</a></li>
          </ul>
        </div>
      </div>
    </nav>  
</template>
```

Add the following code into the `<template>` tag of `App.vue`
```html
...
<Navigation/>
<router-view/>
...
```

In the `<script>` tag of `App.vue` add the following code: 

```js
import Navigation from '@/components/Navigation.vue' <--- We import the footer from our components

export default {
  name: 'home',
  components: {
    Navigation <--- We add footer as a component
  }
}
```

Add the following under `<Navigation>` tag in  `App.vue`
```html
<div class="navbar-margin"></div>
```
Add the following code inside the `<style>` tag of `App.vue`
```css
 .navbar-margin {
     margin-bottom: 50px;
 }
```

### Step 4B: Set up Global Footer
In `myproject-consumer-web/src/components/`
create a file called : `Footer.vue`

Add the following code in `Footer.vue`:
```html
<template>
   <footer class="position-relative z-index-10 d-print-none">
      <!-- Main block - menus, subscribe form-->
      <div class="py-6 bg-gray-200 text-muted"> 
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <div class="font-weight-bold text-uppercase text-dark mb-3">Directory</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" target="_blank" title="twitter" class="text-muted text-hover-primary"><i class="fab fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="facebook" class="text-muted text-hover-primary"><i class="fab fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="instagram" class="text-muted text-hover-primary"><i class="fab fa-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="pinterest" class="text-muted text-hover-primary"><i class="fab fa-pinterest"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="vimeo" class="text-muted text-hover-primary"><i class="fab fa-vimeo"></i></a></li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 mb-5 mb-lg-0">
              <h6 class="text-uppercase text-dark mb-3">Rentals</h6>
              <ul class="list-unstyled">
                <li><a href="index.html" class="text-muted">Rooms     </a></li>
                <li><a href="category-rooms.html" class="text-muted">Map on top     </a></li>
                <li><a href="category-2-rooms.html" class="text-muted">Side map     </a></li>
                <li><a href="category-3-rooms.html" class="text-muted">No map     </a></li>
                <li><a href="detail-rooms.html" class="text-muted">Room detail     </a></li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 mb-5 mb-lg-0">
              <h6 class="text-uppercase text-dark mb-3">Pages</h6>
              <ul class="list-unstyled">
                <li><a href="contact.html" class="text-muted">Contact                                   </a></li>
                <li><a href="pricing.html" class="text-muted">Pricing                                   </a></li>
                <li><a href="text.html" class="text-muted">Text page                                   </a></li>
                <li><a href="faq.html" class="text-muted">F.A.Q.s  <span class="badge badge-info ml-1">New</span>                                   </a></li>
                <li><a href="coming-soon.html" class="text-muted">Coming soon                                   </a></li>
              </ul>
            </div>
            <div class="col-lg-4">
              <h6 class="text-uppercase text-dark mb-3">Daily Offers & Discounts</h6>
              <p class="mb-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
              <form action="#" id="newsletter-form">
                <div class="input-group mb-3">
                  <input type="email" placeholder="Your Email Address" aria-label="Your Email Address" class="form-control bg-transparent border-dark border-right-0">
                  <div class="input-group-append">
                    <button type="submit" class="btn btn-outline-dark border-left-0"> <i class="fa fa-paper-plane text-lg"></i></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- Copyright section of the footer-->
      <div class="py-4 font-weight-light bg-gray-800 text-gray-300">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 text-center text-md-left">
              <p class="text-sm mb-md-0">&copy; 2019 Your company.  All rights reserved.</p>
            </div>
            <div class="col-md-6">
              <ul class="list-inline mb-0 mt-2 mt-md-0 text-center text-md-right">
                <li class="list-inline-item"><img src="../assets/img/visa.svg" alt="..." class="w-2rem"></li>
                <li class="list-inline-item"><img src="../assets/img/mastercard.svg" alt="..." class="w-2rem"></li>
                <li class="list-inline-item"><img src="../assets/img/paypal.svg" alt="..." class="w-2rem"></li>
                <li class="list-inline-item"><img src="../assets/img/western-union.svg" alt="..." class="w-2rem"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>
```

Add the following code into the `<template>` tag of `App.vue`
```html
...
<router-view/>
<Footer/>
...
```
In the `<script>` tag of `App.vue` add the following code: 

```js
import Footer from '@/components/Footer.vue' <--- We import the footer from our components

export default {
  name: 'home',
  components: {
    Navigation,
    Footer <--- We add footer as a component
  }
}
```

Final Version of `App.vue`
```html
<template>
  <div id="app">
    <Navigation/>
    <div class="navbar-margin"></div>
    <router-view/>
    <Footer/>

  </div>
</template>

<script type="text/javascript">
  // @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Navigation,
    Footer
  }
}
</script>
<style type="text/css">
  .navbar-margin {
    margin-bottom: 50px;
  }

  /*extra css*/
  @import "https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700";
  @import "https://fonts.googleapis.com/css?family=Poppins:300,400,400i,700";
  @import "https://use.fontawesome.com/releases/v5.8.1/css/all.css";
  @import "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css";

</style>
```

## Step 5: Set up Home Page

### Step 5.1: Search Bar Component

## Step 6: Set up Login Page

In `myproject-consumer-web/src/views/`
create a file called : `Login.vue`

Add the following snippet
```html
<template>
    <div class="login">
        <div class="container-fluid px-3">
          <div class="row min-vh-100">
            <div class="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
              <div class="w-100 py-5 px-md-5 px-xl-6 position-relative">
                <div class="mb-5"><img src="img/logo-square.svg" alt="..." style="max-width: 4rem;" class="img-fluid mb-3">
                  <h2>Welcome back</h2>
                </div>
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
                  <button class="btn btn btn-outline-muted btn-block btn-social mb-3"><i class="fa-2x fa-google fab btn-social-icon"> </i>Connect <span class="d-none d-sm-inline">with Google</span></button>
                  <hr class="my-4">
                  <p class="text-center"><small class="text-muted text-center">Don't have an account yet? <a href="signup.html">Sign Up                </a></small></p>
                </form><a href="index.html" class="close-absolute mr-md-5 mr-xl-6 pt-5"> 
                  <svg class="svg-icon w-3rem h-3rem">
                    <use xlink:href="#close-1"> </use>
                  </svg></a>
              </div>
            </div>
            <div class="col-md-4 col-lg-6 col-xl-7 d-none d-md-block">
              <!-- Image-->
              <div style="background-image: url(img/photo/photo-1497436072909-60f360e1d4b1.jpg);" class="bg-cover h-100 mr-n3"></div>
            </div>
          </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'landing',
  props: {
    msg: String
  }
}
</script>

<style type="text/css">
    
    
</style>
```


In `myproject-consumer-web/src/`

Add the following snippet in `router.js`:

```js
{
   path: '/about',
   name: 'about',
   // route level code-splitting
   // this generates a separate chunk (about.[hash].js) for this route
   // which is lazy-loaded when the route is visited.
   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
},
{ 
   //Added a route for login
   path: '/login',
   name: 'login',
   component: () => import('./views/Login.vue')
}
```

## Step 7: Set up Signup Page

In `myproject-consumer-web/src/views/`
create a file called : `SignUp.vue`

Add the following snippet
```html
<template>
  <div class="signup">
        <div class="container-fluid px-3">
      <div class="row min-vh-100">
        <div class="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
          <div class="w-100 py-5 px-md-5 px-xl-6 position-relative">
            <div class="mb-4"><img src="img/logo-square.svg" alt="..." style="max-width: 4rem;" class="img-fluid mb-4">
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
              <button type="submit" class="btn btn-lg btn-block btn-primary">Sign up</button>
              <hr data-content="OR" class="my-3 hr-text letter-spacing-2">
              <button class="btn btn btn-outline-primary btn-block btn-social mb-3"><i class="fa-2x fa-facebook-f fab btn-social-icon"> </i>Connect <span class="d-none d-sm-inline">with Facebook</span></button>
              <button class="btn btn btn-outline-muted btn-block btn-social mb-3"><i class="fa-2x fa-google fab btn-social-icon"> </i>Connect <span class="d-none d-sm-inline">with Google</span></button>
              <hr class="my-4">
              <p class="text-sm text-muted">By signing up you agree to Directory's <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.</p>
            </form><a href="index.html" class="close-absolute mr-md-5 mr-xl-6 pt-5"> 
              <svg class="svg-icon w-3rem h-3rem">
                <use xlink:href="#close-1"> </use>
              </svg></a>
          </div>
        </div>
        <div class="col-md-4 col-lg-6 col-xl-7 d-none d-md-block">
          <!-- Image-->
          <div style="background-image: url(img/photo/photo-1497436072909-60f360e1d4b1.jpg);" class="bg-cover h-100 mr-n3"></div>
        </div>
      </div>
    </div>
  </div>
</template>
```


In `myproject-consumer-web/src/`

Add the following snippet in `router.js`:

```js
{
  path: '/login',
  name: 'login',
  component: () => import('./views/Login.vue')
},
{
  //Add sign up into routes
  path: '/signup',
  name: 'sigup',
  component: () => import('./views/SignUp.vue')
}
```

## Step 8: Set up Detail Page


## Step 9: Set up Main Booking Page
In `src/views` folder create a file called `Booking.vue`
In `Booking.vue`, copy the following code:
```html
<template>
  <div class="booking">
    <router-view/>
  </div>
</template>
<script>
</script>
```

In `myproject-consumer-web/src/`

Add the following snippet in `router.js`:

```js
{
    path: '/booking',
    name: 'booking',
    component: () => import('./views/Booking.vue'),
}
```

## Step 10: Set up BookingPanel Component
In `src/components` folder create a folder called `booking`
```bash
$ cd src/components
$ mkdir booking
$ cd booking
```
In the `booking` folder, create a file called `BookingPanel.vue`
```bash
$ touch BookingPanel.vue
```

In `BookingPanel.vue` copy the following code:

```html
<template>
  <div class="booking-panel">
     <div class="card border-0 shadow">
      <div class="card-body p-4">
        <div class="text-block pb-3">
          <div class="media align-items-center">
            <div class="media-body">
              <h6> <a href="detail-rooms.html" class="text-reset">Modern Apt - Vibrant Neighborhood</a></h6>
              <p class="text-muted text-sm mb-0">Entire home in New York</p>
              <div class="mt-n1"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i>
              </div>
            </div><a href="detail-rooms.html"><img src="../../assets/img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="" width="100" class="ml-3 rounded"></a>
          </div>
        </div>
        <div class="text-block py-3">
          <ul class="list-unstyled mb-0">
            <li class="mb-3"><i class="fas fa-users fa-fw text-muted mr-2"></i>3 guests</li>
            <li class="mb-0"><i class="far fa-calendar fa-fw text-muted mr-2"></i>Apr 17, 2019 <i class="fas fa-arrow-right fa-fw text-muted mx-3"></i>Apr 18, 2019</li>
          </ul>
        </div>
        <div class="text-block pt-3 pb-0">
          <table class="w-100">
            <tbody>
              <tr>
                <th class="font-weight-normal py-2">$432.02 x 1 night</th>
                <td class="text-right py-2">$432.02</td>
              </tr>
              <tr>
                <th class="font-weight-normal pt-2 pb-3">Service fee</th>
                <td class="text-right pt-2 pb-3">$67.48</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="border-top">
                <th class="pt-3">Total</th>
                <td class="font-weight-bold text-right pt-3">$499.50</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div class="card-footer bg-primary-light py-4 border-0">
        <div class="media align-items-center">
          <div class="media-body">
            <h6 class="text-primary">Flexible – free cancellation</h6>
            <p class="text-sm text-primary opacity-8 mb-0">Cancel within 48 hours of booking to get a full refund. <a href="#" class="text-reset ml-3">More details</a></p>
          </div>
          <svg class="svg-icon svg-icon svg-icon-light w-3rem h-3rem ml-2 text-primary">
            <use xlink:href="#diploma-1"> </use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
```

## Step 11: Set up Book-1 Page

In the `booking` folder, create a file called `Step1.vue`

In `Step1.vue` copy the following code:

*Note that `Step1.vue` imports BookingPanel as a child component
```html
<template>
  <div class="booking-step1">
    <!-- progress bar -->
    <div style="height: 8px; top: 71px;" class="progress rounded-0 sticky-top">
      <div role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
    </div>

    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <p class="subtitle text-primary">Book your holiday home</p>
            <h1 class="h2 mb-5"> Review house rules <span class="text-muted float-right">Step 1</span>      </h1>
            <div class="text-block">
              <div class="alert alert-warning text-sm mb-3">
                <div class="media align-items-center">
                  <svg class="svg-icon svg-icon svg-icon-light w-2rem h-2rem mr-3 text-reset">
                    <use xlink:href="#heart-1"> </use>
                  </svg>
                  <div class="media-body"><strong>This home is on people’s minds.</strong> It’s been viewed 43 times in the past week.</div>
                </div>
              </div>
            </div>
            <div class="text-block">
              <h5 class="mb-4">1 night in London</h5>
              <div class="row mb-3">
                <div class="col-md-6 d-flex align-items-center mb-3 mb-md-0">
                  <div class="date-tile mr-3">
                    <div class="text-uppercase"> <span class="text-sm">Apr</span><br><strong class="text-lg">17</strong></div>
                  </div>
                  <p class="text-sm mb-0">Wednesday check-in<br>3PM - 7PM</p>
                </div>
                <div class="col-md-6 d-flex align-items-center">
                  <div class="date-tile mr-3">
                    <div class="text-uppercase"> <span class="text-sm">Apr</span><br><strong class="text-lg">18</strong></div>
                  </div>
                  <p class="text-sm mb-0">Thursday check-out<br>11AM</p>
                </div>
              </div>
            </div>
            <div class="text-block">
              <h5 class="mb-4">Things to keep in mind</h5>
              <ul class="list-unstyled">
                <li class="mb-2"> 
                  <div class="media align-items-center mb-3">
                    <div class="icon-rounded icon-rounded-sm bg-secondary-light mr-4"><i class="fa fas fa-child text-secondary fa-fw text-center"></i></div>
                    <div class="media-body"><span class="text-sm">Not suitable for children and infants - The entrance staircase doesn't have handrails</span></div>
                  </div>
                </li>
                <li class="mb-2"> 
                  <div class="media align-items-center mb-3">
                    <div class="icon-rounded icon-rounded-sm bg-secondary-light mr-4"><i class="fa fas fa-glass-cheers text-secondary fa-fw text-center"></i></div>
                    <div class="media-body"><span class="text-sm">No parties or events</span></div>
                  </div>
                </li>
                <li class="mb-2"> 
                  <div class="media align-items-center mb-3">
                    <div class="icon-rounded icon-rounded-sm bg-secondary-light mr-4"><i class="fa fa-smoking-ban text-secondary fa-fw text-center"></i></div>
                    <div class="media-body"><span class="text-sm">No smoking</span></div>
                  </div>
                </li>
                <li class="mb-2"> 
                  <div class="media align-items-center mb-3">
                    <div class="icon-rounded icon-rounded-sm bg-secondary-light mr-4"><i class="fa fa-cat text-secondary fa-fw text-center"></i></div>
                    <div class="media-body"><span class="text-sm">No pets</span></div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="row form-block flex-column flex-sm-row">
              <div class="col text-center text-sm-left">
              </div>
              <div class="col text-center text-sm-right"><router-link to="step2" class="btn btn-primary px-3">
                  
                  Next step<i class="fa-chevron-right fa ml-2"></i></router-link></div>
            </div>
          </div>
          <div class="col-lg-5 pl-xl-5">
            <!-- Add booking panel here -->
            <BookingPanel/>

          </div>
        </div>
      </div>
    </section>
</div>    
</template>
<script>
  import BookingPanel from '@/components/booking/BookingPanel.vue'

  export default {
    name: 'step1',
    components: {
      BookingPanel
    }
  }
</script>
```

## Step 12: Set up Book-2 Page

In the `booking` folder, create a file called `Step1.vue`

In `Step2.vue` copy the following code:
```html
<template>
    <div class="booking-step2">
  <div style="height: 8px; top: 71px;" class="progress rounded-0 sticky-top">
      <div role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
    </div>
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <p class="subtitle text-primary">Book your holiday home</p>
            <h1 class="h2 mb-5"> Who's coming? <span class="text-muted float-right">Step 2</span>      </h1>
            <div class="text-block">
              <div class="alert alert-warning text-sm mb-3">
                <div class="media align-items-center">
                  <svg class="svg-icon svg-icon svg-icon-light w-2rem h-2rem mr-3 text-reset">
                    <use xlink:href="#heart-1"> </use>
                  </svg>
                  <div class="media-body"><strong>This home is on people’s minds.</strong> It’s been viewed 43 times in the past week.</div>
                </div>
              </div>
            </div>
            <div class="text-block">
              <label for="form_guests" class="h5">Guests</label>
              <p class="text-sm text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in.</p>
              <div class="row">
                <div class="col-lg-6 mb-3">
                  <select name="guests" id="form_guests" data-style="btn-selectpicker" title=" " class="selectpicker form-control">
                    <option value="guests_0">1</option>
                    <option value="guests_1">2</option>
                    <option value="guests_2" selected>3</option>
                    <option value="guests_3">4</option>
                    <option value="guests_4">5</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="text-block">
              <h5>What's the main purpose of this trip?</h5>
              <p class="text-sm text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit.</p>
              <ul class="list-unstyled">
                <li>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="purpose_0" name="purpose" class="custom-control-input">
                    <label for="purpose_0" class="custom-control-label">Personal travel      </label>
                  </div>
                </li>
                <li>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="purpose_1" name="purpose" class="custom-control-input">
                    <label for="purpose_1" class="custom-control-label">Business travel      </label>
                  </div>
                </li>
              </ul>
            </div>
            <div class="text-block">
              <div class="media">
                <div class="media-body">
                  <h5>Say hello to your host</h5>
                  <p class="text-sm text-muted">His room, a proper human room although a little too small, lay peacefully between its four familiar .</p>
                </div><img src="../../assets/img/avatar/avatar-10.jpg" alt="Jack London" class="avatar ml-4">
              </div>
              <textarea name="hello" rows="4" class="form-control"></textarea>
            </div>
            <div class="row form-block flex-column flex-sm-row">
              <div class="col text-center text-sm-left"><router-link to="step1" class="btn btn-link text-muted"> <i class="fa-chevron-left fa mr-2"></i>Back</router-link>
              </div>
              <div class="col text-center text-sm-right"><router-link to="payment" class="btn btn-primary px-3">
                   
                  Next step<i class="fa-chevron-right fa ml-2"></i></router-link></div>
            </div>
          </div>
          <div class="col-lg-5 pl-xl-5">
           <!-- add booking panel here -->
           <BookingPanel/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import BookingPanel from '@/components/booking/BookingPanel.vue'

  export default {
    name: 'step1',
    components: {
      BookingPanel
    }
  }
</script>
```

## Step 13: Set up Payments Page
In the `booking` folder, create a file called `Step3.vue`

In `Step3.vue` copy the following code:
```html
<template>
    <div class="booking-step3">
  <div style="height: 8px; top: 71px;" class="progress rounded-0 sticky-top">
      <div role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
    </div>
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <p class="subtitle text-primary">Book your holiday home</p>
            <h1 class="h2 mb-5"> Confirm and pay <span class="text-muted float-right">Step 3</span>      </h1>
            <div class="text-block">
              <div class="alert alert-warning text-sm mb-3">
                <div class="media align-items-center">
                  <svg class="svg-icon svg-icon svg-icon-light w-2rem h-2rem mr-3 text-reset">
                    <use xlink:href="#heart-1"> </use>
                  </svg>
                  <div class="media-body"><strong>This home is on people’s minds.</strong> It’s been viewed 43 times in the past week.</div>
                </div>
              </div>
            </div>
            <div class="text-block">
              <form action="#">
                <div class="d-flex justify-content-between align-items-end mb-4">
                  <h5 class="mb-0">Pay with your card</h5>
                  <div class="text-muted"><i class="fab fa-cc-amex fa-2x mr-2"> </i><i class="fab fa-cc-visa fa-2x mr-2"> </i><i class="fab fa-cc-mastercard fa-2x"></i></div>
                </div>
                <select name="payment" id="form_payment" data-style="btn-selectpicker" class="selectpicker form-control mb-3">
                  <option value="">Visa •••• 5687</option>
                  <option value="">Mastercard •••• 4569</option>
                </select>
                <button type="button" data-toggle="collapse" data-target="#addNewCard" aria-expanded="false" aria-controls="addNewCard" data-expanded-text="Close" data-collapsed-text="Add a new card" class="btn btn-link btn-collapse pl-0 text-muted">Add a new card</button>
                <div id="addNewCard" class="row collapse">
                  <div class="form-group col-md-6">
                    <label for="card-name" class="form-label">Name on Card</label>
                    <input type="text" name="card-name" placeholder="Name on card" id="card-name" class="form-control">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="card-number" class="form-label">Card Number</label>
                    <input type="text" name="card-number" placeholder="Card number" id="card-number" class="form-control">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="expiry-date" class="form-label">Expiry Date</label>
                    <input type="text" name="expiry-date" placeholder="MM/YY" id="expiry-date" class="form-control">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="cvv" class="form-label">CVC/CVV</label>
                    <input type="text" name="cvv" placeholder="123" id="cvv" class="form-control">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="zip" class="form-label">ZIP</label>
                    <input type="text" name="zip" placeholder="123" id="zip" class="form-control">
                  </div>
                </div>
              </form>
            </div>
            <div class="text-block">
              <h6>Cancellation policy</h6>
              <p class="text-sm text-muted">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of .</p>
              <p class="text-sm text-muted">He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the flounde.</p>
            </div>
            <div class="row form-block flex-column flex-sm-row">
              <div class="col text-center text-sm-left"><a href="step2" class="btn btn-link text-muted"> <i class="fa-chevron-left fa mr-2"></i>Back</a>
              </div>
              <div class="col text-center text-sm-right"><a href="confirmed" class="btn btn-primary px-3">
                   
                  Next step<i class="fa-chevron-right fa ml-2"></i></a></div>
            </div>
          </div>
          <div class="col-lg-5 pl-xl-5">
           <!-- add booking panel here -->
           <BookingPanel/>
          </div>
        </div>
      </div>
    </section>
    </div>
</template>

<script>
  import BookingPanel from '@/components/booking/BookingPanel.vue'

  export default {
    name: 'step1',
    components: {
      BookingPanel
    }
  }
</script>
```

## Step 14: Set up Confirmed Page
In the `booking` folder, create a file called `Step4.vue`

In `Step4.vue` copy the following code:
```html
<template>
    <div class="booking-step4">
  <div style="height: 8px; top: 71px;" class="progress rounded-0 sticky-top">
      <div role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
    </div>
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <p class="subtitle text-primary">Book your holiday home</p>
            <h1 class="h2 mb-5"> Booking placed <span class="text-muted float-right">Step 4</span>      </h1>
            <div class="text-block">
              <p class="text-muted">Thank you for your booking, Ondrej. </p>
              <p class="text-muted mb-5">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
              <p class="text-center mb-5"><a href="user-booking-detail.html" class="btn btn-primary mx-2 mb-2"> <i class="far fa-file mr-2"></i>View your order</a><router-link to="/" class="btn btn-outline-muted mb-2">Or something else</router-link></p>
              <p class="mb-5 text-center"><img src="img/illustration/undraw_celebration_0jvk.svg" alt="" style="width: 400px;" class="img-fluid"></p>
            </div>
          </div>
          <div class="col-lg-5 pl-xl-5">
           <!-- add booking panel here -->
           <BookingPanel/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import BookingPanel from '@/components/booking/BookingPanel.vue'

  export default {
    name: 'step1',
    components: {
      BookingPanel
    }
  }
</script>
```


## Step 15: Set up Router for all Bookings 

In `myproject-consumer-web/src/`

Add the following snippet in `router.js`:

```js
{
    path: '/booking',
    name: 'booking',
    component: () => import('./views/Booking.vue'),
}
```

under the path `/booking`, add a key called children that takes in a list of child paths:
```js
 {
      path: '/booking',
      name: 'booking',
      component: () => import('./views/Booking.vue'),
      children: [
        {
          path: 'step1',
          component: () => import('./components/booking/Step1.vue'),
        },
        {
          path: 'step2',
          component: () => import('./components/booking/Step2.vue'),
        },
        {
          path: 'payment',
          component: () => import('./components/booking/Step3.vue'),
        },
        {
          path: 'confirmed',
          component: () => import('./components/booking/Step4.vue'),
        }
      ]
    }
``` 

*this will allow us to access our bookings via, `/booking/<path to step>`

eg:
```
http://[hostname]/booking/step1
http://[hostname]/booking/step2
http://[hostname]/booking/payment
http://[hostname]/booking/confirmed
```

## Step 16: Set up Axios to Consume Data 

### Step 16.1: Install Axios
In the terminal run, inside your project folder, the following command: 
```bash
$ npm install axios --save
```

in `myproject-vuejs-web/package.json` you must see the following dependencies:
```json
  "dependencies": {
    "bootstrap": "^4.3.1",
    "jquery": "^3.4.1",
    "popper.js": "^1.15.0",
    "axios": "^0.18.0"
  },
```

### Step 16.2: Modify Home Page to Include Axios

In `myproject-vuejs-web/src/main.js`
Add the following lines:

```js
import axios from 'axios'
Vue.prototype.$http = axios;
```

### (Optional) Clean up
```
$ aws codecommit delete-repository --repository-name myproject-vuejs-web
$ rm -rf ~/environment/myproject-vuejs-web
```
