<template>
  <div>
    <!-- -->
    <navbar/>

    <!-- -->

    <div v-if="isLogin">
      <!-- 登录显示-->
      <!--列表 -->
      <tabs/>
    </div>
    <!-- 未登录 -->
    <div v-else>
      <UnLogin></UnLogin>
    </div>
  </div>
</template>

<script>
  import Navbar from "./components/order-navBar/Navbar";

  import Tabs from "./components/order-tabs/Tabs";
  import UnLogin from "./components/order-unLogin/UnLogin";
  export default {
    name: "order",
    components : {
      Navbar,
      Tabs,
      UnLogin,
    },
    data(){
      return{
          isLogin : false
      }
    },
    created() {
      //判断用户登录状态
      if(this.isLoginState()){
        this.isLogin = true
      }
    },
    methods : {
      isLoginState(){
        return this.$store.getters.getLoginState
      }
    }
  }
</script>

<style scoped>

</style>
