<template>
  <div id="tab-bar">
  <slot></slot>
  </div>
</template>

<script>

export default {   
}
</script>

<style>
/* @import url("../../assets/css/basecss.css"); */
  #tab-bar{
    display: flex;
    height:49px;
    background-color: #cecece;
    box-shadow: 0px 1px 1px #ccc;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
