<template>
  <div class="index">
    <h1>首页{{comentUser.userTel}}</h1>
    <ul>
      <li v-for="stu in students" :key="stu.sutNo">{{stu.stuName}}</li>
    </ul>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios"; //导入axios模块
import jwt_decode from "jwt-decode";

export default {
  data() {
    return {
      students: [],
      comentUser: {},
     
    };
  },
  //组件创建完成后执行的操作
  created() {
    this.$axios
      .get("http://localhost:3000/users")
      .then(res => {
        console.log("查询结果", res);
        this.students = res.data.data;
        this.comentUser = jwt_decode(localStorage.getItem("mytoken"));
        console.log(this.comentUser)
       
      })
      .catch(res => {
        console.log("错误信息", res);
      });
  }
};
</script>
<style lang="scss" scoped>
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