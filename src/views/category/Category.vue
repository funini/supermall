<template>
<div class="cate">
  <DetailNavBar class="detaileNavBar"  @titleClick="titleClick" ref="nav"/>
  <Scroll class="content" ref="aaa" :probeType="3"  @scroll=contentScroll>
    <div>
      <ul class="">
        <li>商品1</li>
        <li>商品2</li>
        <li>商品3</li>
        <li>商品4</li>
        <li>商品5</li>
        <li>商品6</li>
        <li>商品7</li>
        <li>商品8</li>
        <li>商品9</li>
        <li>商品10</li>
        <li>商品11</li>
        <li>商品12</li>
        <li>商品13</li>
        <li>商品14</li>
        <li>商品15</li>
        <li>商品16</li>
        <li>商品17</li>
        <li>商品18</li>
        <li>商品19</li>
        <li>商品20</li>
        <li>商品21</li>
        <li>商品22</li>
        <li>商品23</li>
        <li>商品24</li>
        <li>商品25</li>
        <li>商品26</li>
        <li>商品27</li>
        <li>商品28</li>
        <li>商品29</li>
        <li>商品30</li>
        <li>商品31</li>
        <li>商品32</li>
        <li>商品33</li>
        <li>商品34</li>
        <li>商品35</li>
        <li>商品36</li>
        <li>商品37</li>
        <li>商品38</li>
        <li>商品39</li>
        <li>商品40</li>
        <li>商品41</li>
        <li>商品42</li>
        <li>商品43</li>
        <li>商品44</li>
        <li>商品45</li>
        <li>商品46</li>
        <li>商品47</li>
        <li>商品48</li>
        <li>商品49</li>
        <li>商品50</li>
      </ul>
      <span ref="cs">参数参数参数参数参数参数参数参数参数参数参数参数参数参数参数参数参数参数参数参数</span>
      <ul class="">
        <li>参数1</li>
        <li>参数2</li>
        <li>参数3</li>
        <li>参数4</li>
        <li>参数5</li>
        <li>参数6</li>
        <li>参数7</li>
        <li>参数8</li>
        <li>参数9</li>
        <li>参数10</li>
        <li>参数11</li>
        <li>参数12</li>
        <li>参数13</li>
        <li>参数14</li>
        <li>参数15</li>
        <li>参数16</li>
        <li>参数17</li>
        <li>参数18</li>
        <li>参数19</li>
        <li>参数20</li>
        <li>参数21</li>
        <li>参数22</li>
        <li>参数23</li>
        <li>参数24</li>
        <li>参数25</li>
        <li>参数26</li>
        <li>参数27</li>
        <li>参数28</li>
        <li>参数29</li>
        <li>参数30</li>
        <li>参数31</li>
        <li>参数32</li>
        <li>参数33</li>
        <li>参数34</li>
        <li>参数35</li>
        <li>参数36</li>
        <li>参数37</li>
        <li>参数38</li>
        <li>参数39</li>
        <li>参数40</li>
        <li>参数41</li>
        <li>参数42</li>
        <li>参数43</li>
        <li>参数44</li>
        <li>参数45</li>
        <li>参数46</li>
        <li>参数47</li>
        <li>参数48</li>
        <li>参数49</li>
        <li>参数50</li>
      </ul> 
      
      <span ref="pj">评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价</span>
      <ul>
        <li>评价1</li>
        <li>评价2</li>
        <li>评价3</li>
        <li>评价4</li>
        <li>评价5</li>
        <li>评价6</li>
        <li>评价7</li>
        <li>评价8</li>
        <li>评价9</li>
        <li>评价10</li>
        <li>评价11</li>
        <li>评价12</li>
        <li>评价13</li>
        <li>评价14</li>
        <li>评价15</li>
        <li>评价16</li>
        <li>评价17</li>
        <li>评价18</li>
        <li>评价19</li>
        <li>评价20</li>
        <li>评价21</li>
        <li>评价22</li>
        <li>评价23</li>
        <li>评价24</li>
        <li>评价25</li>
        <li>评价26</li>
        <li>评价27</li>
        <li>评价28</li>
        <li>评价29</li>
        <li>评价30</li>
        <li>评价31</li>
        <li>评价32</li>
        <li>评价33</li>
        <li>评价34</li>
        <li>评价35</li>
        <li>评价36</li>
        <li>评价37</li>
        <li>评价38</li>
        <li>评价39</li>
        <li>评价40</li>
        <li>评价41</li>
        <li>评价42</li>
        <li>评价43</li>
        <li>评价44</li>
        <li>评价45</li>
        <li>评价46</li>
        <li>评价47</li>
        <li>评价48</li>
        <li>评价49</li>
        <li>评价50</li>
      </ul>
      <span ref="tj">推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐</span>
      <ul>
        <li>推荐1</li>
        <li>推荐2</li>
        <li>推荐3</li>
        <li>推荐4</li>
        <li>推荐5</li>
        <li>推荐6</li>
        <li>推荐7</li>
        <li>推荐8</li>
        <li>推荐9</li>
        <li>推荐10</li>
        <li>推荐11</li>
        <li>推荐12</li>
        <li>推荐13</li>
        <li>推荐14</li>
        <li>推荐15</li>
        <li>推荐16</li>
        <li>推荐17</li>
        <li>推荐18</li>
        <li>推荐19</li>
        <li>推荐20</li>
        <li>推荐21</li>
        <li>推荐22</li>
        <li>推荐23</li>
        <li>推荐24</li>
        <li>推荐25</li>
        <li>推荐26</li>
        <li>推荐27</li>
        <li>推荐28</li>
        <li>推荐29</li>
        <li>推荐30</li>
        <li>推荐31</li>
        <li>推荐32</li>
        <li>推荐33</li>
        <li>推荐34</li>
        <li>推荐35</li>
        <li>推荐36</li>
        <li>推荐37</li>
        <li>推荐38</li>
        <li>推荐39</li>
        <li>推荐40</li>
        <li>推荐41</li>
        <li>推荐42</li>
        <li>推荐43</li>
        <li>推荐44</li>
        <li>推荐45</li>
        <li>推荐46</li>
        <li>推荐47</li>
        <li>推荐48</li>
        <li>推荐49</li>
        <li>推荐50</li>
      </ul>
    </div>    

  </Scroll>
