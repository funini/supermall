<template>
<div id="detail">
  <DetailNavBar class="detaileNavBar" @titleClick="titleClick"/>
  <Scroll class="content" ref="scroll">
    <DetailSwiper :top-images="topImages"/>
    <DetaileBaseInfo :goods="goods"/>
    <DetailShopInfo :shop="shopInfo"/>
    <DetailGoodsInfo :detailInfo="detailInfo"/> 
    <DetailParamInfo :param-info="itemParams"/> 
    <DetailCommentInfo :comment-info="commentInfo"/>
    <!-- <DetailRecommendInfo :recommend-list="recommendList"/> -->
    <GoodsList :goods="recommendList" />
  </Scroll>
</div>

</template>

<script> 
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetaileBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
// import DetailRecommendInfo from './childComps/DetailRecommendInfo'

import GoodsList from 'components/content/goods/GoodsList'
import {getdetail, Goods, getRecommend } from 'network/detail'
// import {itemListenerMixin} from 'common/mixin'

import Scroll from 'components/common/scroll/Scroll'
  export default {
    data(){
      return{
        iid:null,
        topImages:[],
        goods:{},
        shopInfo:{},
        detailInfo:{},
        itemParams:{},
        commentInfo:{},
        recommendList:[],
      }
    },
    // mixins:[itemListenerMixin],
    components:{
      DetailNavBar,
      DetailSwiper,
      DetaileBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      // DetailRecommendInfo,
      GoodsList,
      Scroll,
      themeTopYs:[0,1000,2000,3000]
    },   
    created() {

      this.iid = this.$route.params.iid;
      getdetail(this.iid).then(res => {
        const data = res.data.result
        //轮播图
        this.topImages = data.itemInfo.topImages
        //商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //店铺信息
        this.shopInfo = data.shopInfo
        //商品详情
        this.detailInfo = data.detailInfo
        //参数信息
        this.itemParams = data.itemParams
        //评论信息
        // console.log(data)
        if(data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }        
        //推荐信息
      }), 
      
      getRecommend().then(res => {
        this.recommendList = res.data.data.list        
      });
    },
    methods:{
      titleClick(index) {
        // debugger
        // console.log(index)
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],100)
      }
    }
  }
</script>

<style scoped>
#detail{
  height:100vh;
  background-color: #fff;
  position: relative;
  z-index: 9;
}
.detaileNavBar{
  border: 1px solid red;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content{
    /* position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0; */
    height: calc(100%-44px);
}
</style>
