


# Set up Vue.js Frontend using a Theme
## Prerequisites


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

- node
```
$ node -v
v12.2.0
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
| WEBPAGE        | URI                                     | ACTION                      |
|----------------|-----------------------------------------|-----------------------------|
| HOME           | http://[hostname]/                      | Landing Page                |
| SIGNIN         | http://[hostname]/login                 | Logs the user in            |
| SIGNUP         | http://[hostname]/signup                | Signs up the user           |
| FORGOT PWD     | http://[hostname]/forgot                | Forgot password page        |
| CONFIRM        | http://[hostname]/confirm               | Confirms the user           |

| INDEX          | http://[hostname]/products              | Gets all products           |
| DETAIL         | http://[hostname]/products/<product_id> | Gets one product            |

| BOOK-1         | http://[hostname]/booking/step1         | Booking Step 1              |
| BOOK-2         | http://[hostname]/booking/step2         | Booking Step 2              |         
| PAYMENT        | http://[hostname]/booking/payment       | Payment and Confirmation    |
| CONFIRMATION   | http://[hostname]/booking/confirmed     | Booking successful          |

| PROFILE        | http://[hostname]/profile/<user_id>     | View and update profile     |
| PROFILE-0      | http://[hostname]/profile/step0         | Update profile step 0       |
| PROFILE-1      | http://[hostname]/profile/step1         | Update profile step 1       |
| PROFILE-2      | http://[hostname]/profile/step2         | Update profile step 2       |
| PROFILE-3      | http://[hostname]/profile/step3         | Update profile step 3       |
| PROFILE-4      | http://[hostname]/profile/step4         | Update profile success      |
```

### Step 1.1: Initialize Vue Project
```
$ cd ~/environment/
$ vue create myproject-consumer-web
$ cd myproject-consumer-web
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

### Step 2.1 Copy the contents of assets folder into assets folder of `myproject-consumer-web`
```bash
$ cd myproject-consumer-web/src/assets
$ cp -R <source_dir>/assets/ myproject-consumer-web/src/assets
```

*You can find the assets folder in the src directory of this repository

### Step 2.2:  Install theme dependencies and node modules
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
Install module: vue-awesome-swiper
In the terminal run the following: 
```bash
# vuejs swiper for card components
$ npm install vue-awesome-swiper --save

# a vuejs dropdown selection library
$ npm install vue-select --save

# a vuejs datepicker library
$ npm install vuejs-datepicker --save

# will be used later for SVG rendering
$ npm install html-loader --save
```
after, run:
```bash
$ npm install
```

### Step 2.3: Import CSS and javascript dependencies to `main.js`

In `myproject-vuejs-web/src/main.js` add the following lines of code: 

```js
// for Vue Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

// jQuery
require('@/assets/vendor/jquery/jquery.min.js');

// bootstrap
import 'bootstrap';

// css
require('@/assets/vendor/nouislider/nouislider.css');
require('@/assets/vendor/magnific-popup/magnific-popup.css');
require('@/assets/css/style.default.css');
require('@/assets/css/custom.css');

//import css for vue-select
import 'vue-select/dist/vue-select.css';
```

Final Version of `main.js`:

```js
import Vue from 'vue';
import App from './App.vue';

// for Vue Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

// jQuery
require('@/assets/vendor/jquery/jquery.min.js');

// bootstrap
import 'bootstrap';

// css
require('@/assets/vendor/nouislider/nouislider.css');
require('@/assets/vendor/magnific-popup/magnific-popup.css');
require('@/assets/css/style.default.css');
require('@/assets/css/custom.css');

//import css for vue-select
import 'vue-select/dist/vue-select.css';


import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

```

### Step 2.4: Import CSS dependencies to `App.vue`

Add the following stylesheet imports inside the `<style>` tag of `App.vue`
```html
<style scoped>
  .navbar-margin {
    margin-bottom: 72px;
  }

  /*extra css*/
  @import "https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700";
  @import "https://fonts.googleapis.com/css?family=Poppins:300,400,400i,700";
  @import "https://use.fontawesome.com/releases/v5.8.1/css/all.css";
</style>
```

Add SVG rendering to `App.vue`
In the bottom most portion inside the`<template>` tag of `App.vue` add the following code
```html
<template>
  <div id="app">
   ...START...
    <!-- load this using the html loader -->
    <!-- https://stackoverflow.com/questions/50834598/inline-svg-in-vuejs-component -->
    <div v-html="require('!html-loader!@/assets/icons/orion-svg-sprite.svg')"></div>
    ...END...
  </div>
</template>
```

In this portion we use `v-html`  to load .svg file: `orion-svg-sprite.svg` into the div tag, using the `html-loader`.
 
### Step 2.5:  Set up ESLint for code consistency linting
In the terminal run the following: 
```bash
$ npm install eslint eslint-config-strongloop --save
```

In `myproject-vuejs-web/src` create  a file called: `.eslintrc.json`
In `.eslintrc.json` add following:
```json
{
    "extends": "strongloop",
    "parser": "babel-eslint"
}
```

In `myproject-vuejs-web/src` create a file called:  `.eslintignore`

In the `.eslintignore` we specify directories we don't want to lint. In this case,  we don't need to lint our `assets` and `pages` folders because they contain the templates we modified for the purposes of this project. 

We also ignore `dist`, which contains the packaged form of the project to be used in production

In `.eslintignore` add following relative paths:
```bash
src/assets/**
src/pages/**
dist/**
```

In `myproject-vuejs-web/src` ,  `package.json` under 
```json
"scripts": {
  ...
  "lint": "vue-cli-service lint"
  ...
}
```
replace:
```json
"lint": "vue-cli-service lint"
```
with the following
```json
"lint": "eslint . --fix"
```

In the terminal you can now run the following command: 
```bash
$ npm run lint
```
*The above command will automatically fix spacing and report syntax errors.

## Step 3: Set up Router Plugin

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

### Step 4.1: Set up Global Navigation Bar Component
In `myproject-consumer-web/src/components/`
create a file called : `Navigation.vue`

Add the following code in `Navigation.vue`:

```html
<template>
   <nav class="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
      <div class="container-fluid">
        <div class="d-flex align-items-center"><a href="/" class="navbar-brand py-1"><img src="../assets/img/hetchly-logo.svg" alt="Hetchly logo"></a>
        </div>
        <button type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
        <div id="navbarCollapse" class="collapse navbar-collapse">
          <form action="#" id="searchcollapsed" class="form-inline mt-4 mb-2 d-sm-none">
            <div class="input-label-absolute input-label-absolute-left input-reset w-100">
              <label for="searchcollapsed_search" class="label-absolute"><i class="fa fa-search"></i><span class="sr-only">What are you looking for?</span></label>
              <input id="searchcollapsed_search" placeholder="Search" aria-label="Search" class="form-control form-control-sm border-0 shadow-0 bg-gray-200">
              <button type="reset" class="btn btn-reset btn-sm"><i class="fa-times fas"></i></button>
            </div>
          </form>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><router-link id="homeDropdownMenuLink" to="/" class="nav-link">Home</router-link></li>
            <li class="nav-item"><router-link id="logInButton" to="/products" class="nav-link">Activities</router-link></li>
            <li class="nav-item" v-if="loggedIn"><router-link id="logInButton" to="/profile/1" class="nav-link">My Profile</router-link></li>
            <li class="nav-item"><router-link id="logInButton" to="/login" class="nav-link" v-if="!loggedIn">Sign in</router-link></li>
            <li class="nav-item" v-if="!loggedIn"><router-link to="/signup"><button id="logOutButton" class="btn btn-primary">Register</button></router-link></li>
            <li class="nav-item mt-3 mt-lg-0 ml-lg-3 d-lg-none d-xl-inline-block" v-if="loggedIn"><button id="logOutButton" class="btn btn-primary" v-on:click="logOut">Logout</button></li>
          </ul>
        </div>
      </div>
    </nav>  
</template>
```

Add the following code into the `<template>` tag of `App.vue`
```html
<div id="app">
... START ...
    <div v-if="!['signup', 'login'].includes(this.$route.name)">
      <Navigation/>
      <div class="navbar-margin"></div>
    </div>
... END...
</div>
```

In the `<script>` tag of `App.vue` add the following code: 

```html
<script>
...START...
import Navigation from '@/components/Navigation.vue' <--- We import the Navigation from our components

export default {
  name: 'home',
  components: {
    Navigation <--- We add Navigation as a component
  }
}
...END...
</script>
```

Add the following code inside the `<style>` tag of `App.vue`
```css
.navbar-margin {
   margin-bottom: 72px;
}
```

### Step 4.2 : Set up Global Footer Component
In `myproject-consumer-web/src/components/`
create a file called : `Footer.vue`

Add the following code in `Footer.vue`:
```html
<template>
   <footer class="position-relative z-index-10 d-print-none">
      <div class="py-6 bg-gray-200 text-muted"> 
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <div class="font-weight-bold text-uppercase text-dark mb-3">Hetchly</div>
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
              <h6 class="text-uppercase text-dark mb-3">Destinations</h6>
              <ul class="list-unstyled">
                <li><a href="/" class="text-muted">Boracay</a></li>
                <li><a href="/" class="text-muted">Coron</a></li>
                <li><a href="/" class="text-muted">La Union</a></li>
                <li><a href="/" class="text-muted">Tagaytay</a></li>
                <li><a href="/" class="text-muted">Baguio</a></li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 mb-5 mb-lg-0">
              <h6 class="text-uppercase text-dark mb-3">Pages</h6>
              <ul class="list-unstyled">
                <li><a href="/" class="text-muted">Contact</a></li>
                <li><a href="/" class="text-muted">Pricing</a></li>
                <li><a href="/" class="text-muted">Text page</a></li>
                <li><a href="/" class="text-muted">F.A.Q.s<span class="badge badge-info ml-1">New</span></a></li>
                <li><a href="/" class="text-muted">Coming soon</a></li>
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
      <div class="py-4 font-weight-light bg-gray-800 text-gray-300">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 text-center text-md-left">
              <p class="text-sm mb-md-0">&copy; 2019 Hetchly.  All rights reserved.</p>
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
<div class="navbar-margin"></div>
  <router-view/>
  ... START...
  <div v-if="!['signup', 'login'].includes(this.$route.name)">
     <Footer/>      
  </div>
</div>
...
```
In the `<script>` tag of `App.vue` add the following code: 

```html
<script type="text/javascript">
// @ is an alias to /src
... START ...
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue' <--- We import the footer from our components

export default {
  name: 'home',
  components: {
    Navigation,
    Footer <--- We add footer as a component
  }
}
... END...
</script>
```

Final Version of `App.vue`
```html
<template>
  <div id="app">
    <div v-if="!['signup', 'login'].includes(this.$route.name)">
      <Navigation/>
      <div class="navbar-margin"></div>
    </div>
    <router-view/>
    <div v-if="!['signup', 'login'].includes(this.$route.name)">
      <Footer/>      
    </div>

    <!-- load this using the html loader -->
    <!-- https://stackoverflow.com/questions/50834598/inline-svg-in-vuejs-component -->
    <div v-html="require('!html-loader!@/assets/icons/orion-svg-sprite.svg')"></div>
  </div>
</template>
<script>
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
}
</script>
<style scoped>
  .navbar-margin {
    margin-bottom: 72px;
  }

  /*extra css*/
  @import "https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700";
  @import "https://fonts.googleapis.com/css?family=Poppins:300,400,400i,700";
  @import "https://use.fontawesome.com/releases/v5.8.1/css/all.css";
