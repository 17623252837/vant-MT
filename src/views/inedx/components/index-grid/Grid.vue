<template>
  <div>
    <van-grid :gutter="10" :column-num="5">
      <van-grid-item
              v-for="value in 10"
              :key="value"
              icon="photo-o"
              text="文字"
      />
    </van-grid>
  </div>
</template>

<script>
  export default {
    name: "Grid"
  }
</script>

<style scoped>

</style>
