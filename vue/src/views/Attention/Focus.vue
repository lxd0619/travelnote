/**关注页面 */
<template>
  <div class="person">
    <div class="jumbotron jumbotron-fluid" id="topPic">
      <div class="container">
        <h1 class="text-light mt-5">旅游札记</h1>
        <br />
        <h3 class="text-light">更懂世界，更懂你！！！</h3>
      </div>
    </div>

    <div class="container">
      <div class="row mb-5">
        <!-- 左侧边栏 -->
        <div
          class="col-lg-3 d-flex flex-column align-items-center d-md-none d-lg-block border-right"
        >
          <!-- 圆形头像 -->
          <div
            class="rounded-circle float-right mr-5"
            id="headPic"
            :style="{
              backgroundImage: 'url(' + getHeadPic(userInfo[0].headPic) + ')'
            }"
          ></div>
          <div class="mt-3 float-right mr-5 text-center" style="width:10rem;">
            <h4 style="color:#ff9d00">{{ userInfo[0].userName }}</h4>
          </div>
          <div id="relations" class="mt-3 float-right">
            <ul
              class="d-flex justify-content-between text-center mr-5"
              @click="fanslist()"
            >
              <li class="border-right border-bottom border-top">
                粉丝：
                <span>{{ fans.length }}</span>
              </li>
              <li class="border-bottom border-top">
                关注：
                <span>{{ attentions.length }}</span>
              </li>
            </ul>
            <div v-if="show2">
              <el-button type="warning" v-if="show" @click="addFriends"
                >添加关注</el-button
              >
              <el-button type="warning" v-else @click="addFriends"
                >取消关注</el-button
              >
            </div>
          </div>
        </div>
        <!-- 中间部分 -->
        <div class="col-md-12 col-lg-9" id="content">
          <OtherInfo v-if="show3"></OtherInfo>
          <list v-else></list>
        </div>
        <!-- 右侧导航 -->
        <el-backtop :bottom="100"></el-backtop>
      </div>
    </div>
  </div>
</template>
<script>
import jwt_decode from "jwt-decode";
import OtherInfo from "../user/children/OtherInfo";
import List from "../user/children/List";

export default {
  name: "UserCenter",
  data() {
    return {
      userInfo: [
        {
          headPic: "",
          strategyuserId: ""
        }
      ],
      fans: [],
      attentions: [],
      show: true,
      list: [],
      show1: false,
      currentPage: 1,
      allPage: 0,
      pagesize: 3,
      visitor: "",
      show3: true,
      show2: true,
      show: true
    };
  },
  components: {
    OtherInfo,
    List
  },
  created() {
    this.visitor = jwt_decode(localStorage.getItem("mytoken")).userId;
    var strategyuserId = JSON.parse(sessionStorage.getItem("strategyuserId"));
    this.strategyuserId = strategyuserId;
    if (this.visitor == this.strategyuserId) {
      this.show2 = false;
    }
    // 获取用户信息
    this.$axios
      .post("http://localhost:3000/userCenter/getInfo", {
        userId: this.strategyuserId
      })
      .then(res => {
        this.userInfo = res.data.data;
      })
      .catch(err => {
        console.log("错误信息" + err);
      })
      .finally(function() {
        // always executed
      });
    // 获取用户粉丝
    this.$axios
      .post("http://localhost:3000/userCenter/HisFriends", {
        userId: this.strategyuserId
      })
      .then(res => {
        this.fans = res.data.data;
        console.log(res);
        if (res.data.data == 0) {
          this.fans = [];
        } else {
          for (var i = 0; i < this.fans.length; i++) {
            if (this.fans[i].relationUserId == this.visitor) {
              this.show = false;
            }
          }
          if (i > this.fans.length) {
            this.show = true;
          }
          console.log(this.show);
        }
      })
      .catch(err => {
        console.log("错误信息" + err);
      })
      .finally(function() {
        // always executed
      });
    //获取用户关注
    this.$axios
      .post("http://localhost:3000/userCenter/HisAttentions", {
        userId: this.strategyuserId
      })
      .then(res => {
        console.log("关注查询结果" + res.data.data);
        this.attentions = res.data.data;
        if (res.data.data == 0) {
          this.attentions = [];
        }
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
    current_change(currentPage) {
      this.currentPage = currentPage;
    },
    getPic(pic) {
      //给图片名加上服务器端访问路径
      if (pic == "cover" || pic == null) {
        pic = "primaryCover.jpg";
      }
      let path = "http://localhost:3000/coverPic/" + pic;
      return path;
    },
    go(type, id) {
      var strategy = { type, id };
      var info = JSON.stringify(strategy);
      sessionStorage.setItem("info", info);
      this.$router.push("/index/FVstrategy");
    },
    addFriends() {
      if (localStorage.getItem("mytoken")) {
        let _this = this;
        console.log("type", _this.fans);
        this.$axios
          .post("http://localhost:3000/userCenter/addFriends", {
            relationUserId: this.strategyuserId
          })
          .then(res => {
            if (res.data.data == 1) {
              this.show = false;
              var info = { relationUserId: this.visitor };
              console.log(typeof info);
              console.log(info, this.fans);
              console.log(typeof this.fans);
              this.fans.push(info);
            } else if (res.data.data == -1) {
              this.show = true;
              for (var i = 0; i < this.fans.length; i++) {
                if (this.fans[i].relationUserId == this.visitor) {
                  this.fans.splice(this.fans[i], 1);
                }
              }
            }
          });
      } else {
        this.$message({
          showClose: true,
          message: "亲，请先登录呦！",
          type: "warning"
        });
      }
    },
    fanslist() {
      this.show3 = false;
      var fanslist = JSON.stringify(this.fans);
      var attentions = JSON.stringify(this.attentions);
      sessionStorage.setItem("fanslist", fanslist);
      sessionStorage.setItem("attentions", attentions);
    }
  }
};
</script>
<style scoped>
.jumbotron {
  background: url("../../assets/bgPic/indexPic1.jpg") no-repeat center center;
  background-size: cover;
}
.rounded-circle {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
#content {
  height: 45em;
}
#headPic {
  height: 10rem;
  width: 10rem;
}
#article img:first-child {
  width: 13rem;
  height: 11rem;
}
#relations ul {
  list-style: none;
  width: 10rem;
  padding: 0;
  cursor: pointer;
}
#relations ul li {
  float: left;
  height: 3em;
  line-height: 3em;
  width: 80px;
}
#relations ul li span {
  color: #ff9d00;
}
.addattention {
  margin-left: 48px;
  background-color: #ff9d00;
}
.block {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ccc;
}
</style>
