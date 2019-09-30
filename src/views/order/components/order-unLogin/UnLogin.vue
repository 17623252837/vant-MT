<template>
  <div>
    <div class="ico">
      <van-icon name="manager-o" size="100px" color="#969696"></van-icon>
    </div>
    <van-row>
      <span class="font">您还没有登录，请登录</span>
    </van-row>
    <van-row>
      <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" size="small " text="登录/注册"  to="/login"></van-button>
    </van-row>
  </div>
</template>

<script>

  export default {
    name: "UnLogin"
  }
</script>

<style scoped>
  .ico{
    display: block;
    margin-top: 200px;
  }

  .font{
    font-size: 20px;
    color: #969696;
  }
</style>
