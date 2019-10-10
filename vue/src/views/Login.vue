<template>
  <div class="login">
    <el-form
      :model="loginUser"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="loginForm"
    >
      <el-form-item label="手机号" prop="tel" ref="tel">
        <el-input v-model="loginUser.tel"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginUser.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode'
export default {
  name: "login",
  data: function() {
    return {
      loginUser: {
        tel: "",
        password: ""
      },
      rules: {
        tel: [
          { required: true, message: "手机号码不能为空", trigger: "blur" },
          { min: 11, max: 11, message: "手机号码必须是11位", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 6, message: "密码必须是6位", trigger: "blur" }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      //通过ref定位到form表单
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          this.$axios
            .post("http://localhost:3000/users/login", this.loginUser)
            .then(res => {
              console.log(res);
              console.log('token对象',jwt_decode(res.data.token)) //token解码
              localStorage.setItem('mytoken',res.data.token)//把token保存到本地
              this.$router.push('/index')
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      //实现重置表单元素数据
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="css" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url(../assets/bg.jpg) no-repeat center center;
  background-size: 100% 100%;
}
.loginForm {
  width: 400px;
  height: 380px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: 200px;
  margin-top: -190px;
  border-radius: 5px;
  background-color: #fff;
  padding: 20px 50px 10px 10px;
}
</style>