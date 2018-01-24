<template>
  <div class="bar">
    <div @click="toDtail">查看原文</div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Bar",
  props: ["id"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    toDtail() {
      this.$router.push({
        name: "informationdetail",
        params: { id: this.id, age: 22 }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.bar {
  margin-top: 10px;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
