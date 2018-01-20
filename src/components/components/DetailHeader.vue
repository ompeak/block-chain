<template>
  <div class="dtail-header">
    <div class="left" @click="$router.go(-1)">
      <div class="back">

      </div>
    </div>
    <div class="center">
      {{title}}
    </div>
    <div class="right">

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
  font-weight: bold;

  padding: 0 1rem;

  display: flex;
  justify-content: space-around;
  align-items: center;



  .left{

    .back{
      width: 10px;
      height: 18px;
      background-image: url("../../assets/back.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
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
