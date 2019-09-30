<template xmlns="">
  <div>
    <van-cell-group>
      <van-cell>
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
          <van-cell
                  v-for="item in list"
                  :key="item"
                 >
            <!-- 遍历商品列表 -->
            <ShopModel></ShopModel>
          </van-cell>
        </van-list>

      </van-cell>
    </van-cell-group>

  </div>
</template>

<script>
  import ShopModel from "./model/ShopModel";

  export default {
    name: "ShopInfo",
    data(){
      return {
        list: [],
        loading: false,
        finished: false
      }
    },
    methods :{
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
      }
    },
    components : {
      ShopModel
    }
  }
</script>

<style scoped>

</style>
