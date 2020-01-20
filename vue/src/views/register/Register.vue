<template>
  <div>
    <div id="bg"></div>
    <a href="/index/home">去首页</a>
    <div id="content">
      <h1>注册</h1>
      <!-- <form action id="reg" method="GET"> -->
      <div class="inputBox">
        <input
          type="text"
          v-model="registerUser.username"
          id="username"
          required
          @focus="username_tip('focus')"
          @blur="username_tip('blur')"
        />
        <label>用户名</label>
        <span class="tipMsg"></span>
      </div>
      <div class="inputBox">
        <input
          type="password"
          v-model="registerUser.password"
          id="password"
          required
          @focus="pwd_tip('focus')"
          @blur="pwd_tip('blur')"
        />
        <label>密码</label>
        <span class="tipMsg"></span>
      </div>
      <div class="inputBox">
        <input
          type="password"
          v-model="registerUser.password2"
          id="password2"
          required
          @focus="pwdcheck_tip('focus')"
          @blur="pwdcheck_tip('blur')"
        />
        <label>确认密码</label>
        <span class="tipMsg"></span>
      </div>
      <div class="inputBox">
        <input
          type="text"
          v-model="registerUser.tel"
          id="tel"
          required
          @focus="tel_tip('focus')"
          @blur="tel_tip('blur')"
        />
        <label>手机号码</label>
        <span class="tipMsg"></span>
      </div>
      <div class="inputBox">
        <input
          type="text"
          v-model="registerUser.messagecheck"
          id="messagecheck"
          required
          @focus="mess_tip('focus')"
          @blur="mess_tip('blur')"
        />
        <label>手机验证</label>
        <span class="tipMsg"></span>
        <input type="button" value="获取验证码" id="check" @click="check()" />
      </div>

      <input type="button" value="注册" id="submit" @click="register()" />
      <a href="/login">已账号？去登录→</a>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "register",
  data: function() {
    return {
      registerUser: {
        username: "",
        tel: "",
        password: "",
        password2: "",
        messagecheck: "",
        type: "0"
      },
      isUsernameOk: false,
      isPasswordOk: false,
      isCpasswordOk: false,
      isTelephoneOK: false,
      isMessageOk: false,
      code: null
    };
  },
  methods: {
    username_tip(flag) {
      var span = document.getElementById("username").nextElementSibling
        .nextElementSibling;
      if (flag == "focus") {
        span.className = "tipMsg";
        span.innerHTML = "设置后不可更改，中英文都可以，最长14个英文或7个汉字";
      } else {
        if (this.registerUser.username == "") {
          span.className = "error";
          span.innerHTML = "用户名不能为空";
          this.registerUser.username = "";
          this.isUsernameOk = false;
          return;
        }
        var charReg = /[\u4E00-\u9FA5] | [\w]/; //[]是取反的意思
        var res = charReg.test(this.registerUser.username);
        if (res) {
          span.className = "error";
          span.innerHTML = "用户名仅支持中英文、数字和下划线";
          this.isUsernameOk = false;
          return;
        }
        var numReg = /\D/;
        var res = numReg.test(this.registerUser.username);
        if (!res) {
          span.className = "error";
          span.innerHTML = "用户名仅支持中英文、数字和下划线，且不能位纯数字";
          this.isUsernameOk = false;
          return;
        }
        var len = 0;
        for (var i = 0; i < this.registerUser.username.length; i++) {
          if (/[\u4E00-\u9FA5]/.test(this.registerUser.username[i])) {
            len += 2;
          } else len += 1;
          if (len > 14) {
            break;
          }
        }
        if (len > 14) {
          span.className = "error";
          span.innerHTML = "用户名不能超过7个汉字或14个字符";
          this.isUsernameOk = false;
          return;
        } else {
          span.className = "success";
          span.innerHTML = "√";
          this.isUsernameOk = true;
        }
      }
    },
    pwd_tip(flag) {
      var span = document.getElementById("password").nextElementSibling.nextElementSibling;
      if (flag == "focus") {
        span.className = "tipMsg";
        span.innerHTML = "密码必须英文+数字，长度8至15位";
      } else {
        if (this.registerUser.password == "") {
          span.className = "error";
          span.innerHTML = "密码不能为空";
         this.registerUser.password= "";
          this.isPasswordOk = false;
          return;
        }
        var pwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+$/;
        var res = pwReg.test(this.registerUser.password);
        if (!res) {
          span.className = "error";
          span.innerHTML = "密码必须英文+数字";
          this.registerUser.password= "";
          this.isPasswordOk = false;
          return;
        }
        var pwleng = 0;
        for (var i = 0; i < this.registerUser.password.length; i++) {
          pwleng++;
          if (pwleng > 15) {
            span.className = "error";
            span.innerHTML = "密码不能超过15位！";
            this.registerUser.password = "";
            this.isPasswordOk = false;
            return;
          }
        }
        if (pwleng < 8) {
          span.className = "error";
          span.innerHTML = "密码不能低于8位！";
          this.registerUser.passwords = "";
          this.isPasswordOk = false;
          return;
        } else {
          span.className = "success";
          span.innerHTML = "√";
          this.isPasswordOk = true;
        }
      }
    },
    pwdcheck_tip(flag) {
      var span = document.getElementById("password2").nextElementSibling.nextElementSibling;
      if (flag == "focus") {
        span.className = "tipMsg";
        span.innerHTML = "确认密码";
      } else {
        if (this.registerUser.password2 == "") {
          span.className = "error";
          span.innerHTML = "不能为空";
          this.registerUser.password2 = "";
          this.isCpasswordOk = false;
          return;
        }
        if (this.registerUser.password2 != this.registerUser.password) {
          span.className = "error";
          span.innerHTML = "两次输入的密码不同，请重新输入";
          this.registerUser.password2 = "";
          this.isCpasswordOk = false;
          return;
        } else {
          span.className = "success";
          span.innerHTML = "√";
          this.isCpasswordOk = true;
        }
      }
    },
    tel_tip(flag) {
      var span = document.getElementById("tel").nextElementSibling.nextElementSibling;
      if (flag == "focus") {
        span.className = "tipMsg";
        span.innerHTML = "请输入手机号";
      } else {
        var telReg = /^1(3|4|5|7|8)\d{9}$/;
        var res = telReg.test(this.registerUser.tel);
        if (this.registerUser.tel == "") {
          span.className = "error";
          span.innerHTML = "不能为空";
          this.registerUser.tel = "";
          this.isTelephoneOK = false;
          return;
        }
        if (!res) {
          span.className = "error";
          span.innerHTML = "请输入有效号码！";
          this.isTelephoneOK = false;
          return;
        } else {
          span.className = "success";
          span.innerHTML = "√";
          this.isTelephoneOK = true;
        }
      }
    },
    mess_tip(flag) {
      var span = document.getElementById("messagecheck").nextElementSibling.nextElementSibling;
      if (flag == "focus") {
        span.className = "tipMsg";
        span.innerHTML = "请输入验证码";
      } else {
        if (this.registerUser.messagecheck == "") {
          span.className = "error";
          span.innerHTML = "不能为空";
          this.registerUser.messagecheck = "";
          this.isMessageOk = false;
          return;
        }
        if (this.registerUser.messagecheck != this.code) {
          span.className = "error";
          span.innerHTML = "验证码不正确请重新输入";
          this.registerUser.messagecheck = "";
          this.isMessageOk = false;
          return;
        } else {
          span.className = "success";
          span.innerHTML = "√";
          this.isMessageOk = true;
        }
      }
    },
    check() {
      if (this.registerUser.tel) {
        var check = document.getElementById("check");
        console.log(this.registerUser.tel);
        this.$axios
          .post("http://localhost:3000/regist/getVode", this.registerUser)
          .then(res => {
            console.log(res);
            if (res.data.data) {
              this.$message({
                showClose: true,
                message: res.data.msg,
                type: "success"
              });
              this.code = res.data.data;
              var time = new Date();
              time.setMinutes(time.getMinutes() + 2);
              var now_time = new Date();
              var timmer = 120;
              var timer = window.setInterval(function() {
                check.value = timmer-- + "秒后重新获取";
                if (timmer == -2) {
                  timmer = 0;
                  check.value = "获取验证码";
                  check.disabled = false;
                  console.log(check.disabled);
                  check.style.backgroundColor = "#03a9f4";
                  clearInterval(timer);
                } else {
                  check.disabled = true;
                }
                if (check.disabled) {
                  check.style.backgroundColor = "#aaa";
                }
              }, 1000);
            } else {
              this.$message.error(res.data.msg);
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$message.error("请输入手机号码");
        var telephone = document.getElementById("tel");
        var span = telephone.nextElementSibling.nextElementSibling;
        span.className = "error";
        span.innerHTML = "不能为空";
        this.value = "";
        this.isTelephoneOK = false;
      }
    },
    register() {
      if (
        this.isUsernameOk &&
        this.isPasswordOk &&
        this.isCpasswordOk &&
        this.isTelephoneOK &&
        this.isMessageOk
      ) {
        console.log(1);
        this.$axios
          .post("http://localhost:3000/regist/regist/", this.registerUser)
          .then(res => {
            console.log("返回的数据：" + res);
            if (res.data.data) {
              this.$message({
                showClose: true,
                message: res.data.msg,
                type: "success"
              });
              let _this = this;
              var mytime = setTimeout(function() {
                _this.$router.push("/login");
              }, 3000);
            } else {
              this.$message.error("错误信息：" + res.data.msg);
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$message.error("注册失败,请填写有效信息");
      }
    }
  }
};
</script>
<style lang="css" scoped>
body {
  font-family: sans-serif;
  margin: 0px;
  padding: 0px;
}
#bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/bg.jpg);
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
.inputBox #telephonecheck {
  width: 55%;
}
.inputBox #check {
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  border: none;
  outline: none;
  color: #fff;
  background: #03a9f4;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}
#content a {
  position: absolute;
  bottom: 35px;
  left: 330px;
  color: #03a9f4;
  font-size: 13px;
}
.tipMsg {
  color: #aaa;
}
/* 错误提示信息样式 */
.error {
  color: #f00;
}
/* 成功提示信息样式 */
.success {
  color: #0f0;
}
</style>