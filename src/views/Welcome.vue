<template>
  <div class="hello">
      <link href="http://allfont.net/allfont.css?fonts=broadway-normal" rel="stylesheet" type="text/css" />
    <div id="snippet">
      <h1>Central</h1>
      <h1>Cinema</h1>
      <h3>All your streaming services in one place!</h3>
      <br>
      <button v-on:click=""><router-link to="/login">Log In</router-link></button>
      <p></p>
      <p>Don't have an account?</p>
      <p></p>
      <button>Sign up for FREE!</button>
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
  /*margin: 24px;*/
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
</style>
