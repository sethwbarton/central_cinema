<template>
  <div class="hello">
    <div id="header-unauth">
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
              sdlfj
            </li>
            <li class="nav-item">
              blehg
            </li>
          </ul>
        </div>
        
        <a class="nav-link"><router-link to="/about">About Us</router-link><span class="sr-only">(current)</span></a>
        <a class="nav-link"><router-link to="/contact">Contact Us</router-link><span class="sr-only">(current)</span></a>
      
      </nav>
    </div>
    
    <link href="http://allfont.net/allfont.css?fonts=broadway-normal" rel="stylesheet" type="text/css" />
    
    <div id="real_snippet">
      <div id="snippet">
        <br>
        <br>
        <br>
        <h1>Central</h1>
        <h1>Cinema</h1>
        <h3>All your streaming services in one place!</h3>
        <br>
        <router-link to="/login"><button>Log In</button></router-link>
        <p></p>
        <p>Don't have an account?</p>
        <p></p>
        <router-link to="/signUp"><button>Sign up for FREE!</button></router-link>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </div>
    
      <div id="footer">
        <img id="bottom_img" src="../assets/bottom_bar.png" alt="Possible Streaming Services"></img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.hello {
  background-image: url("https://videohive.img.customer.envatousercontent.com/files/56273334-f705-4423-b658-a78a1974a87b/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=6c9ff1a35f234b038e0cf90c3a2c0c1a");
  background-repeat: no-repeat;
  background-size: 60% 100%;
  text-align: center;
  color: #CFCFCF;
}
h1 {
  font-family: 'Broadway-Normal', arial;
  font-size: 5em;
}
h3 {
  margin: 40px 0 0;
  font-size: 2em;
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
p {
  font-size: 1.5em;
}
#snippet {
  margin-left: 45%;
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
#footer {
  width: 100%;
  background-color: #7E1A22;
  position: fixed;
  bottom: 0;
  text-align: center;
  font-size: 11pt;
  padding: 20px;
}

#bottom_img {
  width: 65%;
}

.nav-item {
  color: #7E1A22 !important;
}
</style>
