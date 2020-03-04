import Vue from "vue";
import Router from "vue-router";

const Index = () => import("./views/Index.vue"); //导航栏
const Home = () => import("./views/home/Home.vue"); //主页
const Login = () => import("./views/login/Login.vue"); //登录
const Register = () => import("./views/register/Register.vue"); //注册
const Forget_pwd = () => import("./views/login/Forget_pwd.vue"); //忘记密码

const Aim = () => import("./views/aim/Aim.vue"); //目的地
const AimLine = () => import("./views/aim/children/AimLine.vue"); //目的地路线
const DetailCity = () => import("./views/aim/children/DetailCity.vue"); //城市详情页

const Delicious = () => import("./views/food/Delicious.vue"); //美食
const FoodCity = () => import("./views/food/children/FoodCity.vue"); //特色美食
const FoodDetail = () => import("./views/food/children/FoodDetail.vue"); //美食详情

const Line = () => import("./views/line/Line.vue"); //个性路线
const LineStrategy = () => import("./views/line/children/LineStrategy.vue"); //个性路线攻略

const View = () => import("./views/viewpoint/View.vue"); //景点
const ViewDetail = () => import("./views/viewpoint/children/ViewDetail.vue"); //景点详情

const FVstrategy = () => import("./views/FVstrategy.vue"); //攻略详情页
const Editor = () => import("./views/user/Editor.vue"); //编辑攻略
const UserCenter = () => import("./views/user/UserCenter.vue"); //用户中心
const Message = () => import("./views/Message/Message.vue"); //消息
const Focus = () => import("./views/Attention/Focus.vue"); //关注页
const Manage = () => import("./views/manage/Manage.vue"); //管理员
const Article = () => import("./views/manage/children/Article.vue"); //管理文章详情
const Search = () => import("./views/Search/Search.vue"); //搜索
const NotFound = () => import("./views/Not404.vue"); //404

import jwt_decode from "jwt-decode";

const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};

Vue.use(Router);
let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/index/home" //路由跳转
    },
    {
      path: "/index",
      name: "index",
      component: Index,
      children: [
        {
          path: "aim",
          name: "aim",
          component: Aim
        },
        {
          path: "aimline",
          name: "aimline",
          component: AimLine
        },
        {
          path: "delicious",
          name: "delicious",
          component: Delicious
        },
        {
          path: "editor",
          name: "editor",
          component: Editor
        },
        {
          path: "home",
          name: "home",
          component: Home
        },
        {
          path: "line",
          name: "line",
          component: Line
        },
        {
          path: "linestrategy",
          name: "linestrategy",
          component: LineStrategy
        },
        {
          path: "search/:keyWord",
          name: "search",
          component: Search
        },
        {
          path: "userCenter",
          name: "userCenter",
          component: UserCenter
        },
        {
          path: "view",
          name: "view",
          component: View
        },
        {
          path: "viewdetail",
          name: "viewdetail",
          component: ViewDetail
        },
        {
          path: "detailcity",
          name: "decailcity",
          component: DetailCity
        },
        {
          path: "foodcity",
          name: "foodcity",
          component: FoodCity
        },
        {
          path: "foodDetail",
          name: "foodDetail",
          component: FoodDetail
        },
        {
          path: "message",
          name: "Message",
          component: Message
        },
        {
          path: "fvstrategy",
          name: "fvstrategy",
          component: FVstrategy
        },
        {
          path: "focus",
          name: "focus",
          component: Focus
        }
      ]
    },
    {
      path: "/manage",
      name: "manage",
      component: Manage
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/forget_pwd",
      name: Forget_pwd,
      component: Forget_pwd
    },
    {
      path: "/article",
      name: Article,
      component: Article
    },
    {
      path: "/*", //路由匹配不成功时
      name: "notfound",
      component: NotFound
    }
  ]
});
//设置路由守卫
router.beforeEach((to, from, next) => {
  //除了login和register，其他的路由访问必须先登录
  let tokenIsExists = localStorage.getItem("mytoken") ? true : false; //检查本地存储中是否有token
  if (
    to.path == "/index/home" ||
    to.path == "/index/Aim" ||
    to.path == "/index/aimline" ||
    to.path == "/index/delicious" ||
    to.path == "/index/line" ||
    to.path == "/index/linestrategy" ||
    to.path == "/index/search" ||
    to.path == "/index/view" ||
    to.path == "/login" ||
    to.path == "/register" ||
    to.path == "/forget_pwd" ||
    to.path == "/index/FVstrategy" ||
    to.path == "/index/Fvstrategy#" ||
    to.path == "/index/fvstrategy#" ||
    to.path == "/index/fvstrategy" ||
    to.path == "/index/focus"
  ) {
    next(); //允许访问路由
  } else {
    if (tokenIsExists) {
      if (to.path == "/manage" || to.path == "/Article") {
        var role = jwt_decode(localStorage.getItem("mytoken")).role;
        if (role == "manage") {
          next();
        } else {
          next("/*");
        }
      } else {
        next(); //已经登录并取得token，允许访问路由
      }
    } else {
      next("/login"); //路由跳转到登录组件
    }
  }
});
export default router;
