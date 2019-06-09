<template>
  <div class="intro">
    <div>{{ msg }}</div>
    <div class="embedsocial-hashtag" data-ref="d3458013ca761f611efff0e0964eac64fecb948c"></div>
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
</style>
