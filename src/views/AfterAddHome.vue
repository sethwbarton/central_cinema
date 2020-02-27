<template>
  <div>
    
    <div id="header-auth" >
      <link href="http://allfont.net/allfont.css?fonts=broadway-normal" rel="stylesheet" type="text/css" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand"><router-link to="/home"><img id="logo" src="../assets/squarularized.png" alt="Logo"></img>H<img id="name" src="../assets/Logo.png" alt="Name"></img></router-link></a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              Whuuuut
            </li>
            <li class="nav-item">
              Huh
            </li>
          </ul>
        </div>
        
        <font-awesome-icon v-on:click="search()" icon="search" size="lg"/>
        <div id="search_bar">
          H
          <input v-if="searching" type="text" placeholder="Search...">
        </div>
        <div class="dropdown">
          <font-awesome-icon icon="user" v-on:click="showSettings()" class="dropbtn" size="lg"/>
          <div v-if="inSettings">
            <router-link v-on:click="logout()" class="dropdown-content" to="/"><p id="personal_settings"><b>Logout</b></p></router-link>
          </div>
        </div>

      </nav>
    </div>

  <div id="content">
  <h1>Continue Watching</h1>
    <div class="row">
        <router-link to="/Viewing"><img class="tile" v-for="(img, index) in recentlyViewed" :src='img' :key="index"/></router-link>
        <p class="movieTitle" v-for="(title, index) in continueWatchingTitles" :key="index">{{title}}</p>
    </div>
  <br>
  <h1>Popular</h1>
    <div class="row">
      <router-link to="/Viewing"><img class="tile" v-for="(img, index) in popular" :src='img' :key="index"/></router-link>
      <p class="movieTitle" v-for="(title, index) in popularTitles" :key="index">{{title}}</p>
    </div>
    <br>
  <h1>Your services</h1>
    <div class="row">
      <img class="small_tile" v-for="(img, index) in serviceLogos" :src='img' :key="index"/>
      <router-link to="/addService"><img class="smallest_tile" v-for="(img, index) in addLogo" :src='img' :key="index" /></router-link>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  name: 'AfterAddHome',
  data() {
      return {
        serviceLogos: [ require('../assets/Disney2.png'),
          require('../assets/Netflix_Logo_RGB.png'),
          require('../assets/Amazon_Prime_Video_logo.svg'),
          require('../assets/hulu-interactive-rgb.svg')],
        addLogo: [ require('../assets/AddService.png')],
        recentlyViewed: [ require('../assets/avatar.jpg'),
          require('../assets/avengers.jpg'),
          require('../assets/forrest.jpg'),
          require('../assets/godfather.jpg'),
          require('../assets/gone_with_the_wind.jpg'),
          require('../assets/gravity.jpg'),],
        continueWatchingTitles: [
                "Avatar",
                "The Avengers: Endgame",
                "Forrest Gump",
                "The Godfather",
                "Gone With the Wind",
                "Gravity"
        ],
        popular: [require('../assets/mando.jpg'),
          require('../assets/space_odyssey.jpg'),
          require('../assets/star_wars.jpg'),
          require('../assets/the_7.jpg'),
          require('../assets/titanic2.jpg'),
          require('../assets/toys.jpg'),],
        popularTitles: [
                "The Mandalorian",
                "2001: A Space Odyssey",
                "Star Wars: A New Hope",
                "The Magnificent 7",
                "Titanic",
                "Toy Story"
        ],
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

.movieTitle {
  width: 15vw;
  height: 2vw;
  padding: 8px;
  margin-right: 10px;
}

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

#navbarNav {
  text-align: left;
  color: #7E1A22 !important;
}

h1 {
  font-family: 'Broadway-Normal', arial;
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
  color: #7E1A22 !important;
}

.nav-item {
  color: #7E1A22 !important;
}

#content {
  height: 100%;
}

a {
  color: #42b983;
}

.row {
  transition: 0.5s transform;
}

.tile {
  width: 15vw;
  height: 24vw;
  padding: 8px;
  box-sizing: border-box;
  transition: .5s transform;
  transform-origin: top right;
  float: left;
  margin-right: 10px;
}

.small_tile {
  width: 18vw;
  height: 12vw;
  padding: 8px;
  box-sizing: border-box;
  transition: .5s transform;
  transform-origin: top right;
  float: left;
  margin-right: 10px;
}

.smallest_tile {
  width: 10vw;
  height: 10vw;
  padding: 8px;
  box-sizing: border-box;
  transition: .5s transform;
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

#personal_settings {
  color: #7E1A22;
  margin: 16px;
  text-decoration-style: bold;
}

#search_bar {
  color: #7E1A22 !important;
}

font-awesome-icon {
  width: 40px;
  height: 40px;
}
</style>