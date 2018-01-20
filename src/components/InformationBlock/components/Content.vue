<template>
  <div class="content" v-html="content" >
  </div>
</template>

<script>
export default {
  name: "Content",
  props: ['data'],
  data(){
    return {
      content:""
    }
  },
  mounted(){
    this.content = this.data.content;
  }
};
</script>

<style scoped lang="scss">
.contents {
  color:#666;
  line-height: 1rem;
}
</style>
