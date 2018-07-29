<template>
  <div style="background-color:#f1f1f1;">
    <Header></Header>

    <loContent></loContent>

  </div>

</template>

<script>
import Header from "../components/Header"
import loContent from "../components/login-content"
    export default {
        name: "login",
      components:{
          Header,
        loContent
      }
    }
</script>

<style scoped>

</style>
