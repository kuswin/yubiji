<template>
  <div class="header">
    <span>云笔记</span>
    <button class="h-write">写笔记</button>


  </div>
</template>

<script>
export default {
  name: 'Header',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .header{
    background-color: deepskyblue;
    height: 40px;
    width: 100%;
  }
  .header span{
    font-size: 30px;
    color: white;
    display: inline-block;
    margin-left: 100px;
  }
  .h-write{
    width: 73px;
    height: 35px;
    padding: 5px 10px;
    background-color:  white;
    border: 0;
    border-radius: 2px;
    font-size: 14px;
    float: right;
    margin-right: 100px;
  }

</style>
