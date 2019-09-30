<template>
  <div>
    <van-search placeholder="请输入搜索关键词" v-model="value" />
  </div>
</template>

<script>
  export default {
    name: "Search",
    data(){
      return{
        value : ''
      }
    }
  }
</script>

<style scoped>

</style>
