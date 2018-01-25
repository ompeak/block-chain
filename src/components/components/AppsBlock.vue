<template>
  <div class="apps-block">
    <div class="name">
      {{name | toUpper}}
    </div>
    <div class="list" >
      <div @click="toDetail(item.id)" class="block" v-for="item in data"  >{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppsBlock",
  props: ["name", "data"],
  components: {},

  data() {
    return {};
  },
  mounted() {
    // console.log(this.data);
  },
  methods: {
    toDetail(id) {
      this.$router.push({ name: "appsdetail", params: { id: id } });
    }
  },
  filters: {
    toUpper(val) { 
      return val.toUpperCase();
    }
  }
};
</script>


<style scoped lang="scss">
.apps-block {
  .name {
    font-size: 18px;
    font-weight: bold;
    color: #666;
  }
  .list {
    margin-top: 10px;
    display: flex;
    flex-flow: row;
    .block {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      margin-left: 10px;
      height: 30px;
      border: 1px solid #e6e6e6;
      background: #f8f8f8;
      font-size: 14px;
    }
  }
}
</style>
