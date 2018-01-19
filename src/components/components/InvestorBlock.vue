<template>
  <div class="investor-block">


  </div>
</template>

<script>
export default {
  name: "InvestorBlock",
  props:["data"],
  components: {

  },

  data() {
    return {

    }
  },
  mounted(){
     console.log(this.data)
  }
};
</script>


<style scoped>
.investor-block {
}
</style>
