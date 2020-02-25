<template>
  <div>
    <div id="header-auth" >
      <link href="http://allfont.net/allfont.css?fonts=broadway-normal" rel="stylesheet" type="text/css" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

      <nav class="navbar navbar-expand-lg"> <!--  Make bigger? -->
      
        <a class="navbar-brand"><router-link to="/home"><img id="logo" src="../assets/squarularized.png" alt="Logo"></img>H<img id="name" src="../assets/Logo.png" alt="Name"></img></router-link></a>

        <font-awesome-icon v-on:click="search()" icon="search" />
        <input v-if="searching" type="text" placeholder="Search..">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        

        <!-- float these left, make them bigger. -->
        <div class="dropdown">
          <font-awesome-icon icon="cog" v-on:click="showSettings()" class="dropbtn"/>
          <div v-if="inSettings" >
            <router-link v-on:click="logout()" class="dropdown-content" to="/"><div>Logout</div></router-link>
          </div>
        </div>
        <font-awesome-icon icon="user" />

      </nav>
    </div>

  <div id="content">
  <h1>Jump back in</h1>
    <div class="row">
      <router-link to="/Viewing"><img class="tile" v-for="(img, index) in recentlyViewed" :src='img' :key="index"/></router-link>
    </div>
  <h1>Popular</h1>
    <div class="row">
      <router-link to="/Viewing"><img class="tile" v-for="(img, index) in popular" :src='img' :key="index"/></router-link>
    </div>
  <h1>Your services</h1>
    <div class="row">
      <img class="tile" v-for="(img, index) in serviceLogos" :src='img' :key="index"/>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
      return {
        serviceLogos: [ require('../assets/Netflix_Logo_RGB.png'),
          require('../assets/Amazon_Prime_Video_logo.svg'),
          require('../assets/Disney_logo.svg'),
          require('../assets/hulu-interactive-rgb.svg')],
        recentlyViewed: [ require('../assets/avatar.jpg'),
          require('../assets/avengers.jpg'),
          require('../assets/forrest.jpg'),
          require('../assets/godfather.jpg'),
          require('../assets/gone_with_the_wind.jpg'),
          require('../assets/gravity.jpg'),],
        popular: [require('../assets/mando.jpg'),
          require('../assets/space_odyssey.jpg'),
          require('../assets/star_wars.jpg'),
          require('../assets/the_7.jpg'),
          require('../assets/titanic.jpg'),
          require('../assets/toys.jpg'),],
        loggedIn: false,
        inSettings: false,
        searching: false
      }
  },
  methods: {
    showSettings() {
      if (this.inSettings === false) {
        this.inSettings = true
      } else {
        this.inSettings = false
      }
    },
    logout() {
      this.$emit('logOut', '')
      this.loggedIn = false
      this.inSettings = false
    },
    search() {
      this.searching ? this.searching = false : this.searching = true
    }
  }
}
</script>

<style scoped>

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
  background-color: #060405;
  color: #CFCFCF;
}

#navbarNav {
  align: right;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #060405;
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


a {
  color: #42b983;
}

#row {
  transition: 0.5s transform;
}

.tile {
  width: 15vw;
  height: 24vw;
  padding: 8px;
  box-sizing: border-box;
  transition: 1s transform;
  transform-origin: top right;
  float: left;
  margin-right: 10px;
}

#row:hover {
  transform: translate3d(-10px, 0, 0);
}

.tile:hover {
  transform: scale(1.15);
}

.tile:hover ~ .tile {
  transform: translate3d(20px, 0, 0);
}

#content {
  margin: 24px;
  padding: 32px;
}

</style>