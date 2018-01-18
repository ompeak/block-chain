<template>
  <div class="navigation">
    <div class="nav">
      <Navigation />
    </div>
    <div>
        <img src="./../assets/activityBanner.png" alt="">
        <Block content="aaa" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import informationData from "../mock/informationData.js";
import axios from "axios";
Vue.prototype.$http = axios;
import Block from "./NavigationBlock/index";
import Navigation from "./components/Navigation";
export default {
  name: "",
  components: {
    Navigation,
    Block
  },
  data() {
    return {};
  },
  created() {
    // console.log('created'+JSON.stringify(informationData) );
    // this.$http
    //   .get("http://operate.ptrcipo.com/news/?page=0&size=4")
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
body{
  background: #f5f6f7 !important;
}
</style>
