<template>
  <div class="recommend">
    <div class="item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script> 
  export default{
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {}
    },    
  }
</script>

<style>
  .recommend{
    display: flex; 
    width:100%; 
    text-align: center; 
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .item{
    flex: 1;
    /* width:20%;     */
  }
  .item img{
    width:80%;
    margin-bottom: 10px;
  }
  .title{
    font-size: 14px;
  }
</style>
