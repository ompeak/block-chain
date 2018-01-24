<template>
<div class="information-detail">
 <DetailHeader title=交易平台详情 />
 <div class="content" >
   <div class="lineContent" style='padding-left: .7rem;'>
      <span class="walletTitle">{{item.name}}</span>
   </div>
  
  </div>
</div>

</template>

<script>
import * as axios from "axios";
import DetailHeader from "./components/DetailHeader";
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
        .get("http://operate.ptrcipo.com/wallet/?type=all&page=0&size=4" )
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
          .get("http://operate.ptrcipo.com/wallet/?type=a&page=0&size=4" )
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
          .get("http://operate.ptrcipo.com/wallet/?type=all&page=0&size=4" )
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
    .walletTitle{
      display: inline-block;
      height: 2rem;
      font-weight: bolder;
      vertical-align: middle;
          padding: .7rem;
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
  }
}
</style>
