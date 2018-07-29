import axios from 'axios'
import Vue from 'vue'



//在modejs环境下 process是全局变量，，，在走run dev 环境下，NODE_ENV会被脚手架设置成development
let env = process.env.NODE_ENV =='development' ? '开发环境':'生产环境'


let instance = axios.create({
  baseURL:process.env.NODE_ENV == 'development' ? '/api':'/'
})

Vue.prototype.$axios = instance;
