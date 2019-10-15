<template>
  <div class="home">
    <div class="container">
      <!-- 轮播图 -->
      <div id="circleContent" class="carousel slide carousel-fade" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#circleContent" data-slide-to="0" class="active"></li>
          <li data-target="#circleContent" data-slide-to="1"></li>
          <li data-target="#circleContent" data-slide-to="2"></li>
          <li data-target="#circleContent" data-slide-to="3"></li>
          <li data-target="#circleContent" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../assets/bgPic/indexPic1.jpg" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/bgPic/indexPic2.jpg" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/bgPic/indexPic3.jpg" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/bgPic/indexPic4.jpg" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/bgPic/indexPic5.jpg" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#circleContent" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#circleContent" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

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
            <div id="littleCircle" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#littleCircle" data-slide-to="0" class="active"></li>
                <li data-target="#littleCircle" data-slide-to="1"></li>
                <li data-target="#littleCircle" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="../assets/scenerySpot/suMuseum.jpeg" />
                  <div class="carousel-caption w-75">
                    <h5 class="text-dark">苏州博物馆</h5>
                    <p class="text-dark">·传统的苏州园林风格，高低错落，深灰色屋面与白墙相衬，整个博物馆宛若一座小园林。</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../assets/scenerySpot/shanTang.jpeg" />
                  <div class="carousel-caption w-75">
                    <h5 class="text-dark">七里山塘</h5>
                    <p class="text-dark">东连“红尘中一、二等富贵风流之地”阊门，西接“吴中第一名胜”虎丘，长约七里。</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../assets/scenerySpot/tongLi.jpeg" />
                  <div class="carousel-caption w-75">
                    <h5 class="text-dark">同里古镇</h5>
                    <p class="text-dark">·江南六同里古镇是大古镇之一，始建于宋代，至今已有1000多年历史。</p>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#littleCircle" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#littleCircle" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <a href="line.html">
            <img class="card-img-top shadow-sm p-3 rounded" src="../assets/bgPic/周末游.jpg" alt="周末游" />
          </a>
        </div>
        <!-- 中间部分 -->
        <div class="col-md-11 col-lg-6" id="middle">
          <!-- 中间导航栏 -->
          <nav>
            <div class="nav nav-tabs nav-justified" id="nav-tab" role="tablist">
              <a
                class="nav-item nav-link active text-dark"
                id="nav-hotScenery-tab"
                data-toggle="tab"
                href="#nav-hotScenery"
                role="tab"
                aria-controls="nav-hotScenery"
                aria-selected="true"
              >热门景点攻略</a>
              <a
                class="nav-item nav-link text-dark"
                id="nav-hotFoods-tab"
                data-toggle="tab"
                href="#nav-hotFoods"
                role="tab"
                aria-controls="nav-hotFoods"
                aria-selected="false"
              >热门美食攻略</a>
              <a
                class="nav-item nav-link text-dark"
                id="nav-hotlines-tab"
                data-toggle="tab"
                href="#nav-hotlines"
                role="tab"
                aria-controls="nav-hotlines"
                aria-selected="false"
              >热门路线</a>
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
              <div class="card-deck flex-column">
                <!-- 热门景点攻略 -->
                <div
                  class="card d-flex flex-row mb-2 shadow-sm p-3 bg-white rounded"
                  v-for="article in ssarticles"
                  :key="article.strategyId"
                >
                  <img
                    class="card-img-top"
                    :src="getImgUrl(article.cover,'scenerySpot')"
                    alt="Card image cap"
                    style="width: 14em;height: 12em;"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="#" class="card-link">{{article.title}}</a>
                    </h5>
                    <p
                      class="card-text overflow-hidden"
                      style="height: 4em;text-overflow:ellipsis;"
                    >{{article.ssInfo}}</p>
                    <p class="text-muted">
                      <i class="fa fa-map-marker mr-2" aria-hidden="true">贡嘎</i>by
                      <i>
                        <img src alt />
                      </i>
                      <i class="fa fa-eye mr-2" aria-hidden="true">{{article.ssCollectionNum}}</i>
                      <i class="fa fa-thumbs-o-up mr-2" aria-hidden="true">{{article.ssLikeNum}}</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 热门美食攻略 -->
            <div
              class="tab-pane fade"
              id="nav-hotFoods"
              role="tabpanel"
              aria-labelledby="nav-hotFoods-tab"
              @click="hotFoods()"
            >
              <h4 id="list-item-3">热门美食攻略推荐</h4>
              <div class="card-deck flex-column">
                <div
                  class="card d-flex flex-row mb-2 shadow-sm p-3 bg-white rounded"
                  v-for="article in fsarticles"
                  :key="article.strategyId"
                >
                  <img
                    class="card-img-top"
                    :src="getImgUrl(article.cover,'food')"
                    alt="Card image cap"
                    style="width: 14em;height: 12em;"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="#" class="card-link">{{article.title}}</a>
                    </h5>
                    <p
                      class="card-text overflow-hidden"
                      style="height: 4em;text-overflow:ellipsis;"
                    >{{article.ssInfo}}</p>
                    <p class="text-muted">
                      <i class="fa fa-map-marker mr-2" aria-hidden="true">贡嘎</i>by
                      <i>
                        <img src alt />
                      </i>
                      <i class="fa fa-eye mr-2" aria-hidden="true">{{article.fsCollectionNum}}</i>
                      <i class="fa fa-thumbs-o-up mr-2" aria-hidden="true">{{article.fsLikeNum}}</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 热门线路 -->
            <div
              class="tab-pane fade"
              id="nav-hotlines"
              role="tabpanel"
              aria-labelledby="nav-hotlines-tab"
            >
              <h4 id="list-item-4">热门个性路线推荐</h4>
              <div class="card-deck flex-column">
                <div
                  class="card d-flex flex-row mb-2 shadow-sm p-3 bg-white rounded"
                  v-for="article in prarticles"
                  :key="article.strategyId"
                >
                  <img
                    class="card-img-top"
                    :src="getImgUrl(article.cover,'line')"
                    alt="Card image cap"
                    style="width: 14em;height: 12em;"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="#" class="card-link">{{article.title}}</a>
                    </h5>
                    <p
                      class="card-text overflow-hidden"
                      style="height: 4em;text-overflow:ellipsis;"
                    >{{article.ssInfo}}</p>
                    <p class="text-muted">
                      <i class="fa fa-map-marker mr-2" aria-hidden="true">贡嘎</i>by
                      <i>
                        <img src alt />
                      </i>
                      <i class="fa fa-eye mr-2" aria-hidden="true">{{article.fsCollectionNum}}</i>
                      <i class="fa fa-thumbs-o-up mr-2" aria-hidden="true">{{article.fsLikeNum}}</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 分页 -->
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a class="page-link" href="#">上一页</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">下一页</a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- 排行榜 -->
        <div class="col-lg-2 d-md-none d-lg-block" id="ranks">
          <a href="line.html">
            <img
              class="card-img-top mb-5 shadow-sm rounded"
              src="../assets/bgPic/亲子游.jpg"
              alt="亲子游"
            />
          </a>
          <h6 class="text-center">热门景点排行榜</h6>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <em>01</em>
              <span>上海</span>
            </li>
            <li class="list-group-item">
              <em>02</em>
              <span>成都</span>
            </li>
            <li class="list-group-item">
              <em>03</em>
              <span>重庆</span>
            </li>
            <li class="list-group-item">
              <em>04</em>
              <span>厦门</span>
            </li>
            <li class="list-group-item">
              <em>05</em>
              <span>西安</span>
            </li>
            <li class="list-group-item">
              <em>06</em>
              <span>杭州</span>
            </li>
            <li class="list-group-item">
              <em>07</em>
              <span>青岛</span>
            </li>
            <li class="list-group-item">
              <em>08</em>
              <span>丽江</span>
            </li>
            <li class="list-group-item">
              <em>09</em>
              <span>南京</span>
            </li>
            <li class="list-group-item">
              <em>10</em>
              <span>三亚</span>
            </li>
          </ul>
        </div>
        <!-- 页面导航 -->
        <div class="col-1 mt-5">
          <div class="list-group position-fixed text-center">
            <a class="list-group-item list-group-item-action" href="#head" title="返回顶部">
              <i class="fa fa-chevron-up" aria-hidden="true"></i>
            </a>
            <a class="list-group-item list-group-item-action" href="editor.html" title="写攻略">
              <i class="fa fa-pencil-square-o font-weight-bold" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ssarticles: {
        strategyType: ""
      },
      fsarticles: {
        strategyType: ""
      },
      prarticles: {
        strategyType: ""
      }
    };
  },
  created() {
    // 获取热门景点攻略  scenerystrategy
    this.ssarticles.strategyType = "scenerystrategy";
    this.$axios
      .post("http://localhost:3000/operation/hotstrategy", this.ssarticles)
      .then(res => {
        console.log("查询结果" + res.data.data);
        this.ssarticles = res.data.data;
      })
      .catch(err => {
        console.log("错误信息" + err);
      })
      .finally(function() {
        // always executed
      });
    this.fsarticles.strategyType = "foodstrategy";
    this.$axios
      .post("http://localhost:3000/operation/hotstrategy", this.fsarticles)
      .then(res => {
        console.log("查询结果" + res.data.data);
        this.fsarticles = res.data.data;
      })
      .catch(err => {
        console.log("错误信息" + err);
      })
      .finally(function() {
        // always executed
      });
    this.prarticles.strategyType = "personalrow";
    this.$axios
      .post("http://localhost:3000/operation/hotstrategy", this.prarticles)
      .then(res => {
        console.log("查询结果" + res.data.data);
        this.prarticles = res.data.data;
      })
      .catch(err => {
        console.log("错误信息" + err);
      })
      .finally(function() {
        // always executed
      });

    $(function() {
      $("#outer a").mouseover(function() {
        $("#outer a").css({ "background-color": "rgba(50,50,50,0.1)" });
      });
      $("#outer a").mouseout(function() {
        $("#outer a").css({ "background-color": "rgba(300,300,300,0.1)" });
      });
      //整体修改card组件样式
      $("#nav-hotFoods .card").addClass(
        "d-flex flex-row mb-2 shadow-sm p-3 bg-white rounded"
      );
      $("#nav-hotlines .card").addClass("mb-2 shadow-sm p-3 bg-white rounded");
      $("#middle .card-link").css("color", "#000");
      $("#middle .card-text").css("color", "#333");
      $("#middle .card-body i").addClass("mr-2");
      $("#middle .fa-thumbs-o-up")
        .css("color", "#ff9d00")
        .addClass("float-right");
      $("#middle .card-body>p>i>img")
        .css({ width: "25px", height: "25px" })
        .addClass("rounded-circle");

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
    //获取图片地址
    getImgUrl(img, src) {
      console.log(img,'---',src)
      // return require("@/assets/scenerySpot/" + img);
      return require("@/assets/" + src + "/" + img);
      // return require("http://localhost:3000/" + src + "/" + img);
    }
  }
};
</script>
<style scoped>
.carousel-item {
  height: 25em;
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

.media img {
  width: 10em;
  height: 10em;
}

#ranks ul li {
  height: 4em;
}

#ranks ul em {
  color: #ff9d00;
  font-size: 20px;
}

#ranks ul span {
  float: right;
  line-height: 2;
}

#ranks ul li:hover em {
  font-size: 22px;
}

#ranks ul li:hover span {
  line-height: 2;
  font-size: 17px;
}
</style>