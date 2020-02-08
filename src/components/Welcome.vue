<template>
  <div class="hello">
      <link href="http://allfont.net/allfont.css?fonts=broadway-normal" rel="stylesheet" type="text/css" />
    <h1>Central Cinema</h1>
    <p></p>
    <h3>All your streaming services in one place!</h3>
    <p></p>
    <button v-on:click="">Log In</button>
    <p></p>
    <p>Don't have an account?</p>
    <p></p>
    <button>Sign up for FREE!</button>
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
  margin: 24px;
  text-align: center;
  color: #CFCFCF;
}
h1 {
  font-family: 'Broadway-Normal', arial;
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
</style>
