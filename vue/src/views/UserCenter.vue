<template>
  <div class="person">
    <div
      class="jumbotron jumbotron-fluid"
      style="background: url(require('../assets/bgPic/userCenterbg.jpg')) no-repeat center center;background-size: cover;"
      id="topPic"
    >
      <div class="container">
        <h1 class="text-light">旅游札记</h1>
        <br />
        <h3 class="text-light">更懂世界，更懂你！！！</h3>
      </div>
    </div>

    <div class="container">
      <div class="row mb-5">
        <!-- 左侧边栏 -->
        <div class="col-md-3 d-flex flex-column align-items-center">
          <!-- 圆形头像 -->
          <div class="rounded-circle" id="headPic"></div>
        </div>
        <!-- 中间部分 -->
        <div class="col-md-8" id="content">
          <UserCenterMiddle></UserCenterMiddle>
        </div>
        <!-- 右侧导航 -->
        <div class="col-md-1">
          <div id="list-example" class="list-group position-fixed text-center" style="width: 4rem;">
            <a class="list-group-item" href="#head">
              <i class="fa fa-chevron-up" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserCenterMiddle from "../components/UserCenter_middle";
export default {
  name: "UserCenter",
  components: {
    UserCenterMiddle
  },
  data() {
    return {
      imageUrl: "",
    };
  },
  created() {
    $(function() {
      $('[data-toggle="popover"]').popover({
        container: "body"
      });
      $("#headPic").click(function() {
        $('input[type="file"]').trigger("click");
      });
      $("#updHeadBtn").click(function() {
        $('input[type="file"]').trigger("click");
      });
      // $('input[type="file"]').change(function() {
      //   var fread = new FileReader();
      //   fread.onload = function(e) {
      //     $(".rounded-circle").css(
      //       "background-image",
      //       "url(" + e.target.result + ")"
      //     );
      //   };
      //   fread.readAsDataURL(this.files[0]);
      // });
    });
  },
};
</script>
<style scoped>
.rounded-circle {
  background-image: url("../assets/headPic/head1.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

#content {
  height: 40em;
}

#headPic {
  height: 10rem;
  width: 10rem;
}

#headPic:hover::before {
  content: "";
  display: block;
  width: 10rem;
  height: 10rem;
  border-radius: 75px;
  background: rgba(0, 0, 0, 0.5) url('../assets/headPic/head1.jpg') 50% no-repeat;
  cursor: pointer;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>