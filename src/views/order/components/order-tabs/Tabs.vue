<template>
  <div>
    <van-tabs v-model="active" swipeable>
      <van-tab title="全部订单">
        <OrderModel></OrderModel>
      </van-tab>

      <van-tab title="待评价">
        待评价
      </van-tab>
      <van-tab title="退款">
        退款
      </van-tab>

    </van-tabs>
  </div>
</template>

<script>

  import OrderModel from "./components/OrderModel";
  export default {
    name: "Tabs",
    data(){
      return{
        active : 0
      }
    },
    components : {
      OrderModel
    }
  }
</script>

<style scoped>

</style>
