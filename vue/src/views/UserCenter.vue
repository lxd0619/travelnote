<template>
  <div class="person">
    <div
      class="jumbotron jumbotron-fluid"
      style="background: url(../assets/bgPic/userCenterbg.jpg) no-repeat center center;background-size: cover;"
      id="topPic"
    >
      <div class="container">
        <h1 class="text-light">旅游札记</h1>
        <br />
        <h3 class="text-light">更懂世界，更懂你！！！</h3>
      </div>
    </div>

    <ul>
      <li>{{userInfo}}</li>
      <!-- <li>{{userInfo[0].userName}}</li> -->
    </ul>

    <div class="container">
      <div class="row mb-5">
        <!-- 左侧边栏 -->
        <div class="col-md-3 d-flex flex-column align-items-center">
          <!-- 圆形头像 -->
          <div class="rounded-circle" id="headPic"></div>
        </div>
        <!-- 中间部分 -->
        <div class="col-md-8" id="content">
          <!-- 上部导航 -->
          <ul class="nav nav-tabs justify-content-center mb-5" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >个人信息</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="article-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >我的攻略</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="collection-tab"
                data-toggle="tab"
                href="#collection"
                role="tab"
                aria-controls="collection"
                aria-selected="false"
              >我的收藏</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="message-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >我的消息</a>
            </li>
          </ul>
          <!-- 内容 -->
          <div class="tab-content" id="myTabContent">
            <!-- 个人信息 -->
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
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
                              type="email"
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
                              value="option1"
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
                              value="option2"
                            />
                            <label class="form-check-label" for="inlineRadio2">男</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio3"
                              value="option3"
                            />
                            <label class="form-check-label" for="inlineRadio3">女</label>
                          </div>
                        </div>
                        <!-- email -->
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="请输入您的email"
                            v-model="userInfo[0].email"/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
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
                          <div class="form-group col-md-4">
                            <label for="inputProvince">省</label>
                            <select id="inputProvince" class="form-control">
                              <option selected>Choose...</option>
                              <option>...</option>
                            </select>
                          </div>
                          <div class="form-group col-md-4">
                            <label for="inputCity">市</label>
                            <select id="inputCity" class="form-control">
                              <option selected>Choose...</option>
                              <option>...</option>
                            </select>
                          </div>
                          <div class="form-group col-md-4">
                            <label for="inputZip">区</label>
                            <select id="inputZip" class="form-control">
                              <option selected>Choose...</option>
                              <option>...</option>
                            </select>
                          </div>
                        </div>
                        <!-- 用户注册时间 -->
                        <div class="form-group row">
                          <label class="col-sm-5 col-form-label">注册时间</label>
                          <div class="col-sm-7">
                            <input
                              type="text"
                              class="form-control-plaintext"
                              id="inputUserRegistserTime"
                              v-model="userInfo[0].registerTime"
                              readonly
                            />
                          </div>
                        </div>
                        <button type="submit" class="btn btn-outline-primary">保存</button>
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
                        <div class="rounded-circle h-100 w-100 bg-danger"></div>
                      </div>
                      <form class="mt-4 ml-4">
                        <button type="button" id="updHeadBtn" class="btn btn-outline-primary">选择头像</button>
                        <small class="form-text text-muted">支持jpg、png、jpeg、bmp，图片大小5M以内</small>
                      </form>
                      <div class="form-group invisible">
                        <label for="exampleFormControlFile1">上传文件</label>
                        <input type="file" class="form-control-file" />
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
                            value="17645190289"
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
                            <input
                              type="password"
                              class="form-control"
                              placeholder="请输入新密码"
                              readonly
                            />
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
                          <input type="text" class="form-control" value="17645190289" />
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 我的攻略 -->
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="article-tab">
              <div class="card-deck">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../assets/scenerySpot/开普勒步道.jpeg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">苏州博物馆</h5>
                    <p class="card-text">·传统的苏州园林风格，高低错落，深灰色屋面与白墙相衬，整个博物馆宛若一座小园林。</p>
                  </div>
                </div>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../assets/scenerySpot/贡嘎.jpeg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">同里古镇</h5>
                    <p class="card-text">·江南六同里古镇是大古镇之一，始建于宋代，至今已有1000多年历史。</p>
                  </div>
                </div>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../assets/scenerySpot/利川.jpeg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">七里山塘</h5>
                    <p class="card-text">东连“红尘中一、二等富贵风流之地”阊门，西接“吴中第一名胜”虎丘，长约七里。</p>
                  </div>
                </div>
              </div>
              <!-- 分页 -->
              <nav
                class="justify-content-end align-text-bottom"
                aria-label="Page navigation example"
              >
                <ul class="pagination justify-content-center">
                  <li class="page-item">
                    <a class="page-link" href="#">上一页</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">下一页</a>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- 我的收藏 -->
            <div
              class="tab-pane fade"
              id="collection"
              role="tabpanel"
              aria-labelledby="collection-tab"
            >
              <div class="card-deck">
                <div class="card">
                  <img class="card-img-top" src="../assets/food/东京美食.jpeg" alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">松鹤楼</h5>
                    <p class="card-text">·松鹤楼是老字号的苏州菜馆，创建于清乾隆二十二年(1757年)。</p>
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top" src="../assets/food/乐山.jpeg" alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">得月楼</h5>
                    <p class="card-text">
                      ·得月楼是苏州菜传统老店，老电影《小小得月楼》就是以此为背景创造的。
                      <br />
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top" src="../assets/food/延吉.jpeg" alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">哑巴生煎</h5>
                    <p class="card-text">
                      ·被称作全苏州最好吃的生煎，主营甜口生煎。
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <!-- 分页 -->
              <nav
                class="justify-content-end align-text-bottom"
                aria-label="Page navigation example"
              >
                <ul class="pagination justify-content-center">
                  <li class="page-item">
                    <a class="page-link" href="#">上一页</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">下一页</a>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- 我的消息 -->
            <div
              class="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="message-tab"
            >...</div>
          </div>
        </div>
        <div class="col-md-1">
          <div id="list-example" class="list-group position-fixed text-center" style="width: 4rem;">
            <a class="list-group-item" href="#head">
              <i class="fa fa-chevron-up" aria-hidden="true"></i>
            </a>
            <a class="list-group-item" href="#">反馈</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
          userName:'',
          sex:'',
          tel:'',
          headPic:'',
          email:'',
          address:'',
          registerTime:''
      },
    };
  },
  created() {
    this.$axios
      .get("http://localhost:3000/userCenter/getUserInfo")
      .then(res => {
        console.log("查询结果" + res.data.data);
        this.userInfo = res.data.data;
      })
      .catch(err => {
        console.log("错误信息" + err);
      });
  },
  mounted() {
      let _this = this
    $(function() {
      $('[data-toggle="popover"]').popover({
        container: "body"
      });
    });
  },
  methods: {
    goHome() {
      this.$router.push("/index/home");
    }
  }
};
</script>
<style scoped>
.rounded-circle {
  background-image: url(../assets/headPic/head1.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

#headPic {
  height: 10rem;
  width: 10rem;
}

#headPic:hover::before {
  content: "";
  display: block;
  width: 10rem;
  height: 10rem;
  border-radius: 75px;
  background: rgba(0, 0, 0, 0.5) url(../assets/camera.png) 50% no-repeat;
  cursor: pointer;
}

#content {
  height: 40em;
}

#updHead {
  width: 15em;
  height: 15em;
}
</style>