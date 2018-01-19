<template>
<div class="block">
  <Time :time="time"  />
  <div class="block-container" v-for="item in data">
    <Content :data='item' />
    <Bar :id='item.id' />
  </div>
</div>

</template>

<script>
import Time from "./components/Time";
import Content from "./components/Content";

import Bar from "./components/Bar";
export default {
  name: "InformationBlock",
  props: ["data"],
  components: {
    Time,
    Content,
    Bar
  },
  data(){
    return{
      time:""
    }
  },
  mounted() {
    // console.log(JSON.stringify(this.data));
    // console.log(this.data.length)
    // console.log(JSON.stringify(this.data[0]))
    this.time = this.data[0].updatedAt;
    // console.log(this.time)
  }
};
</script>

<style scoped lang="scss">
.block {
  .time {
    margin-left: 10px;
  }
  .block-container {
    color: #333;
    background: #f8f8f8;
    border-radius: 10px;
    word-wrap: break-word;
    min-height: 200px;
    margin: 10px;
    padding: 10px;

    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }
}
</style>
