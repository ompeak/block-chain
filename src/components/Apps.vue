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
      .get("http://operate.ptrcipo.com/app")
      .then(function(res) {
        let resData = res.data.data;
        self.list = resData; 
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
