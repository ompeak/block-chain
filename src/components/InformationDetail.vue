<template>
<div class="information-detail">
 <DetailHeader title="资讯详情" type="information" />
 <div class="detail-content">
<div class="title">
    <a :href='link'></a>{{title}}
  </div>
  <div class="typeInfo">
    <div class="left">
      <div class="type">
        {{type}}
      </div>
      <div class="time">
        {{updatedAt | formatDate}}
      </div>
    </div>

  </div>
  <div class="authorInfo">
    <div class="source">
      来源:{{source}}
    </div>
    <div class="author">
      作者:{{author}}
    </div>
  </div> 
  <div class="content" v-html="(content)"  >
  </div>
 </div>
</div>
</template>
<script>
import { formatDate } from "../js/data.js";
import * as axios from "axios";
import DetailHeader from "./components/DetailHeader";
import {baseUrl} from "./../js/env";
export default {
  name: "InformationDetail",
  components: {
    DetailHeader
  },
  data() {
    return {
      title: "",
      content: "",
      author: "",
      source: "",
      type: "",
      link: "",
      updatedAt: ""
    };
  },
  mounted() { 

    let self = this;
    let id = this.$route.params.id;
    axios
      .get("http://www.ptrcipo.com/news/" + id)
      .then(function(res) {
        // console.log("res" + JSON.stringify(res));
        let resData = res.data.data;
        self.link = resData.link;
        self.title = resData.title;
        self.content = resData.content;
        self.updatedAt = resData.updatedAt;
        self.author = resData.author;
        self.source = resData.source;
        self.type = resData.type;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    formatSolution(s) {
      if (s) {
        return s.replace(/\s/g, "<br/>");
      } else return "";
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  }
};
</script>

<style   lang="scss">
.information-detail {
  .detail-content {
    padding: 1rem;
    .title {
      margin-top: 10px;
      font-size: 24px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .typeInfo {
      margin-top: 10px;
      display: flex;
      // justify-content: space-around;
      align-items: center;
      .left {
        display: flex;
        flex-flow: column;

        .time {
          margin-top: 10px;
        }
      }
    }
    .authorInfo {
      margin-top: 10px;
      display: flex;
      // justify-content: space-around;
      align-items: center;

      .author {
        margin-left: 10px;
      }
    }
    .content {
      margin-top: 10px;
      line-height: 28px;
word-break:break-all; 
    word-wrap:break-word;
      // .input { 
      //   color: #666;
      //   padding: 10px;
      //   width: 100%;
      //   resize: none;
      //   font-size: 14px;
      //   line-height: 25px;
      //   overflow: hidden;
      //   word-wrap: break-word;
      //   border: 0;
			// 	background-color: transparent;
			// 	min-height: 200px;
      // }
    }
  }
}

 
</style>
