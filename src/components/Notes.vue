<template>
  <div class="notes">
    <Navigation />
    <div v-for="item in list">
      <NotesBlock :data='item' />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from "axios";
Vue.prototype.$http = axios;
import Navigation from "../components/components/Navigation";
import NotesBlock from "../components/components/NotesBlock";
import {baseUrl} from "./../js/env";
export default {
  name: "Investor",
  components: {
    Navigation,
    NotesBlock
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
      .get("http://www.ptrcipo.com/note")
      .then(function(res) {
        let resData = res.data.data;
        self.list = resData.list;
        self.total = resData.total;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>


<style scoped lang="scss">
.notes {
}
</style>
