<template>
  <div class="post-load">
    <div class="container">
      <h1 class="h1">POST LOAD</h1>
    </div>
    <post-load :allData="passedData">
      <template v-slot:iconOfNew>
        <img :src="passedData.iconOfNew" alt="" />
      </template>
      <template v-slot:download>
        <img :src="passedData.iconOfDownload" alt="" />
      </template>
    </post-load>

    <posted-load
      v-for="value in postedLoads"
      :key="value"
      :postedData="value"
    ></posted-load>

    <load-filter :numOfResults="numOfResults" />


    
  </div>
</template>

<script>
import PostLoad from "../components/PostLoad.vue";
import PostedLoad from "../components/PostedLoad.vue";
import LoadFilter from "../components/LoadFilter.vue";

import download from "../assets/download.png";
import postLoadImg from "../assets/postLoad.png";
import dropdown from "../assets/dropdn.png";
import calendar from "../assets/calen.png";
import lamp from "../assets/lamp.png";
import bell from "../assets/bell.png";
import star from "../assets/star.png";

export default {
  components: {
    PostLoad,
    PostedLoad,
    LoadFilter,
  },
  data() {
    return {
      passedData: {
        iconOfNew: postLoadImg,
        iconOfDownload: download,
        dropdownIcon: dropdown,
        lamp,
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
            valueMore: "Noon and 2pm ",
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
            valueMore: "Flat",
            icon: dropdown,
          },
        ],
        contacts: {
          required: true,
        },
        comments: {
          required: true,
        },
        post: {
          required: true,
        },
      },

      postedLoads: {
        postedData: {
          indicator: {
            on: false,
            text: "off",
          },
          bell,
          star,
          postedTime: "00:10",
          status: "Posted",
          date: "12/31",
          daytime: "AM",
          from: "Anew,AH",
          to: "Boldumsaz,DZ",
          dockHours: "1/2 8am to 12 pm",
          truck: "VAN",
          filling: "Full",
          length: "48 ft",
          weight: "48,000 lb",
          offerRate: "$230",
          refId: 123456,
          contact: "993(62)000000",
          miles: "999",
          comment1: "Call Eric x555",
          comment2: "102* wide is rqd",
          commodity: "Electronics ",
        },
        postedData2: {
          indicator: {
            on: true,
            text: "on",
          },
          bell,
          star,
          postedTime: "00:10",
          status: "Posted",
          date: "12/31",
          daytime: "AM",
          from: "Anew,AH",
          to: "Boldumsaz,DZ",
          dockHours: "1/2 8am to 12 pm",
          truck: "VAN",
          filling: "Pa-l",
          length: "48 ft",
          weight: "48,000 lb",
          offerRate: "$230",
          refId: 123456,
          contact: "993(62)000000",
          miles: "999",
          comment1: "Call Eric x555",
          comment2: "102* wide is rqd",
          commodity: "Electronics ",
        },
        postedData3: {
          indicator: {
            on: true,
            text: "on",
          },
          bell,
          star,
          postedTime: "00:10",
          status: "Posted",
          date: "12/31",
          daytime: "AM",
          from: "Anew,AH",
          to: "Boldumsaz,DZ",
          dockHours: "1/2 8am to 12 pm",
          truck: "VAN",
          filling: "Full",
          length: "48 ft",
          weight: "50,000 lb",
          offerRate: "$230",
          refId: 123456,
          contact: "993(62)000000",
          miles: "999",
          comment1: "Call Eric x555",
          comment2: "102* wide is rqd",
          commodity: "Electronics ",
        },
      },

      numOfResults: 0,
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