</style>
```
## Step 5: Set up Home Page
Set up the individual components for our home page.  

### Step 5.1: Create a folder: `home` in `components`:
In `myproject-consumer-web/src/components/`
create a folder called  `home`
```bash
$ cd myproject-consumer-web/src/components/
$ mkdir home
$ cd home
```

**Note:** There are already pre-built components available located in the `home` directory of this repository. (please see `myproject-consumer-web/src/components/home`) You follow the steps below to set up an example home page. You may also make use of the other available components when creating your webpage. 

### Step 5.1: Set up Search Bar Component
In `myproject-consumer-web/src/components/home`
create a file called : `SearchBar.vue`
Add the following code:
```html
<template>
  <div class="searchbar">
    <section class="hero-home">
      <swiper v-bind:options="swiperOption" class="hero-slider">
        <div class="swiper-wrapper dark-overlay">
          <swiper-slide class="swiper-slide pic_1"></swiper-slide>
        </div>
      </swiper>
      <div class="container py-6 py-md-7 text-white z-index-20">
        <div class="row">
          <div class="col-xl-10">
            <div class="text-center text-lg-left">
              <p class="subtitle letter-spacing-4 mb-2 text-secondary text-shadow">Philippine Tourists</p>
              <h1 class="display-3 font-weight-bold text-shadow">Register Here</h1>
            </div>
            <div class="search-bar mt-5 p-3 p-lg-1 pl-lg-4">
              <form action="#">
                <div class="row">
                  <div class="col-lg-4 d-flex align-items-center form-group">
                    <input type="text" name="search" placeholder="What are you searching for?" class="form-control border-0 shadow-0">
                  </div>
                  <div class="col-lg-3 d-flex align-items-center form-group">
                    <div class="input-label-absolute input-label-absolute-right w-100">
                      <label for="location" class="label-absolute"><i class="fa fa-crosshairs"></i><span class="sr-only">City</span></label>
                      <input type="text" name="location" placeholder="Boracay" id="location" class="form-control border-0 shadow-0">
                    </div>
                  </div>

                  <div class="col-lg-5">
                    <div class="row">
                       <div class="col-lg-5">
                        <button type="submit" class="btn btn-primary btn-block rounded-xl h-100">Search</button>
                      </div>

                      <div class="or justify-content-center col-lg-1">or</div>

                     <div class="col-lg-6">
                      <a href="/signup">
                       <button  type=button class="btn btn-primary btn-block rounded-xl h-100">Register</button>
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pic_1 {
    background: url('../../assets/img/photo/banner-2.jpg') center;
    background-size: cover
  }

  .or {
    color:#868E96;
    margin-bottom:0px;
    text-align: center;
  }

</style>


<script>
  export default {
    data() {
      return {
        swiperOption: {
          el: '.hero-slider',
          effect: 'fade',
          speed: 2000,
          allowTouchMove: false,
          autoplay: {
              delay: 2000,
          },
        }
      }
    }
  }
</script>
```
### Step 5.2: Set up Services Component
In `myproject-consumer-web/src/components/home`
create a file called : `Services.vue`
Add the following code:
```html
<template>
    <div class="services">
     <section class="py-6 bg-gray-100">
      <div class="container">
        <div class="text-center pb-lg-4">
          <p class="subtitle text-secondary">Choose from a variety of services</p>
          <h2 class="mb-5">Available Services</h2>
        </div>
        <div class="row">
          <div class="col-lg-4 mb-4 mb-lg-0 text-center" v-for="service in services" v-bind:key="service.id">
            <div class="px-0 px-lg-4 icon-box">
              <div class="icon-rounded bg-primary-light mb-4">
                <svg class="svg-icon text-primary w-2rem h-2rem">
                  <use v-bind:xlink:href="service.icon"></use>
                </svg>
              </div>
              <h3 class="h5">{{service.name}}</h3>
            </div>
          </div>
        </div>
        <div style="margin-top:5%"></div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
  name: 'services',
  data(){
    return {
      services: [
        { 
          "id" : 1,
          "name": "Activities",
          "icon": "#beach-1"
        },
        { 
          "id" : 2,
          "name": "Accommodations",
          "icon": "#real-estate-1"
        },
        {
          "id" : 3,
          "name": "Eats",
          "icon": "#dinner-1"
        },
        {
          "id" : 4,
          "name": "Local Transport",
          "icon": "#bus-1"
        },
        {
          "id" : 5,
          "name": "Airport Transfer",
          "icon": "#airplane-mode-1"
        },
        {
          "id" : 6,
          "name": "Wifi + Data Packages",
          "icon": "#world-map-1"
        },
        {
          "id" : 7,
          "name": "Insurance",
          "icon": "#shield-security-1"
        },
        {
          "id" : 8,
          "name": "Payments",
          "icon": "#pay-1"
        },
        {
          "id" : 9,
          "name": "Emergency",
          "icon": "#medical-emergency-1"
        }
      ]
    }
  },
  methods: {
  }  
} 
</script>
<style scoped>
  .icon-box {
    padding:2rem;

  }



</style>
```

### Step 5.3: Set up DisplayCatalog1 Component
In `myproject-consumer-web/src/components/home`
create a file called : `DisplayCatalog1.vue`
Add the following code:
```html
<template>
  <div class="display-catalog-1">
    <section class="py-6 bg-white">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-8">
            <p class="subtitle text-primary">Stay and eat like a local</p>
            <h2>Our guides</h2>
          </div>
        </div>
        <div class="row">
          <swiper v-bind:options="swiperOption" class="guides-slider">
              <swiper-slide class="h-auto px-2" v-for="city in cities" v-bind:key="city.name">
                <div class="card card-poster gradient-overlay mb-4 mb-lg-0"><a v-bind:href="city.url_route" class="tile-link"></a>
                  <img v-bind:src="city.image_url" v-bind:alt="city.name" class="bg-image">
                  <!-- <img src="../assets/img/photo/coron.jpg" class="bg-image"> -->
                  <div class="card-body overlay-content">
                    <h6 class="card-title text-shadow text-uppercase">{{city.name}}</h6>
                    <p class="card-text text-sm">{{city.description}}</p>
                  </div>
                </div>
              </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
  </div>
</template>

<script scoped>

  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 5,
          spaceBetween: 15,
          loop: true
        },
        cities: [
          {
            "name" : "Boracay",
            "image_url" :  require('../../assets/img/photo/boracay.jpg'),
            "description" : "Boracay is ..",
            "url_route": "/products" 
          },
          {
            "name" : "Panglaw",
            "image_url" : require('../../assets/img/photo/panglaw.jpg'),
            "description" : "Panglaw is ..",
            "url_route": "#"  
          },
          {
            "name" : "Palawan",
            "image_url" : require('../../assets/img/photo/coron.jpg'),
            "description" : "Palawan is ..",
            "url_route": "#"  
          },
          {
            "name" : "Batanes",
            "image_url" : require('../../assets/img/photo/batanes.jpg'),
            "description" : "Batanes is ..",
            "url_route": "#"  
          },
          {
            "name" : "Bohol",
            "image_url" : require('../../assets/img/photo/bohol.jpg'),
            "description" : "Bohol is ..",
            "url_route": "#" 
          }
        ]
      }
    }
  }
</script>
```

### Step 5.4: Set up PhotoWheel Component
In `myproject-consumer-web/src/components/home`
create a file called : `PhotoWheel.vue`
Add the following code:
```html
<template>
    <section>
      <div class="container-fluid px-0">
        <div class="instagram-slider">
        <swiper v-bind:options="swiperOption">
            <swiper-slide v-for="photo in photos" v-bind:key="photo.image_url">
              <div>
                <img v-bind:src="photo.image_url" v-bind:alt='photo.image_url' class="img-fluid hover-scale">
              </div>
            </swiper-slide>
        </swiper>
        </div>
      </div>
    </section>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 10,
          spaceBetween: 0,
        },
        photos: [
          {
            "image_url" :  require('../../assets/img/instagram/image-1.jpg')
          },
          {
            "image_url" : require('../../assets/img/instagram/image-2.jpg'),
          },
          {
            "image_url" : require('../../assets/img/instagram/image-3.jpg'),
          },
          {
            "image_url" : require('../../assets/img/instagram/image-4.jpg'),
          },
          {
            "image_url" : require('../../assets/img/instagram/image-5.jpg'),
          },
          {
            "image_url" : require('../../assets/img/instagram/image-6.jpg'),
          },
          {
            "image_url" : require('../../assets/img/instagram/image-7.jpg'),
          },
          {
            "image_url" : require('../../assets/img/instagram/image-8.jpg'),
          },
          {
            "image_url" : require('../../assets/img/instagram/image-9.jpg'),
          },
          {
            "image_url" : require('../../assets/img/instagram/image-10.jpg'),
          }
        ]
      }

    }
  }
