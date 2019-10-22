<template>
  <div class="index">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <div class="row" style="margin: 0 auto">
          <!-- LOGO -->
          <a class="navbar-brand" href="/index/home" @click.prevent="goHome">
            <img src="../assets/logo.png" alt />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse text-center" id="navbarContent">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/index/home" @click.prevent="goHome">
                  首页
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/index/aim" @click.prevent="goAim">目的地</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/index/view" @click.prevent="goView">景点攻略</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/index/delicious" @click.prevent="goDelicious">美食攻略</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/index/line" @click.prevent="goLine">个性路线</a>
              </li>
              <!-- 搜索框 -->
              <li class="nav-item d-flex justify-content-center">
                <form
                  class="form-inline pull-right"
                  role="search"
                  action="/Search/SearchList"
                  method="get"
                  target="_blank"
                >
                  <input
                    id="search"
                    style="width: 120px"
                    name="search"
                    class="form-control mr-sm-2 text-muted"
                    type="search"
                    placeholder="全站搜索..."
                    aria-label="搜索"
                    v-model="keyWord"
                  />
                  <a
                    style="background:none; margin-left:-2rem; color:#ff9d00;"
                    href="/index/search"
                    @click.prevent="goSearch(keyWord)"
                  >
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </a>
                </form>
              </li>
              <li class="nav-item dropdown" id="message">
                <a
                  class="nav-link dropdown-toggle"
                  href="userCenter.html"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  v-if="isShow === true"
                >
                  <i class="fa fa-bell-o mr-2" aria-hidden="true"></i>
                  消息中心
                  <el-badge :value="sysnumber" class="item" v-if="show"></el-badge>
                </a>
                <div class="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/index/message">
                    <i class="fa fa-envelope-o mr-2" aria-hidden="true"></i>
                    系统通知
                    <el-badge :value="sysnumber" class="item" v-if="show"></el-badge>
                  </a>
                  <!-- <a class="dropdown-item" href="#">
                    <i class="fa fa-commenting-o mr-2" aria-hidden="true"></i>
                    <el-badge :value="12" class="item">回复消息</el-badge>
                  </a>-->
                </div>
              </li>

              <div class="dropdown-divider"></div>
              <li class="nav-item" id="login">
                <a
                  class="nav-link"
                  href="/login"
                  @click.prevent="goLogin"
                  v-if="isShow === false"
                >登录</a>
              </li>
              <li class="nav-item" id="register">
                <a
                  class="nav-link"
                  href="/register"
                  @click.prevent="goRegister"
                  v-if="isShow === false"
                >注册</a>
              </li>
              <li class="nav-item dropdown ml-2">
                <a
                  class="nav-link dropdown-toggle d-flex align-items-center justify-content-center"
                  href="/index/userCenter"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  v-if="isShow === true"
                >
                  <!-- 导航栏用户头像 -->
                  <img
                    :src="getHeadPic(userInfo[0].headPic)"
                    class="rounded-circle"
                    id="navHeadPic"
                    @click.prevent="goUserCenter"
                    alt="head"
                  />
                </a>
                <div
                  class="dropdown-menu text-center"
                  aria-labelledby="userDropdown"
                  v-if="isShow === true"
                >
                  <a class="dropdown-item" href="/index/userCenter" @click.prevent="goUserCenter">
                    <i class="fa fa-user-o mr-2" aria-hidden="true"></i>个人中心
                  </a>
                  <a class="dropdown-item" href="/index/editor" @click.prevent="goEditor">
                    <i class="fa fa-pencil-square-o mr-2" aria-hidden="true"></i>撰写攻略
                  </a>
                  <div class="dropdown-divider"></div>
                  <a
                    class="dropdown-item"
                    href="/index/home"
                    @click.prevent="goHome"
                    @click="logout"
                  >
                    <i class="fa fa-sign-out mr-2" aria-hidden="true"></i>退出登录
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
    <!-- 页脚 -->
    <nav class="nav flex-column align-items-center bg-secondary text-white">
      <h6 class="mt-3">友情链接</h6>
      <a class="nav-link" href="https://www.mafengwo.cn">马蜂窝</a>
      <div class="dropdown-divider w-75"></div>
      <p class="nav-title">Copyright&nbsp;&copy;2019&nbsp;TravelNote</p>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      userInfo: [{ headPic: "" }],
      sysnumber: "",
      show: false,
      keyWord: ""
    };
  },
  //组件创建完成后执行的操作
  created() {
    //获取未读系统消息数量
    this.$axios
      .post("http://localhost:3000/userCenter/sysMessage", { type: 0 })
      .then(res => {
        if (res.data.data) {
          this.show = true;
          this.sysnumber = res.data.data.length;
        }
        console.log(res);
      });
    if (localStorage.mytoken) {
      this.isShow = true;
    }

    // 导航栏拉伸效果
    $(function() {
      $("#search").click(function() {
        $("#search").animate({ width: "220px" }, 1000);
      });
      $("#search").blur(function() {
        $("#search").animate({ width: "120px" }, 1000);
      });
    });

    // 获取用户信息
    this.$axios
      .get("http://localhost:3000/userCenter/getUserInfo")
      .then(res => {
        console.log("查询结果" + res.data.data);
        this.userInfo = res.data.data;
      })
      .catch(err => {
        console.log("错误信息" + err);
      })
      .finally(function() {
        // always executed
      });
  },
  methods: {
    getHeadPic(pic) {
      //给图片名加上服务器端访问路径
      let path = "";
      if (pic == null || pic == "" || pic == "headPic") {
        pic = "primaryHead.jpeg";
      }
      path = "http://localhost:3000/uploadHeadPic/" + pic;
      return path;
    },
    goAim() {
      this.$router.push("/index/Aim");
    },
    goDelicious() {
      this.$router.push("/index/delicious");
    },
    goEditor() {
      this.$router.push("/index/editor");
    },
    goHome() {
      this.$router.push("/index/home");
    },
    goLine() {
      this.$router.push("/index/line");
    },
    goLogin() {
      this.$router.push("/login");
    },
    goRegister() {
      this.$router.push("/register");
    },
    goSearch(keyWord) {
      this.$router.push({
        path: `/index/search/${keyWord}`
      });
    },
    goUserCenter() {
      this.$router.push("/index/userCenter");
    },
    goView() {
      this.$router.push("/index/view");
    },
    logout() {
      if (localStorage.mytoken) {
        localStorage.removeItem("mytoken");
        this.isShow = false;
      }
    }
  }
};
</script>
<style lang="css" scoped>
#navHeadPic {
  width: 40px;
  height: 40px;
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

#userDropdown {
  padding: 0;
}
#search {
  font-size: 15px;
}

.nav-item {
  font-size: 18px;
}
.el-badge {
  top: -8px;
  left: -12px;
}
</style>