<template>
  <div class="index">
    <div id="nav">
      <router-link to="/index/home" tag="li">首页</router-link>
      <router-link to="/index/aim" tag="li">目的地</router-link>
      <router-link to="/index/view" tag="li">景点攻略</router-link>
      <router-link to="/index/deicious" tag="li">美食攻略</router-link>
      <router-link to="/index/line" tag="li">个性路线</router-link>
      <router-link to="/index/userCenter" tag="li">个人中心</router-link>
      <router-link to="/login" tag="li">登录</router-link>
      <router-link to="/register" tag="li">注册</router-link>
    </div>
    <router-view></router-view>

    <!-- <ul>
      <li v-for="stu in students" :key='stu.stuNo'>
    <h2>{{stu.stuName}}</h2>-->
    <!-- </li>
    </ul>-->
    <!-- <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      students: [],
      currentUser: {}
    };
  }
  //组件创建完成后执行的操作
  // created(){
  //   this.$axios.get('http://localhost:3000/users')
  //   .then(res => {
  //     console.log('查询结果：',res.data.data)
  //     this.students = res.data.data
  //   })
  //   .catch(err => {
  //     console.log('错误信息：',err)
  //   })
  // }
};
</script>
<style lang="scss" scoped>
li {
  list-style: none;
}
#nav {
  display: block;
  height: 30px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>