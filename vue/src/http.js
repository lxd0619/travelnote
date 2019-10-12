import axios from 'axios'
import router from './router'
//设置axios，配置请求拦截器、响应拦截器
axios.interceptors.request.use(function (config) {
    //当调用带鉴权的接口时，添加token头部标志
    if(localStorage.getItem('mytoken')){
        //在请求头部中加入token
        config.headers.Authorization = localStorage.getItem('mytoken')
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// 响应拦截器
axios.interceptors.response.use(function (response) {
  console.log('122');
  
    // Do something with response data
    return response;
  }, function (error) {
    console.log(error);
    
      //当token过期时，获取错误信息，并清除本地存储的过期token
      if(error.response.status == 401){
        console.log(response);
        
        localStorage.removeItem('mytoken')
        router.push('/login')   //跳转到登录组件
      }
    return Promise.reject(error);
  });
export default axios