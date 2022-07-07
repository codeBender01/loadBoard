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
import dropdown from "../assets/dropdn.png";
import calendar from "../assets/calen.png";
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
        {
          id: 1,
          title: "Keep",
          value: "",
        },
        {
          id: 2,
          title: "Age",
          value: "",
        },
        {
          id: 3,
          title: "Status",
          value: "",
        },
        {
          id: 4,
          title: "Pickup",
          value: "12/31",
          icon: dropdown,
          iconSecond: calendar,
        },
        {
          id: 5,
          title: "Owner",
          value: "",
        },
        {
          id: 6,
          title: "Origin",
          value: "City,ST",
        },
        {
          id: 7,
          title: "Destination",
          value: "City,ST",
        },
        {
          id: 8,
          title: "Dock Hours",
          value: "3p-5p",
        },
        {
          id: 9,
          title: "Truck",
          value: "",
        },
        {
          id: 10,
          title: "F/P",
          value: "Full",
          icon: dropdown,
        },
        {
          id: 11,
          title: "Length",
          value: "999",
          icon: "",
        },
        {
          id: 12,
          title: "Weight",
          value: "999,999",
        },
        {
          id: 13,
          title: "Offer Rate($)",
          value: "999",
        },
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
