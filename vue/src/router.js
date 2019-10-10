import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import NotFound from './views/Not404.vue'

Vue.use(Router)


let router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/index' //路由跳转
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: function () { 
      //   return import(/* webpackChunkName: "about" */ './views/About.vue')
      // }
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/*',   //路由匹配不成功时
      name: 'notfound',
      component: NotFound
    }
  ]
})
//设置路由守卫
router.beforeEach((to,from,next)=>{
  //除了login和register,其他的路由访问必须先登录
  let tokenIsExists=localStorage.mytoken?true:false  //localStorage.getItem('mytoken')  检查本地存储中是否又token
  if(to.path=='/login' ||to.path =='register'){
    next()
  }else{
    if(tokenIsExists){
      next()   //已经登录并取得token，允许访问路由
    }else{
      next('/login') //路由跳转到登录组件
    }
  }
})
export default router
