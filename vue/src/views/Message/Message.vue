/**消息中心 */
<template>
  <div>
    <div id="content">
      <div id="left">
        <ul>
          <li>
            <div
              class="rounded-circle mr-5"
              id="headPic"
              :style="{
                backgroundImage: 'url(' + getHeadPic(userInfo[0].headPic) + ')',
                position: 'relative',
                top: '3px'
              }"
            ></div>
            <div
              class="mt-3 mr-5 text-center"
              style="height:29px;position:relative; transform:translate(0,-100%);"
            >
              <h4>{{ userInfo[0].userName }}</h4>
            </div>
          </li>
          <li>
            <h5><i class="el-icon-message"></i> 消息中心</h5>

            <p @click="News(0)">
              <span>
                <i class="el-icon-chat-line-round"></i>
                未读消息
              </span>
              <el-badge :value="sysnumber" class="item" v-if="show1"></el-badge>
            </p>

            <p @click="News(1)">
              <span> <i class="el-icon-chat-round"></i>已读消息 </span>
            </p>
          </li>
        </ul>
      </div>
      <div id="right">
        <div v-if="show">
          <ul>
            <li
              v-for="ms in msg.slice(
                (currentPage - 1) * pagesize,
                currentPage * pagesize
              )"
              :key="ms.sysMsgId"
              data-toggle="modal"
              data-target="#myModal"
              @click="detail(ms.sysMsgId, ms.sysMsgContent)"
            >
              <a>详情>></a>
              <span v-html="ms.sysMsgContent"></span>
            </li>
          </ul>
        </div>
        <div
          v-else
          style="border: 1px solid rgb(213, 219, 211); width:100%;height:100%;position:relative"
        >
          <h1>暂无信息</h1>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">详情</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" v-html="li"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="close">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Message",
  data() {
    return {
      userInfo: [
        {
          headPic: ""
        }
      ],
      sysnumber: "",
      msg: [],
      currentPage: 1,
      pagesize: 10,
      allpages: 0,
      show: false,
      show1: false,
      li: ""
    };
  },
  created() {
    this.$axios
      .get("http://localhost:3000/userCenter/getUserInfo")
      .then(res => {
        console.log(res.data.data);
        this.userInfo = res.data.data;
        this.userInfo[0].registerTime = this.userInfo[0].registerTime.slice(
          0,
          this.userInfo[0].registerTime.indexOf("T")
        );
      })
      .catch(err => {
        console.log("错误信息" + err);
      })
      .finally(function() {
        // always executed
      });
    this.News(0);
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
    News(type) {
      this.$axios
        .post("http://localhost:3000/userCenter/sysMessage", { type: type })
        .then(res => {
          if (res.data.data) {
            if (type == 0) {
              this.show1 = true;
            } else {
              this.show1 = false;
            }
            this.show = true;
            this.sysnumber = res.data.data.length;
            this.msg = res.data.data;
            this.allpages = res.data.data.length;
          } else {
            this.show = false;
          }
          console.log(res);
        });
    },
    detail(id, content) {
      this.$axios
        .post("http://localhost:3000/userCenter/sysMessage_change", {
          sysMsgId: id
        })
        .then(res => {
          if (res.data.data) {
            this.li = content;
            this.sysnumber--;
            if (this.sysnumber <= 0) {
              this.sysnumber = 0;
            }
          } else {
            this.$message.error(res.data.msg);
          }
        });
    },
    close() {
      $("#myModal").modal("hide");
    }
  }
};
</script>
<style scoped>
#content {
  height: 800px;
  display: flex;
  max-width: 1190px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  margin-bottom: 20px;
}
#right {
  flex: 3;
}
#left {
  flex: 1;
}
ul {
  height: 100%;
  width: 100%;
  list-style: none;
  padding: 0;
  border: 1px solid rgb(213, 219, 211);
}
ul li {
  padding-left: 20px;
  width: 100%;
  position: relative;
  border-bottom: 1px solid rgb(213, 219, 211);
}
.rounded-circle {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

/**头像 */
#headPic {
  height: 6rem;
  width: 6rem;
  margin: 1rem 0;
  margin-left: 1rem;
}
#headPic img {
  height: 8rem;
  width: 8rem;
}
/**左边列表 */
#left ul li:nth-child(1) {
  background-color: #f8f8f8;
}
li div {
  margin: 0;
  display: inline-block;
}
h4 {
  margin: 0;
}
h5 {
  height: 60px;
  line-height: 60px;
  cursor: pointer;
}
p span {
  color: #777;
  text-indent: 15px;
  cursor: pointer;
}
p:hover {
  color: #222;
  transition: 0.3s all;
}
/*小气泡定位 */
.el-badge {
  top: -5px;
  left: -6px;
}
/* 右边信息列表*/
#right ul li {
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  cursor: pointer;
}
#right ul li:hover {
  box-shadow: 0px 5px 5px #eee;
  background-color: rgb(252, 255, 255);
  transition: 0.3s all;
}
#right ul li a {
  position: absolute;
  right: 20px;
  /* color: */
}
a:hover {
  text-decoration: none;
}
h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ccc;
}
/*分页*/
.block {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
/**模态框 */
.modal-footer,
.modal-header {
  border: 0;
}
</style>
