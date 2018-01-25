<template>
<div class="notes-detail">
 <DetailHeader title="小百科" type="notes"  />
  <div class="detail-content">
    <div class="title">
      {{title}}
    </div>
    <div class="subtitle">
      <div class="type">
        {{type}}
      </div>
      <div class="time">

      </div>
    </div>
    <div class="content" v-html="content">

    </div>
  </div>
</div>
</template>

<script>
import * as axios from "axios";
import DetailHeader from "./components/DetailHeader";
export default {
  name: "AppsDetail",
  components: {
    DetailHeader
  },
  data() {
    return {
      title: "",
      type: "",
      author: "",
      content:""
    };
  },
  mounted() {
    let self = this;
    let id = this.$route.params.id;
    axios
      .get("http://operate.ptrcipo.com/note/" + id)
      .then(function(res) {
        // console.log(res)
        let resData = res.data.data;
        self.title = resData.title;
        self.type = resData.type;
        self.author = resData.author;
        self.content = resData.content;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped lang="scss">
.notes-detail {
  .detail-content {
    padding: 20px;

    .title{
      font-size: 20px;
      font-weight: bold;
      color: #333;
    }

    .subtitle{
      margin-top: 20px;
      display: flex;
      align-items: center;
    }

    .content{
      margin-top:30px;
			line-height: 26px;
    }
  }
}
</style>
