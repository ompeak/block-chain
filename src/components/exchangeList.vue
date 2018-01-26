<template>
<div class="information-detail">
 <DetailHeader title=交易平台详情 />
 <div class="content" >
   <div class="lineContent" style='padding-left: .7rem;'>
      <div class="contentImg contentBase"><img src="./../assets/huobilogo.png" alt=""></div>
      <div class="contentBase">Bittexwsf（B网）</div>
      <div class="contentBase">http://www.ndfsdif.com</div>
      <div class="contentBase">或者</div>
      <div class="contentBase">直接手机访问</div>
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
    if(id == 1){
      this.allWallet();
    }else if(id == 2){
      this.singleWallet();
    }else{
      this.muchWallet();
    }
  },
  methods:{
    allWallet(){
      let self = this;
      let id = this.$route.params.id;
      axios
        .get("http://www.ptrcipo.com/exchange/?type=all&page=0&size=4" )
        .then(function(res) {
          // console.log(res.data.data);
          self.data = res.data.data.list;
          try{
             for(let i = 0;i<res.data.data.list.length;i++){
                self.data[i].total = res.data.data.list[i].fiats.length
                 let  arr=res.data.data.list[i].system.split(",");
                  self.data[i].arr = arr
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
      singleWallet(){
        let self = this;
        let id = this.$route.params.id;
        axios
          .get("http://www.ptrcipo.com/exchange/?type=a&page=0&size=4" )
          .then(function(res) {
         console.log(res.data.data);
            self.data = res.data.data.list;
            try{
             for(let i = 0;i<res.data.data.list.length;i++){
                self.data[i].total = res.data.data.list[i].fiats.length
                
                let  arr=res.data.data.list[i].system.split(",");
                self.data[i].arr = arr
                let  langageArr=res.data.data.list[i].language.split(",");
                  self.data[i].langageArr = langageArr
                console.log(self.data[i] )
             }
            let  arr=theString.split("|");
          }catch(e){

          }
           })
          .catch(function(error) {
            console.log(error);
          });
      },
      muchWallet(){
        let self = this;
        let id = this.$route.params.id;
        axios
          .get("http://www.ptrcipo.com/exchange/?type=all&page=0&size=4" )
          .then(function(res) {
            
             self.data = res.data.data.list;
              try{
             for(let i = 0;i<res.data.data.list.length;i++){
                self.data[i].total = res.data.data.list[i].fiats.length
                console.log(self.data[i].total )
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
    .contentBase{
      display: flex;
      justify-content: center;
    }
  }

}
</style>
