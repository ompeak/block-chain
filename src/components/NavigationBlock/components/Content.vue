<template>
  <div class="content">
    <br>
   <section class="contentDetail"> 
     <div class="flex"><span class="fontBlack"><img src="./../../../assets/tradePlat.png" alt="" class='leftImg'>交易平台</span>
     <router-link to="/exchangeList/total"><span class="allPadding totalCount">全部<img src="./../../../assets/rightArror.png" alt="" class='roarrimg'></span></router-link>
     </div>
     <div class="detailFirst" v-for="item in tableDataTrade">
       <div class="flex borderBot"><span>{{item.name}}</span>
       <router-link  :to='"/exchangeList/"+item.name'><span class="totalCount">共{{item.total}}个<img src="./../../../assets/rightArror.png" alt="" class='roarrimg'></span></router-link>
       </div>
    
     </div>
   </section>
      <br>
     <section class="contentDetail"> 
     <div class="flex"><span class="fontBlack"><img src="./../../../assets/walletTool.png" alt="" class='leftImg'>钱包工具</span>
      <router-link to="/WalletList/total"><span class="allPadding totalCount">全部<img src="./../../../assets/rightArror.png" alt="" class='roarrimg'></span></router-link>
     </div>
     <div class="detailFirst" v-for="item in tableData">
        <div class="flex borderBot"><span>{{item.name}}</span>
        <router-link :to='"/WalletList/"+item.name'><span class="totalCount">共{{item.total}}个<img src="./../../../assets/rightArror.png" alt="" class='roarrimg'></span></router-link>
        </div>
     </div>
   </section>
  </div>
</template>

<script>
import * as axios from "axios";
export default {
  name: "Content",
  props: ['content'],
   data() {
    return {
      manyWallet: 0,
      singleWallet:0,
      manyExchange : 0,
      singleExchange : 0,
      tableData : [],
      tableDataTrade : [],
    };
  },
  mounted() {
    let self = this;
    let id = this.$route.params.id;
    axios
      .get("http://www.ptrcipo.com/wallet/group/")
      .then(function(res) {
        console.log('res:',res.data.data.list)
        self.tableData = res.data.data.list
        // self.manyWallet = res.data.data.a;
        // self.singleWallet = res.data.data.单币种;
      })
      .catch(function(error) {
        console.log(error);
      });

      axios
      .get("http://www.ptrcipo.com/exchange/group/")
      .then(function(res) {
        self.tableDataTrade = res.data.data.list
        console.log('self.tableDataTrade:',self.tableDataTrade)
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped lang="scss">
.contents {
  color:#888;
  line-height: 1rem;
  background: #f5f6f7;
}
.contentDetail{
  background: #fff;
   .fontBlack{
    font-weight: bolder;
    color: #000;
    .leftImg{
      display: inline-block;
        vertical-align: middle;
        height: 1.2rem;
        padding: 0 .4rem;
    }
    
  }
  .detailFirst{
    padding: 0 .7rem 0  1.9rem;

  }
  .flex{
    display: flex;
    justify-content: space-between;
    padding: .7rem 0;
    border-bottom: 1px solid #e6e6e6;
  }
  .borderBot{
        border-bottom: 1px solid #efefef !important;
  }
  .detailFirst div:last-child{
    border-bottom:0
  }
}
.roarrimg{
      display: inline-block;
      vertical-align: middle;
      height: .8rem;
      padding: 0 .2rem;
      margin-left: .1rem;
  }
 .allPadding{
      padding-right: .7rem;
    }
    .totalCount{
          color: #666;
    }
</style>
