<template>
  <div id="app">
    <TopBar/>
    <TheNav/>
    <router-view/>
    <TheFooter/>
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

.article {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.main {
  flex-grow: 1;
}

img {
  padding: 0;
  margin: 0;
  width: 100px;
  align: center;
  //display: block;
}
</style>
