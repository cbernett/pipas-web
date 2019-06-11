<template>
  <div id="app">
    <div class="home">
      <TopBar/>
      <TheNav/>
      <router-view/>
    </div>
    <div class="footer">
      <TheFooter/>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import TopBar from "@/components/TopBar.vue";
import TheNav from "@/components/TheNav.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "app",
  components: {
    TopBar,
    TheNav,
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
.home {
  //min-height: 100vh;
  //max-width: 1280px;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.footer {
  margin: auto auto 0 auto;
}
.text_lg {
  font-size: 24px;
  font-weight: bold;
}

.text_sm {
  font-size: 14px;
  line-height: 22px;
  font-weight: normal;
  text-align: left;
}
</style>