</script>
```

Copy the following code snippet into `Home.vue` 
```html
<template>
  <div class="home">
    <SearchBar/>
    <Services/>
    <DisplayCatalog1/>
    <DisplayProducts/>
    <PhotoWheel/> 
  </div>
</template>
<script>
// @ is an alias to /src
import SearchBar from '@/components/home/SearchBar.vue'
import Services from '@/components/home/Services.vue'
import DisplayCatalog1 from '@/components/home/DisplayCatalog1.vue'
import DisplayProducts from '@/components/products/DisplayProduct.vue'
import PhotoWheel from '@/components/home/PhotoWheel.vue'

export default {
  name: 'home',
  components: {
    SearchBar, 
    Services,
    DisplayCatalog1,
    PhotoWheel
  }
}

</script>
```

Final Version of `router.js`
* Important to note that `router.js` takes care of routing to `Home.vue`. This was configured when we ran `vue add router`
* Our home page is accessible via `localhost:8080/`

```js
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
```

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
            <div class="mb-5">
              <img src="../assets/img/hetchly-logo.svg" alt="..." style="max-width: 10rem;" class="img-fluid mb-3">
              <h2>Welcome back</h2>
            </div>
            <router-link to="/" class="close-absolute mr-md-5 mr-xl-6 pt-5">
              <svg class="svg-icon w-3rem h-3rem">
                <use xlink:href="#close-1"> </use>
              </svg>
            </router-link>
            <div class="form-validate" id="loginForm">
              <div class="form-group">
                <label for="loginUsername" class="form-label"> Email Address</label>
                <input name="loginUsername" id="loginUsername" type="email" placeholder="name@address.com" autocomplete="off" required data-msg="Please enter your email" class="form-control" v-model="email">
              </div>
              <div class="form-group mb-4">
                <div class="row">
                  <div class="col">
                    <label for="loginPassword" class="form-label"> Password</label>
                  </div>
                  <div class="col-auto">
                    <router-link to="forgot" class="form-text small">Forgot password?</router-link>
                  </div>
                </div>
                <input name="loginPassword" id="loginPassword" placeholder="Password" type="password" required data-msg="Please enter your password" class="form-control" v-model="password">
              </div>
              <button class="btn btn-lg btn-block btn-primary">Sign in</button>
              <hr data-content="OR" class="my-3 hr-text letter-spacing-2">
            </div>
            <button class="btn btn btn-outline-primary btn-block btn-social mb-3"><i class="fa-2x fa-facebook-f fab btn-social-icon"> </i>Connect <span class="d-none d-sm-inline">with Facebook</span></button>
            <p class="text-center"><small class="text-muted text-center">Don't have an account yet? <a href="/signup">Sign Up</a></small></p>
          </div>
        </div>
        <div class="col-md-4 col-lg-6 col-xl-7 bG"></div>
      </div>
    </div>
  </div>
</template>
<style>
  .bG {
  background: url(../assets/img/photo/photo-1497436072909-60f360e1d4b1.jpg) center center;
  background-size: cover;
  }
</style>
<script>
  export default {
    name: 'login',
    data(){
      return {
        email: '',
        password: ''
      }
    } 
  }
</script>
```

In `myproject-consumer-web/src/`

Add the following snippet in `router.js`:

```js
... START ...
{ 
   //Added a route for login
   path: '/login',
   name: 'login',
   component: () => import('./views/Login.vue')
}

... END...
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
            <div class="mb-4"><img src="../assets/img/hetchly-logo.svg" alt="..." style="max-width: 10rem;" class="img-fluid mb-4">
              <h2>Sign up</h2>
            </div>
              <div class="form-group">
                <label for="loginUsername" class="form-label">Email Address</label>
                <input name="loginUsername" id="loginUsername" type="email" placeholder="name@address.com" autocomplete="off" required data-msg="Please enter your email" class="form-control" v-model="email">
              </div>
              <div class="form-group">
                <label for="loginPassword" class="form-label">Password</label>
                <input name="loginPassword" id="loginPassword" placeholder="Password" type="password" required data-msg="Please enter your password" class="form-control" v-model="password">
              </div>
              <div class="form-group mb-4">
                <label for="loginPassword2" class="form-label">Confirm your password</label>
                <input name="loginPassword2" id="loginPassword2" placeholder="Password" type="password" required data-msg="Please enter your password" class="form-control" v-model="confirmPw">
              </div>
              <button id="signup" class="btn btn-lg btn-block btn-primary">Sign up</button>              
              <hr data-content="OR" class="my-3 hr-text letter-spacing-2">
              <button id="signupfb" class="btn btn btn-outline-primary btn-block btn-social mb-3"><i class="fa-2x fa-facebook-f fab btn-social-icon"> </i>Connect <span class="d-none d-sm-inline">with Facebook</span></button>
              <p class="text-center"><small class="text-muted text-center">Have an account? <router-link to="/login">Log in</router-link></small></p>
              <hr class="my-4">
              <p class="text-sm text-muted">By signing up you agree to Directory's <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.</p>
              <router-link to="/" class="close-absolute mr-md-5 mr-xl-6 pt-5"> 
              <svg class="svg-icon w-3rem h-3rem">
                <use xlink:href="#close-1"></use>
              </svg></router-link>
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
 export default {
    name: 'signup',
    data(){
      return {
        email: '',
        password: '',
        confirmPw: ''    
      }
    }
  }
</script>

```

In `myproject-consumer-web/src/`

Add the following snippet in `router.js`:

```js
{
  path: '/',
  name: 'home',
  component: Home,
},
{ 
   //Added a route for login
   path: '/login',
   name: 'login',
   component: () => import('./views/Login.vue')
},
... START...
{
  path: '/signup',
  name: 'sigup',
  component: () => import('./views/SignUp.vue')
},

... END ...
```

## Step 8: Set up Product Page
In this step, we try to set up our product page. We create a products folder where we store all the components related to `products`. Outlined here will be the steps to create:

8A. **DisplayProduct Component**
8B. **ProductIndex Component**
8C. **ProductDetail Component**

### Step 8.1: Set up `products` Folder
In  `myproject-consumer-web/src/components`  folder create a folder called  `products`

```bash
$ cd src/components
$ mkdir products
$ cd products
```

## Step 8A: `DisplayProduct` Component

### Step 8A.1 `Product Card` Component
Create a product card component that will represent each product as a card.

In  `myproject-consumer-web/src/components/products`, create a file called `ProductCard.vue`:

Add ff code snippet: 
```html
<template class="product-card">
    <div data-marker-id="59c0c8e33b1527bfe2abaf92" class="w-100 h-100">
      <div class="card h-100 border-0 shadow">
        <div class="card-img-top overflow-hidden gradient-overlay"> <img v-bind:src="product.image_url" v-bind:alt="product.name" class="img-fluid"/>
          <router-link v-bind:to="{name: 'product_detail', params: {product_id: product.id}}" class="tile-link">
          </router-link>
        </div>
        <div class="card-body d-flex align-items-center">
          <div class="w-100">
            <h6 class="card-title">
              <router-link v-bind:to="{name: 'product_detail', params: {product_id: product.id}}" class="tile-link">
              </router-link>
            {{product.name}}
            </h6>
            <div class="d-flex card-subtitle mb-3">
              <p class="flex-grow-1 mb-0 text-muted text-sm ellipsis">{{product.description}}</p>
              <p class="flex-shrink-1 mb-0 card-stars text-xs text-right"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i>
              </p>
            </div>
            <p class="card-text text-muted"><span class="h4 text-primary">Php. {{product.price}} </span>person</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
 export default {
  name: 'product-card',
  props: ['product'], 
  data(){
    return {
      obj: this.product,    
    } 
  }
}
</script>

<style scoped>
    .ellipsis {
    text-overflow: ellipsis;
    /* Required for text-overflow to do anything */
    white-space: nowrap;
    overflow: hidden;
  }
</style>
```

### Step 8A.2: Create sample product data:
In `myproject-consumer-web/src/assets`, create a folder called `json`:
```bash
$ cd src/assets
$ mkdir json
$ cd json
```
in the `json` folder, create a file called `boracay.json`:
```bash
$ cd touch boracay.json
```

