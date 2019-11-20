import axios from 'axios'
import Vue from 'vue'
import router from '../router/index'

const http = axios.create({
  baseURL:'http://localhost:8888'
})



http.interceptors.request.use(req =>{
  req.headers.Authorization = 'Bearer ' + localStorage.token;
  return req
}, err => {  
  return Promise.reject(err)
})

// 拦截
http.interceptors.response.use(res =>{
  return res
}, err => {
  if (err.response.data.message) {
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message
    })
    router.push({path: '/login'});
  }
  
  return Promise.reject(err)
})


export default http