<template>
  <div id="content">
    <el-table :data="list.slice((currentPage-1)*pagesize,(currentPage)*pagesize)" stripe style="width: 100%">
      <el-table-column prop="userId" label="用户id" width="120px"></el-table-column>
      <el-table-column prop="userName" label="用户昵称" width="120px"></el-table-column>
      <el-table-column prop="tel" label="用户电话" width="180px"></el-table-column>
      <el-table-column prop="email" label="邮箱地址" width="180px"></el-table-column>
      <el-table-column prop="address" label="城市" width="120px"></el-table-column>
      <el-table-column prop="sex" label="性别" width="120px"></el-table-column>
      <el-table-column prop="role" label="用户权限" width="120px"></el-table-column>
      <el-table-column prop="status" label="用户状态" width="120px"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <i
            class="el-icon-setting"
            @click="operation(scope.row.userId)"
            data-toggle="modal"
            data-target="#myModal"
          ></i>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        :page-size="pagesize"
        :pager-count="11"
        layout="prev, pager, next"
        :total="allpages"
        @current-change="current_change"
      ></el-pagination>
    </div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">修改用户状态</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <el-radio-group v-model="radio">
              <el-radio :label="0">正常</el-radio>
              <el-radio :label="10">警告</el-radio>
              <el-radio :label="-1">封号</el-radio>
            </el-radio-group>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" id="sure" @click="push()">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "manage_user",
  data() {
    return {
      list: [{
        status:''
      }],
      allpages: null,
      currentPage: 1,
      radio: "",
      id: null,
      pagesize:11
    };
  },
  created() {
    this.$axios.post("http://localhost:3000/manage/usersSelect").then(res => {
      console.log(res);
      this.list = res.data.data;
      for (var i = 0; i < res.data.data.length; i++) {
        if (res.data.data[i].userStatus == 0) {
          this.list[i].status = "正常";
        } else if (
          res.data.data[i].userStatus > 0 
        ) {
          this.list[i].status = "警告("+this.list[i].userStatus+"次)";
        } else {
          this.list[i].status = "封号";
        }
      }
      this.allpages = res.data.data.length;
    });
  },
  methods: {
    current_change: function(currentPage) {
      this.currentPage = currentPage;
    },
    operation(index) {
      console.log(index);
      this.id = index;
    },
    push() {
      console.log(this.radio, this.id);

      var info = { userStatus: this.radio, userId: this.id };
      this.$axios
        .post("http://localhost:3000/manage/userStatus", info)
        .then(res => {
          console.log(res);
          if (res.data.data) {
            // for (var i = 0; i < this.list.length; i++) {
            //   if (this.list[i].userId == this.id) {
            //     console.log(1)
            //     if (this.radio == 0) {
            //       console.log(2)
            //       this.list[i].status = "正常";
            //     } else if (this.radio > 0) {
            //       console.log(3)
            //       console.log(this.radio)
            //       this.list[i].status = "警告("+ this.radio+"次)";
            //       console.log(this.list[i].status)
            //     } else {
            //       console.log(4)
            //       this.list[i].status = "封号";
            //     }
            //   }
            // }
            this.$message({
              message: "用户状态修改成功",
              type: "success"
            });
          }
        });
      $("#myModal").modal("hide");
      if(this.radio ==0){
        var message='@'+this.userId+':您收到一条系统消息<br>您的账号已恢复正常'
      }else if(this.radio==10){
        var message='@'+this.userId+':您收到一条系统警告消息<br>由于您的攻略多次被举报，经审核，予以您警告'
      }else{
        var message='@'+this.userId+'：您收到一条系统封号消息<br>更具《中华人民共和国网络安全法》和《互联网信息服务管理办法》规定，经核实，您已违规，现予以您封号处理'
      }
      this.$axios.post('http://localhost:3000/manage/sendMessage',{
        sysMsgContent:message,
        userId:this.id
      }).then(res=>{
        console.log(res)
      })
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
  height: 658px;
}
ul {
  list-style: none;
}
.block {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, 0);
}
.modal {
  top: 50%;
  transform: translate(0, -40%);
}
</style>