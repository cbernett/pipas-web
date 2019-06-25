<template>
  <div id="nav">
    <div>
      <router-link to="/">
        <img alt="Pipas Labs" src="@/assets/pipas_logo_black.svg">
      </router-link>
    </div>
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
      <router-link to="/pipaslabscasavoz">Pipas Labs Casa Voz</router-link>
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

@media only screen and (max-width: 600px) {
  #nav {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    a {
      font-weight: 800;
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
    display: inline-block;
  }
}
</style>