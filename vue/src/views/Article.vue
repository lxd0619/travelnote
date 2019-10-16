<template>
  <div>
    <div id="main">
      <div class="nav">
        <span>攻略详情</span>
        <a href="/manage">返回</a>
      </div>
      <div id="left">
        <div id="content" v-for="info in strategyInfo" :key="info.strategyId">
          <h1>{{info.title}}</h1>
          <p>作者：{{info.userName}}</p>
          <P>时间:{{info.ssTime}}</P>
          <p>{{info.ssInfo}}</p>
        </div>
        <div id="button" v-if="flage">
          <el-button type="success" icon="el-icon-check" @click="OK()"></el-button>
          <el-button type="danger" icon="el-icon-close"></el-button>
        </div>
      </div>
    </div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">请输入驳回理由</h4>
          </div>
          <div class="modal-body">
            <textarea name id="backtext" cols="78" rows="10" style="resize: none"></textarea>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" id="sure">确定</button>
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
      msg: "",
      flage: false
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
          console.log(this.strategyInfo);
          if (this.strategyInfo[0].ssStatus == -1) {
            //攻略未审核
            this.flage = true;
            this.ok_ssStatus = 0; //攻略通过审核，为正常攻略
            this.fail_ssStatus = -2;
            this.msg = "是否确认通过"; //攻略驳回状态
          } else if (this.strategyInfo[0].ssStatus == 1) {
            //攻略被举报
            this.flage = true;
            this.ok_ssStatus = 0; //恢复正常文章
            this.fail_ssStatus = 2; //封贴
            this.msg = "是否恢复成正常文章";
          } else if (this.strategyInfo[0].ssStatus == 2) {
            //被封的攻略
            this.flage = true;
            this.ok_ssStatus = 0; //恢复成正常攻略
            this.msg = "是否恢复成正常文章";
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
      console.log(this.strategyInfo[0].ssStatus, Info);
      if (confirm(this.msg)) {
        // location.href = "manage.html";
        this.$axios
          .post("http://localhost:3000/manage/Status", Info)
          .then(res => {
            if (res.data.data) {
              alert("审核通过");
              this.$router.push("/manage");
            }

            console.log(res);
          });
      }
    }
  }
};
</script>
<style scoped>
.nav {
  width: 100%;
  height: 60px;
  background-color: #00b894;
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
  float: left;
  position: relative;
  width: 75%;
}
#content {
  float: right;
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
  right: 0;
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
</style>