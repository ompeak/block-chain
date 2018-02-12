<template>
<div class="information-detail">
 <DetailHeader title="钱包工具详情"   type="Navigation"/>
 <div class="content" >
   <div class="lineContent" >
      <div class="contentImg contentBase"><img v-bind:src=pic   alt="" class="logoImg"></div>
      <div class="contentBase contentTitle">{{data.name}}</div>
      <div class="contentBase contentAttention">请在电脑浏览器内输入以下地址进行访问：</div>
      <div class="contentBase contentUrl">{{data.link}}</div>
      <div class="contentBase contentOr">或者</div>
      <button class="contentBase contentBtn" @click='goSearch()'>直接手机访问</button>
      <br>
   </div>

  </div>
</div>

</template>

<script>
import * as axios from "axios";
import DetailHeader from "./components/DetailHeader";
import {baseUrl} from "./../js/env";
export default {
  name: "InformationDetail",
  components: {
    DetailHeader
  },
  data() {
    return {
      data: {},
      pic: '',
    };
  },
  mounted() {
   let self = this;
    let id =this.$route.params.id;
      this.allWallet();

  },
  methods:{
    allWallet(){
      let self = this;
      let id = this.$route.params.id;
      axios
        .get(`http://www.ptrcipo.com/wallets/${id}` )
        .then(function(res) {
           console.log('res.data:',res.data);
          self.data = res.data;
          self.pic =`http://www.ptrcipo.com/admin/rest/wallets/${id}/logo/file`
        })
        .catch(function(error) {
          console.log(error);
        });

      },
    goSearch(){
      location.assign(this.data.link)
    }

  }
};
</script>

<style scoped lang="scss">
.information-detail {
  .logoImg{
    width: 3rem;
    height: 3rem;
    margin: 1rem;
  }
  .content {
    // padding: 1rem;
    background: #fff;
    width: 90%;
    margin: 5%;
    border-radius: .6rem;
    .contentBase{
      display: flex;
      justify-content: center;
    }
    .contentTitle{
      font-weight: bold;
      padding-bottom: 1rem;
      font-size: 1.2rem;
    }
    .contentAttention{
      font-size: .9rem;
      color: #666;
      padding-bottom: .8rem;
    }
    .contentUrl{
        height: 4rem;
        display: flex;
        /* vertical-align: middle; */
        background: #f5f6f7;
        line-height: 4rem;
        border: 1px solid #e6e6e6;
        margin: .1rem 1rem 1rem;
        font-size: 1.2rem;
        text-align: center;
        border-radius: .3rem;
    }
    .contentOr{
         color: #666;
         padding: 20px 0;
    }
    .contentBtn{
        width: 80%;
        background: #28c9d8;
        margin: 0 10%;
        line-height: 3;
        color: #fff;
        border-radius: .3rem;
        font-size: 18px;
        margin-bottom: 30px;
        border: 0px;
    }
  }

}
</style>
