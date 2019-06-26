<template>
  <div class="intro container">
    <div class="mission_container">
      <div class="mission">{{ msg }}</div>
    </div>
    <div class="feed">
      <div class="embedsocial-hashtag" data-ref="d3458013ca761f611efff0e0964eac64fecb948c"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InstagramFeed",
  props: {
    msg: String
  },
  created: function() {
    (function(d, s, id) {
      var js;
      /* if (d.getElementById(id)) {
        return;
      } */
      js = d.createElement(s);
      js.id = id;
      js.src = "https://embedsocial.com/cdn/ht.js";
      d.getElementsByTagName("head")[0].appendChild(js);
    })(document, "script", "EmbedSocialHashtagScript");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 0px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.intro_container {
  width: auto;
  max-width: auto;
}

.mission_container {
  width: 100%;
  padding-bottom: 20px;
}
.mission {
  text-align: center;
  font-weight: lighter;
  font-size: 26px;
  line-height: 36px;
  width: 600px;
  display: inline-block;
}

@media only screen and (max-width: 600px) {
  .mission_container {
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
  }
  .mission {
    font-weight: lighter;
    font-size: 22px;
    line-height: 28px;
    width: 90%;
    padding-top: 0;
  }
}
</style>
