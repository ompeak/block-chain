<template>
<div class="apps-detail">
 <DetailHeader title="应用详情" type="Apps" />
 <div class="detail-content">
   <div class="name-info">
     <div class="name">
       {{name}}
     </div>
     <div class="type">
       {{type}}
     </div>
   </div>
   <div class="source">
     来源：{{source}}
   </div>
   <div class="content" v-html="content" >

   </div>
</div>
</div>
</template>

<script>
import * as axios from "axios";
import DetailHeader from "./components/DetailHeader";
import {baseUrl} from "./../js/env";
export default {
  name: "AppsDetail",
  components: {
    DetailHeader
  },
  data() {
    return {
      name: "",
      type: "",
      source: "",
      content:""
    };
  },
  mounted() {
    let self = this;
    let id = this.$route.params.id;
    axios
      .get("http://www.ptrcipo.com/app/" + id)
      .then(function(res) {
        let resData = res.data.data;
        self.name = resData.name;
        self.type = resData.type;
        self.source = resData.source;
        self.content= resData.content;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped lang="scss">
.apps-detail {
  .detail-content {
    padding: 10px;

    .name-info {
      display: flex;
      align-items: center;
      .name {
        font-size: 20px;
        font-weight: bold;
      }
      .type {
        margin-left: 10px;
        color: #666;
        padding: 3px;
        background: #e6e6e6;
      }
    }
    .source {
      margin-top: 20px;
      color: #28c9d8;
    }
    .content{
      margin-top: 30px;
      color: #333;

    }
  }
}
</style>