Add the ff data: 
```json
[
  {
      "id":"4d196c50-aabf-4df2-afb3-fd21481259d6",
      "name":"Boracay Sunset Cruise",
      "description":"The Boracay sunset is a spectacular site to see and what better way than cruising on the ocean with an icy cold beverage!  Tour along White Beach and take in all the tropical sights and sounds while you enjoy the spectacular arrays of color of the Boracay sunset.  Stop off for a quick swim, stand up paddle and snorkel or chill out in tube before heading back to enjoy your dinner in paradise.",
      "image_url":"https://cdn5.myboracayguide.com/2019/02/Boracay-Sunset-Cruise-00-400x267.jpg",
      "price":"800"
  },
  {
      "id":"6b3c211a-53f3-4c2a-a4f3-dc1fd5d42bfc",
      "name":"Group Island Hopping",
      "description":"Make new friends by joining a shared boat cruise where you will cruise the shores of Boracay in a traditional Banka boat. Visit the famous Puka shell beach and take a stroll on the beach, swim in the azure waters or just relax with a fresh coconut enjoying the sun. Stop off for a snorkel and see Boracay\u2019s beautiful tropical fish and corals.  Finish the trip with a delicious buffet lunch.",
      "image_url":"https://cdn5.myboracayguide.com/2019/03/Boracay-Group-Island-Hopping-Boracay-Activities-01-400x267.jpg",
      "price":"1500"
  },
  {
      "id":"91e759dc-f385-42e1-8098-a44399bebce8",
      "name":"Ultimate Cliff Jumping Island Hopping Adventure",
      "description":"Experience a day of fun on Magic Island and have the thrill of a lifetime with 5 different levels of cliff jumping. Relax and swim or go snorkeling around the Island.",
      "image_url":"https://cdn5.myboracayguide.com/2016/06/Island-Hopping-Boracay-Activities-400x267-400x267.jpg",
      "price":"2200"
  },
  {
      "id":"2178bb44-32f1-4d22-bc95-05cd039a3067",
      "name":"4 Hour Private Boracay Island Hopping Package",
      "description":"Your Boracay adventure experience will not be complete without this trip! The island is home to more than a dozen undeveloped beaches, turquoise waters and colorful coral reefs! Feast your eyes on the amazing scenery, snorkel and get a glimpse of the thriving sea life!The boat trip includes stopover at some amazing places in Boracay where you can go snorkeling and swimming. Snorkeling gears will be provided for you.",
      "image_url":"https://cdn5.myboracayguide.com/2016/09/Private-Island-Hopping-Boracay-Activity-8-400x267.jpg",
      "price":"2900"
  },
  {
      "id":"8f086c95-df7d-4914-98b5-e3378663e967",
      "name":"Paraw Sailing",
      "description":"Paraw Sailing is a local sail boat\u00a0activity. The boats use two outriggers and two sails. Experience the traditional way of sailing and discover the best sites around the island, perfect for photography \u2013 though do note on days with heavier waves the water can kick up a bit (exciting!). If you schedule your activity for later in the afternoon you can take advantage of the incredible sunset while relaxing on the boat for half an hour. Sea sickness? usually not a problem as the boats tend to stay closer into the shore and cut through the waves very well. \u00a0Paraw sailing around Boracay is probably a really good way to ease yourself into the sea and find out how much you like it.",
      "image_url":"https://cdn5.myboracayguide.com/2016/03/Paraw-Sailing-Boracay-Activities-400x267.jpg",
      "price":"3000"
  },
  {
      "id":"6aa0ed0f-ddcc-42ff-8059-eea5ee40496d",
      "name":"Parasailing",
      "description":"Parasailing on Boracay is a great experience for a few adventure-minded individuals. Imagine being whisked into the sky while strapped in a seat covered by a colorful parachute! This is a popular activity where riders can view the beautiful shoreline of white beach from above while being pulled by a boat. This is a fun and exciting experience for those who love heights and want a birds-eye-view of the whole island. Up to two guests can occupy the same canopy.",
      "image_url":"https://cdn5.myboracayguide.com/2016/04/Parasailing-Boracay-Activities-400x267.jpg",
      "price":"2500"
  },
  {
      "id":"c5f7878a-70cd-49da-9a24-ca0b86beb71c",
      "name":"Boracay Pub Crawl",
      "description":"Boracay Pub Crawl is the biggest, hippest and most happening bar-hopping event on Boracay! Meet amazing people from around the world, play get to know you games to break the ice, drink welcome shooters with your free shooter glass, get discounts on drinks, free entrance in bars, and wear your iconic pub crawl shirt! This is definitely one of the most awesome ways to experience the island\u2019s famous nightlife and also a great chance to take pictures. Boracay PubCrawl is the first of its kind to offer both travelers and locals the chance to party as one big, wild group. Discover the best night spots and make new friends over the course of a great evening out.",
      "image_url":"https://cdn5.myboracayguide.com/2016/04/Boracay-Pub-Crawl-Activities-400x267.jpeg",
      "price":"990"
  },
  {
      "id":"0c3b6e63-9a92-4662-8a44-d3d9adc334c2",
      "name":"Sunset Party Cruise Booty",
      "description":"Aside from its amazing parties, Boracay is world famous for its breath-taking sunset. Hop on the island\u2019s 40 passenger party vessel, Booty, and jam with other travelers as you listen to great music! Definitely a memorable party at sundown!",
      "image_url":"https://cdn5.myboracayguide.com/2016/04/Sunset-Party-Cruise-Booty-400x267.jpg",
      "price":"2500"
  },
  {
      "id":"36b74f58-084d-4b67-9daa-a046296604e6",
      "name":"Ariels Point",
      "description":"Let us help you experience everything good about Ariel\u2019s Point. Many guests come for the 5 different levels of cliff diving; the cliff diving levels are generally suitable for all types of adventurers. Those that want a great photo in a naturally beautiful place\u00a0while having a bit of a jump, won\u2019t be disappointed or terrified. Similarly, hardcore guests that want to jump from the top of a volcanically hewn outcrop into the deep blue arms of the sea won\u2019t be let down either. \u00a0Ariel\u2019s Point is located near the rustic fishing town of Buruanga, a half hour boat ride from Boracay\u2019s white beach. Gather with other travelers as you snorkel, paddle in a native canoe, or just laze under the sun while enjoying the uniquely rough, &\u00a0comfortable environment.",
      "image_url":"https://cdn5.myboracayguide.com/2016/04/Ariels-Point-Boracay-Activities-1-400x267.jpg",
      "price":"2800"
  },
  {
      "id":"420cb55b-99cb-45b1-a860-d079cc1d2cea",
      "name":"Stand Up Paddle on the Beach",
      "description":"Experience how it\u2019s like to glide on the water surface from a Stand-Up Paddle Board. Paddling on a Stand-Up Paddle board for lets you commune with the current of the sea, either by standing up, kneeling or sitting down. It also provides a good exercise to maintain your balance and to strengthen your core, while you paddle into the water to workout your arms and upper body.",
      "image_url":"https://cdn5.myboracayguide.com/2016/10/Stand-Up-Paddle-Boracay-Activity-01-400x267.jpg",
      "price":"1000"
  },
  {
      "id":"778bad3e-6fb4-4deb-8ff2-120bcbc5f27e",
      "name":"Segway Tours",
      "description":"Surrender to the freedom of gliding along Boracay\u2019s scenic spots on a Segway. For an exhilarating hour, you will be able to feel a gratifying oneness with the Segway and surrender to its awesome mechanism, giving you a relaxed and confident exploration into the island\u2019s diverse sceneries. This eco-freindly joyride kicks off with a short video presentation at its booth inside the panoramic grounds of Fairways and Blue Water. A routine trial thence follows, and after, the actual Segway ride takes place. The first leg encompasses a comfortable descent on the pavement, where beginners",
      "image_url":"https://cdn5.myboracayguide.com/2016/08/Segway-Tours-Boracay-Activities-01-400x267.jpg",
      "price":"2300"
  },
  {
      "id":"7c72e357-7228-4b6c-bdd0-d9aab71512ac",
      "name":"Helicopter Beach Tour",
      "description":"Boracay Helicopter Beach Tour \u2013 It\u2019s never been better. Have a 10-minute adrenaline-filled experience of touring the island by helicopter! See Boracay\u2019s white sands, blue green waters, and reefs from above! This is the ultimate chance to snap birds-eye-view photographs!",
      "image_url":"https://cdn5.myboracayguide.com/2010/01/Boracay-Helicopter-Tours-Boracay-Activity-07-400x267.jpg",
      "price":"5200"
  }
]
```

### Step 8A.2 `Display Product` Component

In  `myproject-consumer-web/src/components/products`, create a file called `DisplayProduct.vue`:

Add ff code snippet: 
```html
<template>
  <div class="display-catalog-2">
  <h1></h1>
  <section class="py-6 bg-gray-100"> 
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-8">
            <p class="subtitle text-secondary">Hurry up, these are expiring soon.</p>
            <h2>Last minute deals</h2>
          </div>
        </div>
        <swiper v-bind:options="swiperOption">
            <swiper-slide class="h-auto px-2" v-for="product in products" v-bind:key="product.id">
              <ProductCard v-bind:product="product"/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </section>    
  </div>
</template>

<script>

  import ProductCard from '@/components/products/ProductCard.vue'
  import data from '@/assets/json/boracay.json'
  export default {
    name: "display-product",
    components: {
      ProductCard
    },
    data() {
      return {
        products: data, 
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 20,
          roundLengths :true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
          },
          loop: true,
          breakpoints: {  
             1200 :{  
               slidesPerView: 3
            },
             991 :{  
              slidesPerView : 2
            },
             565 :{  
              slidesPerView :1
            }
         },
        }
      }
    }
  }
</script>
```
**Explanations:**
Notice ff line in the snippet above: 
```js
import data from '@/assets/json/boracay.json'
```
we are importing the json `data` from `boracay.json` and equating this to a variable in in the `data`  called `products`

this will return to us a list of all products.
```js
 data() {
      return {
        products: data, 
      ....
```

we then use the `v-for`  directive to loop through each product in the products list as seen in this part:

```html
<swiper-slide class="h-auto px-2" v-for="product in products" v-bind:key="product.id">
  <ProductCard v-bind:product="product"/>
</swiper-slide>
```
this will then create an individual `ProductCard` component for each element in the list, where `ProductCard` will take the individual `product` as a `prop` as seen in this snippet in `ProductCard.vue`

```html
<ProductCard v-bind:product="product"/>
```
*the value of product is binded with the product in the `products` list 

### Step 8A.3: Add  `Display Product` Component into `Home.vue`

In `myproject-consumer-web/src/views/Home.vue`
Add the ff snippets:

In `<template>` 
```html
...START...
<DisplayProducts/>
...END...
```
In `<scripts>` 
```html
<script>
...START...
import DisplayProducts from '@/components/products/DisplayProduct.vue'
...END...
export default {
  name: 'home',
  components: {
  ...START...
    DisplayProducts,
    ...END...
  }
}
</script>
```

