<template>
<div class="information-detail">
 <DetailHeader title="交易平台" type="Navigation" />
 <div class="content" v-for='item in data'>
   <div class="lineContent" style='padding-left: .7rem;'>
      <span class="walletTitle">{{item.name}} <img v-bind:src="item.logo" alt="" class="topImg"></span>
   </div>
   <div class="lineContent lastMarginFirst">
     <span class="secondContent"><img src="./../assets/doMoney.png" alt="" class='leftImg'>
        支持<span class="blueColor">{{item.total || 0}}种货币</span>
     </span>
     <span class="secondContent"><img src="./../assets/language.png" alt="" class='leftImg'>
        <span>
            <span>{{item.lang}}&nbsp;&nbsp; </span>
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
     <p class="ico secondContent colorblue" v-if="item.yuan"><img src="./../assets/bankcard.png" alt="" class='leftImg'>国内银行卡充值体现</p>
     <p class="ico secondContent colorDis" v-if="!item.yuan"><img src="./../assets/bankDisable.png" alt="" class='leftImg'>国内银行卡充值体现</p>
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
      if(id =='total'){
        id = 'all'
      }
      axios
        .get(`http://www.ptrcipo.com/exchange/?type=${id}&page=0&size=4` )
        .then(function(res) {
          // console.log(res.data.data.list);
          self.data = res.data.data.list;
          try{
             for(let i = 0;i<res.data.data.list.length;i++){
                self.data[i].total = self.data[i].fiats.length
                // if(!self.data[i].total){}
                console.log('self.data[i].total:',self.data[i].total)
                //  let  arr=res.data.data.list[i].system.split(",");
                  self.data[i].arr = arr
                 let  langageArr = []
                 langageArr = self.data[i].lang.split(",");
                  self.data[i].langageArr = langageArr
                 console.log('a:',self.data[i] )
             }
          }catch(e){

          }
        })
        .catch(function(error) {
          console.log(error);
        });
      },
      
  }
};
</script>

<style scoped lang="scss">
.information-detail {
  .content {
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
        padding: .7rem;
        font-size: 1.2rem;
          .topImg{
                height: 1rem;
          }
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
  }
}
</style>
