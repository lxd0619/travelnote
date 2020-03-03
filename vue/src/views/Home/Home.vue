<template>
  <div class="home">
    <!-- 轮播图 -->
    <div
      id="circleContent"
      class="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li data-target="#circleContent" data-slide-to="0" class="active"></li>
        <li data-target="#circleContent" data-slide-to="1"></li>
        <li data-target="#circleContent" data-slide-to="2"></li>
        <li data-target="#circleContent" data-slide-to="3"></li>
        <li data-target="#circleContent" data-slide-to="4"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="../../assets/bgPic/indexPic1.jpg" />
          <div class="carousel-caption d-none d-md-block">
            <h2>9/Nov.2019</h2>
            <h4>出去旅游吧！</h4>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../../assets/bgPic/indexPic2.jpg" />
          <div class="carousel-caption d-none d-md-block">
            <h2>8/Nov.2019</h2>
            <h4>去一个小城去享受美好时光</h4>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../../assets/bgPic/indexPic3.jpg" />
          <div class="carousel-caption d-none d-md-block">
            <h2>7/Nov.2019</h2>
            <h4>雾中楼宇若隐若现</h4>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../../assets/bgPic/indexPic4.jpg" />
          <div class="carousel-caption d-none d-md-block">
            <h2>6/Nov.2019</h2>
            <h4>万家灯火 ，哪盏灯为你而亮</h4>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../../assets/bgPic/indexPic5.jpg" />
          <div class="carousel-caption d-none d-md-block">
            <h2>5/Nov.2019</h2>
            <h4>魔都——上海，魂牵梦萦之地</h4>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#circleContent"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#circleContent"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    
    <el-container>
      <el-main height>
        <div
          class="container scrollspy-example mt-5"
          data-spy="scroll"
          data-target="#list-example"
          data-offset="0"
        >
          <div class="row">
            <!-- 侧边栏 -->
            <div class="col-lg-3 d-md-none d-lg-block">
              <div class="card border-white" id="leftCard">
                <div class="card-header text-center bg-white">热门景点推荐</div>
                <div
                  id="littleCircle"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#littleCircle"
                      data-slide-to="0"
                      class="active"
                    ></li>
                    <li data-target="#littleCircle" data-slide-to="1"></li>
                    <li data-target="#littleCircle" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        class="d-block w-100"
                        src="../../assets/scenerySpot/suMuseum.jpeg"
                      />
                      <div class="carousel-caption w-75 mt-3">
                        <h5 class="text-dark">苏州博物馆</h5>
                        <p class="text-dark">
                          ·传统的苏州园林风格，高低错落，深灰色屋面与白墙相衬，整个博物馆宛若一座小园林。
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src="../../assets/scenerySpot/shanTang.jpeg"
                      />
                      <div class="carousel-caption w-75">
                        <h5 class="text-dark">七里山塘</h5>
                        <p class="text-dark">
                          东连“红尘中一、二等富贵风流之地”阊门，西接“吴中第一名胜”虎丘，长约七里。
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src="../../assets/scenerySpot/tongLi.jpeg"
                      />
                      <div class="carousel-caption w-75">
                        <h5 class="text-dark">同里古镇</h5>
                        <p class="text-dark">
                          ·江南六同里古镇是大古镇之一，始建于宋代，至今已有1000多年历史。
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#littleCircle"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#littleCircle"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <a href="#" @click="goLine">
                <img
                  class="card-img-top shadow-sm p-3 rounded"
                  src="../../assets/bgPic/周末游.jpg"
                  alt="周末游"
                />
              </a>
            </div>
            <!-- 中间部分 -->
            <div class="col-md-12 col-lg-7" id="middle">
              <!-- 中间导航栏 -->
              <nav>
                <div
                  class="nav nav-tabs nav-justified"
                  id="nav-tab"
                  role="tablist"
                >
                  <a
                    class="nav-item nav-link active text-dark"
                    id="nav-hotScenery-tab"
                    data-toggle="tab"
                    href="#nav-hotScenery"
                    role="tab"
                    aria-controls="nav-hotScenery"
                    aria-selected="true"
                    >热门景点攻略</a
                  >
                  <a
                    class="nav-item nav-link text-dark"
                    id="nav-hotFoods-tab"
                    data-toggle="tab"
                    href="#nav-hotFoods"
                    role="tab"
                    aria-controls="nav-hotFoods"
                    aria-selected="false"
                    >热门美食攻略</a
                  >
                  <a
                    class="nav-item nav-link text-dark"
                    id="nav-hotlines-tab"
                    data-toggle="tab"
                    href="#nav-hotlines"
                    role="tab"
                    aria-controls="nav-hotlines"
                    aria-selected="false"
                    >热门路线</a
                  >
                </div>
              </nav>

              <div class="tab-content mt-2" id="nav-tabContent">
                <!-- 热门景点攻略 -->
                <div
                  class="tab-pane fade show active"
                  id="nav-hotScenery"
                  role="tabpanel"
                  aria-labelledby="nav-hotScenery-tab"
                >
                  <hotscentery></hotscentery>
                </div>
                <!-- 热门美食攻略 -->
                <div
                  class="tab-pane fade show"
                  id="nav-hotFoods"
                  role="tabpanel"
                  aria-labelledby="nav-hotFoods-tab"
                >
                  <hotFoods></hotFoods>
                </div>
                <!-- 热门线路 -->
                <div
                  class="tab-pane fade"
                  id="nav-hotlines"
                  role="tabpanel"
                  aria-labelledby="nav-hotlines-tab"
                >
                  <hotRow></hotRow>
                </div>
              </div>
            </div>
            <!-- 排行榜 -->
            <div class="col-lg-2 d-md-none d-lg-block" id="right">
              <a href="#" @click="goLine">
                <img
                  class="card-img-top mb-5 shadow-sm rounded"
                  src="../../assets/bgPic/亲子游.jpg"
                  alt="亲子游"
                />
              </a>
              <h6 class="text-center">热门景点排行榜</h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <em>01</em>
                  <span @click="go('上海')">上海</span>
                </li>
                <li class="list-group-item">
                  <em>02</em>
                  <span @click="go('成都')">成都</span>
                </li>
                <li class="list-group-item">
                  <em>03</em>
                  <span @click="go('重庆')">重庆</span>
                </li>
                <li class="list-group-item">
                  <em>04</em>
                  <span @click="go('厦门')">厦门</span>
                </li>
                <li class="list-group-item">
                  <em>05</em>
                  <span @click="go('西安')">西安</span>
                </li>
                <li class="list-group-item">
                  <em>06</em>
                  <span @click="go('杭州')">杭州</span>
                </li>
                <li class="list-group-item">
                  <em>07</em>
                  <span @click="go('青岛')">青岛</span>
                </li>
                <li class="list-group-item">
                  <em>08</em>
                  <span @click="go('丽江')">丽江</span>
                </li>
                <li class="list-group-item">
                  <em>09</em>
                  <span @click="go('南京')">南京</span>
                </li>
                <li class="list-group-item">
                  <em>10</em>
                  <span @click="go('三亚')">三亚</span>
                </li>
              </ul>
            </div>
            <!-- 页面导航 -->
          </div>
        </div>
      </el-main>
    </el-container>
    <el-backtop :bottom="100"></el-backtop>
  </div>
