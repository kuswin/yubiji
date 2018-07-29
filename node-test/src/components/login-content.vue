<template>
  <div class="login-content" >

       <div style="width: 1170px;margin: 50px auto;background-color:#f1f1f1!important;height: 350px">
    <div class="lc-left clearfix">
      <!--:interval="5000"-->
      <el-carousel  :autoplay="autoplay" >

        <el-carousel-item  v-for="item in pic" :key="item._id">
          <div class="pic">
            <img :src="item.image" alt="">
            <p class="pic-dec">{{item.imgtitle}}</p>
          </div>
        </el-carousel-item>

      </el-carousel>

    </div>
    <div class="lc-right">

      <div class="lc-input">
        <input type="text" name="email" id="email" placeholder="请输入邮箱" v-model="user.email">
      </div>

      <div class="lc-input">
        <input type="password" name="password" id="password" placeholder="请输入密码" v-model="user.password"
               @keyup.enter="handleclick">
      </div>

      <div class="lc-button1">
        <button @click="handleclick">登录</button>
      </div>

      <div class="lc-button2">
        <button @click="$router.push('/region')">注册</button>
      </div>
    </div>
    </div>
    <div class="note-list">
      <div class="no-li-item" >
        woshi
      </div>

  </div>
  </div>


</template>
<style>
  .el-carousel{
    width: 750px;
    border-radius: 4px;
    height: 350px;
  }
  .el-carousel__container{
    height: 350px;
  }
  .el-carousel__item img {
    width: 750px;
  }
  .el-carousel__container {
    width: 750px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .pic{
    position: relative;
  }
  .pic-dec{
    padding:2px 20px;
    position: absolute;
    top:320px;
    height: 30px;
    background-color: rgba(0,0,0,0.5);
    width: 730px;
    text-align: left;
    z-index: 999;
    color: white;
  }
</style>
<script>
  import Cookies from 'js-cookie'
export default {
  name: 'login-content',
  data(){
    return{
      autoplay:false,
      pic:[],

      user:{
        password:'',
        email:''
      }
    }
  },

  methods:{
    handleclick(){
      this.$axios.post('/login',this.user).then(res =>{
        if(res.data.code == 200){
          console.log(res.data.data);
          Cookies.set('username', this.user.username, { expires: 14 });
          Cookies.set('email', this.user.email, { expires: 14 });
          alert("登录成功，欢迎回来")
        }else if(res.data.code == 400){

          alert(res.data.msg)
        }
        else{
          alert(res.data.msg);
          this.$router.push('/region')
        }
      })
    }

  },
  mounted(){
    this.$axios.get('/swiper').then(res =>{
      console.log(res.data.data)
      this.pic = res.data.data

    })
  }

}
</script>

<style scoped>
.login-content{
  width: 100%;
  background-color: #f1f1f1!important;

}
.clearfix{
  content: '';
  clear: both;
  display: block;

}
  .lc-left{
    float: left;

  }
  .lc-right{
    float: right;
    box-sizing: border-box;
    width: 360px;
    background: #fff;
    border-radius: 4px;
    padding: 21px 30px;
  }
  .lc-input{
    margin: 25px;
  }
  #email{
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    padding: 14px;
    outline: none;
  }
  #password{
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    padding: 14px;
    outline: none;

  }
  .lc-button1{
    margin: 25px;

  }
.lc-button2{
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
.lc-button2 button{
  height: 40px;
  width: 270px;

  background-color: white;
  border-radius: 4px;
  color: #606266;
  font-size: 16px;
  border: 1px solid #dcdfe6;
}
  .note-list{
    height: 20px;
    background-color: #f1f1f1;
    width: 1170px;
    margin: 30px auto;
  }
  .no-li-item{
    width: 750px;
    background-color: #fff;
    border-radius: 4px;
    padding: 2px 20px;
  }
</style>

