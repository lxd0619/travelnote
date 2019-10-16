<template>
  <div>
    <!-- 封面 -->
    <div class="jumbotron jumbotron-fluid">
      <div class="container d-flex flex-column mt-5 mb-5">
        <div class="align-self-center row mt-5 mb-5">
          <div id="addCover">
            <i class="fa fa-picture-o align-self-center" aria-hidden="true"></i>
            <i class="fa fa-plus-circle rounded-circle" aria-hidden="true"></i>
          </div>
          <div class="mt-2">
            <h5 class="display-5 align-self-center">设置攻略封面</h5>
            <p class="lead">图片建议选择尺寸大于1680px的高清大图，如相机原图</p>
          </div>
        </div>
        <form>
          <div class="form-group invisible">
            <label for="exampleFormControlFile1">Example file input</label>
            <input type="file" class="form-control-file" />
          </div>

          <div class="form-group">
            <!-- <input
              type="text"
              class="form-control form-control-lg"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="填写游记标题"
            />-->
          </div>
        </form>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-11">
          <!-- 富文本框 -->
          <div id="editor" class="mb-3"></div>

          <div class="clearfix">
            <!-- 标题 -->
            <input type="text" class="title" placeholder="请输入标题" />
            <!-- 富文本编辑框 -->
            <div id="websiteEditorElem" style="height:300px;background: #ffffff;"></div>
            <!-- 提交按钮 -->
            <!-- <el-button type="primary" @click="submit" class="submit">点击上传</el-button> -->
          </div>

          <!-- 触发模态框按钮 -->
          <button
            type="button"
            id="send"
            class="btn btn-outline-primary float-right mt-3 mb-5 mr-5"
            data-toggle="modal"
            data-target="#confirmModal"
          >发表游记</button>

          <!-- 确认发表游记模态框 -->
          <div
            class="modal fade"
            id="confirmModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">确认框</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p class="text-center mt-3">您是否确认要发表游记？</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">关闭</button>
                  <button type="button" class="btn btn-outline-primary" @click="upload()">确认发表</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 右侧导航 -->
        <div class="col-md-1">
          <div class="list-group position-fixed text-center">
            <a class="list-group-item list-group-item-action" href="#head" title="返回顶部">
              <i class="fa fa-chevron-up" aria-hidden="true"></i>
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#send"
              title="发表攻略"
              data-toggle="modal"
              data-target="#confirmModal"
            >
              <i class="fa fa-paper-plane-o font-weight-bold" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import E from "wangeditor";
export default {
  // name: "text",
  data() {
    return {
      phoneEditor: "",
      name: "",
      artInfo: {
        tableName: "scenerystrategy",
        type: "景点攻略",
        title: "title",
        article: "adf",
        sceneryId: "2",
        cityName: "东京",
        dayNum: "3",
        season: "冬季",
        crowdType: "人群"
      }
    };
  },
  created() {
    var editor = null;
    $(function() {
      //更换封面
      $("#addCover").click(function() {
        $('input[type="file"]').trigger("click");
      });
      $('input[type="file"]').change(function() {
        var fread = new FileReader();
        fread.onload = function(e) {
          $(".jumbotron").css(
            "background-image",
            "url(" + e.target.result + ")"
          );
        };
        fread.readAsDataURL(this.files[0]);
      });
    });
  },
  methods: {
    // 设置保存发送后台数据事件
    upload() {
      var data = new FormData();
      data.append("article", this.phoneEditor.txt.html());
      data.append("artInfo", this.artInfo);

      console.log(data)
      this.$axios({
        methods: "post",
        url: "http://localhost:3000/userCenter/commitArticle",
        data: data,
        headers: {
          Authorization: window.localStorage["mytoken"]
        }
      })
        .then(res => {
          if (res.status === 200) {
            console.log("success!");
          }
        })
        .catch(res => {
          console.log(res);
        });
    }
  },
  mounted() {
    // wangeditor
    this.phoneEditor = new E("#websiteEditorElem");
    // this.phoneEditor.onchange = function () {
    //   this.formData.phone = this.$txt.html()
    // }
    // 上传图片到服务器，base64形式
    this.phoneEditor.customConfig.uploadImgShowBase64 = true;
    // 隐藏网络图片
    this.phoneEditor.customConfig.showLinkImg = false;
    // 创建一个富文本编辑器
    this.phoneEditor.create();
    // 富文本内容
    this.phoneEditor.txt.html();
  }
};
</script>
<style scoped>
#addCover {
  cursor: pointer;
}

#addCover i:first-child {
  font-size: 5rem;
  color: #fff;
}

#addCover i:last-child {
  font-size: 2rem;
  position: relative;
  right: 2rem;
  color: #ff9d00;
}

.jumbotron {
  background-image: url("../assets/bgPic/editorCover.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>