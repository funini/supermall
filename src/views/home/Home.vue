<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
    <tab-control class="tab-control" 
                  :titles="['流行','新款','精选']"
                  @tabClick="tabClick"
                  ref="tabControl"
                  v-show="isTabFixed"
                   ></tab-control>
    <scroll class="scroll" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore"
            >
      <div>
              <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control class="tab-control" 
                  :titles="['流行','新款','精选']"
                  @tabClick="tabClick"
                  ref="tabControl"
                   />
      <goods-list :goods="showlist" />
      </div>

    </scroll>  

    <back-top @click.native = "backClick" v-show="isShowBackTop"/> 
  </div>
</template>










<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll"
import BackTop from "components/content/backtop/BackTop"

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home";
// import {debounce} from "../../utils"
// import {itemListenerMixin} from "../../common/mixin"
export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,
    // Scroll,
    BackTop
  },
  // mixins:[itemListenerMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currenttab: 'pop',
      isShowBackTop: false,
      tabOffsetTop:0,
      isTabFixed:false
    };
  },
  computed: {
    showlist() {
      return this.goods[this.currenttab].list
    }
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

  },
  mounted(){
    //监听图片加载完成事件
      // 防抖函数
    
  },

  activated: function() {},
  deactivated: function() {},
  updated() {},
  methods: {
    /**
     * 事件监听相关的方法
     */
    //防抖函数
    debounce(func, delay) {
      let timer = null
      return function (...args){
        if(timer) clearTimeout(timer) 
        timer = setTimeout(() => {
          func.apply(this.args)
        }, delay);
      }
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currenttab = "pop";
          break
        case 1:
          this.currenttab = "new";
          break
        case 2:
          this.currenttab = "sell";
          break
      }
    },
    backClick() {
      // console.log("back top");
      // this.$refs.scroll.scroll.scrollTo(0,0,500)
      // 调用组件中的scrollTo方法
      this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position) {
      //backtop是否显示
      this.isShowBackTop = -position.y > 1000
      //tabControl是否吸顶（是否有position:fixed）
      this.this.tabOffsetTop = -position.y >  this.tabOffsetTop
      
    },
    loadMore() {     
      this.getHomeGoods(this.currenttab);
    },

    swiperImgLoad() {      
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      console.log(this.offsetTop)
    },
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {  
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
        // this.$refs.scroll.scroll.refrech();
      });
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/base.css";
#home {
  /* padding-top: 44px; */
  height:100vh
}

.nav-bar { 
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  z-index:9;
}
.tab-control { 
  background: #fff;
  z-index: 9;
}

.scroll {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }



/* .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
  } */

  /* .scroll{
    height:calc(100% - 93px);    
    overflow: hidden;
    margin-top:44px;
  } */
</style>
