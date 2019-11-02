<template>
  <div>
    <div :style="{'backgroundImage':'url(' + getCoverPic(strategyInfo[0].cover) + ')','width':'100%','height':'100%','position':'fixed','background-repeat':'no-repeat','background-size':'100% 100%'}"></div>
    <div id="main">
      <div class="nav">
        <span>攻略详情</span>
        <a href="/manage">返回</a>
      </div>
      <div id="left">
        <div id="content" v-for="info in strategyInfo.slice(0,1)" :key="info.strategyId">
          <h1>{{info.title}}</h1>
          <p>作者：{{info.userName}}</p>
          <P>时间:{{info.ssTime}}</P>
          <div v-html="info.ssInfo"></div>
        </div>
        <div id="button" v-if="flage">
          <el-button type="success" icon="el-icon-check" @click="OK()"></el-button>
          <el-button
            type="danger"
            icon="el-icon-close"
            data-toggle="modal"
            data-target="#myModal"
            v-if="show"
          ></el-button>
        </div>
      </div>
    </div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">{{msg2}}</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <textarea
              name
              id="backtext"
              cols="78"
              rows="10"
              style="resize: none;width:100%"
              v-model="sysMsgContent"
            ></textarea>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" id="sure" @click="push()">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Article",
  data() {
    return {
      strategyInfo: [],
      ok_ssStatus: null,
      fail_ssStatus: null,
      msg1: "",
      msg2: "",
      msg3: "",
      msg4: "",
      flage: false,
      sysMsgContent: null,
      show: true
    };
  },
  created() {
    var strategy = JSON.parse(sessionStorage.getItem("strategy"));
    console.log(strategy);
    this.$axios
      .post("http://localhost:3000/operation/strategydetail", strategy)
      .then(res => {
        console.log(res);
        if (res.data.data) {

          this.strategyInfo = res.data.data;
           this.strategyInfo[0].ssTime = this.strategyInfo[0].ssTime.slice(
          0,
          this.strategyInfo[0].ssTime.indexOf("T")
        );
          if (this.strategyInfo[0].ssStatus == -1) {
            //攻略未审核
            this.flage = true;
            this.ok_ssStatus = 0; //攻略通过审核，为正常攻略
            this.fail_ssStatus = -2; //攻略驳回状态
            this.msg1 = "是否确认通过"; 
            this.msg2 = "请输入驳回原因";
            this.msg3 = "未通过审核";
            this.msg4 = "审核通过";
            this.show = true;
          } else if (this.strategyInfo[0].ssStatus >= 1) {
            //攻略被举报
            this.flage = true;
            this.ok_ssStatus = 0; //恢复正常文章
            this.fail_ssStatus = -3; //封贴
            this.msg1 = "是否恢复成正常文章";
            this.msg2 = "请输入封贴原因";
            this.msg3 = "被封了";
            this.show = true;
          } else if (this.strategyInfo[0].ssStatus == -3) {
            //被封的攻略
            this.flage = true;
            this.ok_ssStatus = 0; //恢复成正常攻略
            this.msg1 = "是否恢复成正常文章";
            this.msg4 = "已经恢复成正常文章";
            this.show = false;
          }
        }
      });
  },
  methods: {
    OK() {
      var tableName = this.strategyInfo[0].type;
      var strategyId = this.strategyInfo[0].strategyId;
      var ssStatus = this.ok_ssStatus;
      var Info = { tableName, ssStatus, strategyId };
      var userId = this.strategyInfo[0].userId;
      var sysMsgContent ="@" +this.strategyInfo[0].userName +":您的攻略[" + this.strategyInfo[0].title +']'+this.msg4+'</br>'
      var message = { sysMsgContent, userId };
      console.log(this.strategyInfo[0].ssStatus, Info);
      if (confirm(this.msg1)) {
        // location.href = "manage.html";
        this.$axios
          .post("http://localhost:3000/manage/Status", Info)
          .then(res => {
            if (res.data.data) {
              this.$message({
                message: "审核通过",
                type: "success"
              });
              this.$axios
                .post("http://localhost:3000/manage/sendMessage", message)
                .then(res => {
                  console.log(res);
                  if (res.data.data) {
                    this.$message({
                      message: "信息发送成功",
                      type: "success"
                    });
                    let _this = this;
                    let mytime = setTimeout(function() {
                      _this.$router.push("/manage");
                    }, 2000);
                  } else {
                    this.$message.error("信息发送失败");
                  }
                  console.log(res);
                });
              this.$router.push("/manage");
            }else{
              this.$message.error("状态修改失败")
            }
            console.log(res);
          });
      }
    },
    push() {
      if (this.sysMsgContent == null) {
        this.$message.error(this.msg2);
      } else {
        var tableName = this.strategyInfo[0].type;
        var strategyId = this.strategyInfo[0].strategyId;
        var ssStatus = this.fail_ssStatus;
        var Info = { tableName, ssStatus, strategyId };
        var userId = this.strategyInfo[0].userId;
        var sysMsgContent ="@" +this.strategyInfo[0].userName +":您的攻略[" + this.strategyInfo[0].title +']'+this.msg3+'</br>' +this.sysMsgContent;
        console.log(sysMsgContent);
        var message = { sysMsgContent, userId };
        console.log(sysMsgContent);

        this.$axios
          .post("http://localhost:3000/manage/Status", Info)
          .then(res => {
            if (res.data.data) {
              this.$message({
                message: "成功",
                type: "success"
              });
              this.$axios
                .post("http://localhost:3000/manage/sendMessage", message)
                .then(res => {
                  console.log(res);
                  if (res.data.data) {
                    this.$message({
                      message: "信息发送成功",
                      type: "success"
                    });
                    let _this = this;
                    let mytime = setTimeout(function() {
                      _this.$router.push("/manage");
                    }, 2000);
                  } else {
                    this.$message.error("信息发送失败");
                  }
                  console.log(res);
                });
            } else {
              this.$message.error("失败");
            }
          });
        $("#myModal").modal("hide");
      }
    },
    getCoverPic(pic) {
      //给图片名加上服务器端访问路径
      if (pic == "cover" || pic == null) {
        pic = "primaryCover.jpg";
      }
      let path = "http://localhost:3000/coverPic/" + pic;
      console.log(path)
      return path;
    },
  }
};
</script>
<style scoped>
.main{
  width: 100%;
  position: absolute;
}
.nav {
  position: relative;
  width: 100%;
  height: 60px;
  /* background-color: #00b894; */
}
.nav span {
  color: white;
  padding-left: 50px;
  line-height: 60px;
  font-size: 30px;
}
.nav a {
  position: absolute;
  right: 10px;
  line-height: 60px;
  padding-right: 20px;
  font-size: 20px;
  color: white;
}

#left {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 75%;
  margin-bottom: 20px;
}
#content {
  margin-top: 50px;
  margin-right: 40px;
  width: 85%;
  border: 1px solid #aaaaaa;
  box-shadow: 6px 5px 5px #807e7e;
  padding: 50px 50px;
  background-color: white;
}
#content img {
  width: 500px;
  height: 400px;
}
#button {
  position: absolute;
  bottom: 0;
  left: 85%;
  width: 40px;
}
#button button {
  margin-top: 10px;
  box-shadow: 4px 5px 5px #807e7e;
  float: left;
  outline-style: none;
}
.el-button + .el-button {
  margin: 0;
}
.modal-dialog {
  max-width: 700px;
}
.modal {
  top: 50%;
  transform: translate(0, -40%);
}
</style>