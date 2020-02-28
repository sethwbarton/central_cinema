<template>
    <div class="viewing">
      <div id="header-auth">
        <link href="http://allfont.net/allfont.css?fonts=broadway-normal" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <nav class="navbar navbar-expand-lg">
        
          <a class="navbar-brand"><router-link to="/home"><img id="back" src="../assets/back_arrow.png" alt="Back" />HH<img id="logo" src="../assets/squarularized.png" alt="Logo"></img>H<img id="name" src="../assets/Logo.png" alt="Name"></img></router-link></a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                lkj
              </li>
              <li class="nav-item">
                lkj
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <font-awesome-icon icon="user" v-on:click="showSettings()" class="dropbtn" />
            <div v-if="inSettings">
              <router-link v-on:click="logout()" class="dropdown-content" to="/"><p id="personal_settings"><b>Logout</b></p></router-link>
            </div>
          </div>
        </nav>
      </div>
      <section>
        <aside>
          <h1>"Flury of Flight"</h1>
          <br>
          <p>Sorry, the video you selected is currently unavailable.</p><p>We here at Central Cinema are doing all we can to correct the issue.</p><p>While we fix the problem, here's some stock footage a mother-daughter pair experiencing the thrill of watching hot air balloons. Enjoy!</p>
        </aside>
        <article>
          <video controls>
            <source  src="../assets/video.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </article>
      </section>
      
    </div>
</template>

<script>
    export default {
        name: 'VideoViewer',
        data() {
            return {
                inSettings: false
            }
        },
        methods: {
            showSettings() {
                if (this.inSettings === false) {
                    this.inSettings = true;
                } else {
                    this.inSettings = false;
                }
            },
            logout() {
                this.inSettings = false
            }
        }
    }
</script>

<style scoped>

section {
  margin-top: 16px;
  margin-left: 24px;
  margin-right: 24px;
  padding: 24px;
  display: flex;
}

aside {
  flex: 1;
}

article {
  flex: 9;
}

video {
    /*display: block;*/
    /*margin: auto;*/
    width: 92%;
    height: 92%;
    /*align: center;*/
}

.nav-item {
    color: #7E1A22 !important;
}

#back {
    height: 40px;
    width: 40px;
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

#personal_settings {
  color: #7E1A22;
  margin: 16px;
  text-decoration-style: bold;
}
</style>