</template>
<script>
import hotscentery from "./children/hotscenery";
import hotFoods from "./children/hotfood";
import hotRow from "./children/hotrow";
export default {
  data() {
    return {};
  },
  components: {
    hotscentery,
    hotFoods,
    hotRow
  },
  created() {
    // 获取热门景点攻略  scenerystrategy
    $(function() {
      $("#middle .card").mouseover(function() {
        $(this)
          .children()
          .css({ color: "#ff9d00" });
        $(this)
          .find("a")
          .css({ color: "#ff9d00" });
      });
      $("#middle .card").mouseout(function() {
        $(this)
          .children()
          .css({ color: "#000" });
        $(this)
          .find("a")
          .css({ color: "#000" });
      });
    });
  },
  methods: {
    getCoverPic(pic) {
      //给图片名加上服务器端访问路径
      if (pic == "cover" || pic == null) {
        pic = "primaryCover.jpg";
      }
      let path = "coverPic/" + pic;
      return path;
    },
    go(city) {
      var cityName = JSON.stringify(city);
      sessionStorage.setItem("cityName", cityName);
      // this.$router.push("/index/index/aimline");
      this.$router.push("/index/aimline");
    },
    goLine() {
      this.$router.push("/index/line");
    }
  }
};
</script>
<style scoped>
/* #circleContent .carousel-item {
  height: 40em;
} */
#leftCard .carousel-item {
  height: 25em;
}
#circleContent .carousel-caption h2::first-letter {
  color: #ff9d00;
  font-size: 50px;
}
#circleContent .carousel-caption {
  position: absolute;
  left: -40rem;
  top: 10rem;
  text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.1);
}
.card img {
  width: 14em;
  height: 12em;
}

.card-text {
  height: 4em;
  overflow: hidden;
  text-overflow: ellipsis;
}

#right ul li {
  height: 4em;
}

#right ul em {
  color: #ff9d00;
  font-size: 20px;
}

#right ul span {
  float: right;
  line-height: 2;
  cursor: pointer;
}

#right ul li:hover em {
  font-size: 22px;
}

#right ul li:hover span {
  line-height: 2;
  font-size: 17px;
}
.card:hover {
  color: #ff9d00;
}
</style>