Final Version of ```Home.vue```:
```html
<template>
  <div class="home">
    <SearchBar/>
    <Services/>
    <DisplayCatalog1/>
    <DisplayProducts/>
    <PhotoWheel/> 
  </div>
</template>
<script>
// @ is an alias to /src
import SearchBar from '@/components/home/SearchBar.vue'
import Services from '@/components/home/Services.vue'
import DisplayCatalog1 from '@/components/home/DisplayCatalog1.vue'
import DisplayProducts from '@/components/products/DisplayProduct.vue'
import PhotoWheel from '@/components/home/PhotoWheel.vue'

export default {
  name: 'home',
  components: {
    SearchBar, 
    Services,
    DisplayCatalog1,
    DisplayProducts,
    PhotoWheel
  }
}
</script>
```

### Step 8.3: Set up `Products.vue` Component
In  `myproject-consumer-web/src/views`  create a file called `Products.vue`
Add the following code:

```html
<template>
  <div class="product">
    <ProductIndex/>
    <router-view/>  
  </div>
</template>

<script type="text/javascript">
    import ProductIndex from '@/components/products'

    export default {
    name: 'products',
        components: {
            ProductIndex
        }
    }
</script>
```

### Step 8.4: ProductDetail Component

In `myproject-consumer-web/src/views/products`
create a file called : `ProductDetail.vue`

Add the following code:
```html
<template>
  <div class="product-detail">
    <section>
        <!-- Additional required wrapper-->
        <swiper :options="swiperOption">
          <!-- Slides-->
          <swiper-slide>
            <a href="../../assets/img/photo/photo-1426122402199-be02db90eb90.jpg" data-toggle="gallery-top" title="Our street"><img src="../../assets/img/photo/photo-1426122402199-be02db90eb90.jpg" alt="Our street" class="img-fluid"></a>
          </swiper-slide>
          <swiper-slide>
            <a href="../../assets/img/photo/photo-1512917774080-9991f1c4c750.jpg" data-toggle="gallery-top" title="Outside"><img src="../../assets/img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="Outside" class="img-fluid"></a>
          </swiper-slide>
          <swiper-slide>
            <a href="../../assets/img/photo/photo-1494526585095-c41746248156.jpg" data-toggle="gallery-top" title="Rear entrance"><img src="../../assets/img/photo/photo-1494526585095-c41746248156.jpg" alt="Rear entrance" class="img-fluid"></a>
          </swiper-slide>
          <swiper-slide>
            <a href="../../assets/img/photo/photo-1484154218962-a197022b5858.jpg" data-toggle="gallery-top" title="Kitchen"><img src="../../assets/img/photo/photo-1484154218962-a197022b5858.jpg" alt="Kitchen" class="img-fluid"></a>
          </swiper-slide>
          <swiper-slide>
            <a href="../../assets/img/photo/photo-1522771739844-6a9f6d5f14af.jpg" data-toggle="gallery-top" title="Bedroom"><img src="../../assets/img/photo/photo-1522771739844-6a9f6d5f14af.jpg" alt="Bedroom" class="img-fluid"></a>
          </swiper-slide>
          <swiper-slide>
            <a href="../../assets/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" data-toggle="gallery-top" title="Bedroom"><img src="../../assets/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" alt="Bedroom" class="img-fluid"></a>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination swiper-pagination-white"></div>
        <div class="swiper-button-prev swiper-button-white"></div>
        <div class="swiper-button-next swiper-button-white"></div>

    </section>
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8"> 
          <div class="text-block">
            <p class="text-primary"><i class="fa-map-marker-alt fa mr-1"></i> Brooklyn, New York</p>
            <h1>Mid-Century Modern Garden Paradise</h1>
            <p class="text-muted text-uppercase mb-4">Entire Apartment </p>
            <ul class="list-inline text-sm mb-4">
              <li class="list-inline-item mr-3"><i class="fa fa-users mr-1 text-secondary"></i> 4 guests</li>
              <li class="list-inline-item mr-3"><i class="fa fa-door-open mr-1 text-secondary"></i> 1 bedroom</li>
              <li class="list-inline-item mr-3"><i class="fa fa-bed mr-1 text-secondary"></i> 3 beds</li>
              <li class="list-inline-item mr-3"><i class="fa fa-bath mr-1 text-secondary"></i> 1 bath</li>
            </ul>
            <p class="text-muted font-weight-light">Our garden basement apartment is fully equipped with everything you need to enjoy your stay. Very comfortable for a couple but plenty of space for a small family. Close to many wonderful Brooklyn attractions and quick trip to Manhattan. </p>
            <h6 class="mb-3">The space</h6>
            <p class="text-muted font-weight-light">Welcome to Brooklyn! We are excited to share our wonderful neighborhood with you. Our modern apartment has a private entrance, fully equipped kitchen, and a very comfortable queen size bed. We are happy to accommodate additional guests with a single bed in the living room, another comfy mattress on the floor and can make arrangements for small children with a portable crib and highchair if requested. </p>
            <p class="text-muted font-weight-light">Also in the apartment:</p>
            <ul class="text-muted font-weight-light"> 
              <li>TV with Netflix and DirectTVNow</li>
              <li>Free WiFi</li>
              <li>Gourmet Coffee/Tea making supplies</li>
              <li>Fresh Sheets and Towels</li>
              <li>Toaster, microwave, pots and pans and basic cooking needs like salt, pepper, sugar, and olive oil.</li>
              <li>Air Conditioning to keep you cool all summer!</li>
            </ul>
            <p class="text-muted font-weight-light">The apartment is surprisingly quiet for being in the heart of a vibrant, bustling neighborhood.</p>
            <h6 class="mb-3">Interaction with guests</h6>
            <p class="text-muted font-weight-light">We live in the two floors above the garden apartment so we are usually available to answer questions. The garden apartment is separate from our living space. We are happy to provide advice on local attractions, restaurants and transportation around the city. If there's anything you need please don't hesitate to ask!</p>
          </div>
          <div class="text-block">
            <h4 class="mb-4">Amenities</h4>
            <div class="row"> 
              <div class="col-md-6">
                <ul class="list-unstyled text-muted">
                  <li class="mb-2"><i class="fa fa-wifi text-secondary w-1rem mr-3 text-center"></i> <span class="text-sm">Wifi</span></li>
                  <li class="mb-2"><i class="fa fa-tv text-secondary w-1rem mr-3 text-center"></i> <span class="text-sm">Cable TV</span></li>
                  <li class="mb-2"><i class="fa fa-snowflake text-secondary w-1rem mr-3 text-center"></i> <span class="text-sm">Air conditioning</span></li>
                  <li class="mb-2"><i class="fa fa-thermometer-three-quarters text-secondary w-1rem mr-3 text-center"></i> <span class="text-sm">Heating</span></li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="list-unstyled text-muted">
                  <li class="mb-2"><i class="fa fa-bath text-secondary w-1rem mr-3 text-center"></i><span class="text-sm">Toiletteries</span></li>
                  <li class="mb-2"><i class="fa fa-utensils text-secondary w-1rem mr-3 text-center"></i><span class="text-sm">Equipped Kitchen</span></li>
                  <li class="mb-2"><i class="fa fa-laptop text-secondary w-1rem mr-3 text-center"></i><span class="text-sm">Desk for work</span></li>
                  <li class="mb-2"><i class="fa fa-tshirt text-secondary w-1rem mr-3 text-center"></i><span class="text-sm">Washing machine</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="text-block">
            <h4 class="mb-0">Amenities alternative</h4>
            <p class="subtitle text-sm text-primary mb-4">Alternative amenities display</p>
            <ul class="list-inline">
              <li class="list-inline-item mb-2"><span class="badge badge-pill badge-light p-3 text-muted font-weight-normal">Wifi</span></li>
              <li class="list-inline-item mb-2"><span class="badge badge-pill badge-light p-3 text-muted font-weight-normal">Cable TV</span></li>
              <li class="list-inline-item mb-2"><span class="badge badge-pill badge-light p-3 text-muted font-weight-normal">Air conditioning</span></li>
              <li class="list-inline-item mb-2"><span class="badge badge-pill badge-light p-3 text-muted font-weight-normal">Heating</span></li>
              <li class="list-inline-item mb-2"><span class="badge badge-pill badge-light p-3 text-muted font-weight-normal">Toiletteries</span></li>
              <li class="list-inline-item mb-2"><span class="badge badge-pill badge-light p-3 text-muted font-weight-normal">Equipped Kitchen</span></li>
              <li class="list-inline-item mb-2"><span class="badge badge-pill badge-light p-3 text-muted font-weight-normal">Desk for work</span></li>
              <li class="list-inline-item mb-2"><span class="badge badge-pill badge-light p-3 text-muted font-weight-normal">Washing machine</span></li>
            </ul>
          </div>
          <div class="text-block">
            <div class="media"><img src="../../assets/img/avatar/avatar-10.jpg" alt="Jack London" class="avatar avatar-lg mr-4">
              <div class="media-body">
                <p> <span class="text-muted text-uppercase text-sm">Hosted by </span><br><strong>Jack London</strong></p>
                <p class="text-muted text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                <p class="text-muted text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p class="text-sm"><a href="#">See Jack's 3 other listings <i class="fa fa-long-arrow-alt-right ml-2"></i></a></p>
              </div>
            </div>
          </div>
          <div class="text-block">
            <h5 class="mb-4">Listing location</h5>
            <div class="map-wrapper-300 mb-3">
              <div id="detailMap" class="h-100"></div>
            </div>
          </div>
          <div class="text-block">
            <h5 class="mb-4">Gallery</h5>
            <div class="row gallery mb-3 ml-n1 mr-n1">
              <div class="col-lg-4 col-6 px-1 mb-2"><a href="../../assets/img/photo/photo-1426122402199-be02db90eb90.jpg" data-fancybox="gallery" title="Our street"><img src="../../assets/img/photo/photo-1426122402199-be02db90eb90.jpg" alt="..." class="img-fluid"></a></div>
              <div class="col-lg-4 col-6 px-1 mb-2"><a href="../../assets/img/photo/photo-1512917774080-9991f1c4c750.jpg" data-fancybox="gallery" title="Outside"><img src="../../assets/img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="..." class="img-fluid"></a></div>
              <div class="col-lg-4 col-6 px-1 mb-2"><a href="../../assets/img/photo/photo-1494526585095-c41746248156.jpg" data-fancybox="gallery" title="Rear entrance"><img src="../../assets/img/photo/photo-1494526585095-c41746248156.jpg" alt="..." class="img-fluid"></a></div>
              <div class="col-lg-4 col-6 px-1 mb-2"><a href="../../assets/img/photo/photo-1484154218962-a197022b5858.jpg" data-fancybox="gallery" title="Kitchen"><img src="../../assets/img/photo/photo-1484154218962-a197022b5858.jpg" alt="..." class="img-fluid"></a></div>
              <div class="col-lg-4 col-6 px-1 mb-2"><a href="../../assets/img/photo/photo-1522771739844-6a9f6d5f14af.jpg" data-fancybox="gallery" title="Bedroom"><img src="../../assets/img/photo/photo-1522771739844-6a9f6d5f14af.jpg" alt="..." class="img-fluid"></a></div>
              <div class="col-lg-4 col-6 px-1 mb-2"><a href="../../assets/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" data-fancybox="gallery" title="Bedroom"><img src="../../assets/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" alt="..." class="img-fluid"></a></div>
            </div>
          </div>
          <div class="text-block">
            <p class="subtitle text-sm text-primary">Reviews    </p>
            <h5 class="mb-4">Listing Reviews </h5>
            <div class="media d-block d-sm-flex review">
              <div class="text-md-center mr-4 mr-xl-5"><img src="../../assets/img/avatar/avatar-8.jpg" alt="Padmé Amidala" class="d-block avatar avatar-xl p-2 mb-2"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
              <div class="media-body">
                <h6 class="mt-2 mb-1">Padmé Amidala</h6>
                <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i>
                </div>
                <p class="text-muted text-sm">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections     </p>
              </div>
            </div>
            <div class="media d-block d-sm-flex review">
              <div class="text-md-center mr-4 mr-xl-5"><img src="../../assets/img/avatar/avatar-2.jpg" alt="Luke Skywalker" class="d-block avatar avatar-xl p-2 mb-2"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
              <div class="media-body">
                <h6 class="mt-2 mb-1">Luke Skywalker</h6>
                <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i>
                </div>
                <p class="text-muted text-sm">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. &quot;What's happened to me?&quot; he thought. It wasn't a dream.     </p>
              </div>
            </div>
            <div class="media d-block d-sm-flex review">
              <div class="text-md-center mr-4 mr-xl-5"><img src="../../assets/img/avatar/avatar-3.jpg" alt="Princess Leia" class="d-block avatar avatar-xl p-2 mb-2"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
              <div class="media-body">
                <h6 class="mt-2 mb-1">Princess Leia</h6>
                <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i><i class="fa fa-xs fa-star text-gray-200"></i>
                </div>
                <p class="text-muted text-sm">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.     </p>
              </div>
            </div>
            <div class="media d-block d-sm-flex review">
              <div class="text-md-center mr-4 mr-xl-5"><img src="../../assets/img/avatar/avatar-4.jpg" alt="Jabba Hut" class="d-block avatar avatar-xl p-2 mb-2"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
              <div class="media-body">
                <h6 class="mt-2 mb-1">Jabba Hut</h6>
                <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i>
                </div>
                <p class="text-muted text-sm">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.     </p>
              </div>
            </div>
            <div class="py-5">
              <button type="button" data-toggle="collapse" data-target="#leaveReview" aria-expanded="false" aria-controls="leaveReview" class="btn btn-outline-primary">Leave a review</button>
              <div id="leaveReview" class="collapse mt-4">
                <h5 class="mb-4">Leave a review</h5>
                <form id="contact-form" method="get" action="#" class="form">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="name" class="form-label">Your name *</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" required="required" class="form-control">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="rating" class="form-label">Your rating *</label>
                        <select name="rating" id="rating" class="custom-select focus-shadow-0">
                          <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733; (5/5)</option>
                          <option value="4">&#9733;&#9733;&#9733;&#9733;&#9734; (4/5)</option>
                          <option value="3">&#9733;&#9733;&#9733;&#9734;&#9734; (3/5)</option>
                          <option value="2">&#9733;&#9733;&#9734;&#9734;&#9734; (2/5)</option>
                          <option value="1">&#9733;&#9734;&#9734;&#9734;&#9734; (1/5)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="email" class="form-label">Your email *</label>
                    <input type="email" name="email" id="email" placeholder="Enter your  email" required="required" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="review" class="form-label">Review text *</label>
                    <textarea rows="4" name="review" id="review" placeholder="Enter your review" required="required" class="form-control"></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Post review</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div style="top: 100px;" class="p-4 shadow ml-lg-4 rounded sticky-top">
            <p class="text-muted"><span class="text-primary h2">$120</span> per night</p>
            <hr class="my-4">
            <form id="booking-form" method="get" action="#" autocomplete="off" class="form">
              <div class="form-group">
                <label for="bookingDate" class="form-label">Your stay *</label>
                <div class="datepicker-container datepicker-container-right">
                  <input type="text" name="bookingDate" id="bookingDate" placeholder="Choose your dates" required="required" class="form-control">
                </div>
              </div>
              <div class="form-group mb-4">
                <label for="guests" class="form-label">Guests *</label>
                <select name="guests" id="guests" class="form-control">
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                </select>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">Book your stay</button>
              </div>
            </form>
            <p class="text-muted text-sm text-center">Some additional text can be also placed here.</p>
            <hr class="my-4">
            <div class="text-center">
              <p> <a href="#" class="text-secondary text-sm"> <i class="fa fa-heart"></i> Bookmark This Listing</a></p>
              <p class="text-muted text-sm">79 people bookmarked this place </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-6 bg-gray-100">
          <DisplayCatalog2/>
    </div>
  </div>
</template>
<script type="text/javascript">
  
import DisplayCatalog2 from '@/components/DisplayCatalog2.vue'

export default {
    name: 'product-detail',
    components: {
      DisplayCatalog2,
    },
    data() {
      return {
        swiperOption: {
            slidesPerView: 2,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
          }
        }
      }
    }
</script>
```

