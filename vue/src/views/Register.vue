<template>
  <div class="register">
    <el-form
      :model="registerUser"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="registerForm"
    >
      <el-form-item label="手机号" prop="tel" ref='tel'>
        <el-input v-model="registerUser.tel"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input  type="password"  v-model="registerUser.password"></el-input>
      </el-form-item>
            <el-form-item label="确认密码" prop="password2">
        <el-input type="password" v-model="registerUser.password2"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "register",
  data:function(){
    //自定义验证表单元素的方法
     var validatePass2 = (rule, value, callback) => {
        if (value !== this.registerUser.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      registerUser:{
        tel:'',
        password:'',
        password2:''
      },
      rules: {
          tel: [
            {required:true,message:'手机号码不能为空', trigger: 'blur' },
            {min:11,max:11,message:'手机号码必须是11位',trigger:'blur'}
          ],
          password: [
            {required:true,message:'密码不能为空', trigger: 'blur' },
            {min:6,max:6,message:'密码必须是6位',trigger:'blur'}
          ],
           password2: [
            {required:true,message:'确认密码不能为空', trigger: 'blur' },
             { validator: validatePass2, trigger: 'blur' }
          ],
        }
    }
  },
  methods:{
    submitForm(formName) {
      //通过ref定位到form表单
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.$axios.post('http://localhost:3000/users/register',this.registerUser)
            .then(res => {
              console.log('注册成功！',res)
              this.$router.push('/login') //路由转向登录组件
            })
            .catch(err =>{
              console.log(err)
            })
          } else {
            console.log('error submit!!');
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
.register{
  width: 100%;
  height:100%;
  background: url(../assets/bg.jpg) no-repeat center center;
  background-size: 100% 100%;
}
.registerForm{
  width: 400px;
  height: 380px;
  position:absolute;
  left:50%;
  top:50%;
  margin-left:-200px;
  margin-top:-190px;
  border-radius: 5px;
  background-color: #fff;
  padding:20px 50px 10px 10px;
}
</style>