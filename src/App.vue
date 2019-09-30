<template>
  <div id="app">


    <router-view/>

    <tabbar/>
  </div>
</template>
<script>
  import tabbar from "./components/vant-tabbar/tabbar";

  export default {
    data() {
      return {
        active : 'index'
      }
    },
    components : {
      tabbar
    }
  }
</script>
<style lang="scss">
  body{
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
