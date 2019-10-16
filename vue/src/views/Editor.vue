<template>
  <div>
    <!-- 封面 -->
    <div class="jumbotron jumbotron-fluid">
      <div class="container d-flex flex-column mt-5 mb-5">
        <div class="align-self-center row mt-5 mb-5">
          <div id="addCover">
            <!-- <i class="fa fa-picture-o align-self-center" aria-hidden="true"></i>
            <i class="fa fa-plus-circle rounded-circle" aria-hidden="true"></i>-->

            <!--elementui的上传图片的upload组件-->
            <el-upload
              class="upload-demo"
              ref="upload"
              list-type="picture-card"
              action="localhost:3000/userCenter/headPic"
              :before-upload="beforeupload"
              :auto-upload="false"
              :multiple="false"
              :show-file-list="true"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <!-- 确认按钮 -->
            <el-form ref="form" :model="articleForm" label-width="80px">
              <el-form-item label="攻略类型">
                <el-input v-model="articleForm.type" name="type" style="width:360px;"></el-input>
              </el-form-item>

              <!-- <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>-->

              <el-form-item label="标题">
                <el-input v-model="articleForm.title" name="title" style="width:360px;"></el-input>
              </el-form-item>
              <el-form-item label="城市名称">
                <el-input v-model="articleForm.cityName" name="cityName" style="width:360px;"></el-input>
              </el-form-item>
              <el-form-item label="几日游">
                <el-input v-model="articleForm.dayNum" name="dayNum" style="width:360px;"></el-input>
              </el-form-item>
              <el-form-item label="适宜季节">
                <el-input v-model="articleForm.season" name="season" style="width:360px;"></el-input>
              </el-form-item>
              <el-form-item label="面向人群">
                <el-input v-model="articleForm.crowdType" name="crowdType" style="width:360px;"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">确认提交</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="mt-2">
            <h5 class="display-5 align-self-center">设置攻略封面</h5>
            <p class="lead">图片建议选择尺寸大于1680px的高清大图，如相机原图</p>
          </div>
        </div>
        <!-- <form>
          <div class="form-group invisible">
            <label for="exampleFormControlFile1">Example file input</label>
            <input type="file" class="form-control-file" />
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control form-control-lg"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="填写游记标题"
            />
          </div>
        </form>-->
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-11">
          <!-- 富文本框 -->
          <div id="editor" class="mb-3"></div>

          <div class="clearfix mb-5">
            <!-- 标题 -->
            <!-- <input type="text" class="title" placeholder="请输入标题" /> -->
            <!-- 富文本编辑框 -->
            <div id="websiteEditorElem" style="height:300px;background: #ffffff;"></div>
            <!-- 提交按钮 -->
            <!-- <el-button type="primary" @click="submit" class="submit">点击上传</el-button> -->
          </div>

          <!-- 触发模态框按钮 -->
          <button
            type="button"
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
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    id="send"
                    @click="upload()"
                  >确认发表</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 右侧导航 -->
        <div class="col-md-1 bg-danger mb-5">
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
      fileList: [],
      articleForm: {
        // name: "" //绑定表单元素的属性
        type: "景点攻略",
        title: "title11",
        cityName: "东京",
        dayNum: "3",
        season: "冬季",
        crowdType: "人群"
      },
      param: "" // 表单最后提交的参数对象
    };
  },
  created() {
    var editor = null;
    $(function() {
      //更换封面
      // $("#addCover").click(function() {
      //   $('input[type="file"]').trigger("click");
      // });
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
      $("#send").click(function() {
        $("#confirmModal").modal("hide");
      });
    });
  },
  methods: {
    //修改文章封面
    onSubmit() {
      let _this = this;
      this.$refs.upload.submit();
      //将表单元素的数据也添加到参数对象中；
      this.param.append("articleForm", this.articleForm);
      //设置提交请求头，适用于上传文件
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      // //调用接口，执行上传所有数据的操作
      this.$axios
        .post("http://localhost:3000/userCenter/headPic", this.param, config)
        .then(function(result) {
          console.log(result);
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //当上传文件组件submit之前触发执行
    beforeupload(file) {
      console.log("准备上传。。。。");
      // 准备表单上传需要的参数对象
      this.param = new FormData();
      this.fileList.push(file); // 把需要上传的文件保存到数组中
      console.log("这是图片文件" + JSON.stringify(this.fileList));
      // 遍历数组，把所有文件都保存到参数对象中
      for (let i = 0; i < this.fileList.length; i++) {
        // this.param.append(`img_${i}`, this.fileList[i]);
        this.param.append(`img`, this.fileList[this.fileList.length - 1]);
      }
      console.log(this.fileList.length);
      // this.param.append(`img`, this.fileList[0]);
      return false;
    },
    // 设置保存发送后台数据事件
    upload() {
      var data = new FormData();
      data.append("article", this.phoneEditor.txt.html());
      data.append("type", this.articleForm.type);
      data.append("title", this.articleForm.title);
      data.append("cityName", this.articleForm.cityName);
      data.append("dayNum", this.articleForm.dayNum);
      data.append("season", this.articleForm.season);
      data.append("crowdType", this.articleForm.crowdType);

      console.log(data);
      this.$axios
        .post("http://localhost:3000/userCenter/commitArticle",data)
        .then(res => {
          console.log("发表成功" + res.data);
        })
        .catch(err => {
          console.log("错误信息" + err);
        })
        .finally(function() {
          // always executed
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
    // this.phoneEditor.customConfig.uploadImgShowBase64 = true;
    this.phoneEditor.customConfig.uploadImgServer = "/userCenter/uploadArticle"
    // this.phoneEditor.customConfig.uploadImgServer = "http://localhost:3000/userCenter/uploadArticle"
    // this.phoneEditor.customConfig.uploadImgServer = '/upload'
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