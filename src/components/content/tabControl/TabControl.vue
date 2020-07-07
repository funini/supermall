<template>
  <div class="tab-control">    
    <div class="tab-control-item" 
      v-for="(item,index) in titles" :key="index" 
      :class="{active: current === index}"
      @click="itemClick(index)"
      >
      <span>{{item}}</span>     
    </div>
  </div>
</template>

<script>
export default { 
  props:{
    titles:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      current:0
    }   
  },
  methods:{
    itemClick(index){
      this.current = index
      this.$emit('tabClick',index)
    }
  } 
}
</script>

<style>
.tab-control{
  display: flex;
  text-align: center;
  height:44px;
  line-height: 44px;
}
.tab-control-item{
  flex:1;
}
.tab-control-item span{
  padding: 5px;
}
.active{
  color:var(--color-tint);
}
.active span{
  border-bottom: 2px solid var(--color-tint);
}
</style>
