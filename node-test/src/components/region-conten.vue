<template>
  <div class="login-content">

    <div class="lc-right">

      <div class="lc-input" style="width: 275px;">
        <h1 style="margin:25px;text-align: center;font-size: 35px;font-weight: normal">
          新用户注册
        </h1>
        <input type="text" name="username" id="username" placeholder="请用户名" v-model="user.username">
      </div>

      <div class="lc-input">
        <input type="text" name="email" id="email" placeholder="请输入邮箱" v-model="user.email">
      </div>

      <div class="lc-input">
        <input type="password" name="password" id="password" placeholder="请输入密码" v-model="user.password" @keyup.enter="handleclick">
      </div>

      <div class="lc-button1">
        <button @click="handleclick">注册</button>
      </div>

    </div>
  </div>


</template>

<script>
  export default {
    name: 'login-content',
    data(){
      return{
        user: {
          username: "",
          password: "",
          email: ""
        }

      }
    },
    methods:{
      handleclick(){
        this.$axios.post("/user",this.user).then(res => {
          console.log(res);
          if(res.data.code == 200){
            alert('注册成功')
            this.$router.push('/')
          }else if(res.data.code == 401){
            alert(res.data.msg)
            this.$router.push('/')
          }else {
            alert(res.data.msg)
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login-content{
    margin: 60px;
    width: 100%;
  }

  .lc-right{
    width: 270px;
   margin: 0 auto;
  }
  .lc-input{
    margin: 25px;
  }
  #email{
    height: 40px;
    width: 250px;
    background-color: white;
    border-radius: 4px;
    border: dimgrey 1px solid;
    outline: none;
    padding: 0 10px;
  }
  #username{
    height: 40px;
    width: 250px;
    background-color: white;
    border-radius: 4px;
    border: dimgrey 1px solid;
    outline: none;
    padding: 0 10px;
  }
  #password{
    height: 40px;
    width: 250px;
    background-color: white;
    border-radius: 4px;
    border: dimgrey 1px solid;
    outline: none;
    padding: 0 10px;

  }
  .lc-button1{
    margin: 25px;

  }
  .lc-button1 button{
    height: 40px;
    width: 270px;
    border: 0;
    background-color: deepskyblue;
    border-radius: 4px;
    color:white ;
    font-size: 16px;
  }


</style>

