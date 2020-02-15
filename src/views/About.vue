<template>
  <div class="contact_us">
    <div id="header-unauth" v-if="!loggedIn">
      <link href="http://allfont.net/allfont.css?fonts=broadway-normal" rel="stylesheet" type="text/css" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand"><router-link to="/"><img id="logo" src="../assets/squarularized.png" alt="Logo"></img>H<img id="name" src="../assets/Logo.png" alt="Name"></img></router-link></a>

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
    <div id="about_us">
    <h1><b>About Us: Central Cinema</b></h1>
    <br>
    <p>
      This project came as the result of a common problem faced by the people of 
      today. With millions of various shows and films across several popular 
      streaming services, it's hard to know where to look first when you have a 
      specific video in mind. 
      <br>
      <br>
      This brings us to the problem we here at Central Cinema are trying to solve:
      <h3>
        <i>Where should you go first?</i>
      </h3>
      Central Cinema makes it easy to centralize your streaming services in one 
      place, meaning you don't have to search each individual site to find the 
      exact show you're looking for. 
      <br>
    </p>
    <button>Sign up for a free account today!</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
      return {
         
      }
  }, methods: {
      
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
#about_us {
    text-align: center;
    margin-left: 30%;
    margin-right: 30%;
    margin-top: 5%;
    padding: 16px;
}
button {
  background-color: #7E1A22;
  border: none;
  border-radius: 8px;
  color: #CFCFCF;
  font-size: 1.25em;
  width: 240px;
}
</style>