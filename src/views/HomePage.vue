<template>
  <div>
    <h1>Jump back in</h1>
    <img v-for="(img, index) in recentlyViewed" :src='img' :key="index"/>
    <h1>Popular</h1>
    <img v-for="(img, index) in popular" :src='img' :key="index"/>
    <h1>Your services</h1>
    <img v-for="(img, index) in serviceLogos" :src='img' :key="index"/>
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
          require('../assets/toys.jpg'),]
      }
  },
  methods: {
      
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>