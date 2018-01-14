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
  color:#666;
  line-height: 1rem;
}
</style>