### Step 8.5: Configure `router.js` Component

In `myproject-consumer-web/src/router.js`

Add the following snippet:
```js
{
  path: '/login',
  name: 'login',
  component: () => import('./views/Login.vue')
},
{
  path: '/signup',
  name: 'sigup',
  component: () => import('./views/SignUp.vue')
},
... start ..
{
  path: '/products',
  name: 'products',
  component: () => import('./views/Products.vue'),
},
{
  path: '/products/:id',
  name: 'product_detail',
  component: () => import('./components/products/ProductDetail.vue')

}
... end ...
```

Final version of `router.js`:
```js
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/signup',
      name: 'sigup',
      component: () => import('./views/SignUp.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('./views/Products.vue'),
    },
    {
      path: '/products/:id',
      name: 'product_detail',
      component: () => import('./components/products/ProductDetail.vue')
    }
  ]
})
```

## Step 9: Set up Booking Page

### Step 9.1: Set up `Booking.vue` Component
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
  path: '/products/:id',
  name: 'product_detail',
  component: () => import('./components/products/ProductDetail.vue')

},
... start ...
{
    path: '/booking',
    name: 'booking',
    component: () => import('./views/Booking.vue'),
}
... end ...
```

### Step 9.2: Set up BookingPanel Component
In `src/components` folder create a folder called `booking`
```bash
$ cd src/components
$ mkdir booking
$ cd booking
```
In the `booking` folder, create a file called `BookingPanel.vue`
In `BookingPanel.vue` copy the following code:
*Note that BookingPanel will be used as a child component for the succeeding steps.
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

### Step 9.3: Set up Book-1 Page

In the `booking` folder, create a file called `Step1.vue`

In `Step1.vue` copy the following code:
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

### Step 9.3: Set up Book-2 Page
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

### Step 9.4: Set up Payment and Confirmation Component
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

### Step 9.5: Set up Confirmed Component
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


### Step 9.6: Set up Router for all Bookings 

In `myproject-consumer-web/src/`
Add the following snippet in `router.js`:
under the path `/booking`, add a key called children that takes in a list of child paths:
```js
 {
      path: '/booking',
      name: 'booking',
      component: () => import('./views/Booking.vue'),
  ... start ...
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
        ... end ...
    }
``` 

*this will allow us to access our bookings via, `/booking/<path to step>`

eg:
```bash
http://[hostname]/booking/step1
http://[hostname]/booking/step2
http://[hostname]/booking/payment
http://[hostname]/booking/confirmed
```

Final version of `router.js`:
```js
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/signup',
      name: 'sigup',
      component: () => import('./views/SignUp.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('./views/Products.vue'),
    },
    {
      path: '/products/:id',
      name: 'product_detail',
      component: () => import('./components/products/ProductDetail.vue')

    },
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
  ]
})

```


## Step 10: Set up Axios to Consume Data 

### Step 10.1: Install Axios
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

### Step 10.2: Modify Home Page to Include Axios

In `myproject-vuejs-web/src/main.js`
Add the following lines:

```js
Vue.use(VueAwesomeSwiper);
... start ...
import Axios from 'axios';
Vue.prototype.$http = Axios;
... end ...
```
### Step 10.2: Configure Product `index` to Consume from Backend

#### Set up `DisplayProduct.vue`
In `myproject-vuejs-web/src/components/products/`
Create a file called: `DisplayProduct.vue`
Add the following code:
```html
<template>
  <div class="display-catalog-2">
  <h1></h1>
  <section class="py-6 bg-gray-100"> 
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-8">
            <p class="subtitle text-secondary">Hurry up, these are expiring soon.</p>
            <h2>Last minute deals</h2>
          </div>
          <div class="col-md-4 d-lg-flex align-items-center justify-content-end"><a href="category.html" class="text-muted text-sm">
               
              See all deals<i class="fas fa-angle-double-right ml-2"></i></a></div>
        </div>
        <swiper v-bind:options="swiperOption">
            <swiper-slide class="h-auto px-2" v-for="product in products" v-bind:key="product.product_id">
              <ProductCard v-bind:product="product"/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </section>    
  </div>
