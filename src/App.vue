<template>
  <div id="app">
    <div id="nav">
      <div class="topbar">
        <img alt="Top Bar" src="./assets/pipas_topbar.svg">
      </div>
      <router-link to="/">
        <img alt="Pipas Labs" src="./assets/pipas_logo_black.svg">
      </router-link>
      <p></p>
      <div id="navitem">
        <router-link to="/mission">A Missão</router-link>
      </div>
      <div id="navitem">
        <router-link to="/about">O Que Fazemos</router-link>
      </div>
      <div id="navitem">
        <router-link to="/contact">Fale Conosco</router-link>
      </div>
    </div>
    <router-view/>
    <TheFooter/>
  </div>
</template>


<script>
// @ is an alias to /src
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "app",
  components: {
    TheFooter
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  //font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  padding: 0;
  margin: 0;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #02eee7;
    }
  }
}
#navitem {
  padding: 10px;
  display: inline;
}
.topbar {
  width: 100%;
  height: 7px;
  overflow: hidden;
  padding: 0;
  margin: 0;
  position: fixed;
  top: 0px;
  left: 0px;
  display: block;

  img {
    padding: 0;
    margin: 0;
    width: 100%;
    display: block;
  }
}
</style>
