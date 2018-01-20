<template>
  <div class="activity-block">
    <div class="image" :style="{backgroundImage: 'url(' + imgUrl + ')'}" >

    </div>
    <div class="info">

        <div class="name">
            {{data.name}}
        </div>
        <div class="area-info">
        <div class="time">
          <div class="icon-time">

          </div>
          <div class="time-info">
              {{data.start_time}}
          </div>

        </div>
        <div class="area">
            <div class="icon-area">

            </div>
            <div class="area-info">
{{data.area}}
            </div>

        </div>
        </div>

        <div class="type">
          {{data.fee}}
        </div>
    </div>

    <!-- <div class="list" >
      <div @click="toDetail(item.id)" class="block" v-for="item in data"  >{{item.name}}</div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "ActivityBlock",
  props: ["data"],
  components: {},

  data() {
    return {
      id: "",
      imgUrl: ""
    };
  },
  mounted() {
    console.log(this.data);

    this.id = this.data.id;
    this.imgUrl =
      "http://operate.ptrcipo.com/admin/rest/activities/" +
      this.id +
      "/banner/file";
  },
  methods: {
    toDetail(id) {
      this.$router.push({ name: "activitydetail", params: { id: id } });
    }
  }
};
</script>


<style scoped lang="scss">
.activity-block {
  display: flex;
  margin-bottom: 15px;
  .image {
    width: 140px;
    height: 100px;
    background: #ccc;
    border-radius: 4px;
    background-repeat: no-repeat;
    background-size: 140px 100px;
  }

  .info {
    flex: 1;
    margin-left: 10px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    .name {
      font-size: 15px;
      font-weight: bold;
    }
    .area-info {
      display: flex;
      align-items: center;

      .time {
        font-size: 12px;
        display: flex;
        .icon-time {
          width: 13px;
          height: 13px;
          background-image: url("../../assets/time.png");
          background-repeat: no-repeat;
          background-size: 13px 13px;
        }
        .time-info {
          margin-left: 5px;
        }
      }
      .area {
        margin-left: 20px;
        font-size: 13px;
        color: #666;
        display: flex;
        .icon-area {
          width: 13px;
          height: 13px;
          background-image: url("../../assets/area.png");
          background-repeat: no-repeat;
          background-size: 13px 13px;
        }
        .area-info {
          margin-left: 5px;
        }
      }
    }

    .type {
      font-size: 13px;
      color: #28c9d8;
    }
  }
}
</style>
