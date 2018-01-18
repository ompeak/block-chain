<template>
  <div class="content">
    <br>
   <section class="contentDetail"> 
     <div class="flex"><span class="fontBlack"><img src="./../../../assets/tradePlat.png" alt="" class='leftImg'>交易平台</span><span class="allPadding totalCount">全部<img src="./../../../assets/rightArror.png" alt="" class='roarrimg'></span></div>
     <div class="detailFirst">
       <div class="flex"><span>现货交易平台</span><span class="totalCount">共20个<img src="./../../../assets/rightArror.png" alt="" class='roarrimg'></span></div>
        <div class="flex"><span>期货交易平台</span><span class="totalCount">共20个<img src="./../../../assets/rightArror.png" alt="" class='roarrimg'></span></div>
        <div class="flex"><span>OTC场外交易平台</span><span class="totalCount">共20个<img src="./../../../assets/rightArror.png" alt="" class='roarrimg'></span></div>
        <div class="flex"><span>大陆交易平台</span><span class="totalCount">共20个<img src="./../../../assets/rightArror.png" alt="" class='roarrimg'></span></div>
     </div>
   </section>
      <br>
     <section class="contentDetail"> 
     <div class="flex"><span class="fontBlack"><img src="./../../../assets/walletTool.png" alt="" class='leftImg '>钱包工具</span><span class="allPadding totalCount">全部<img src="./../../../assets/rightArror.png" alt="" class='roarrimg'></span></div>
     <div class="detailFirst">
      <div class="flex"><span>多币种钱包</span><span class="totalCount">共20个<img src="./../../../assets/rightArror.png" alt="" class='roarrimg'></span></div>
      <div class="flex"><span>官方单币种钱包</span><span class="totalCount">共20个<img src="./../../../assets/rightArror.png" alt="" class='roarrimg'></span></div>
     </div>
   </section>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: ['content']
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
    padding: 0 .7rem 0  1.5rem;

  }
  .flex{
    display: flex;
    justify-content: space-between;
    padding: .7rem 0;
    border-bottom: 1px solid #e6e6e6;
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
