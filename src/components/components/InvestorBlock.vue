<template>
  <div class="investor-block">
  <div class="image" :style="{backgroundImage: 'url(' + imgUrl + ')'}" >
</div>
<div class="info">
  <div class="name-info">
    <div class="name">
      {{data.name}}
    </div>
    <div class="fund">
      {{data.type}}
    </div>
  </div>
  <div class="line"></div>
  <div class="position">
    {{data.position}}
  </div>
  <div class="introduction">
    {{data.introduction}}
  </div>
</div>

  </div>
</template>

<script>
export default {
  name: "InvestorBlock",
  props: ["data"],
  components: {},

  data() {
    return {
       id: "",
      imgUrl: ""
    };
  },
  mounted() {
    // console.log(this.data);
     this.id = this.data.id;


    this.imgUrl =
      "http://operate.ptrcipo.com/admin/rest/investors/" +
      this.id +
      "/avatar/file";
  }
};
</script>


<style scoped lang="scss">
.investor-block {
  margin: 20px;
  display: flex;
  flex-flow: row;
  .image {
    width: 80px;
    height: 80px;
    background: #ccc;
    border-radius: 40px;
    border: 1px solid #ccc;
    background-size: 80px 80px;
  }
  .info {
    margin-left: 10px;
    flex: 1;
    .name-info {
      display: flex;
      .name {
        font-weight: bold;
        font-size: 18px;
      }
      .fund {
        margin-left: 10px;
        font-size: 13px;
        background: #e6e6e6;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3px;
				color: #666;
      }
    }
    .line {
      height: 1px;
      border-top: 1px solid #e6e6e6;
      margin-top: 10px;
    }
    .position {
      margin-top: 10px;
      font-size: 15px;
      color: #666;
    }
    .introduction {
      margin-top: 10px;
      font-size: 13px;
      color: #666;
    }
  }
}
</style>
