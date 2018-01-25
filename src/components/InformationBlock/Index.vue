<template>
<div class="block">
  <Time :time="time"  />
  <div class="block-container" v-for="item in data">
    <div class="line-container">
			<div class="dot-e"></div>
     <div class="dot"></div>
      <div class="line">
      </div>
    </div>
    <div class="content-container">
      <div class="dtime">{{time | formatDate}}</div>
      <div class="content">
        <Content :data='item' />
        <Bar :id='item.id' />
      </div>
    </div>

  </div>
</div>

</template>

<script>
import Time from "./components/Time";
import Content from "./components/Content";
import { formatDate } from "../../js/data.js";
import Bar from "./components/Bar";
export default {
  name: "InformationBlock",
  props: ["data"],
  components: {
    Time,
    Content,
    Bar
  },
  data() {
    return {
      time: 1469281964000
    };
  },
  mounted() {
    // console.log(JSON.stringify(this.data));
    // console.log(this.data.length)
    // console.log(JSON.stringify(this.data[0]))
    this.time = this.data[0].createdAt;
    // console.log(this.time)
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "hh:mm");
    }
  }
};
</script>

<style scoped lang="scss">
.block {
  .time {
    margin-left: 10px;
  }
  .block-container {
    display: flex;

    .line-container {
      width: 5px;
      display: flex;
      flex-flow: column;

      .dot-e {
        height: 5px;
        width: 6px;
        border-left: 1px solid #e6e6e6;
        margin-left: 4px;
      }
      .dot {
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background: #28c9d8;
      }

      .line {
        flex: 1;
        width: 6px;
        border-left: 1px solid #e6e6e6;
        margin-left: 4px;
      }
    }

    .dtime {
      margin-left: 9px;
      margin-bottom: 9px;
    }

    .content-container {
      flex: 1;
      margin-left: 10px;

      margin-bottom: 20px;
      .content {
        color: #666;
        background: #e6e6e6;
        border-radius: 10px;
        word-wrap: break-word;

        padding: 10px;

        display: flex;
        flex-flow: column;
        justify-content: space-between;
      }
    }
  }
}
</style>
