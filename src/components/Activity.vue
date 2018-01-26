<template>
  <div class="activity">
    <Navigation />
    <div class="list" >
      <ActivityBlock  v-for="(val, key, index) in list"  :key="key"  :data='val' />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
Vue.prototype.$http = axios;
import Navigation from "../components/components/Navigation";
import ActivityBlock from "../components/components/ActivityBlock";

import {baseUrl} from "./../js/env";
export default {
  name: "Apps",
  components: {
    Navigation,
    ActivityBlock
  },
  data() {
    return {
      total: "",
      list: []
    };
  },
  created() {
    let self = this;
    console.log('baseUrl:',baseUrl)
    this.$http
      .get(baseUrl+ "/activity")
      .then(function(res) {
        self.list = res.data.data.list;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>


<style scoped lang='scss'>
.activity {
  .list {
    padding: 10px;
  }
}
</style>
