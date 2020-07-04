<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物车</div></nav-bar>
    <home-swiper :banners = "banners"/>
    <recommend-view :recommends = "recommends"/>
    <feature-view/>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"/> 
    <goods-list /> 
   <ul>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
   </ul>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import {getHomeMultidata, getHomeGoods} from 'network/home'
  
  export default {
		name: "Home",
    components:{
      NavBar,
      TabControl,      
      HomeSwiper,
      RecommendView,
      FeatureView,
      GoodsList
    },

    data() {
		  return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        }
      }
    },
    computed: {

    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoods('pop');
    },
    activated: function () {

    },
    deactivated: function () {

    },
    updated() {

    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(res => {         
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        })
      },
      getHomeGoods(type) {
        let page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.page += 1;
        })
      }
    }
	}
</script>

<style scoped>
  @import "../../assets/css/base.css";
  #home {
    /*position: relative;*/
    /* height: 100vh; */
    /* position:fixed;
    top:0;
    left:0;
    right: 0; */
    padding-top: 44px;
  }

  .nav-bar {
    position:fixed;
    top:0;
    left:0;
    right: 0;
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top:44px;
    background:#fff;
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
</style>
