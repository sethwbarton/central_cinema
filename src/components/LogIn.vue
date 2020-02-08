<template>
  <div class="logMeInScotty">
    <h1>Central Cinema</h1>
    <form @submit.prevent="verifyLogin">
        <input type="text" placeholder="Username" v-model="username">
        <p></p>
        <input type="password" placeholder="Password" v-model="password">
        <p></p>
        <button v-on:click="">Log In</button>
        <p></p>
        <p>Don't have an account?</p>
        <button>Sign up for FREE!</button>
    </form>
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
        var arrayLength = this.accounts.length;
        for (var i = 0; i < arrayLength; i++) {
            if(this.accounts[i].user == this.username && this.accounts[i].key == this.password) {
                console.log("The user is in the database!");
                // switch to home page component
            } else {
                console.log("Not this user...");
            }
        }
      }
  }
}
</script>

<style scoped>
.logMeInScotty {
    margin: 24px;
    text-align: center;
    color: #CFCFCF;
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
  color: #42b983;
}
</style>