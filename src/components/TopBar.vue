<template>
  <div class="topbar">
    <img alt="Pipas Labs" src="@/assets/pipas_topbar.svg">
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
  //display: block;
  img {
    display: block;
  }
}
</style>