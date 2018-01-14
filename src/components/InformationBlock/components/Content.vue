<template>
  <div class="content">
    {{content}}
  </div>
</template>

<script>
export default {
  name: "Content",
  props: ['content']
};
</script>

<style scoped lang="scss">
.contents {
  font-size: 12px;
  color:#666;
  line-height: 10px;
}
</style>
