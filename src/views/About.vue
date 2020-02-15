<template>
  <div class="contact_us">
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
.contact_us {
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