<template>
  <div class="back-top" ref="backtop">
    <img src="../../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
       scroll:null
    }
  },
  mounted(){
  }

}
</script>

<style scoped>
  .back-top{
    position: fixed;
    right:10px;
    bottom:50px;
  }
  .back-top img{
    width: 43px;
  }
</style>
