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
            <!-- 表单 -->
            <el-form
              :model="articleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="攻略类型" prop="type">
                <el-select v-model="articleForm.type" placeholder="请选择攻略类型">
                  <el-option
                    v-for="item in types"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="标题" prop="title">
                <el-input v-model="articleForm.title" name="title" style="width:360px;"></el-input>
              </el-form-item>
              <el-form-item label="城市名称" prop="cityName">
                <el-input v-model="articleForm.cityName" name="cityName" style="width:360px;"></el-input>
              </el-form-item>
              <el-form-item label="几日游" prop="dayNum" v-if="articleForm.type === '个性路线'">
                <el-select v-model="articleForm.dayNum" placeholder="请选择几日游">
                  <el-option
                    v-for="day in days"
                    :key="day.value"
                    :label="day.label"
                    :value="day.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="适宜季节" prop="season" v-if="articleForm.type === '个性路线'">
                <el-select v-model="articleForm.season" placeholder="请选择适宜季节">
                  <el-option
                    v-for="season in seasons"
                    :key="season.value"
                    :label="season.label"
                    :value="season.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="面向人群" prop="crowdType" v-if="articleForm.type === '个性路线'">
                <el-select v-model="articleForm.crowdType" placeholder="请选择面向人群">
                  <el-option
                    v-for="crowdType in crowdTypes"
                    :key="crowdType.value"
                    :label="crowdType.label"
                    :value="crowdType.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确认提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="mt-2">
            <h5 class="display-5 align-self-center">设置攻略封面</h5>
            <p class="lead">图片建议选择尺寸大于1680px的高清大图，如相机原图</p>
          </div>
        </div>
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
        <div class="col-md-1 mb-5">
          <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
          <!-- <div class="list-group text-center">
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
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import E from "wangeditor";
export default {
  data() {
    return {
      phoneEditor: "",
      name: "",
      fileList: [],
      articleForm: {
        // name: "" //绑定表单元素的属性
        type: "",
        title: "",
        cityName: "",
        dayNum: "",
        season: "",
        crowdType: ""
      },
      param: "", // 表单最后提交的参数对象
      types: [
        {
          value: "选项1",
          label: "景点攻略"
        },
        {
          value: "选项2",
          label: "美食攻略"
        },
        {
          value: "选项3",
          label: "个性路线"
        }
      ],
      days: [
        {
          value: "选项1",
          label: "一日游"
        },
        {
          value: "选项2",
          label: "二日游"
        },
        {
          value: "选项3",
          label: "三日游"
        },
        {
          value: "选项4",
          label: "四日游"
        },
        {
          value: "选项5",
          label: "五日游"
        },
        {
          value: "选项7",
          label: "七日游"
        },
        {
          value: "选项8",
          label: "多日游"
        }
      ],
      seasons: [
        {
          value: "选项1",
          label: "春季"
        },
        {
          value: "选项2",
          label: "夏季"
        },
        {
          value: "选项3",
          label: "秋季"
        },
        {
          value: "选项4",
          label: "冬季"
        }
      ],
      crowdTypes: [
        {
          value: "选项1",
          label: "活力行"
        },
        {
          value: "选项2",
          label: "夕阳游"
        },
        {
          value: "选项3",
          label: "亲子游"
        },
        {
          value: "选项4",
          label: "情侣游"
        },
        {
          value: "选项5",
          label: "蜜月行"
        },
        {
          value: "选项6",
          label: "伙伴游"
        }
      ],
      rules: {
        type: [
          { required: true, message: "请选择攻略类型", trigger: "change" }
        ],
        title: [
          { required: true, message: "请输入标题", trigger: "blur" },
          { min: 1, max: 80, message: "长度在 1 到 80 个字符", trigger: "blur" }
        ],
        cityName: [
          { required: true, message: "请输入城市名称", trigger: "blur" },
          { min: 1, max: 16, message: "长度在 1 到 16 个字符", trigger: "blur" }
        ],
        dayNum: [
          { required: true, message: "请选择几日游", trigger: "change" }
        ],
        season: [
          { required: true, message: "请选择适宜季节", trigger: "change" }
        ],
        crowdType: [
          { required: true, message: "请选择面向人群", trigger: "change" }
        ]
      }
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
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
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
        .post("http://localhost:3000/userCenter/commitArticle", data)
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
    this.phoneEditor.customConfig.uploadImgServer = "/userCenter/uploadArticle";
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