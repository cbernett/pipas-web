<template>
  <div id="nav">
    <router-link to="/">
      <img alt="Pipas Labs" src="@/assets/pipas_logo_black.svg">
    </router-link>
    <p></p>
    <div id="navitem">
      <router-link to="/mission">SOBRE</router-link>
    </div>
    <div id="navitem">
      <router-link to="/platform">Plataforma</router-link>
    </div>
    <div id="navitem">
      <router-link to="/program">Programa</router-link>
    </div>
    <div id="navitem">
      <router-link to="/contact">Fale conosco</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNav"
};
</script>

<style lang="scss">
#nav {
  padding-top: 40px;
  padding-bottom: 30px;
  a {
    font-weight: 900;
    color: #000000;
    font-size: 12px;
    text-transform: uppercase;
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

@media only screen and (max-width: 600px) {
  #nav {
    padding: 20px;
    a {
      font-weight: 900;
      color: #000000;
      font-size: 11px;
      text-transform: uppercase;
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
}
</style>