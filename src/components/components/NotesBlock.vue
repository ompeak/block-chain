<template>
  <div class="notes-block" @click="toDetail(data.id)">
      <div class="title" >
        <div  class="block"  >{{data.title}}</div>
      </div>
      <div class="icon">

      </div>
  </div>
</template>

<script>
export default {
  name: "NotesBlock",
  props: ["title", "data"],
  components: {},

  data() {
    return {};
  },
  mounted() {
    console.log(this.data);
  },
  methods: {
    toDetail(id) {
      this.$router.push({ name: "notesdetail", params: { id: id } });
    }
  }
};
</script>


<style lang="scss" scoped>
.notes-block {
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid #e6e6e6;
  color: #333;

  .icon {
    margin-right: 10px;
    width: 10px;
    height: 18px;
    background-image: url("../../assets/arrowRight.png");
    background-repeat: no-repeat;
    background-size: 10px 18px;
  }
}
</style>
