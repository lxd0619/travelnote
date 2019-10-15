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
            <div id="updHead" class="ml-5 bg-secondary">
              <div class="rounded-circle h-100 w-100"></div>
            </div>
            <form class="mt-4 ml-4">
              <button type="button" id="updHeadBtn" class="btn btn-outline-primary">选择头像</button>
              <small class="form-text text-muted">上传头像图片只能是 JPG 格式!，图片大小2M以内</small>
            </form>
            <div class="form-group invisible">
              <label for="exampleFormControlFile1">上传文件</label>
              <input type="file" class="form-control-file" @change="uploadHead()" />
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
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline-primary" type="button">发送验证码</button>
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
                  <input type="password" class="form-control" placeholder="请输入新密码" readonly />
                  <small class="form-text text-muted">密码可以是数字、字母</small>
                </div>
              </div>
              <!-- 确认密码 -->
              <div class="form-group row">
                <div class="col-sm-3">
                  <label for="exampleInputPassword1">确认密码</label>
                </div>
                <div class="col-sm-9">
                  <input type="password" class="form-control" placeholder="确认密码" readonly />
                  <small class="form-text text-muted">需与密码相同</small>
                </div>
              </div>
              <!-- 保存按钮 -->
              <span
                class="d-inline-block"
                data-container="body"
                data-toggle="popover"
                data-placement="bottom"
                data-content="您需要先验证手机号才能修改密码"
              >
                <button
                  class="btn btn-outline-secondary"
                  style="pointer-events: none;"
                  type="button"
                  @click="updatePwd"
                  disabled
                >保存</button>
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
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline-primary" type="button">发送验证码</button>
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
      ]
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
    uploadHead() {
      this.$axios
        .post("http://localhost:3000/users/uploadHeadPic", file)
        .then(res => {
          console.log("头像上传成功！".res);
          alert("头像上传成功！");
        })
        .catch(err => {
          console.log("error:" + err);
        })
        .finally(function() {
          // always executed
        });
    },
    //修改电话号
    UpdateTel() {
      this.$axios
        .post("http://localhost:3000/userCenter/updataTel", this.userInfo[0])
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
    //修改密码
    updatePwd() {
      this.$axios
        .post("http://", this.userInfo[0])
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
    }
  }
};
</script>
<style scoped>
#updHead {
  width: 15em;
  height: 15em;
}
</style>