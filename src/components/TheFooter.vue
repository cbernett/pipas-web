<template>
  <div class="footer_container">
    <div class="footer_items">
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
  background-color: black;
  height: 100px;
  display: flex;
  justify-content: center;
  flex: 1;
}

.footer_items {
  max-width: 1260px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
}

.item {
  &__left {
    text-align: left;
    flex: 0 0 10em;
  }
  &__middle {
    text-align: center;
    img {
      width: 83px;
    }
  }
  &__right {
    text-align: left;
    flex: 0 0 10em;
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
@media only screen and (max-width: 600px) {
  .footer_items {
    width: 90%;
    height: 100px;
    display: flex;
    padding-left: 20px;
    justify-content: space-around;
    align-items: center;
    flex: 1;
    flex-direction: row;
  }
  .item {
    &__left {
      text-align: left;
      flex: 0 1 8em;
    }
    &__middle {
      text-align: center;
      flex: 2 0 0;
      img {
        width: 63px;
      }
    }
    &__right {
      text-align: left;
      flex: 0 1 8em;
    }
    &__h3 {
      color: white;
      font-size: 10px;
      font-weight: bold;
      padding: 0;
      margin: 0;
      line-height: 14px;
    }
    &__h4 {
      color: white;
      font-size: 10px;
      font-weight: normal;
      line-height: 16px;
      padding: 0;
      margin: 0;
    }
    &__text {
      color: white;
      font-size: 10px;
      font-weight: normal;
      padding: 0;
      margin: 0;
      line-height: 15px;
    }
  }
}
</style>
