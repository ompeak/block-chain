<template>
  <div class="bar">
    <div @click="toBFun">查看详情</div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Bar",
  props:["id"],
  data(){
    return {

    }
  },
  mounted(){
  },
  methods: {
    toBFun(){
    this.$router.push({name:'informationdetail',params:{id:this.id,age:22}});
   }
  }
};
</script>

<style scoped lang="scss">
.bar {
  margin-top: 10px;
  height: 50px;
  border-top: 1px solid #e6e6e6;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
