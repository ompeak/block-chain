<template>
<div class="information-detail">
 <DetailHeader title={this.title} />
 <div class="content">

    <div>2018-01-17</div>

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
      title: ""
    };
  },
  mounted() {
    let self = this;
    let id = this.$route.params.id;
    axios
      .get("http://operate.ptrcipo.com/news/" + id)
      .then(function(res) {
        console.log(res.data);
        self.title = res.data.title;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped lang="scss">
.information-detail {
  .content {
    padding: 1rem;
  }
}
</style>
