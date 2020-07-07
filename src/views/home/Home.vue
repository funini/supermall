<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
    <scroll class="scroll" ref="scroll">
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" />
      <goods-list :goods="showlist" />
    </scroll>  

    <back-top @click.native = "backClick"/> 
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

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,
    Scroll,
    BackTop
  },

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
  activated: function() {},
  deactivated: function() {},
  updated() {},
  methods: {
    /**
     * 事件监听相关的方法
     */
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
      console.log("back top");
      this.$refs.scroll.scroll.scrollTo(0,0,500)
      // 调用组件中的scrollTo方法（但是现在就是不对）
      // this.$refs.scroll.scrollTo(0,0)
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
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.data.list);
        this.page += 1;
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);

  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  background: #fff;
  z-index: 999;
}

/* .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  } */

/* .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  } */

/* .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
  } */

  .scroll{
    height:calc(100% - 93px);
    /* height: 100%; */
    overflow: hidden;
    margin-top:44px;
  }
</style>
