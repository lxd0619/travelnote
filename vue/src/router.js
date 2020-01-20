import Vue from 'vue'
import Router from 'vue-router'
const Aim =()=>import('./views/aim/Aim.vue')
const AimLine=()=>import('./views/aim/children/AimLine.vue')
const Delicious=()=>import('./views/food/Delicious.vue')
const Editor=()=>import('./views/user/Editor.vue')
const Home=()=>import('./views/home/Home.vue')
const Index=()=>import('./views/Index.vue')
const Line=()=>import('./views/line/Line.vue')
const LineStrategy =()=>import('./views/line/children/LineStrategy.vue')
const Login=()=>import ('./views/login/Login.vue')
const Manage=()=>import('./views/manage/Manage.vue')
const NotFound=()=> import ('./views/Not404.vue')
const Register =()=>import('./views/register/Register.vue')
const Search =()=>import ('./views/Search.vue')
const UserCenter=()=>import ('./views/user/UserCenter.vue')
const View=()=>import('./views/viewpoint/View.vue')
const Forget_pwd=()=>import ('./views/login/Forget_pwd.vue')
const Article=()=>import ('./views/Article.vue')
const Message=()=>import ('./views/Message.vue')
const ViewDetail=()=>import('./views/viewpoint/children/ViewDetail.vue')
const DetailCity=()=>import('./views/DetailCity.vue')
const FoodCity =()=>import ('./views/food/children/FoodCity.vue')
const FoodDetail =()=>import ('./views/food/children/FoodDetail.vue')
const FVstrategy =()=>import ('./views/FVstrategy.vue')
const Focus =()=>import ('./views/Focus.vue')

import jwt_decode from "jwt-decode";

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

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
                        path: 'search/:keyWord',
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
                    {
                        path: 'viewdetail',
                        name: 'viewdetail',
                        component: ViewDetail
                    },
                    {
                        path: 'detailcity',
                        name: 'decailcity',
                        component: DetailCity
                    },
                    {
                        path: 'foodcity',
                        name: 'foodcity',
                        component: FoodCity
                    },
                    {
                        path: 'foodDetail',
                        name: 'foodDetail',
                        component: FoodDetail
                    },
                    {
                        path: 'message',
                        name: 'Message',
                        component: Message
                    },
                    {
                        path: 'fvstrategy',
                        name: 'fvstrategy',
                        component: FVstrategy
                    },
                    {
                        path: 'focus',
                        name: 'focus',
                        component: Focus
                    },
                ]
            },
            {
                path: '/manage',
                name: 'manage',
                component: Manage
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
                path: '/article',
                name: Article,
                component: Article
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
    if (to.path == '/index/home' || to.path == '/index/Aim' || to.path == '/index/aimline' || to.path == '/index/delicious' || to.path == '/index/line' || to.path == '/index/linestrategy' || to.path == '/index/search' || to.path == '/index/view' || to.path == '/login' || to.path == '/register' || to.path == '/forget_pwd' || to.path=='/index/FVstrategy' || to.path=='/index/Fvstrategy#'|| to.path=='/index/fvstrategy#'||to.path=='/index/fvstrategy'|| to.path=='/index/focus') {
        next() //允许访问路由
    } else {
        if (tokenIsExists) {
            if (to.path == '/manage' || to.path == '/Article') {
                var role = jwt_decode(localStorage.getItem('mytoken')).role
                if (role == 'manage') {
                    next()
                } else {
                    next('/*')
                }
            } else {
                next() //已经登录并取得token，允许访问路由
            }
        } else {
            next('/login') //路由跳转到登录组件
        }
    }
})
export default router