</div>

</template>

<script>
import DetailNavBar from '../detail/childComps/DetailNavBar'
 import Scroll from 'components/common/scroll/Scroll'
  export default {
		name: "cat",
    data() {
		  return {
        scroll:null,
        themeTopYs:[],
        currentItem:0
      }
    },
    components:{
      DetailNavBar,
      Scroll
    },
    computed: {
    },
    created() {
    },
    mounted(){  
       this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.cs.offsetTop);
      this.themeTopYs.push(this.$refs.pj.offsetTop);
      this.themeTopYs.push(this.$refs.tj.offsetTop);
      console.log(this.themeTopYs);

      //  this.themeTopYs.push(this.$refs.tj.$el.offsetTop); /如果是组件需要加$el
      // console.log(this.$refs.aaa)
      // this.scroll = new BScroll(document.querySelector('.wrapper'),{
      //  probeType:3,
      //  pullUpLoad:true
      // }),
      // this.scroll.on('scroll',(position => {
      //   console.log(position)
      // })),
      // this.scroll.on('pullingUp',(() => {
      //   console.log("上拉加载更多")

        
      // }))

    },
    activated: function () {

    },
    deactivated: function () {

    },
    updated() {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.cs.offsetTop);
      this.themeTopYs.push(this.$refs.pj.offsetTop);
      this.themeTopYs.push(this.$refs.tj.offsetTop);
      console.log(this.themeTopYs)
    },
    methods: {
      //点击标题滚动到对应内容
      titleClick(index) {       
        this.currentItem = index;
        this.$refs.aaa.scrollTo(0,-this.themeTopYs[index],100)
      },
      //滚动内容显示对应标题
      contentScroll(position){
        const positionY = -position.y;
        const length = this.themeTopYs.length
        for(let i =0;i<length; i++) {         
          if(this.currentItem !==i &&((i<length-1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i===length-1&&positionY >= this.themeTopYs[i]) )){
             this.currentItem = i;
             this.$refs.nav.currentindex = this.currentItem;
             console.log(this.currentItem)
          }
        }
        // for(let i in this.themeTopYs ){
        //   let intI = parseInt(i);
        //   // console.log(intI)// 0\1\2\3
        //   if((positionY > this.themeTopYs[intI] && positionY < this.themeTopYs[intI+1]) || (positionY > this.themeTopYs[intI]) ){
        //   // this.currentItem = 0
        //   console.log(intI)
        //   }
        // }
       
      }
    }
	}
</script>

<style scoped>
.cate{
  height:100vh;
}
.content{  
  background:red;
  color:#000;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* height:calc(100%-93px); */
  overflow: hidden;
}
#detaileNavBar{
  background-color: #fff;
}
</style>
