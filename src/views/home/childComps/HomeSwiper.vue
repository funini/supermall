<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperImage">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default{
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        isLoad:false
      }
    },
    components:{
      Swiper, 
      SwiperItem
    },
    methods:{
      swiperImage() {
        if(!this.isLoad){
          this.$emit('swiperImgLoad') 
          this.isLoad = true
        }
              
      }
    }
  }
</script>
