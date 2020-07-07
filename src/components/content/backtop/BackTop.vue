<template>
  <div class="back-top">
    <img src="../../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
import BackTop from "components/content/backtop/BackTop"
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.scroll = new BackTop(this.$refs.scroll,
    {
      click:true
    })
    this.scroll.scrollTo(0,0)
  },
  methods:{
    scrollTo(x,y,time=300) {
      this.scroll.scrollTo(x,y,time)
    }
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
