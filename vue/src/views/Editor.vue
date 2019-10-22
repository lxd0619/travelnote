<template>
  <div>
    <!-- 封面 -->
    <div class="jumbotron">
      <el-container class>
        <el-main>
          <el-row>
            <!-- 表单 -->
            <el-form :model="articleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
              <!--elementui的上传图片的upload组件-->
              <el-row :gutter="20">
                <el-col :span="12">
                  <div class="mt-3">
                    <h4 class="display-5 text-right">设置攻略封面</h4>
                    <p class="lead text-right mt-5">图片建议选择尺寸大于1680px的高清大图，如相机原图</p>
                  </div>
                </el-col>
                <el-col :span="12">
                  <el-upload
                    class="w-75 mb-5 ml-5"
                    ref="upload"
                    list-type="picture-card"
                    action="http://localhost:3000/userCenter/commitArticle"
                    :before-upload="beforeupload"
                    :auto-upload="false"
                    :multiple="false"
                    :show-file-list="false"
                  >
                    <i class="el-icon-plus"></i>
                  </el-upload>
                </el-col>
              </el-row>
              <el-col :span="12" :offset="6">
                <el-row :gutter="40">
                  <el-col :span="7">
                    <el-form-item label="攻略类型" class="text-right" prop="type">
                      <el-select v-model="articleForm.type" placeholder="请选择攻略类型">
                        <el-option
                          v-for="type in types"
                          :key="type.value"
                          :label="type.label"
                          :value="type.value"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="标题" class="text-right" prop="title">
                      <el-input v-model="articleForm.title" name="title" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="城市名称" class="text-right" prop="cityName">
                      <el-input v-model="articleForm.cityName" name="cityName" style="width:200px;"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="7" class="float-right">
                    <el-form-item
                      label="几日游"
                      class="text-right"
                      prop="dayNum"
                      v-if="articleForm.type === 'personalrow'"
                    >
                      <el-select v-model="articleForm.dayNum" placeholder="请选择几日游">
                        <el-option
                          v-for="day in days"
                          :key="day.value"
                          :label="day.label"
                          :value="day.value"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item
                      label="适宜季节"
                      class="text-right"
                      prop="season"
                      v-if="articleForm.type === 'personalrow'"
                    >
                      <el-select v-model="articleForm.season" placeholder="请选择适宜季节">
                        <el-option
                          v-for="season in seasons"
                          :key="season.value"
                          :label="season.label"
                          :value="season.value"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item
                      label="面向人群"
                      class="text-right"
                      prop="crowdType"
                      v-if="articleForm.type === 'personalrow'"
                    >
                      <el-select v-model="articleForm.crowdType" placeholder="请选择面向人群">
                        <el-option
                          v-for="crowdType in crowdTypes"
                          :key="crowdType.value"
                          :label="crowdType.label"
                          :value="crowdType.value"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- 提交按钮 -->
                <el-row>
                  <el-col :offset="3">
                    <el-form-item>
                      <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-col>
            </el-form>
          </el-row>
        </el-main>
      </el-container>
    </div>
    <div class="container">
      <div class="row">
        <!-- 富文本框 -->
        <div class="col-md-11">
          <div class="clearfix mb-5">
            <!-- 富文本编辑框 -->
            <div id="websiteEditorElem" style="height:350px;background: #ffffff;"></div>
          </div>
          <!-- 发表按钮 -->
          <button
            type="button"
            class="btn btn-outline-primary float-right mt-3 mb-5 mr-5"
            :plain="true"
            @click="upload('ruleForm')"
          >发表游记</button>
        </div>
        <!-- 返回顶部 -->
        <div class="col-md-1 mb-5">
          <el-backtop :bottom="200"></el-backtop>
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
        type: "",
        cover: "",
        title: "",
        cityName: "",
        dayNum: "",
        season: "",
        crowdType: ""
      },
      params: "", // 表单最后提交的参数对象
      types: [
        {
          value: "scenerystrategy",
          label: "景点攻略"
        },
        {
          value: "foodstrategy",
          label: "美食攻略"
        },
        {
          value: "personalrow",
          label: "个性路线"
        }
      ],
      days: [
        {
          value: "1",
          label: "一日游"
        },
        {
          value: "2",
          label: "二日游"
        },
        {
          value: "3",
          label: "三日游"
        },
        {
          value: "4",
          label: "四日游"
        },
        {
          value: "5",
          label: "五日游"
        },
        {
          value: "7",
          label: "七日游"
        },
        {
          value: "0",
          label: "多日游"
        }
      ],
      seasons: [
        {
          value: "春季",
          label: "春季"
        },
        {
          value: "夏季",
          label: "夏季"
        },
        {
          value: "秋季",
          label: "秋季"
        },
        {
          value: "冬季",
          label: "冬季"
        }
      ],
      crowdTypes: [
        {
          value: "活力行",
          label: "活力行"
        },
        {
          value: "夕阳游",
          label: "夕阳游"
        },
        {
          value: "亲子游",
          label: "亲子游"
        },
        {
          value: "情侣游",
          label: "情侣游"
        },
        {
          value: "蜜月行",
          label: "蜜月行"
        },
        {
          value: "伙伴游",
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
    // 重置表单按钮
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //当上传文件组件submit之前触发执行
    beforeupload(file) {
      // 准备表单上传需要的参数对象
      this.param = new FormData();
      this.params.append(`cover`, file);
      return false;
    },
    // 设置保存发送后台数据事件
    upload(formName) {
      let _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.params = new FormData();
          this.params.append("article", this.phoneEditor.txt.html());
          this.params.append("type", this.articleForm.type);
          this.params.append("title", this.articleForm.title);
          this.params.append("cityName", this.articleForm.cityName);
          this.params.append("dayNum", this.articleForm.dayNum);
          this.params.append("season", this.articleForm.season);
          this.params.append("crowdType", this.articleForm.crowdType);

          this.$refs.upload.submit();
          //设置提交请求头，适用于上传文件
          let config = {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          };
          this.$axios
            .post(
              "http://localhost:3000/userCenter/commitArticle",
              this.params,
              config
            )
            .then(res => {
              console.log(res);
              if (res.data.data) {
                console.log("发表成功" + res.data);
                // 显示成功弹框
                this.$message({
                  showClose: true,
                  message: "恭喜你，游记发表成功！（待审核）",
                  type: "success"
                });
                _this.$router.push("/index/home"); //路由转向首页组件
              } else {
                console.log(res.data.msg);
                // 显示错误弹窗
                this.$message({
                  showClose: true,
                  message: "错了哦，游记发表失败！",
                  type: "error"
                });
              }
            })
            .catch(err => {
              console.log("错误信息" + err);
              // 显示错误弹窗
              this.$message({
                showClose: true,
                message: "错了哦，游记发表失败！",
                type: "error"
              });
            })
            .finally(function() {
              // always executed
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  mounted() {
    // wangeditor
    this.phoneEditor = new E("#websiteEditorElem");
    // 上传图片到服务器，base64形式
    this.phoneEditor.customConfig.uploadImgShowBase64 = true;
    // this.phoneEditor.customConfig.uploadImgServer = "/userCenter/uploadArticle";
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
.jumbotron {
  background-image: url("../assets/bgPic/editorCover.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
#websiteEditorElem{
  height: 400px;
}
.el-row {
  margin-bottom: 20px;
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