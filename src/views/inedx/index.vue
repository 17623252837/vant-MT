<template>
  <div id="index">
    <!-- 头部-->
    <NavBar/>

    <!-- 搜索栏-->
    <van-sticky>
      <search/>
    </van-sticky>

    <!--分割线 -->
    <van-divider></van-divider>

    <!-- 轮播图-->
    <van-row>
      <swipe/>
    </van-row>

    <!--分割线 -->
    <van-divider></van-divider>

    <!-- 宫格-->
    <grid/>

    <!-- 优惠专区-->
    <Discounts/>

    <!-- 商品-->
    <Shoping/>

    <!-- 底部距离-->
    <Bottom/>
  </div>
</template>

<script>

  import NavBar from "./components/index-navBar/NavBar";
  import Search from "./components/index-search/Search";
  import Swipe from "./components/index-swipe/Swipe";
  import Grid from "./components/index-grid/Grid";
  import Discounts from "./components/index-discounts/Discounts";
  import Bottom from "./components/index-bottom/Bottom";
  import Shoping from "./components/index-shoping/Shoping";
  export default {
    name: "index",
    components : {
      NavBar,
      Search,
      Swipe,
      Grid,
      Discounts,
      Bottom,
      Shoping
    },
    data(){
      return{
      }
    },
    methods :{
      getLoginStates(){
        console.log(this.$store.getters.getLoginState);
      }
    },
    created() {
      this.getLoginStates();
    }
  }
</script>

<style scoped>
  #index{
    margin: 0;
    padding: 0;
  }
</style>
