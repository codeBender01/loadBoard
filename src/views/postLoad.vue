<template>
  <div class="post-load">
    <div class="container">
      <h1 class="h1">POST LOAD</h1>
    </div>
    <post-load :alert="alert" :titleOfNew="title" :infoHeaders="info">
      <template v-slot:iconOfNew>
        <img :src="iconOfNew" alt="" />
      </template>
      <template v-slot:download>
        <img :src="iconOfDownload" alt="" />
      </template>
    </post-load>
  </div>
</template>

<script>
import PostLoad from "../components/PostLoad.vue";
import download from "../assets/download.png";
import postLoadImg from "../assets/postLoad.png";
export default {
  components: {
    PostLoad: PostLoad,
  },
  data() {
    return {
      iconOfNew: postLoadImg,
      iconOfDownload: download,
      title: "NEW LOAD POST",
      alert: "Alert",
      info: [
        "Keep",
        "Age",
        "Status",
        "Pickup",
        "Owner",
        "Origin",
        "Destination",
        "Dock Hours",
        "Truck",
        "F/P",
        "Lengh",
        "Weight",
        "Offer Rate($)",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.post-load {
  .container {
    padding-top: 30vh;
  }
}
</style>
