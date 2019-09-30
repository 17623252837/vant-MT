<template>
  <div class="swipe ">
    <van-swipe :autoplay="3000" :height="200">
      <van-swipe-item v-for="(image, index) in list" :key="index">
        <img v-lazy="image.swapperUrl" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
  import { getSwapper } from '../../../../api/index/swapper/swapper'
  export default {
    name: "Swipe",
    data() {
      return {
        height : 50,
        list: [
          {swapperUrl : "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg"},
          {swapperUrl : "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34869/14/3703/113972/5cb953c1E4294d8ea/b73c538710f5c462.jpg!cr_1125x549_0_72!q70.jpg.dpg"},
          {swapperUrl : "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg"},
          {swapperUrl : "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34729/14/3948/120618/5cbeee07Efbe17ec5/d57ddd4fbbbc09e0.jpg!cr_1125x549_0_72!q70.jpg.dpg"},
          {swapperUrl : "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34423/17/5378/97852/5cbecd7bE73730c2f/76e5359d8fb3a1e1.jpg!cr_1125x549_0_72!q70.jpg.dpg"},
        ]
      }
    },
    created() {
      this.getSwappers();
    },
    methods : {
      // 获取轮播图集合
      getSwappers(){
        getSwapper().then(res => {
          const state = res.status;
          //获取成功
          if(200 === state){
            this.list = res.data
          }
        }).catch(e => {
          //获取失败
          console.log(e);
        })
      }
    }
  }
</script>

<style scoped>
  .swipe {
    width: 100%;
    border-radius: revert;
  }
  img {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

</style>
