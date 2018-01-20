<template>
  <div class="time">
    <div>{{time | formatDate}}</div>
  </div>
</template>

<script>
import { formatDate } from "../../../js/data.js";

export default {
  name: "Time",
  props: ["time"],
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd ");
    }
  }
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
