<template>
  <div class="feed">
    <InstagramFeed
      msg="Pipas Labs combina brincadeiras e tecnologia para conectar o mundo sem fronteiras."
    />
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import InstagramFeed from "@/components/InstagramFeed.vue";

export default {
  name: "home",
  components: {
    InstagramFeed
  }
};
</script>
