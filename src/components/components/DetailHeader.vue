<template>
  <div class="dtail-header">
    <div class="left" @click="$router.go(-1)">
      返回
    </div>
    <div class="center">
      {{title}}
    </div>
    <div class="right">
      分享
    </div>
  </div>
</template>

<script>
export default {
  name: "DtailHeader",
  props: ["title"]
};
</script>


<style lang="scss" scoped>
.dtail-header {
  height: 2.5rem;
  background: #28c9d8;
  color: #fff;
  font-size: 1rem;

  padding: 0 1rem;

  display: flex;
  justify-content: space-around;
  align-items: center;



  .left{

  }
  .center{
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .right{

  }
}
</style>
