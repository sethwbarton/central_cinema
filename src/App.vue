<template>
  <div id="app">

    
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
      loggedIn: false,
      inSettings: false,
      searching: false
    }
  },
  methods: {
    logIn() {
      this.loggedIn = true
    },
    logOut() {
      this.loggedIn = false
    },
    showSettings() {
      if (this.inSettings === false) {
        this.inSettings = true
      } else {
        this.inSettings = false
      }
    },
    logout() {
      this.loggedIn = false
      this.inSettings = false
    },
    search() {
      this.searching ? this.searching = false : this.searching = true
    }
  }
}
</script>

<style>

  .dropbtn {
    margin: 24px;
    border: none;
    cursor: pointer;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    position: absolute;
    background-color: #CFCFCF;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

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
