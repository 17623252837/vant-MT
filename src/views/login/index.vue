<template>
  <div>
    <!-- navBar -->
    <NavBar></NavBar>

    <!-- Content -->
    <Content></Content>
  </div>
</template>

<script>
  import NavBar from "./components/login-navBar/NavBar";
  import Content from "./components/login-content/Content";
  export default {
    name: "index",
    components : {
      NavBar,
      Content
    }
  }
</script>

<style scoped>

</style>
