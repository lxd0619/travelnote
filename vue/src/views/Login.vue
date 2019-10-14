<template>
  <div>
    <div id="bg"></div>
    <a href="/index">去首页</a>
    <div id="content">
      <h1>登录</h1>
      <form action="#">
        <div class="inputBox">
          <input
            type="text"
            required
            v-model="loginUser.tel"
            id="tel"
            @focus="tel_tip('focus')"
            @blur="tel_tip('blur')"
          />
          <label for>电话号</label>
          <span></span>
        </div>
        <div class="inputBox">
          <input
            type="password"
            required
            v-model="loginUser.password"
            id="password"
            @focus="pwd_tip('focus')"
            @blur="pwd_tip('blur')"
          />
          <label for>密码</label>
          <span></span>
        </div>
        <input type="button" value="登录" @click="login()" />
        <!-- `checked` 为 true 或 false -->
        <el-checkbox v-model="checked" id="reb">记住密码</el-checkbox>

        <!-- <input type="checkbox" id="checkbox" />
        <label for="checkbox">记住密码</label>-->
        <a href="/forget_pwd" class="forget">忘记密码？</a>
        <a href="/register" class="regist">没有账号?去注册→</a>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data: function() {
    return {
      loginUser: {
        tel: "",
        password: ""
      },
      checked: false
    };
  },
  created() {
    if (localStorage.getItem("password")) {
      this.checked = true;
      this.loginUser.tel=localStorage.getItem("tel");
      this.loginUser.password=localStorage.getItem("password")
    }
  },
  methods: {
    login() {
      this.$axios
        .post("http://localhost:3000/login/login", this.loginUser)
        .then(res => {
          if (res.data.data) {
            console.log(this.loginUser.password);
            if (this.checked) {
              localStorage.setItem("tel", this.loginUser.tel);
              localStorage.setItem("password", this.loginUser.password);
            }
            localStorage.setItem("mytoken", res.data.token); //1.把token保存到本地存储
            this.$message({
              message: "登录成功，即将进入精彩时刻！",
              type: "success"
            });
            let _this = this;
            var mytime = setTimeout(function() {
              _this.$router.push("/index/home"); //路由转向登录组件
            }, 3000);
          } else {
            this.$message.error(res.data.msg);
            console.log(res.data.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    tel_tip(flag) {
      var tel = document.getElementById("tel");
      var span = tel.nextElementSibling.nextElementSibling;
      if (flag == "focus") {
        span.className = "tipMsg";
        span.innerHTML = "请输入手机号";
      } else {
        if (tel.value == "") {
          span.className = "error";
          span.innerHTML = "手机号不能为空";
        }
      }
    },
    pwd_tip(flag) {
      var pwd = document.getElementById("password");
      var span = pwd.nextElementSibling.nextElementSibling;
      if (flag == "focus") {
        span.className = "tipMsg";
        span.innerHTML = "请输入密码";
      } else {
        if (pwd.value == "") {
          span.className = "error";
          span.innerHTML = "密码不能为空";
        }
      }
    }
  }
};
</script>
<style  scoped>
body {
  font-family: sans-serif;
  margin: 0px;
  padding: 0px;
}
#bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(../assets/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  /* filter: blur(2px);  */
}
a {
  position: relative;
  text-decoration: none;
  font-size: 15px;
  color: white;
}
#content {
  width: 500px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
}
h1 {
  margin: 0 0 30px;
  font-size: 30px;
  color: #eeeeee;
  font-weight: normal;
  text-align: center;
}
.inputBox {
  position: relative;
  margin-bottom: 30px;
}
.inputBox input {
  width: 100%;
  padding: 10px 0px;
  font-size: 16px;
  color: #eeeeee;
  border: none;
  border-bottom: 1px solid #eeeeee;
  background: transparent;
  outline-style: none;
  margin-bottom: 10px;
}
.inputBox label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #eeeeee;
  pointer-events: none;
  transition: 0.5s;
}
.inputBox input:focus ~ label,
.inputBox input:valid ~ label {
  /*:focus获取焦点*/
  /* :valid 需要配合required使用 当input输入内容后并失去焦点时 label任然保持以下样式  required属性规定必需在提交表单之前填写输入字段 布尔类型 。*/
  /*~获取父元素中所有label标签*/
  top: -30px;
  left: 0px;
  color: #03a9f4;
}
[type="button"] {
  border: none;
  outline: none;
  color: #fff;
  background: #03a9f4;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}
.el-checkbox {
  margin-left: 10px;
  margin-bottom: 0px;
  padding-top: 10px;
}
.forget {
  position: absolute;
  bottom: 60px;
  right: 55px;
  color: #03a9f4;
  font-size: 13px;
}
.regist {
  position: absolute;
  bottom: 35px;
  left: 330px;
  color: #03a9f4;
  font-size: 13px;
}
label {
  color: white;
}
.tipMsg {
  color: #aaa;
}
.error {
  color: #f00;
}
</style>