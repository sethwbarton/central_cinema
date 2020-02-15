<template>
  <div class="logMeInScotty">

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
      </div>    <br>
    <br>
    <div id="stand_out">
      <h1>Central Cinema</h1>
      <br>
      <form @submit.prevent="verifyLogin">
          <input type="text" placeholder="Username" v-model="username">
          <p></p>
          <input type="password" placeholder="Password" v-model="password">
          <p></p>
          <router-link to="/home" v-if="verifyLogin"><button v-on:click="verifyLogin">Log In</button></router-link>
          <p class="forgotten">
            Forgot your username?
            <br>
            Forgot your password?
          </p>
          <p>
            Don't have an account?
            <br>
            <button id="secondary">Sign up for FREE!</button>
          </p>
      </form>
      <br>
    </div>
    <br>
    <br>
    <br>
    
    <div id="footer">
      <img src="../assets/bottom_bar.png" alt="Possible Streaming Services"></img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  data() {
      return {
          username: '',
          password: '',
          accounts: [
            {"user": "jerry_without_ben", "key":"eyeofthetiger"},
            {"user": "fancy_nancy", "key":"eyeofthetiger"},
            {"user": "gina97", "key":"eyeofthetiger"}
          ]
      }
  }, methods: {
      verifyLogin() {
          this.$emit('loggedIn', '')
        var arrayLength = this.accounts.length;
        for (var i = 0; i < arrayLength; i++) {
            if(this.accounts[i].user == this.username && this.accounts[i].key == this.password) {
                // The user is in the database!
                return true;
            } else {
                // Not this user...
            }
        }
      }
  }
}
</script>

<style scoped>
/*template {*/
/*  background-image: url("https://videohive.img.customer.envatousercontent.com/files/56273334-f705-4423-b658-a78a1974a87b/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=6c9ff1a35f234b038e0cf90c3a2c0c1a");*/
/*  background-repeat: no-repeat;*/
/*  background-size: 60%;*/
/*}*/
.logMeInScotty {
    background-image: url("https://videohive.img.customer.envatousercontent.com/files/56273334-f705-4423-b658-a78a1974a87b/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=6c9ff1a35f234b038e0cf90c3a2c0c1a");
    background-repeat: no-repeat;
    background-size: 60% 100%;
    /*margin: 24px;*/
    /*padding: 32px;*/
    text-align: center;
    color: #7E1A22 !important;
    /*height: 100%;*/
    /*align: center;*/
}
h1 {
  font-size: 3em;
}
head {
  background-color: #7E1A22;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #CFCFCF;
}

button {
  background-color: #7E1A22;
  border: none;
  border-radius: 8px;
  color: #CFCFCF;
  font-size: 1.5em;
  width: 240px;
}
router-link {
  color: #CFCFCF;
}

#stand_out {
  background-color: #CFCFCF !important;
  /*radius: 8px;*/
  padding: 64px;
  margin-left: 62%;
  margin-right: 10%;
  align: center;
}

input {
  background-color: #A67478;
  border-radius: 8px;
  font-size: 1.5em;
  color: #7E1A22;
  placeholder-color: #7E1A22;
  width: 320px;
  padding: 8px;
  border: none;
}

#secondary {
  font-size: 1.25em;
}

.forgotten {
  text-decoration: underline;
  font-size: .8em;
}

#footer {
  width: 100%;
  background-color: #7E1A22;
  position: fixed;
  bottom: 0;
  text-align: center;
  font-size: 11pt;
  padding: 20px;
}

img {
  width: 65%;
}
</style>