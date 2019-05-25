


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

## Step 1: Create Frontend using VueJS, HTML, CSS and Bootstrap 4 Directory Template
- Provides basic CRUD functionality for products
- The Service will be triggered by consumers via a web app
```
| WEBPAGE      | URI                                     | ACTION                      |
|--------------|-----------------------------------------|-----------------------------|
| HOME         | http://[hostname]/index                 | Landing Page                |
| INDEX        | http://[hostname]/products              | Gets all products           |
| DETAIL       | http://[hostname]/products/<product_id> | Gets one product            |
| SIGNIN       | http://[hostname]/login                 | Logs the user in            |
| SIGNUP       | http://[hostname]/signup                | Signs up the user           |
| BOOK-1       | http://[hostname]/user-booking-1.html   | Booking Step 1              |
| BOOK-2       | http://[hostname]/user-booking-2.html   | Booking Step 2              |
| PAYMENT      | http://[hostname]/payment.html          | Payment                     |
| CONFIRMATION | http://[hostname]/confirmation.html     | Confirmation                |
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
$ git remote add origin https://git-codecommit.us-east-1.amazonaws.com/v1/repos/myproject-consumer-web
$ git remote -v
$ git push origin master
```

### Step 1.5: Test Vue Application Locally
```
$ cd ~/environment/myproject-consumer-web
$ npm run dev
```
You should see the following
![](vue.png)


## Step 2: Setup Web Template (Bootstrap 4 - Directory Template)

### Step 2.1: 

Install dependencies:

In `myproject-consumer-web` add the following files into `package.json`

```json
  "dependencies": {
    "bootstrap": "^4.3.1",
    "bootstrap-select": "^1.13.5",
    "dropzone": "^5.5.1",
    "jquery": "^3.3.1",
    "jquery.cookie": "^1.4.1",
    "leaflet": "^1.4.0",
    "magnific-popup": "^1.1.0",
    "nouislider": "^11.1.0",
    "object-fit-images": "^3.2.4",
    "prismjs": "^1.15.0",
    "smooth-scroll": "^15.0.0",
    "swiper": "^4.4.6"
  },
```

### Step 2.2: Require bootstrap in main.js

In `myproject-vuejs-web/src/main.js`

Add the following line 
```js

import Vue from 'vue'
import App from './App'
import router from './router'

-------------------------------------------------------------
//Add lines here
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
-------------------------------------------------------------

....

```

Final Version of `main.js`:

```js
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

```

## Step 3: Setup Basic U/I

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
### Step 3.2 Add a basic Bootstrap Navbar
In `myproject-vuejs-web/src/`
replace code in  `App.vue` with the following snippet:

Adding this code snippet will allow the navbar to be displayed in multiple views without needed to copy and paste code repetitively.

```html
<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
           <a class="nav-link"><router-link to="/">Home</router-link></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link"><router-link to="/about">About</router-link></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  text-align: center;
}
</style>

```

### Step 3.3: Test home page

In your browser, go to:  
```
http://localhost:8080
```
You should see the ff:
![](home.png)


## Step 4: Set up Axios to Consume Data

### Step 4.1: Install Axios
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

### Step 4.2: Modify Home Page to Include Axios

In `myproject-vuejs-web/src/App.vue` remove the following line:

App.vue
```html
<img src="./assets/logo.png">
```

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


# Set up Vue.js Frontend 
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

## Step 1 Initialize a Basic Vue Application:

### Step 1.1: Create a CodeCommit Repository
```bash
$ aws codecommit create-repository --repository-name myproject-consumer-web
```

### Step 1.2: Clone the repository
```bash
$ cd ~/environment
$ git clone https://git-codecommit.ap-southeast-1.amazonaws.com/v1/repos/myproject-consumer-web
```


### Step 1.3: Navigate to working directory
```
$ cd ~/environment/myproject-consumer-web
```

### Step 1.4: Set up .gitignore
```
$ cd ~/environment/myproject-consumer-web
$ vi .gitignore
```
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)

.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# TypeScript v1 declaration files
typings/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache

.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
.env.test

# parcel-bundler cache (https://parceljs.org/)
.cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/
```

### Step 1.5: Test access to repo by adding README.md file and push to remote repository

```bash
$ cd ~/environment/myproject-consumer-web
$ echo "myproject-consumer-web" >> README.md
$ git add .
$ git commit -m "Adding README.md"
$ git push origin master
```

### Step 1.6:  Initialize Vue.js application
Walk through the instructions:
```bash
$ vue create myproject
```
```bash
Vue CLI v3.7.0
? Please pick a preset: default (babel, eslint)


Vue CLI v3.7.0
✨  Creating project in /home/eddrichjanzzenang/Desktop/myproject-consumer-web/myproject.
⚙  Installing CLI plugins. This might take a while...


> yorkie@2.0.0 install /home/eddrichjanzzenang/Desktop/myproject-consumer-web/myproject/node_modules/yorkie
> node bin/install.js

setting up Git hooks
can't find .git directory, skipping Git hooks installation

> core-js@2.6.8 postinstall /home/eddrichjanzzenang/Desktop/myproject-consumer-web/myproject/node_modules/core-js
> node -e "try { require('./scripts/postinstall'); } catch (e) { /* empty */ }"

added 1155 packages from 914 contributors and audited 23635 packages in 20.518s
found 0 vulnerabilities

🚀  Invoking generators...
📦  Installing additional dependencies...

added 36 packages from 27 contributors, updated 2 packages, moved 9 packages and audited 23924 packages in 6.289s
found 0 vulnerabilities

⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project myproject.
👉  Get started with the following commands:

 $ cd myproject
 $ npm run serve
```

### Step 1.7:  Test Vue Application Locally
```
$ cd myproject
$ npm run serve
```
```bash
 DONE  Compiled successfully in 1927ms                           11:54:06

 
  App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.8.128:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.

```
You should see the ff:
![](vue.png)


## Step 2: Setup Web Templates (Bootstrap 4)
Must be configurable to mix in different bootstrap templates

### Step 2.1: Install bootstrap and jquery popper.js dependency

Install dependencies:

In `myproject-vuejs-web` run the ff:
```bash
$ npm install bootstrap jquery popper.js webpack-cli --save 
```

in `myproject-vuejs-web/package.json` you must see the ff dependencies:
```json
  "dependencies": {
    "bootstrap": "^4.3.1",
    "jquery": "^3.4.1",
    "popper.js": "^1.15.0",  
  },
```

### Step 2.2: Require bootstrap in main.js

In `myproject-vuejs-web/src/main.js`

Add the following line 
```js

import Vue from 'vue'
import App from './App'
import router from './router'

-------------------------------------------------------------
//Add lines here
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
-------------------------------------------------------------

....

```

Final Version of `main.js`:

```js
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

```

## Step 3: Setup Basic U/I

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
### Step 3.2 Add a basic Bootstrap Navbar
In `myproject-vuejs-web/src/`
replace code in  `App.vue` with the following snippet:

Adding this code snippet will allow the navbar to be displayed in multiple views without needed to copy and paste code repetitively.

```html
<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
           <a class="nav-link"><router-link to="/">Home</router-link></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link"><router-link to="/about">About</router-link></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  text-align: center;
}
</style>

```

### Step 3.3: Test home page

In your browser, go to:  
```
http://localhost:8080
```
You should see the ff:
![](home.png)


## Step 4: Set up Axios to Consume Data

### Step 4.1: Install Axios
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

### Step 4.2: Modify Home Page to Include Axios

In `myproject-vuejs-web/src/App.vue` remove the following line:

App.vue
```html
<img src="./assets/logo.png">
```

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
