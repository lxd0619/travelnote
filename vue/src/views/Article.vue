<template>
  <div>
    <div id="main">
      <div class="nav">
        <span>攻略详情</span>
        <a href="/manage">返回</a>
      </div>
      <div id="left">
        <div id="content" v-for="info in strategyInfo" :key="info.strategyId">
          <h1>{{info.title}}</h1>
          <p>{{info.ssInfo}}</p>
        </div>
        <div id="button">
            <el-button type="success" icon="el-icon-check" @click="OK()"></el-button>
            <el-button type="danger" icon="el-icon-close" > </el-button>
        </div>
      </div>
    </div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">请输入驳回理由</h4>
          </div>
          <div class="modal-body">
            <textarea name id="backtext" cols="78" rows="10" style="resize: none"></textarea>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" id="sure">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Article",
  data() {
    return {
      strategyInfo: []
    };
  },
  created() {
    var strategy = JSON.parse(sessionStorage.getItem("strategy"));
    console.log(strategy);
    this.$axios
      .post("http://localhost:3000/operation/strategydetail", strategy)
      .then(res => {
        console.log(res);
        this.strategyInfo = res.data.data;
      });
  },
  methods:{
      OK(){
          
      }
  }
};
</script>
<style scoped>

    .nav{
    width: 100%;
    height: 60px;
    background-color: #00b894;
}
.nav span{
    color: white;
    padding-left: 50px;
    line-height: 60px;
    font-size: 30px;
}
.nav a{
    position: absolute;
    right: 10px;
    line-height: 60px;
    padding-right: 20px;
    font-size:20px;
    color: white;
}

#left{
    float: left;
    position: relative;
    width:75%;
}
#content{
    float: right;
    margin-top: 50px;
    margin-right:40px;
    width: 85%;
    border: 1px solid #aaaaaa;
    box-shadow: 6px 5px 5px #807e7e;
    padding:50px 50px;
    background-color: white;
}
#content img{ 
    width:500px;
    height: 400px;
}
#button{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40px;
}
#button button{
    margin-top: 10px;
    box-shadow: 4px 5px 5px #807e7e;
    float: left;
    outline-style: none;
}
.el-button+.el-button{
    margin: 0;
}


</style>