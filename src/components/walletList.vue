<template>
<div class="information-detail">
 <DetailHeader title="钱包工具" type="Navigation" />
 <div class="content" v-for='item in data'>
   <div class="lineContent"  style='padding-left: .7rem;position:relative;'>
     <router-link  :to='"/walletDetail/"+item.id'>
          <span class="walletTitle"  style='padding: 0;margin-left:5px;'>
            <img v-bind:src='item.pic' alt="" class="topImg">
            </span>
      <span class="walletTitle">{{item.name}}</span>
      <span><img src="./../assets/rightArror.png" alt="" class='roarrimg'></span>
     </router-link>
   </div>
   <div class="lineContent lastMargin" style='line-height: 2rem;'>
     <span class="secondContent"><img src="./../assets/doMoney.png" alt="" class='leftImg'>支持<span class="blueColor">{{item.total}}种货币</span></span>
     <span class="secondContent"><img src="./../assets/language.png" alt="" class='leftImg'>
     <span v-for="lang in item.langageArr">
        <span>{{lang}}&nbsp;&nbsp;</span>
     </span>

     </span>
   </div>
   <div style='padding-left:1rem;'>
     <span class="lineContent lastMargin ico" v-for="sys in item.arr" style='width:30% ; display: inline-block;margin:0;border-bottom:0;height:2rem;'>
       <span style=''><img src="./../assets/support.png" alt="" class='leftImg'>{{sys}}</span>
     </span>
     <!-- <span class="ico"><img src="./../assets/support.png" alt="" class='leftImg'>网页版</span> -->
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
      //  console.log('all:',id)
      if(id =='total'){
        id = 'all'
      }
      axios
        .get(`http://www.ptrcipo.com/wallet/?type=${id}&page=0&size=20` )
        .then(function(res) {
          // console.log(res.data.data);
          self.data = res.data.data.list;
          try{
             for(let i = 0;i<res.data.data.list.length;i++){
                self.data[i].total = res.data.data.list[i].fiats.length
                 let  arr=res.data.data.list[i].system.split(",");
                  self.data[i].arr = arr
                  self.data[i].pic =`http://www.ptrcipo.com/admin/rest/exchanges/${self.data[i].id}/logo/file`
                 let  langageArr=res.data.data.list[i].language.split(",");
                  self.data[i].langageArr = langageArr
                 console.log(self.data[i] )
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
               height: 2rem;
                width: 2rem;
                margin-left:5px;
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
    .lastMargin{
      margin: 0 1rem;
      span:last-child{
        border-bottom: 0
      }
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
