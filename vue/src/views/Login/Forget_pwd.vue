<template>
  <div>
    <div id="bg"></div>
    <div id="content">
      <article>
        <span>通过手机号找回</span>
        <span>
          <a href="/login">⇠已有账号，直接登录</a>
        </span>
      </article>
      <aside v-if="flag1">
        <input
          class="input"
          type="text"
          placeholder="请输入手机号"
          size="40px"
          v-model="forget_pwd.tel"
          id="tel"
          @blur="test()"
        />
        <span class="tipMsg"></span>
        <div>
          <input
            class="input"
            type="text"
            placeholder="请输入验证码"
            size="20px"
            v-model="forget_pwd.code"
            id="message"
            @blur="test_msg()"
          />
          <input
            type="button"
            value="发送验证码"
            @click="sendMessage()"
            id="check"
          />
          <span class="tipMsg"></span>
        </div>
        <input type="button" value="找回密码" @click="findPwd()" />
      </aside>
      <aside v-if="flag2">
        <input
          type="password"
          placeholder="设置新密码"
          size="30px"
          v-model="forget_pwd.password"
          id="pwd"
          @focus="pwd_tip('focus')"
          @blur="pwd_tip('blur')"
        />
        <span class="tipMsg"></span>
        <div>
          <input
            type="password"
            placeholder="确认新密码"
            size="30px"
            v-model="forget_pwd.password2"
            id="pwd2"
            @focus="pwdcheck_tip('focus')"
            @blur="pwdcheck_tip('blur')"
          />
          <span class="tipMsg"></span>
        </div>
        <input type="button" value="确认修改" @click="setNewPwd()" />
      </aside>
    </div>
  </div>
