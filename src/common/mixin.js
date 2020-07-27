import {debounce} from './utils'

export const itemListenerMixin = {
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh,100)
    this.itemImageListener = () => {
      newRefresh()     
    }   
    this.$bus.$on('itemImgload',this.itemImageListener)
    console.log("我是混入中的内容")
  }
}
