<template>
  <div>
    <van-nav-bar
            left-arrow
            @click-left="onClickLeft">
    </van-nav-bar>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    methods : {
      onClickLeft(){
        this.$router.push("/order")
      }
    }
  }
</script>

<style scoped>

</style>