</template>
<script>
export default {
  name: "Forget_pwd",
  data: function() {
    return {
      forget_pwd: {
        tel: "",
        code: "",
        type: "1",
        password: "",
        password2: ""
      },
      code: null,
      flag1: true,
      flag2: false,
      ispasswordOK: false,
      iscpasswordOK: false
    };
  },
  methods: {
    sendMessage() {
      if (this.forget_pwd.tel) {
        console.log(this.forget_pwd.tel);
        this.$axios
          .post("http://localhost:3000/regist/getVode", this.forget_pwd)
          .then(res => {
            console.log(res);
            if (res.data.data) {
              this.$message({
                message: res.data.msg,
                type: "success"
              });
              this.code = res.data.data;
              var check = document.getElementById("check");
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
        var span = telephone.nextElementSibling;
        span.className = "error";
        span.innerHTML = "不能为空";
        this.value = "";
      }
    },
    findPwd() {
      if (this.forget_pwd.tel == "") {
        var tel = document.getElementById("tel");
        var span = tel.nextElementSibling;
        span.className = "error";
        span.innerHTML = "手机号不能为空";
      } else {
        if (this.code == this.forget_pwd.code) {
          (this.flag1 = false), (this.flag2 = true);
        } else {
          var message = document.getElementById("message");
          var span = message.nextElementSibling;
          span.className = "error";
          span.innerHTML = "验证码不正确";
        }
      }
    },
    test() {
      var tel = document.getElementById("tel");
      var tel_num = tel.value.trim();
      var telReg = /^1(3|4|5|7|8)\d{9}$/;
      var res = telReg.test(tel.value);
      var span = tel.nextElementSibling;
      if (tel_num == "") {
        span.className = "error";
        span.innerHTML = "手机号不能为空";
      } else if (!res) {
        span.className = "error";
        span.innerHTML = "请输入正确的手机号";
      } else {
        span.innerHTML = " ";
      }
    },
    test_msg() {
      var msg = document.getElementById("message");
      var message = msg.value.trim();
      var span = msg.nextElementSibling.nextElementSibling;
      if (message == "") {
        span.className = "error";
        span.innerHTML = "验证码不能为空";
      } else if (message != this.code) {
        span.className = "error";
        span.innerHTML = "验证码不正确";
      } else {
        span.innerHTML = "";
      }
    },
    pwd_tip(flag) {
      var pwd = document.getElementById("pwd");
      if (flag == "focus") {
        var span = pwd.nextElementSibling;
        span.className = "tipMsg";
        span.innerHTML = "密码必须英文+数字，长度8至15位";
      } else {
        var pw = pwd.value.trim();
        if (pw == "") {
          var span = pwd.nextElementSibling;
          span.className = "error";
          span.innerHTML = "密码不能为空";
          pwd.value = "";
          this.ispasswordOK = false;
          return;
        }
        var pwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+$/;
        var res = pwReg.test(pw);
        if (!res) {
          var span = pwd.nextElementSibling;
          span.className = "error";
          span.innerHTML = "密码必须英文+数字";
          pwd.value = "";
          this.ispasswordOK = false;
          return;
        }
        var pwleng = 0;
        for (var i = 0; i < pw.length; i++) {
          pwleng++;
          if (pwleng > 15) {
            var span = pwd.nextElementSibling;
            span.className = "error";
            span.innerHTML = "密码不能超过15位！";
            pwd.value = "";
            this.ispasswordOK = false;
            return;
          }
        }
        if (pwleng < 8) {
          var span = pwd.nextElementSibling;
          span.className = "error";
          span.innerHTML = "密码不能低于8位！";
          pwd.value = "";
          return;
        } else {
          var span = pwd.nextElementSibling;
          span.className = "success";
          span.innerHTML = " ";
          this.ispasswordOK = true;
        }
      }
    },
    pwdcheck_tip(flag) {
      var pwd = document.getElementById("pwd");
      var pwd2 = document.getElementById("pwd2");
      if (flag == "focus") {
        var span = pwd2.nextElementSibling;
        span.className = "tipMsg";
        span.innerHTML = "确认密码";
      } else {
        var pw = pwd.value;
        var cpw = pwd2.value.trim();
        if (cpw == "") {
          var span = pwd2.nextElementSibling;
          span.className = "error";
          span.innerHTML = "不能为空";
          pwd2.value = "";
          return;
          this.iscpasswordOK = false;
        }
        if (cpw != pw) {
          var span = pwd2.nextElementSibling;
          span.className = "error";
          span.innerHTML = "两次输入的密码不同，请重新输入";
          pwd2.value = "";
          this.iscpasswordOK = false;
          return;
        } else {
          var span = pwd2.nextElementSibling;
          span.className = "success";
          span.innerHTML = " ";
          this.iscpasswordOK = true;
        }
      }
    },
    setNewPwd() {
      if (this.ispasswordOK && this.iscpasswordOK) {
        this.$axios
          .post("http://localhost:3000/login/forgetPwd", this.forget_pwd)
          .then(res => {
            console.log(res);
            if (res.data.data) {
              this.$message({
                message: res.data.msg,
                type: "success"
              });
              let _this = this;
              var mytime = setTimeout(function() {
                //  window.location="/login";
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
        this.$message.error("错误信息：请填写正确的密码");
      }
    }
  }
};
</script>
<style scoped>
#bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  /* filter: blur(2px);  */
}
#content {
  width: 950px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
article {
  float: left;
  color: white;
  margin-right: 50px;
  font-weight: lighter;
}
article span {
  font-size: 40px;
  display: block;
}
article span a {
  font-size: 20px;
  color: #ddb6c6;
}
a:hover {
  text-decoration: none;
  color: #f1d4d4;
}
aside {
  float: left;
}
aside div {
  margin-top: 20px;
}
[type="text"],
[type="password"] {
  font-size: 18px;
  padding: 0 30px;
  color: #eee;
  margin-top: 15px;
  height: 32px;
  background-color: transparent;
  outline-style: none;
  border: 0;
  border-bottom: 2px solid #ac8daf;
}
aside [type="button"] {
  height: 37px;
  width: 130px;
  margin-left: 10px;
  border: 1px solid #484c7f;
  border-radius: 3px;
  background-color: #484c7f;
  color: white;
  outline: none;
}
.input:focus {
  border-bottom-color: #ddb6c6;
}
input::-webkit-input-placeholder {
  /* WebKit browsers 适配谷歌 */
  color: #eee;
}
aside div ~ [type="button"] {
  margin-left: 0;
  height: 50px;
  width: 250px;
  margin-top: 50px;
}
.tipMsg {
  color: #aaa;
}
/* 错误提示信息样式 */
.error {
  padding-left: 10px;
  color: #f00;
}
</style>
