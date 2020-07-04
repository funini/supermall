<template>
  <div id="home">
    购物车
  </div>
</template>

<script>

  export default {
		name: "Home",

    data() {
		  return {

      }
    },
    computed: {

    },
    created() {

    },
    activated: function () {

    },
    deactivated: function () {

    },
    updated() {

    },
    methods: {

    }
	}
</script>

<style scoped>
  #home {
    /*position: relative;*/
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  }

  .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
  }
</style>
