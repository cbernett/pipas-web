<template>
  <div class="footer_container">
    <div class="item item__left">
      <h3 class="item__h3">Pipas Labs, Inc.</h3>
      <h4 class="item__h4">© 2018 All Rights Reserved</h4>
    </div>
    <div class="item item__middle">
      <img alt="Name Logo" src="@/assets/pipas_logo_name_white.svg">
    </div>
    <div class="item item__right">
      <h4 class="item__h4">Rio de Janeiro, RJ</h4>
      <h4 class="item__h4">New York, NY</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer_container {
  position: relative;
  display: flex;
  background-color: black;
  //flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  //text-align: center;
  height: 100px;
}

.item {
  &__left {
    text-align: left;
    width: 25%;
    padding-left: 30px;
  }
  &__middle {
    text-align: center;
    width: 50%;
    img {
      width: 83px;
    }
  }
  &__right {
    text-align: left;
    width: 25%;
  }
  &__h3 {
    color: white;
    font-size: 14px;
    font-weight: bold;
    padding: 0;
    margin: 0;
    line-height: 18px;
  }
  &__h4 {
    color: white;
    font-size: 11px;
    font-weight: bold;
    line-height: 18px;
    padding: 0;
    margin: 0;
  }
  &__text {
    color: white;
    font-size: 11px;
    font-weight: normal;
    padding: 0;
    margin: 0;
    line-height: 15px;
  }
}
</style>
