<template>
  <div class="nav" id="nav">
    <div class="homelogo">
      <router-link to="/">
        <span v-on:click="resetNav()">
          <img alt="Pipas Labs" src="@/assets/pipas_logo_black.svg">
        </span>
      </router-link>
    </div>
    <div id="hamburger">
      <a href="javascript:void(0);" class="icon" v-on:click="changeNav()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
    <div class="navlinks" id="navlinks">
      <div class="navitem" id="navitem">
        <span v-on:click="resetNav()">
          <router-link to="/mission">SOBRE</router-link>
        </span>
      </div>
      <div class="navitem" id="navitem">
        <span v-on:click="resetNav()">
          <router-link to="/platform">Plataforma</router-link>
        </span>
      </div>
      <div class="navitem" id="navitem">
        <span v-on:click="resetNav()">
          <router-link to="/program">Programa</router-link>
        </span>
      </div>
      <div class="navitem" id="navitem">
        <span v-on:click="resetNav()">
          <router-link to="/pipaslabscasavoz">Pipas Labs Casa Voz</router-link>
        </span>
      </div>
      <div class="navitem" id="navitem">
        <span v-on:click="resetNav()">
          <router-link to="/contact">Fale conosco</router-link>
        </span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "TheNav",
  methods: {
    changeNav() {
      var x = document.getElementById("navlinks");
      if (x.className === "navlinks") {
        x.className += " responsive";
      } else {
        x.className = "navlinks";
      }
    },
    resetNav() {
      var x = document.getElementById("navlinks");
      console.log("x is " + x.className);
      if (x.className === "navlinks responsive") {
        x.className = "navlinks";
      }
    }
  }
};
</script>

<style lang="scss">
#nav {
  padding-top: 40px;
  padding-bottom: 20px;

  a {
    font-weight: 900;
    color: #000000;
    font-size: 13px;
    text-transform: uppercase;
    text-decoration: none;
    &.router-link-exact-active {
      color: #02eee7;
    }
  }
}
#nav a.icon {
  display: none;
}

#navlinks {
  display: inline;
}

.navitem {
  padding: 20px;
  display: inline;
}

.homelogo {
  margin-bottom: 20px;
}

@media only screen and (max-width: 600px) {
  #nav {
    padding-bottom: 10px;
  }
  #nav a.icon {
    float: middle;
    text-align: center;
    display: block;
  }
  #navlinks {
    display: none;
    padding-top: 10px;
  }
  #navlinks.responsive a {
    display: block;
  }
  #nav.responsive.icon {
    position: absolute;
    text-align: center;
  }
  #navlinks.responsive {
    display: block;
  }
  .navitem {
    padding: 10px;
    display: block;
  }
}
</style>