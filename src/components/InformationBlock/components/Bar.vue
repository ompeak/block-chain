<template>
  <div class="bar">
    <router-link to="/informationdetail/1" >查看原文</router-link>
    <router-link :to="{ path: '/informationdetail', query: { id: id }}" >查看原文</router-link>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Bar",
  props:["id"],
  mounted(){
    // console.log(this.id)
  }
};
</script>

<style scoped lang="scss">
.bar {
  margin-top: 10px;
  height: 50px;
  border-top:1px solid #e6e6e6;
  display: flex;
  flex-direction: row ;
  justify-content:space-between;
  align-items: center;
}
</style>
