<template>
  <div class="investor">
    <Navigation />
    <div v-for="item in list">
      <InvestorBlock :data='item' />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from "axios";
Vue.prototype.$http = axios;
import Navigation from "../components/components/Navigation";
import InvestorBlock from "../components/components/InvestorBlock";
export default {
  name: "Investor",
  components: {
    Navigation,
    InvestorBlock
  },
  data() {
    return {
      total:"",
      list: []
    };
  },
  created() {
    let self = this;
    this.$http
      .get("http://operate.ptrcipo.com/investor")
      .then(function(res) {
        // console.log(res);
        let resData = res.data.data;
        self.list = resData.list;
        self.total = resData.total;
        console.log(self.list);
        console.log(self.total)
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>


<style scoped>
.investor {
}
</style>
