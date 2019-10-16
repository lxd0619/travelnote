<template>
  <div id="content">
    <el-table :data="list.slice((currentPage-1)*11,(currentPage)*11)" stripe style="width: 100%">
      <el-table-column prop="userId" label="用户id" width="120px"></el-table-column>
      <el-table-column prop="userName" label="用户昵称" width="120px"></el-table-column>
      <el-table-column prop="tel" label="用户电话" width="180px"></el-table-column>
      <el-table-column prop="email" label="邮箱地址" width="180px"></el-table-column>
      <el-table-column prop="address" label="城市" width="120px"></el-table-column>
      <el-table-column prop="sex" label="性别" width="120px"></el-table-column>
      <el-table-column prop="role" label="用户权限" width="120px"></el-table-column>
      <el-table-column prop="userStatus" label="用户状态" width="120px"></el-table-column>
      <el-table-column label="操作"><i class="el-icon-setting" @click='operation()'></i></el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        :page-size="10"
        :pager-count="11"
        layout="prev, pager, next"
        :total="allpages"
        @current-change="current_change"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "manage_user",
  data(){
      return{
          list:[],
          allpages:null,
          currentPage:1
      }
  },
  created(){
      this.$axios.post("http://localhost:3000/manage/usersSelect").then(res=>{
          console.log(res);
          this.list=res.data.data
          for(var i=0;i<res.data.data.length;i++){
            switch (res.data.data[i].userStatus) {
              case 0:this.list[i].userStatus='正常';break;
              case 1:this.list[i].userStatus='警告';break;
              default:this.list[i].userStatus='封号';break;
            }
          }
          this.allpages=res.data.data.length
      })
  },
  methods:{
      current_change: function(currentPage) {
      this.currentPage = currentPage;
    },
    operation(){
      
    }
  }
};
</script>
<style scoped>
body {
  overflow-x: hidden;
}

#content {
 position: relative;
  width: 1200px;
  height: 648px;
}
ul {
  list-style: none;
}
.block {
  position: absolute;
  bottom:15px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>