</template>

<script>

  import ProductCard from '@/components/products/ProductCard.vue'

  export default {
    name: "display-product",
    components: {
      ProductCard
    },
    data() {
      return {
        products: null, 
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 20,
          roundLengths :true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
          },
          loop: true,
          breakpoints: {  
             1200 :{  
               slidesPerView: 3
            },
             991 :{  
              slidesPerView : 2
            },
             565 :{  
              slidesPerView :1
            }
         },
        }
      }
    },
    methods: {
      getProducts: function(){
        const baseURI = 'http://localhost:5000/products'
        this.$http.get(baseURI)
        .then(result => {
          this.products = result.data['products']; 
        })
        .catch(error =>{
          alert(error);
        })
      }
    },
    created: function(){
      this.getProducts()
    }
  }
</script>
```

In the `<script>` tag of `DisplayProduct.vue` we call an external endpoint using `axios` using the following:
```js
 methods: {
      getProducts: function(){
        const baseURI = 'http://localhost:5000/products'
        this.$http.get(baseURI)
        .then(result => {
          this.products = result.data['products']; 
        })
        .catch(error =>{
          alert(error);
        })
      }
    },
    created: function(){
      this.getProducts()
    }
  }
```

Once`DisplayProduct.vue` is initialized, we make an `http` `GET` request to our backend service returning a list of products as json.

We then loop through each product in the returned json using the `v-for` function:
```html
 <swiper v-bind:options="swiperOption">
     <swiper-slide class="h-auto px-2" v-for="product in products" v-bind:key="product.product_id">
       <ProductCard v-bind:product="product"/>
     </swiper-slide>
     <div class="swiper-pagination" slot="pagination"></div>
 </swiper>
```

For each product, we create a new `ProductCard` component which takes in the individual product details such  as the `product.id`, `product.name`, `product.image_url`, `product.price`

```html
<swiper-slide class="h-auto px-2" v-for="product in products" v-bind:key="product.product_id">  
  <ProductCard v-bind:product="product"/>  <--- creates a new product card for each product in the list
</swiper-slide>
```

#### Setup `ProductCard.vue`
In `myproject-vuejs-web/src/components/products/`
Create a file called: `ProductCard.vue`
Add the following code: 
```html
<template class="product-card">
    <div data-marker-id="59c0c8e33b1527bfe2abaf92" class="w-100 h-100">
      <div class="card h-100 border-0 shadow">
        <div class="card-img-top overflow-hidden gradient-overlay"> <img v-bind:src="product.image_url" v-bind:alt="product.name" class="img-fluid"/>
          <router-link v-bind:to="{ name: 'product_detail', params: { product_id: product.product_id }}" class="tile-link"></router-link>
        </div>
        <div class="card-body d-flex align-items-center">
          <div class="w-100">
            <h6 class="card-title"><router-link v-bind:to="{ name: 'product_detail', params: { product_id: product.product_id }}" class="tile-link"></router-link>{{product.name }}</h6>
            <div class="d-flex card-subtitle mb-3">
              <p class="flex-grow-1 mb-0 text-muted text-sm ellipsis">{{product.description}}</p>
              <p class="flex-shrink-1 mb-0 card-stars text-xs text-right"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i>
              </p>
            </div>
            <p class="card-text text-muted"><span class="h4 text-primary">Php. {{product.price}}</span> per night</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
 export default {
  name: 'product-card',
  props: ['product'], 
  data(){
    return {
      obj: this.product,
      product_id: this.product.product_id
    }
  }
}
</script>

<style scoped>
    .ellipsis {
    text-overflow: ellipsis;

    /* Required for text-overflow to do anything */
    white-space: nowrap;
    overflow: hidden;
  }
</style>
```

Since the product is passed into the `ProductCard` as a prop, we are able to assess the data using
```html
{{ product.id }}
{{ product.name }}
{{ product.image_url }}
{{ product.price }}
```

We also use a router-link to pass the individual product.id to the `ProductDetail.vue` using the following
```html
<router-link v-bind:to="{ name: 'product_detail', params: { product_id: product.id }}" class="tile-link"></router-link>
 ```

When the user clicks on the a product in the listing, the are redirected to the product with the appropriate id and record. 

#### Modify `ProductDetail.vue`
In `myproject-vuejs-web/src/components/products/`
Replace the contents of : `ProductDetail.vue`, with the following code:
```html
<template>
  <div class="product-detail">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8"> 
          <div class="text-block">
            <h1>{{ product.name }}</h1>
            <div class="text-block"><img  v-bind:src="product.image_url"></div>
            <ul class="list-inline text-sm mb-4">
              <li class="list-inline-item mr-3"><i class="fa fa-users mr-1 text-secondary"></i> 4 guests</li>
              <li class="list-inline-item mr-3"><i class="fa fa-door-open mr-1 text-secondary"></i> 1 bedroom</li>
              <li class="list-inline-item mr-3"><i class="fa fa-bed mr-1 text-secondary"></i> 3 beds</li>
              <li class="list-inline-item mr-3"><i class="fa fa-bath mr-1 text-secondary"></i> 1 bath</li>
            </ul>
            <p class="text-muted font-weight-light">{{product.description}}</p>
          </div>
          <div class="text-block">
            <div class="media"><img src="../../assets/img/avatar/avatar-10.jpg" alt="Jack London" class="avatar avatar-lg mr-4">
              <div class="media-body">
                <p> <span class="text-muted text-uppercase text-sm">Hosted by </span><br><strong>Jack London</strong></p>
                <p class="text-muted text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                <p class="text-muted text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p class="text-sm"><a href="#">See Jack's 3 other listings <i class="fa fa-long-arrow-alt-right ml-2"></i></a></p>
              </div>
            </div>
          </div>
          <div class="text-block">
            <h5 class="mb-4">Gallery</h5>
            <div class="row gallery mb-3 ml-n1 mr-n1">
              <div class="col-lg-4 col-6 px-1 mb-2"><a href="../../assets/img/photo/photo-1426122402199-be02db90eb90.jpg" data-fancybox="gallery" title="Our street"><img src="../../assets/img/photo/photo-1426122402199-be02db90eb90.jpg" alt="..." class="img-fluid"></a></div>
              <div class="col-lg-4 col-6 px-1 mb-2"><a href="../../assets/img/photo/photo-1512917774080-9991f1c4c750.jpg" data-fancybox="gallery" title="Outside"><img src="../../assets/img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="..." class="img-fluid"></a></div>
              <div class="col-lg-4 col-6 px-1 mb-2"><a href="../../assets/img/photo/photo-1494526585095-c41746248156.jpg" data-fancybox="gallery" title="Rear entrance"><img src="../../assets/img/photo/photo-1494526585095-c41746248156.jpg" alt="..." class="img-fluid"></a></div>
              <div class="col-lg-4 col-6 px-1 mb-2"><a href="../../assets/img/photo/photo-1484154218962-a197022b5858.jpg" data-fancybox="gallery" title="Kitchen"><img src="../../assets/img/photo/photo-1484154218962-a197022b5858.jpg" alt="..." class="img-fluid"></a></div>
              <div class="col-lg-4 col-6 px-1 mb-2"><a href="../../assets/img/photo/photo-1522771739844-6a9f6d5f14af.jpg" data-fancybox="gallery" title="Bedroom"><img src="../../assets/img/photo/photo-1522771739844-6a9f6d5f14af.jpg" alt="..." class="img-fluid"></a></div>
              <div class="col-lg-4 col-6 px-1 mb-2"><a href="../../assets/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" data-fancybox="gallery" title="Bedroom"><img src="../../assets/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" alt="..." class="img-fluid"></a></div>
            </div>
          </div>
          <div class="text-block">
            <p class="subtitle text-sm text-primary">Reviews    </p>
            <h5 class="mb-4">Listing Reviews </h5>
            <div class="media d-block d-sm-flex review">
              <div class="text-md-center mr-4 mr-xl-5"><img src="../../assets/img/avatar/avatar-8.jpg" alt="Padmé Amidala" class="d-block avatar avatar-xl p-2 mb-2"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
              <div class="media-body">
                <h6 class="mt-2 mb-1">Padmé Amidala</h6>
                <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i>
                </div>
                <p class="text-muted text-sm">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections     </p>
              </div>
            </div>
            <div class="media d-block d-sm-flex review">
              <div class="text-md-center mr-4 mr-xl-5"><img src="../../assets/img/avatar/avatar-2.jpg" alt="Luke Skywalker" class="d-block avatar avatar-xl p-2 mb-2"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
              <div class="media-body">
                <h6 class="mt-2 mb-1">Luke Skywalker</h6>
                <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i>
                </div>
                <p class="text-muted text-sm">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. &quot;What's happened to me?&quot; he thought. It wasn't a dream.     </p>
              </div>
            </div>
            <div class="media d-block d-sm-flex review">
              <div class="text-md-center mr-4 mr-xl-5"><img src="../../assets/img/avatar/avatar-3.jpg" alt="Princess Leia" class="d-block avatar avatar-xl p-2 mb-2"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
              <div class="media-body">
                <h6 class="mt-2 mb-1">Princess Leia</h6>
                <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i><i class="fa fa-xs fa-star text-gray-200"></i>
                </div>
                <p class="text-muted text-sm">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.     </p>
              </div>
            </div>
            <div class="media d-block d-sm-flex review">
              <div class="text-md-center mr-4 mr-xl-5"><img src="../../assets/img/avatar/avatar-4.jpg" alt="Jabba Hut" class="d-block avatar avatar-xl p-2 mb-2"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
              <div class="media-body">
                <h6 class="mt-2 mb-1">Jabba Hut</h6>
                <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i>
                </div>
                <p class="text-muted text-sm">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.     </p>
              </div>
            </div>
            <div class="py-5">
              <button type="button" data-toggle="collapse" data-target="#leaveReview" aria-expanded="false" aria-controls="leaveReview" class="btn btn-outline-primary">Leave a review</button>
              <div id="leaveReview" class="collapse mt-4">
                <h5 class="mb-4">Leave a review</h5>
                <form id="contact-form" method="get" action="#" class="form">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="name" class="form-label">Your name *</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" required="required" class="form-control">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="rating" class="form-label">Your rating *</label>
                        <select name="rating" id="rating" class="custom-select focus-shadow-0">
                          <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733; (5/5)</option>
                          <option value="4">&#9733;&#9733;&#9733;&#9733;&#9734; (4/5)</option>
                          <option value="3">&#9733;&#9733;&#9733;&#9734;&#9734; (3/5)</option>
                          <option value="2">&#9733;&#9733;&#9734;&#9734;&#9734; (2/5)</option>
                          <option value="1">&#9733;&#9734;&#9734;&#9734;&#9734; (1/5)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="email" class="form-label">Your email *</label>
                    <input type="email" name="email" id="email" placeholder="Enter your  email" required="required" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="review" class="form-label">Review text *</label>
                    <textarea rows="4" name="review" id="review" placeholder="Enter your review" required="required" class="form-control"></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Post review</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div style="top: 100px;" class="p-4 shadow ml-lg-4 rounded sticky-top">
            <p class="text-muted"><span class="text-primary h2">Php. {{product.price}}</span> per night</p>
            <hr class="my-4">
            <form id="booking-form" method="get" action="#" autocomplete="off" class="form">
              <div class="form-group">
                <label for="bookingDate" class="form-label">Your stay *</label>
                <div class="datepicker-container datepicker-container-right">
                  <input type="text" name="bookingDate" id="bookingDate" placeholder="Choose your dates" required="required" class="form-control">
                </div>
              </div>
              <div class="form-group mb-4">
                <label for="guests" class="form-label">Guests *</label>
                <select name="guests" id="guests" class="form-control">
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                </select>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">Book your stay</button>
              </div>
            </form>
            <p class="text-muted text-sm text-center">Some additional text can be also placed here.</p>
            <hr class="my-4">
            <div class="text-center">
              <p> <a href="#" class="text-secondary text-sm"> <i class="fa fa-heart"></i> Bookmark This Listing</a></p>
              <p class="text-muted text-sm">79 people bookmarked this place </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-6 bg-gray-100">
        <DisplayProduct/>
    </div>
  </div>
