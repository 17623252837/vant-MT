<template>
  <div>
    <van-tabbar v-model="active" route fixed>
      <van-tabbar-item name="index" icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item name="about" icon="todo-list-o" dot to="/order">订单</van-tabbar-item>
      <van-tabbar-item name="t4" icon="friends-o" info="20" to="/info">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: "tabbar",
    data() {
      return {
        active: 'home'
      }
    },
    methods : {
    }
  }
</script>

<style scoped>

</style>
