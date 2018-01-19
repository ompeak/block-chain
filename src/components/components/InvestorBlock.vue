<template>
  <div class="investor-block">
<div class="image">

</div>

<div class="info">
  <div class="name-info">
    <div class="name">
      {{data.name}}
    </div>
    <div class="fund">
      {{data.fund}}
    </div>
  </div>
  <div class="line">

  </div>
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
    return {};
  },
  mounted() {
    console.log(this.data);
  }
};
</script>


<style scoped lang="scss">
.investor-block {
  margin: 10px;
  display: flex;
  flex-flow: row;
  .image {
    width: 80px;
    height: 80px;
    background: #ccc;
    border-radius: 40px;
  }
  .info {
    margin-left: 10px;
    flex: 1;
    .name-info {
      display: flex;
      .name{
        font-weight: bold;
        font-size: 18px;
      }
      .fund{
        margin-left:10px;
      }
    }
    .line{
      height: 1px;
      border-top:1px solid #e6e6e6;
      margin-top:10px;
    }
    .position{

    }
    .introduction{
margin-top:10px;
    }
  }
}
</style>
