<template>
  <div class="topbar">
    <img alt="Pipas Labs" viewBox="0 0 1024 10" src="@/assets/pipas_topbar.svg">
  </div>
</template>

<script>
export default {
  name: "TopBar"
};
</script>

<style lang="scss">
.topbar {
  width: 100%;
  height: 7px;
  overflow: hidden;
  padding: 0;
  margin: 0;
  position: fixed;
  top: 0px;
  left: 0px;
  display: relative;
  img {
    display: block;
    width: 100%;
  }
}

@media only screen and (max-width: 600px) {
  .topbar {
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
    position: fixed;
    top: 0px;
    left: 0px;
    img {
      //width: 100%;
      //height: 32px;
    }
  }
}
</style>