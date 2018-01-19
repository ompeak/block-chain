<template>
<div class="information-detail">
 <DetailHeader title="资讯详情" />
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
        {{updatedAt}}
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
  <div class="content">
    <div>{{content}}</div>
  </div>

 </div>

</div>

</template>

<script>
import * as axios from "axios";
import DetailHeader from "./components/DetailHeader";
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
    console.log('s')
    console.log(this.$route);
    // let id = this.$route.query.id;
    // axios
    //   .get("http://operate.ptrcipo.com/news/" + id)
    //   .then(function(res) {
    //     console.log("res" + JSON.stringify(res));
    //     let resData = res.data.data;
    //     self.link = resData.link;
    //     self.title = resData.title;
    //     self.content = resData.content;
    //     self.updatedAt = resData.updatedAt;
    //     self.author = resData.author;
    //     self.source = resData.source;
    //     self.type = resData.type;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  }
};
</script>

<style scoped lang="scss">
.information-detail {
  .detail-content{
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
    display: flex;
    // justify-content: space-around;
    align-items: center;
    .left {
      display: flex;
      flex-flow: column;
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
  }
  }

}
</style>
