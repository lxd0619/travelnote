import Vue from 'vue'
import Router from 'vue-router'
import Aim from './views/Aim.vue'
import AimLine from './views/AimLine.vue'
import Delicious from './views/Delicious.vue'
import Editor from './views/Editor.vue'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
import Line from './views/Line.vue'
import LineStrategy from './views/LineStrategy.vue'
import Login from './views/Login.vue'
import Manage from './views/Manage.vue'
import NotFound from './views/Not404.vue'
import Register from './views/Register.vue'
import Search from './views/Search.vue'
import UserCenter from './views/UserCenter.vue'
import View from './views/View.vue'
import Forget_pwd from './views/Forget_pwd.vue'

Vue.use(Router)
let router = new Router({
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [{
                path: '/',
                redirect: '/index/home' //路由跳转
            },
            {
                path: '/index',
                name: 'index',
                component: Index,
                children: [{
                        path: 'aim',
                        name: 'aim',
                        component: Aim
                    },
                    {
                        path: 'aimline',
                        name: 'aimline',
                        component: AimLine
                    },
                    {
                        path: 'delicious',
                        name: 'delicious',
                        component: Delicious
                    },
                    {
                        path: 'editor',
                        name: 'editor',
                        component: Editor
                    },
                    {
                        path: 'home',
                        name: 'home',
                        component: Home
                    },
                    {
                        path: 'line',
                        name: 'line',
                        component: Line
                    },
                    {
                        path: 'linestrategy',
                        name: 'linestrategy',
                        component: LineStrategy
                    },
                    {
                        path: 'manage',
                        name: 'manage',
                        component: Manage
                    },
                    {
                        path: 'search',
                        name: 'search',
                        component: Search
                    },
                    {
                        path: 'userCenter',
                        name: 'userCenter',
                        component: UserCenter
                    },
                    {
                        path: 'view',
                        name: 'view',
                        component: View
                    },
                ]
            },
            {
                path: '/login',
                name: 'login',
                component: Login
            },
            {
                path: '/register',
                name: 'register',
                component: Register
            },
            {
                path: '/forget_pwd',
                name: Forget_pwd,
                component: Forget_pwd
            },
            {
                path: '/*', //路由匹配不成功时
                name: 'notfound',
                component: NotFound
            }
        ]
    })
    //设置路由守卫
router.beforeEach((to, from, next) => {
    //除了login和register，其他的路由访问必须先登录
    let tokenIsExists = localStorage.getItem('mytoken') ? true : false //检查本地存储中是否有token
    if (to.path == '/index/home' || to.path == '/index/Aim' || to.path == '/index/delicious' || to.path == '/index/line'|| to.path == '/index/search'|| to.path == '/index/view' || to.path == '/login'|| to.path == '/register'|| to.path == '/forget_pwd') {
        next() //允许访问路由
    } else {
        if (tokenIsExists) {
            next() //已经登录并取得token，允许访问路由
        } else {
            next('/login') //路由跳转到登录组件
        }
    }
})
//设置路由守卫
router.beforeEach((to,from,next) => {
  //除了login和register，其他的路由访问必须先登录
  let tokenIsExists = localStorage.getItem('mytoken') ? true : false //检查本地存储中是否有token
  if(to.path != '/index/editor' || to.path != '/index/usercenter'|| to.path != '/index/manage'){
    next()    //允许访问路由
  }else{
    if(tokenIsExists){

      next()  //已经登录并取得token，允许访问路由
    }else{
      next('/login')  //路由跳转到登录组件
    }
  }
})
export default router
