<template>
  <div class="content-a" v-html="content" >
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
.content-a { 
}
</style>
