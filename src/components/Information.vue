<template>
  <div class="information">
   <Navigation />
    <div class="list"  v-for="item in items">
        <Block :data=item />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import informationData from "../mock/informationData.js";
import axios from "axios";
Vue.prototype.$http = axios;
import Block from "./InformationBlock/index";
import Navigation from "./components/Navigation";
export default {
  name: "Information",
  components: {
    Navigation,
    Block
  },
  data() {
    return {
      items:[]
    };
  },
  created() {
    let self = this;
    this.$http
      .get("http://operate.ptrcipo.com/news")
      .then(function(res) {
        let resData = res.data.data;
        self.items = resData;

      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.information {


}
</style>