</template>
<script type="text/javascript">
  
import DisplayProduct from '@/components/products/DisplayProduct.vue'

export default {
    name: 'product-detail',
    components: {
      DisplayProduct,
    },
    data() {
      return {
        product: '',
        swiperOption: {
            slidesPerView: 2,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
          }
        }
      },
      methods: {
      getProduct: function(product_id){
          const baseURI = 'http://localhost:5000/products/' + product_id;
          this.$http.get(baseURI)
          .then(result => {
            this.product = result.data['products'];
            console.log(this.product); 
          })
          .catch(error =>{
            alert(error);
          })
        }
      },
      created: function(){
        this.getProduct(this.$route.params.product_id)
      }
  }
</script>
```

We use `axios` to send a `http` `GET` request to get a product with given its id.

```js
      methods: {
      getProduct: function(product_id){
          const baseURI = 'http://localhost:5000/products/' + product_id;
          this.$http.get(baseURI)
          .then(result => {
            this.product = result.data['products'];
            console.log(this.product); 
          })
          .catch(error =>{
            alert(error);
          })
        }
      },
      created: function(){
        this.getProduct(this.$route.params.product_id)
      }
```


## Step 11: Integrate Login and Sign up with AWS Cognito

### Step 11.1: Configure AWS Cognito
TODO

### Step 11.2: Install dependencies for Authentication with Cognito
Install the dependencies for AWS Cognito:
```bash
npm install --save aws-sdk
npm install --save amazon-cognito-identity-js
```

Install the dependencies for state management
```bash
npm install --save vuex 
npm install --save vuex-persistedstate
```

In `myproject-vuejs-web/src/main.js` add the following lines of code: 
```js
import Vue from 'vue';
import App from './App.vue';

... START ...
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);
... END ...

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);
```


In `src/views/SignUp.vue` 
 add the following code below the `<style>` tag:
```html
</style>
... START ...
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

... END ...
```

In root folder of the project: `myproject-consumer-web` create the following file:
 `.env`
```bash
VUE_APP_USER_POOL_ID=<REPLACE_ME_COGNITO_USER_POOL_ID>
VUE_APP_USER_POOL_CLIENT_ID=<REPLACE_ME_USER_POOL_CLIENT_ID>
``` 


In `src/views/Login.vue` 
 add the following code below the `<style>` tag:
```html
</style>
... START ...
<script>

import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk';

export default {
  name: 'login',
  mounted(){
    var cognitoUserPoolId = process.env.VUE_APP_USER_POOL_ID;  // example: 'us-east-1_abcd12345'
    var cognitoUserPoolClientId = process.env.VUE_APP_USER_POOL_CLIENT_ID; // example: 
    var awsRegion = 'ap-southeast-1';

    initializeStorage();

    var configString = localStorage.getItem("awsConfig");
    var config = JSON.parse(configString);
    
    var navigate = this.$router;
    var store = this.$store

    if(config != null) {
      refreshAWSCredentials();
      loggedInDisplay();
    }

    function loggedInDisplay() {
      //changes the value of store to loggedIn
      store.commit('login')
      navigate.push('/')
    }

    function initializeStorage() {
        var identityPoolId = cognitoUserPoolId;
        var userPoolId = cognitoUserPoolId; 
        var clientId = cognitoUserPoolClientId;
        var loginPrefix = 'cognito-idp.' + awsRegion + '.amazonaws.com/' + identityPoolId;

        localStorage.setItem('identityPoolId', identityPoolId);
        localStorage.setItem('userPoolId', userPoolId);
        localStorage.setItem('clientId', clientId);
        localStorage.setItem('loginPrefix', loginPrefix);
    }

    function loginUser() {

      var userPoolId = localStorage.getItem('userPoolId');
      var clientId = localStorage.getItem('clientId');
      var identityPoolId = localStorage.getItem('identityPoolId');
      var loginPrefix = localStorage.getItem('loginPrefix');

      var poolData = {
        UserPoolId : userPoolId, // Your user pool id here
        ClientId : clientId // Your client id here
      };
      var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

      var email = document.getElementById('loginUsername').value;
      var pwd = document.getElementById('loginPassword').value;

      var authenticationData =
      {
        'UserName': email,
        'Password': pwd
      }

      var userData = {
        Username : email,
        Pool : userPool
      };

      var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
      var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          console.log('access token + \n' + result.getAccessToken().getJwtToken());

          var sessionTokens =
          {
            IdToken: result.getIdToken(),
            AccessToken: result.getAccessToken(),
            RefreshToken: result.getRefreshToken()
          };
          localStorage.setItem('sessionTokens', JSON.stringify(sessionTokens));

          //POTENTIAL: Region needs to be set if not already set previously elsewhere.
          AWS.config.region = 'ap-southeast-1';
          AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId : identityPoolId, // your identity pool id here
            Logins : {
              // Change the key below according to the specific region your user pool is in.
               loginPrefix : sessionTokens.IdToken.jwtToken
            }
          });
          localStorage.setItem('awsConfig', JSON.stringify(AWS.config));
          localStorage.setItem('email', email);

          cognitoUser.getUserAttributes(function(err, result) {
            if (err) {
                console.log(err)
                alert(err);
                return;
            }
            for (var i = 0; i < result.length; i++) {
                console.log('attribute ' + result[i].getName() + ' has value ' + result[i].getValue());
                if (result[i].getName() == 'sub') {
                  console.log('Overwriting userId into local storage');
                  localStorage.setItem('userId', result[i].getValue());
                }
            }
          });

          loggedInDisplay();
        },
        onFailure: function(err) {
          alert(err.message);
        },

      });
    }

    function refreshAWSCredentials() {

      var userPoolId = localStorage.getItem('userPoolId');
      var clientId = localStorage.getItem('clientId');
      var identityPoolId = localStorage.getItem('identityPoolId');
      var loginPrefix = localStorage.getItem('loginPrefix');

      var poolData = {
        UserPoolId : userPoolId, // Your user pool id here
        ClientId : clientId // Your client id here
      }
      var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
      var cognitoUser = userPool.getCurrentUser();

      if (cognitoUser != null) {
            cognitoUser.getSession(function(err, result) {
                if (result) {
                    console.log('You are now logged in.');
                    cognitoUser.refreshSession(result.getRefreshToken(), function(err, result) {

                        if (err) {//throw err;
                            console.log('In the err: '+err);
                        }
                        else{
                            localStorage.setItem('awsConfig', JSON.stringify(AWS.config));
                            var sessionTokens =
                            {
                              IdToken: result.getIdToken(),
                              AccessToken: result.getAccessToken(),
                              RefreshToken: result.getRefreshToken()
                            };
                            localStorage.setItem("sessionTokens", JSON.stringify(sessionTokens));

                        }
                    });

                }
            });
        }
    }

    $("#loginForm").submit(function(event) {
      event.preventDefault();
      loginUser();
    });

  }
}
</script>
... END ...
```

### (Optional) Clean up
```
$ aws codecommit delete-repository --repository-name myproject-consumer-web
$ rm -rf ~/environment/myproject-consumer-web
```
