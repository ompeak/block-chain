<template>
  <div class="time">
    <div>{{time}}</div>
  </div>
</template>

<script>
export default {
  name: "Time",
  props: ["time"]
};
</script>

<style scoped lang="scss">
.time {
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
