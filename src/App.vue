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
  display: flex;
  flex-direction: column;
}

#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  padding: 0;
  margin: 0;
  width: auto;
  max-width: auto;
  //background-color: black;
}

@media only screen and (max-width: 600px) {
  #app {
    width: 100%;
    height: auto;
    //padding: 0;
    //margin: 0;
  }
}

.home {
  flex: 1 0 auto;
}

.footer {
  flex-shrink: 0;
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

.featured_text {
  font-size: 24px;
  font-weight: 200;
}

.text_sm {
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  text-align: left;
}
</style>
