<template>
  <div class="home">
    <InstagramFeed
      msg="We combine technology and play to build capacity and amplify voices in urban peripheries around the world."
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
