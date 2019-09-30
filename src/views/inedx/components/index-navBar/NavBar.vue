<template>
  <div id="index-navBar">
    <van-nav-bar
            title=""
            :left-text="url"
            right-text=""
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
    />

  </div>


</template>

<script>
  export default {
    data(){
      return {
          url : "重庆电信职业学院"
      }
    },
    methods: {
      onClickLeft() {
        this.$router.push("/index/address");
      },
      onClickRight() {
      }
    }
  }
</script>

<style scoped>
#index-navBar{
  margin: 0;
  padding: 0;
}
</style>
