<template>
  <div id="app">
    <div id="header-unauth" v-if="!loggedIn">
      <link href="http://allfont.net/allfont.css?fonts=broadway-normal" rel="stylesheet" type="text/css" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand"><router-link to="/"><img id="logo" src="./assets/squarularized.png" alt="Logo"></img>H<img id="name" src="./assets/Logo.png" alt="Name"></img></router-link></a>
          
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link"><router-link to="/contact">Contact Us</router-link><span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><router-link to="/about">About Us</router-link><span class="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
        </nav>
    </div>
    <div id="header-auth" v-else>
      <link href="http://allfont.net/allfont.css?fonts=broadway-normal" rel="stylesheet" type="text/css" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

      <nav class="navbar navbar-expand-lg"> <!--  Make bigger? -->

        <font-awesome-icon icon="search" />

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <font-awesome-icon icon="cog" /> <!-- float these left, make them bigger. -->
        <font-awesome-icon icon="user" />

      </nav>
    </div>
    
    <div id="content">
      <router-view @loggedIn="logIn"/>
    </div>

  </div>
</template>


<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script src="https://kit.fontawesome.com/050c765c4a.js" crossorigin="anonymous"></script>
    
<script>
import Welcome from './views/Welcome.vue'
import LogIn from './views/LogIn.vue'
import Contact from './views/Contact.vue'
import About from './views/About.vue'
import HomePage from './views/HomePage.vue'
import Viewing from './views/Viewing.vue'
import bottom_bar from './assets/bottom_bar.png'

export default {
  name: 'app',
  components: {
    Welcome
  },
  data() {
    return {
      loggedIn: false
    }
  },
  methods: {
    logIn() {
      this.loggedIn = true
    }
  }
}
</script>

<style>
html {
  background-color: #040205;
  color: #CFCFCF;
}
#navbarNav {
  align: right;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #040205;
  /*text-align: center;*/
  color: #CFCFCF;
  /*margin-top: 60px;*/
}

h1 {
  font-family: 'Broadway-Normal', arial;
}

nav {
  width: 100%;
  /*height: 112px;*/
  height: 8%;
  background-color: #7E1A22;
  padding: 24px;
}

#logo {
  height: 96px;
  width: 96px;
}

#name {
  height: 88px;
}

nav .navbar-brand a{
  padding: 24px;
  color: #7E1A22 !important;
}

nav .navbar-nav li a{
  color: #CFCFCF !important;
}

.nav-item {
  color: #CFCFCF !important;
}



#content {
  height: 100%;
  
}
</style>
