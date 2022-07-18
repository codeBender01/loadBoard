<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <div>
    <Navbar />
    <RouterView />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "NunitoSans";
  src: local("NunitoSans"),
    url("../fonts/NunitoSans-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "NunitoSans-Bold";
  src: local("NunitoSans-Bold"),
    url("../fonts/NunitoSans-Bold.ttf") format("truetype");
}

*,
body {
  padding: 0;
  margin: 0;
}

.ok {
  margin: 5px;
}

body {
  background-color: #1d1929;
}

.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.container {
  width: 95%;
  margin: 0 auto;
}

.h1 {
  font-family: "Nunito Sans", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  line-height: 110%;
  letter-spacing: 0.005em;
  color: #ffffff;
  text-transform: uppercase;
}
</style>
