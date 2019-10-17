<template>
  <div>
    <header>
      <h1>用户后台管理</h1>
    </header>
    <div class="line"></div>
    <div class="main">
      <nav>
        <div class="menu">
          <ul>
            <li class="li">
              <a id="auditing" @click="auditing()">待审核文章</a>
            </li>
            <li class="li">
              <a id="accusation" @click="accusation()">被举报文章</a>
            </li>
            <li class="li">
              <a id="ban" @click="ban()">被禁文章</a>
            </li>
            <li class="li">
              <a id="normal" @click="normal()">正常文章</a>
            </li>
            <li class="li">
              <a id="user" @click="user()">用户管理</a>
            </li>
            <li class="li">
              <a href="/index/home">首页</a>
            </li>
            <li class="li">
              <a @click="out()">退出</a>
            </li>
          </ul>
          <div id="lump"></div>
        </div>
      </nav>
      <div id="right">
        <manageAuditing v-if="flag1"></manageAuditing>
        <manageAccusation v-if="flag2"></manageAccusation>
        <manageBan v-if="flag3"></manageBan>
        <manageNormal v-if="flag4"></manageNormal>
        <manageUser v-if="flag5"></manageUser>
      </div>
    </div>
    <footer></footer>
  </div>
</template>
<script>
import manageAuditing from "../components/manage_auditing";
import manageAccusation from "../components/manage_accusation";
import manageBan from "../components/manage_ban";
import manageNormal from "../components/manage_normal";
import manageUser from "../components/manage_user.vue";

export default {
  name: "manage",
  data() {
    return {
      flag1: true,
      flag2: false,
      flag3: false,
      flag4: false,
      flag5: false
    };
  },
 
  components: {
    manageAuditing,
    manageAccusation,
    manageBan,
    manageNormal,
    manageUser
  },
  mounted() {
    var currentposition = 0;
    var lis = document.getElementsByClassName("li");
    for (let i = 0; i < lis.length; i++) {
      lis[i].onmouseover = function() {
        this.childNodes[0].style.color = "#c5f0a4";
      };
      lis[i].onmouseout = function() {
        this.childNodes[0].style.color = "white";
      };
      lis[i].onclick = function() {
        document.getElementById("lump").style.top = this.offsetTop + "px";
        currentposition = this.offsetTop;
      };
    }
  },
  methods: {
    auditing() {
      this.flag1 = true;
      this.flag2 = false;
      this.flag3 = false;
      this.flag4 = false;
      this.flag5 = false;
    },
    accusation() {
      this.flag1 = false;
      this.flag2 = true;
      this.flag3 = false;
      this.flag4 = false;
      this.flag5 = false;
    },
     ban() {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = true;
      this.flag4 = false;
      this.flag5 = false;
    },
    normal() {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = false;
      this.flag4 = true;
      this.flag5 = false;
    },
    user() {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = false;
      this.flag4 = false;
      this.flag5 = true;
    },
    out() {
      localStorage.removeItem("mytoken");
      let  _this = this;
       this.$message({
              message: "退出成功",
              type: "success"
            });
      var mytime = setTimeout(function() {
        _this.$router.push("/login"); //路由转向登录组件
      }, 3000);
    }
  }
};
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
  color: #333333;
  font-family: sans-serif;
}

header {
  width: 100%;
  height: 50px;
  background-color: white;
}
.main {
  position: relative;
  background-color: #eeeeee;
}
h1 {
  color: #00b894;
  float: left;
  width: 500px;
  padding: 5px 100px;
  font-weight: normal;
}
header a {
  color: #00b894;
  text-decoration: none;
  font-size: 20px;
  padding: 10px 20px;
  float: right;
}
.line {
  width: 500px;
  height: 2px;
  margin: 20px auto;
  background-color: #35b0ab;
}
.menu {
  margin-left: 100px;
  position: relative;
  top: 0;
  left: 0;
  width: 200px;
}

#lump {
  width: 200px;
  height: 77.6px;
  background-color: #00b894;
  position: absolute;
  transition: 0.3s all;
  top: 0;
  left: 0;
  z-index: 0;
}

.menu ul {
  height: 650px;
  width: 200px;
  background-color: #226b80;
  padding: 0;
  margin: 0;
}

.menu li {
  /*导航栏*/
  position: relative;
  z-index: 2000;
  padding: 0;
  list-style: none;
  width: 100%;
  text-align: center;
  font-size: 30px;
  line-height: 50px;
}

.menu a {
  text-decoration: none;
  color: white;
  font-size: 17px;
  display: block;
  transition: 0.3s all;
  padding: 14px 0;
}
a {
  text-decoration: none;
  cursor: pointer;
}
#right {
  position: absolute;
  top: 0;
  left: 302px;

  /* background-color: #00b894; */
  /* width: 80%; */
  /* height: 602px; */
}
</style>