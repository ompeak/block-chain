<template>
<div class="information-detail">
 <DetailHeader title="交易平台" type="Navigation" />
 <div class="content" v-for='item in data'>
   <div class="lineContent" style='padding-left: .7rem;position:relative;' @click='gotoDetail(item)'>
     <router-link  :to='"/exchangeDetail/"+item.id'>
     <span class="walletTitle" style='padding: 0;height: 2rem;width: 2rem;margin-left: 10px;'><img v-bind:src='item.pic' alt="" class="topImg"></span>
      <span class="walletTitle">{{item.name}} </span>
      <span><img src="./../assets/rightArror.png" alt="" class='roarrimg'></span>
     </router-link>

   </div>
   <div class="lineContent lastMarginFirst">
     <span class="secondContent"><img src="./../assets/doMoney.png" alt="" class='leftImg'>
        支持<span class="blueColor">{{item.total }}种货币</span>
     </span>
     <span class="secondContent"><img src="./../assets/language.png" alt="" class='leftImg'>
        <!-- <span>
            <span>{{item.lang}}&nbsp;&nbsp; </span>
        </span> -->
        <span v-for="lang in item.langageArr">
            <span>{{lang}}&nbsp;&nbsp;</span>
        </span>
     </span>
   </div>
   <div class=" lastMargin everyTop" >
      <p class="ico secondContent colorblue" v-if="item.charge"><img src="./../assets/outerForiger.png" alt="" class='leftImg'>无需翻墙</p>
      <p class="ico secondContent colorDis" v-if="!item.charge"><img src="./../assets/outerDisable.png" alt="" class='leftImg'>无需翻墙</p>
   </div>
    <div class=" lastMargin everyTop" >
     <p class="ico secondContent colorblue"  v-if="item.type"><img src="./../assets/rmbOk.png" alt="" class='leftImg'>人民币交易</p>
     <p class="ico secondContent colorDis"  v-if="!item.type"><img src="./../assets/rmbDisable.png" alt="" class='leftImg'>人民币交易</p>

   </div>
    <div class=" lastMargin everyTop" >
     <p class="ico secondContent colorblue" v-if="item.gfw"><img src="./../assets/idcard.png" alt="" class='leftImg'>国内手机/身份证注册</p>
     <p class="ico secondContent colorDis" v-if="!item.gfw"><img src="./../assets/idcardDisable.png" alt="" class='leftImg'>国内手机/身份证注册</p>

   </div>
    <div class=" lastMargin everyTop lastContent"  >
     <p class="ico secondContent colorblue" v-if="item.yuan"><img src="./../assets/bankcard.png" alt="" class='leftImg'>国内银行卡充值提现</p>
     <p class="ico secondContent colorDis" v-if="!item.yuan"><img src="./../assets/bankDisable.png" alt="" class='leftImg'>国内银行卡充值提现</p>
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
      data: [],
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
      // console.log('all:',all)
      if (id == 'total') {
        id = 'all'
      }
      axios
        .get(`http://www.ptrcipo.com/exchange/?type=${id}&page=0&size=20`)
        .then(function (res) {
          // console.log(res.data.data.list);
          self.data = res.data.data.list;
         
            for (let i = 0; i < res.data.data.list.length; i++) {
            try {
              self.data[i].total = self.data[i].fiats.length
              // if(!self.data[i].total){}
              // console.log('self.data[i]', self.data[i] )
              //  let  arr=res.data.data.list[i].system.split(",");
              // self.data[i].arr = arr
              self.data[i].pic =`http://www.ptrcipo.com/admin/rest/exchanges/${self.data[i].id}/logo/file`
              let langageArr =res.data.data.list[i].lang.split(",");
              self.data[i].langageArr = langageArr
              console.log('a:', self.data[i])
            } catch (e) {

          }
            }
         
        })
        .catch(function (error) {
          console.log(error);
        });

    },
    gotoDetail(){

    }
  }
};
</script>

<style scoped lang="scss">
.information-detail {
  .content {
    color: #666;
    // padding: 1rem;
    background: #fff;
    width: 90%;
    margin: 5%;
    border-radius: .6rem;
    .walletTitle{
      display: inline-block;
      height: 2rem;
      font-weight: bolder;
      vertical-align: middle;
        padding: .5rem;
        font-size: 1.2rem;
            // margin-left: .5rem;
          .topImg{
               height: 2rem;
                width: 2rem;
          }
    }
    .walletTitleNew{
       display: inline-block;
      height: 2rem;
      font-weight: bolder;
      vertical-align: middle;
      padding: 0;
      height: 2rem;
      width: 2rem;
    }
  .leftImg{
        display: inline-block;
        vertical-align: middle;
        height: 1.2rem;
        padding: 0 .4rem;
      }
    .blueColor{
      color: #06f9fd
    }
    .lineContent{
      border-bottom: 1px solid #efefef;
      display: flex;
      height: 3rem;
      padding-top: .7rem;
      .ico{
        width: 30%;
      }
      .secondContent{
        width: 50%;
      }
    }
    .everyTop{
          padding-top: 10px;
    }
    .colorblue{
          color: #28c9d8;
    }
    .colorDis{
      color : #666
    }
    .lastMargin{
      margin: 0 1rem;
      span:last-child{
        border-bottom: 0
      }
    }
    .lastMarginFirst{
      margin: 0 1rem;
      line-height: 3;
    }
    .ico{
      font-size: .8rem;
    }
    .lastContent{
      padding-bottom: 10px;
    }
    .roarrimg{
      display: inline-block;
      vertical-align: middle;
      height: .8rem;
      padding: 0 .2rem;
      margin-left: .1rem;
      position: absolute;
       right: 2rem;
    top: 1.7rem;
  }
  }
}
</style>
