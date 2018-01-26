<template>
  <div class="apps">
    <Navigation />
    <div class="list" v-for="(val, key, index) in list">
      <AppsBlock :name='key' :data='val' />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
Vue.prototype.$http = axios;
import Navigation from "../components/components/Navigation";
import AppsBlock from "../components/components/AppsBlock";
import {baseUrl} from "./../js/env";
export default {
  name: "Apps",
  components: {
    Navigation,
    AppsBlock
  },
  data() {
    return {
      total: "",
      list: []
    };
  },
  created() {
    let self = this;
    this.$http
      .get("http://www.ptrcipo.com/app")
      .then(function(res) {
        let resData = res.data.data;
        self.list = resData;
        // for (var obj in resData) {
        //   // alert(obj);
        // }
        // console.log(JSON.stringify(self.list))
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>


<style scoped lang='scss'>
.apps {
  .list{

  padding: 10px;
  }
}
</style>
