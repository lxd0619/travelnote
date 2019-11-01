<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="粉丝" name="first">
        <div style="height:650px;">
          <ul>
            <li
              v-for="li in list.slice((currentPage-1)*pagesize,(currentPage)*pagesize)"
              :key="li.index"
              @click="go(li.userId)"
            >
              <img
                :src="getHeadPic(li.headPic)"
                alt
                class="rounded-circle"
                style="width:5rem;height:5rem;"
              />
              <h4>{{li.userName}}</h4>
            </li>
          </ul>
        </div>
        <div class="block">
          <el-pagination
            :page-size="pagesize"
            :pager-count="11"
            layout="prev, pager, next"
            :total="allPage"
            @current-change="current_change"
          ></el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="关注" name="second">
        <div style="height:650px;">
          <ul>
            <li
              v-for="group in attentionslist.slice((currentPage1-1)*pagesize,(currentPage1)*pagesize)"
              :key="group.index"
            >
              <img
                :src="getHeadPic(group.headPic)"
                alt
                class="rounded-circle"
                style="width:5rem;height:5rem;"
              />
              <h4 @click="go(group.userId)">{{group.userName}}</h4>
              <el-button
                type="warning"
                v-if="show"
                @click="addFriends(group.userId)"
                style="float:right; margin-top:15px; margin-right:15px;"
              >取消关注</el-button>
            </li>
          </ul>
        </div>
        <div class="block">
          <el-pagination
            :page-size="pagesize"
            :pager-count="11"
            layout="prev, pager, next"
            :total="allPage"
            @current-change="current_change1(currentPage1)"
          ></el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import jwt_decode from "jwt-decode";
export default {
  name: "List",
  data() {
    return {
      list: [],
      attentionslist: [],
      activeName: "first",
      show: false,
      currentPage: 1,
      currentPage1: 1,
      pagesize: 8,
      allPage: "",
      allPage1: ""
    };
  },
  created() {
    var fanslist = JSON.parse(sessionStorage.getItem("fanslist"));
    var attentions = JSON.parse(sessionStorage.getItem("attentions"));
    var strategyuserId = JSON.parse(sessionStorage.getItem("strategyuserId"));
    var visitor = jwt_decode(localStorage.getItem("mytoken")).userId;
    console.log(strategyuserId, visitor);
    /** */
    if (strategyuserId == visitor) {
      this.show = true;
    } else {
      this.show = false;
    }
    console.log(this.show);
    this.allPage = fanslist.length;
    this.allPage1 = attentions.length;
    for (var i = 0; i < fanslist.length; i++) {
      this.$axios
        .post("http://localhost:3000/userCenter/getInfo", {
          userId: fanslist[i].relationUserId
        })
        .then(res => {
          if (res.data.data) {
            this.list.push(res.data.data[0]);
          }
        });
    }
    /** */
    for (var i = 0; i < attentions.length; i++) {
      this.$axios
        .post("http://localhost:3000/userCenter/getInfo", {
          userId: attentions[i].userId
        })
        .then(res => {
          if (res.data.data) {
            this.attentionslist.push(res.data.data[0]);
          }
        });
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getHeadPic(pic) {
      //给图片名加上服务器端访问路径
      let path = "";
      if (pic == null || pic == "" || pic == "headPic") {
        pic = "primaryHead.jpeg";
      }
      path = "http://localhost:3000/uploadHeadPic/" + pic;
      return path;
    },
    go(userId) {
      sessionStorage.setItem("strategyuserId", userId);
      window.open("/index/focus");
    },
    addFriends(strategyuserId) {
      this.$axios
        .post("http://localhost:3000/userCenter/addFriends", {
          relationUserId: strategyuserId
        })
        .then(res => {
          console.log(res);
          if (res.data.data == -1) {
            console.log(res.data.msg);
            this.$message("取消关注成功");
          }
        });
    },
    current_change(currentPage) {
      this.currentPage = currentPage;
    },
    current_change1(currentPage1) {
      this.currentPage1 = currentPage1;
    }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
ul li {
  /* background-color: rgb(253, 249, 249); */
  cursor: pointer;
  border: 1px solid #eeeeee;
}
ul li:hover {
  box-shadow: 0px 5px 5px rgba(245, 243, 243);
  /* background-color: rgb(233, 233, 233); */
  transition: 0.3s all;
}
h4 {
  margin-left: 30px;
  display: inline;
}
#headPic {
  height: 6rem;
  width: 6rem;
}
#headPic img {
  height: 10rem;
  width: 10rem;
}
.block {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>