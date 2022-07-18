<template>
  <div class="search-truck">
    <div class="container">
      <h1 class="h1">SEARCH TRUCK</h1>

      <post-load :allData="passedData">
        <template v-slot:iconOfNew>
          <img :src="passedData.iconOfNew" alt="" />
        </template>
      </post-load>

      <searched-load
        v-for="value in searchedLoads"
        :key="value"
        :searchedData="value"
      ></searched-load>

      <load-filter :numOfResults="numOfResults" />

      <searched-loads :filteredData="filteredData" />
    </div>
  </div>
</template>

<script>
import PostLoad from "../components/PostLoad.vue";
import SearchedLoad from "../components/SearchedLoad.vue";
import LoadFilter from "../components/LoadFilter.vue";
import SearchedLoads from "../components/SearchedLoads.vue";

import download from "../assets/download.png";
import truck from "../assets/truck.png";
import dropdown from "../assets/dropdn.png";
import search from "../assets/search.png";
import lamp from "../assets/lamp.png";
import bell from "../assets/bell.png";
import star from "../assets/star.png";
import stack from "../assets/stack.png";

export default {
  components: {
    PostLoad,
    LoadFilter,
    SearchedLoad,
    SearchedLoads,
  },
  data() {
    return {
      passedData: {
        iconOfNew: truck,
        iconOfDownload: download,
        dropdownIcon: dropdown,
        lamp,
        title: "NEW POST TRUCK",

        info: [
          {
            id: 1,
            title: "Truck",
            value: "Any",
            icon: dropdown,
          },
          {
            id: 2,
            title: "",
            value: "V",
            icon: dropdown,
            iconSecond: stack,
          },
          {
            id: 3,
            title: "Avial",
            value: "12/31",
            icon: dropdown,
          },
          {
            id: 4,
            title: "Origin",
            value: "City, ST",
          },
          {
            id: 5,
            title: "Destination",
            value: "City, ST",
          },

          {
            id: 6,
            title: "DH-O",
            value: "999",
          },
          {
            id: 7,
            title: "DH-D",
            value: "999",
          },
          {
            id: 8,
            title: "F/P",
            value: "Full",
            icon: dropdown,
          },
          {
            id: 9,
            title: "Length",
            value: "999",
            icon: "",
          },
          {
            id: 10,
            title: "Weight",
            value: "999,999",
          },
          {
            id: 11,
            title: "Search Back",
            value: "999",
          },
        ],
        contacts: {
          required: false,
        },
        comments: {
          required: false,
        },
        button: {
          required: false,
        },

        search: {
          required: true,
          text: "SEARCH",
          icon: search,
        },
      },

      searchedLoads: {
        searchedData: {
          bell,

          truck: "ANY,V",
          date: "12/31",

          from: "Anew,AH",
          to: "Boldumsaz,DZ",
          dHO: 999,
          dHD: 999,
          filling: "Full",
          length: "48 ft",
          weight: "48,000 lb",
          searchBack: "2hr",
        },
        searchedData2: {
          bell,

          truck: "ANY,V",
          date: "12/31",

          from: "Anew,AH",
          to: "Boldumsaz,DZ",
          dHO: 999,
          dHD: 999,
          filling: "Pa-l",
          length: "48 ft",
          weight: "48,000 lb",
          searchBack: "2hr",
        },
        searchedData3: {
          bell,

          truck: "ANY,V",
          date: "12/31",

          from: "Anew,AH",
          to: "Boldumsaz,DZ",
          dHO: 999,
          dHD: 999,
          filling: "Full",
          length: "48 ft",
          weight: "48,000 lb",
          searchBack: "2hr",
        },
      },

      numOfResults: 0,

      filteredData: {
        dropdownIcon: dropdown,
        stackIcon: stack,
        filters: [
          {
            id: 1,
            title: "Age",
            icon: dropdown,
          },
          {
            id: 2,
            title: "Avial",
          },
          {
            id: 3,
            title: "Truck",
          },
          {
            id: 4,
            title: "F/P",
          },
          {
            id: 5,
            title: "DH-O",
          },
          {
            id: 6,
            title: "Origin",
          },
          {
            id: 7,
            title: "Trip",
          },
          {
            id: 8,
            title: "Destination",
          },
          {
            id: 9,
            title: "DH-D",
          },
          {
            id: 10,
            title: "Company",
          },
          {
            id: 11,
            title: "Contact",
          },
          {
            id: 12,
            title: "Length",
          },
          {
            id: 13,
            title: "Weight",
          },
          {
            id: 14,
            title: "Home",
          },
        ],

        values: [
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
          {
            age: "00:10",
            avial: "12/31",
            truck: "V",
            fP: "F",
            dHO: "999",
            origin: "Anew,AH",
            trip: "-",
            destination: "Anywhere",
            dHD: "-",
            company: "Load triller",
            contact: "993(62)000000",
            length: "48 ft",
            weight: "50,000lb",
            home: "AG",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.search-truck {
  .container {
    padding-top: 30vh;
  }
}
</style>
