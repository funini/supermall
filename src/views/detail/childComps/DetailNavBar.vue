<template>
<div id="detailNavbar">
 <NavBar>
   <div slot="left" class="back" @click="goback">
     <img src="~assets/img/common/back.svg" alt="">
   </div>
   <div slot="center" class="title" >
     <div v-for="(item,index) of titles" :key="index" 
          class="title-item" 
          :class="{active: index == currentindex}"
          @click="itemClick(index)"
          >
        {{item}}
     </div>     
   </div>
 </NavBar>
</div>

</template>

<script> 
import NavBar from 'components/common/navbar/NavBar'
  export default {
    data(){
      return{
        iid:null,
        titles:['商品','参数','评价','推荐'],
        currentindex:''
      }
    },
    components:{
      NavBar
    },   
    created() {
      this.iid = this.$route.params.iid
    },
    methods:{
      itemClick(index) {
        this.currentindex = index
        this.$emit('titleClick',index);
      },
      goback() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
.title{
  display:flex;
}
.title-item{
  flex:1
}
.active{
  color:red
}
.back img{
  margin-top:12px;
}
</style>
