<template>
  <div>
    <div class="row">
      <!-- 个人资料导航 -->
      <div class="col-3">
        <div
          class="nav flex-column nav-pills text-center"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            class="nav-link active"
            id="v-pills-userInfo-tab"
            data-toggle="pill"
            href="#v-pills-userInfo"
            role="tab"
            aria-controls="v-pills-userInfo"
            aria-selected="true"
          >个人资料</a>
          <a
            class="nav-link"
            id="v-pills-headPic-tab"
            data-toggle="pill"
            href="#v-pills-headPic"
            role="tab"
            aria-controls="v-pills-headPic"
            aria-selected="true"
          >修改头像</a>
          <a
            class="nav-link"
            id="v-pills-updpws-tab"
            data-toggle="pill"
            href="#v-pills-updpws"
            role="tab"
            aria-controls="v-pills-updpws"
            aria-selected="false"
          >修改密码</a>
          <a
            class="nav-link"
            id="v-pills-updtel-tab"
            data-toggle="pill"
            href="#v-pills-updtel"
            role="tab"
            aria-controls="v-pills-updtel"
            aria-selected="false"
          >修改手机号</a>
        </div>
      </div>
      <!-- 个人资料内容 -->
      <div class="col-9">
        <div class="tab-content" id="v-pills-tabContent">
          <!-- 详细个人资料 -->
          <div
            class="tab-pane fade show active"
            id="v-pills-userInfo"
            role="tabpanel"
            aria-labelledby="v-pills-userInfo-tab"
          >
            <!-- 个人资料进度条 -->
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated bg-success"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 75%"
              >个人资料完整度75%</div>
            </div>
            <!-- 表单 -->
            <form class="mt-4">
              <!-- 用户名 -->
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputUserName">用户名</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputUserName"
                    placeholder="请输入用户名"
                    v-model="userInfo[0].userName"
                  />
                </div>
              </div>
              <!-- 性别 -->
              <div class="form-group">
                <label>性别</label>
                <br />
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="保密"
                    v-model="userInfo[0].sex"
                    checked
                  />
                  <label class="form-check-label" for="inlineRadio1">保密</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="男"
                    v-model="userInfo[0].sex"
                  />
                  <label class="form-check-label" for="inlineRadio2">男</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="女"
                    v-model="userInfo[0].sex"
                  />
                  <label class="form-check-label" for="inlineRadio3">女</label>
                </div>
              </div>
              <!-- email -->
              <div class="form-group">
                <label for="exampleInputEmail1">邮箱</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="请输入您的邮箱地址"
                  v-model="userInfo[0].email"
                />
              </div>
              <!-- 手机号 -->
              <div class="form-group row">
                <label for="inputUserTel" class="col-sm-4 col-form-label">手机号</label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="inputUserTel"
                    v-model="userInfo[0].tel"
                    readonly
                  />
                </div>
              </div>
              <!-- 所在城市 -->
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputUserName">所在地</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="请输入所在地"
                    v-model="userInfo[0].address"
                  />
                </div>
              </div>
              <!-- 用户注册时间 -->
              <div class="form-group row">
                <label class="col-sm-4 col-form-label">注册时间</label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="inputUserRegistserTime"
                    v-model="userInfo[0].registerTime"
                    readonly
                  />
                </div>
              </div>
              <button type="button" class="btn btn-outline-primary" @click="submitForm()">保存</button>
            </form>
          </div>
          <!-- 修改头像 -->
          <div
            class="tab-pane fade"
            id="v-pills-headPic"
            role="tabpanel"
            aria-labelledby="v-pills-headPic-tab"
          >
            <div class="d-flex flex-column">
              <div class="row">
                <div id="updHead" class="ml-5 bg-secondary">
                  <div
                    class="rounded-circle h-100 w-100 bg-white"
                    :style="{'backgroundImage':'url(' + getPic(userInfo[0].headPic) + ')'}"
                  ></div>
                </div>
                <div></div>
                <div id="upload">
                  <!--elementui的上传图片的upload组件-->
                  <el-upload
                    class="upload-demo"
                    ref="upload"
                    list-type="picture-card"
                    action="localhost:3000/userCenter/headPic"
                    :before-upload="beforeupload"
                    :auto-upload="false"
                    :multiple="false"
                    :show-file-list="true"
                  >
                    <i class="el-icon-plus"></i>
                  </el-upload>

                  <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item>
                      <el-button type="primary" @click="onSubmit">确认提交</el-button>
                      <el-button>取消</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </div>
          </div>
          <!-- 修改密码 -->
          <div
            class="tab-pane fade"
            id="v-pills-updpws"
            role="tabpanel"
            aria-labelledby="v-pills-updpws-tab"
          >
            <!-- 手机号 -->
            <div class="form-group row">
              <label for="inputUserTel" class="col-sm-3 col-form-label">手机号</label>
              <div class="col-sm-9 d-flex flex-column">
                <input
                  type="text"
                  class="form-control-plaintext"
                  v-model="userInfo[0].tel"
                  readonly
                />
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="请输入验证码"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    v-model="code"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline-primary" type="button" @click="sendMsg(1)">发送验证码</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- 密码 -->
            <form>
              <!-- 密码 -->
              <div class="form-group row">
                <div class="col-sm-3">
                  <label for="exampleInputPassword1">密码</label>
                </div>
                <div class="col-sm-9">
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    placeholder="请输入新密码"
                    v-model="password"
                    @blur="pwdCheck()"
                  />
                  <small class="form-text text-muted">密码必须是数字+字母</small>
                </div>
              </div>
              <!-- 确认密码 -->
              <div class="form-group row">
                <div class="col-sm-3">
                  <label for="exampleInputPassword1">确认密码</label>
                </div>
                <div class="col-sm-9">
                  <input
                    type="password"
                    id="password2"
                    class="form-control"
                    placeholder="确认密码"
                    @blur="newpwdCheck()"
                    v-model="password2"
                  />
                  <small class="form-text text-muted">需与密码相同</small>
                </div>
              </div>
              <!-- 保存按钮 -->
              <span
                class="d-inline-block"
                data-container="body"
                data-toggle="popover"
                data-placement="bottom"
              >
                <button class="btn btn-outline-secondary" type="button" @click="updatePwd()">保存</button>
              </span>
            </form>
          </div>
          <!-- 修改手机号 -->
          <div
            class="tab-pane fade"
            id="v-pills-updtel"
            role="tabpanel"
            aria-labelledby="v-pills-updtel-tab"
          >
            <!-- 手机号 -->
            <div class="form-group row">
              <label for="inputUserTel" class="col-sm-3 col-form-label">手机号</label>
              <div class="col-sm-9 d-flex flex-column">
                <input type="text" class="form-control" v-model="userInfo[0].tel" />
                <div class="input-group mb-3 mt-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="请输入验证码"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    v-model="code"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline-primary" type="button" @click="sendMsg(0)">发送验证码</button>
                  </div>
                </div>
              </div>
            </div>
            <button class="btn btn-outline-primary" type="button" @click="UpdateTel">确认修改</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserInfo",
  data() {
    return {
      userInfo: [
        {
          userName: "",
          sex: "",
          tel: "",
          headPic: "",
          email: "",
          address: "",
          registerTime: ""
        }
      ],
      code: "",
      code1: "",
      isPwd: false,
      isCpwd: false,
      password: "",
      password2: "",
      fileList: [],
      form: {
        // name: "" //绑定表单元素的属性
      },
      param: "" // 表单最后提交的参数对象
    };
  },
  created() {
    // 获取用户信息
    this.$axios
      .get("http://localhost:3000/userCenter/getUserInfo")
      .then(res => {
        console.log("查询结果" + res.data.data);
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
    $(function() {
      $("#updHeadBtn").click(function() {
        $('input[type="file"]').trigger("click");
      });
    });
  },
  methods: {
    //修改用户信息
    submitForm(formName) {
      this.$axios
        .post("http://localhost:3000/userCenter/updateUser", this.userInfo[0])
        .then(res => {
          console.log("更新成功".res);
          alert("修改成功！");
        })
        .catch(err => {
          console.log("error:" + err);
        })
        .finally(function() {
          // always executed
        });
    },
    //修改用户头像
    onSubmit() {
      let _this = this;
      // var names = _this.form.name;
      this.$refs.upload.submit();
      //将非表单元素的数据也添加到参数对象中；
      // this.param.append("company_id", _this.company_id);
      //设置提交请求头，适用于上传文件
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      // //调用接口，执行上传所有数据的操作
      this.$axios
        .post("http://localhost:3000/userCenter/headPic", this.param, config)
        .then(function(result) {
          console.log(result);
          location.reload();
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //当上传文件组件submit之前触发执行
    beforeupload(file) {
      console.log("准备上传。。。。");
      // 准备表单上传需要的参数对象
      this.param = new FormData();
      this.fileList.push(file); // 把需要上传的文件保存到数组中
      console.log("这是图片文件" + JSON.stringify(this.fileList));
      // 遍历数组，把所有文件都保存到参数对象中
      for (let i = 0; i < this.fileList.length; i++) {
        // this.param.append(`img_${i}`, this.fileList[i]);
        this.param.append(`img`, this.fileList[this.fileList.length - 1]);
      }
      console.log(this.fileList.length);
      // this.param.append(`img`, this.fileList[0]);
      return false;
    },
    //修改电话号
    UpdateTel() {
      if (this.code == this.code1) {
        this.$axios
          .post("http://localhost:3000/userCenter/updataTel", this.userInfo[0])
          .then(res => {
            console.log(res);
            if (res.data.data) {
              this.$message({
                message: res.data.msg + ",请重新登录",
                type: "success"
              });
              let _this = this;
              var mytime = setTimeout(() => {
                _this.$router.push("/login");
              }, 3000);
            } else {
              this.$message.error(res.data.msg);
            }
          })
          .catch(err => {
            console.log("error:" + err);
          })
          .finally(function() {
            // always executed
          });
      }
    },
    //发送信息
    sendMsg(type) {
      let tel = this.userInfo[0].tel;
      var Info = { tel, type };
      console.log(Info);
      this.$axios
        .post("http://localhost:3000/regist/getVode", Info)
        .then(res => {
          console.log(res);
          if (res.data.data) {
            this.code1 = res.data.data;
            this.$message({
              message: "信息发送成功，注意接收",
              type: "success"
            });
          } else {
            this.$message.error(res.data.msg);
          }
        });
    },
    //验证密码
    pwdCheck() {
      var span = document.getElementById("password").nextElementSibling;
      if (this.password == "") {
        span.className = "error";
        span.innerHTML = "密码不能为空";
        this.password = "";
        this.isPwd = false;
        return;
      }
      var pwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+$/;
      var res = pwReg.test(this.password);
      if (!res) {
        span.className = "error";
        span.innerHTML = "密码必须英文+数字";
        this.password = "";
        this.isPwd = false;
        return;
      }
      var pwleng = 0;
      for (var i = 0; i < this.password.length; i++) {
        pwleng++;
        if (pwleng > 15) {
          span.className = "error";
          span.innerHTML = "密码不能超过15位！";
          this.password = "";
          this.isPwd = false;
          return;
        }
      }
      if (pwleng < 8) {
        span.className = "error";
        span.innerHTML = "密码不能低于8位！";
        this.password = "";
        this.isPwd = false;
        return;
      } else {
        span.innerHTML = " ";
        this.isPwd = true;
      }
    },
    //确认密码
    newpwdCheck() {
      var span = document.getElementById("password2").nextElementSibling;
      if (this.password2 == "") {
        span.className = "error";
        span.innerHTML = "不能为空";
        this.password2 = "";
        this.isCpwd = false;
        return;
      }
      if (this.password != this.password2) {
        span.className = "error";
        span.innerHTML = "两次输入的密码不同，请重新输入";
        this.password2 = "";
        this.isCpwd = false;
        return;
      } else {
        span.innerHTML = "";
        this.isCpwd = true;
      }
    },
    //修改密码
    updatePwd() {
      if (this.code == this.code1 && this.isPwd && this.isCpwd) {
        var Info = { tel: this.userInfo[0].tel, password: this.password };
        this.$axios
          .post("http://localhost:3000/login/forgetPwd", Info)
          .then(res => {
            console.log(res);
            if (res.data.data) {
              this.$message({
                message: "密码修改成功,请重新登录",
                type: "success"
              });
              let _this = this;
              var mytime = setTimeout(() => {
                _this.$router.push("/login");
              }, 3000);
            } else {
              this.$message.error(res.data.msg);
            }
          })
          .catch(err => {
            console.log("error:" + err);
          })
          .finally(function() {
            // always executed
          });
      }
    },

    getPic(pic) {
      //给图片名加上服务器端访问路径
      // let path = "http://localhost:3000/uploadHeadPic/" + pic;
      // return path;
    }
  }
};
</script>
<style scoped>
#updHead {
  width: 15em;
  height: 15em;
}
.rounded-circle {
  background-image: url("../../assets/headPic/head1.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.error {
  color: #f00;
}
</style>