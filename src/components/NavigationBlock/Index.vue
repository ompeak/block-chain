<template>
<div class="block">
  <div class="block-container">
    <TradeContent :content="data" />
  </div>
</div>

</template>

<script>
import Time from "./components/Time";
import TradeContent from "./components/Content";
import WalletContent from "./components/Content";

import Bar from "./components/Bar";
export default {
  name: "InformationBlock",
  props: ["content"],
  components: {
    Time,
    TradeContent,
    WalletContent,

    Bar
  },
  data() {
    return {
      data: "hells"
    };
  },
  created() {
    this.data =
      "sadfkjsadfjlsakdjflaskjasdlkjfasldkjflasdkjfa受打击就爱上看到垃圾撒看来大家烧录卡打飞机死的快辣椒粉撒款到即发立刻就卡就是大家空间空间空间空间空间了；就就空间卡拉胶空间；九块九立刻就   离开接口了解立刻就卡拉胶 iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii死了大姐夫空间啊水电费空间上打开放假阿斯达克放假啊水电费健康框架唉上课的发几块就看了九块九立刻就立刻就立刻就   接口了解 lsdfkjjsadf ksajdf ksdjfa  jk开始打减肥卡撒打飞机就aaaaaaaaaaaaaaaaaa";
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
 
  }
}
</style>
