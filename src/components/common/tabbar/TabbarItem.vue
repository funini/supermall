<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
   <div v-else>
     <slot name="item-active-icon"></slot>
   </div>
   <div :style="activestyle">
     <slot name="item-text"></slot>
   </div>   
  </div>
</template>

<script>
  export default{
    props:{
      path:'',
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data() {
      return {
         // isActive:false
      }     
    },
    computed:{
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activestyle() {
        return this.isActive ? {color:this.activeColor}:{}
      }
    },
    methods:{
      itemClick() {
        this.$router.push(this.path)
      }
    }
  }
</script>

<style>
  .tab-bar-item{
    flex:1;
    text-align: center;
  }
  .tab-bar-item img{
    width: 24px;
    height:24px;
  }
</style>
