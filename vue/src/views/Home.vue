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
              <div class="card-deck">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../assets/scenerySpot/贡嘎.jpeg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="#" class="card-link">以山之名 | 朝圣贡嘎，追梦逐风</a>
                    </h5>
                    <p
                      class="card-text"
                    >每一个喜欢户外的人，都有属于自己的户外生涯。徒步并不一定是惊险离奇的冒险，而是生活之中的乐趣。我希望记录下这些故事，...</p>
                    <p class="text-muted">
                      <i class="fa fa-map-marker" aria-hidden="true">贡嘎</i>
                      by
                      <i>
                        <img src="../assets/headPic/head1.jpg" alt />
                      </i>
                      <i class="fa fa-eye" aria-hidden="true">113173/652</i>
                      <i class="fa fa-thumbs-o-up" aria-hidden="true">5250</i>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../assets/scenerySpot/开普勒步道.jpeg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="#" class="card-link">
                        新西兰九大步道南岛篇，开普勒步道（KEPLER
                        TRAC
                      </a>
                    </h5>
                    <p class="card-text">
                      2017.3.6. 晴天， 蒂阿瑙 24度，女王镇24度， 基督城 24度， 奥克兰 23度。
                      早晨6：00用毛巾包住头灯收拾好行装，悄然离开客...
                    </p>
                    <p class="text-muted">
                      <i class="fa fa-map-marker" aria-hidden="true">蒂阿瑙</i>
                      by
                      <i>
                        <img src="../assets/headPic/head2.jpg" alt />
                      </i>
                      <i class="fa fa-eye" aria-hidden="true">2507/14</i>
                      <i class="fa fa-thumbs-o-up" aria-hidden="true">91</i>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../assets/scenerySpot/shanTang.jpeg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="#" class="card-link">利川清江古河床徒步旅程分享</a>
                    </h5>
                    <p class="card-text">
                      前言 2016年4月我和太太在国内 湖北 陕西 20多天的旅程中安排了3条徒步线： 1) 恩施
                      鹿院坪徒步2天，从新田村入大庙村出 2) ...
                    </p>
                    <p class="text-muted">
                      <i class="fa fa-map-marker" aria-hidden="true">利川</i>
                      by
                      <i>
                        <img src="../assets/headPic/head3.jpg" alt />
                      </i>
                      <i class="fa fa-eye" aria-hidden="true">5967/12</i>
                      <i class="fa fa-thumbs-o-up" aria-hidden="true">114</i>
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
            >
              <h4 id="list-item-3">热门美食攻略推荐</h4>
              <div class="card-deck">
                <div class="card">
                  <img class="card-img-top" src="../assets/food/乐山.jpeg" alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">【乐山】两天十几顿，吃下这座城（吃货小攻略）</h5>
                    <p class="card-text">
                      【写在前面】 其实期末考试季还没结束 上个月考试安排下来的时候 和几名朋友就约好 趁着最后两场考试之间几天的间隙 去
                      乐山...
                    </p>
                    <p class="text-muted">
                      <i class="fa fa-map-marker" aria-hidden="true">乐山</i>
                      by
                      <i>
                        <img src="../assets/headPic/head2.jpg" alt />Danger
                      </i>
                      <i class="fa fa-eye" aria-hidden="true">50045/89</i>
                      <i class="fa fa-thumbs-o-up" aria-hidden="true">2579</i>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top" src="../assets/food/东京美食.jpeg" alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">日本东京深度游 那些不能错过的东京美食！</h5>
                    <p class="card-text">
                      最近出炉的 大阪 深度游，如果有 大阪 东京 一起去的或者对 大阪 有兴趣的都可以看看噢，同样有大量美食推荐的呀~~~~~~
                      链接...
                    </p>
                    <p class="text-muted">
                      <i class="fa fa-map-marker" aria-hidden="true">东京</i>
                      by
                      <i>
                        <img src="../assets/headPic/head3.jpg" alt /> G_BnG
                      </i>
                      <i class="fa fa-eye" aria-hidden="true">92785/206</i>
                      <i class="fa fa-thumbs-o-up" aria-hidden="true">7939</i>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top" src="../assets/food/延吉.jpeg" alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">2017.04.02 延吉 | 吃货的灵魂美食之旅（自驾游+深</h5>
                    <p class="card-text">
                      欢迎浏览我的其它游记（点击以下网址） 寻找 长白山 天池，震撼人心的美！想唱国歌！！（自驾游精选美照）
                      http://www.mafeng...
                    </p>
                    <p class="text-muted">
                      <i class="fa fa-map-marker" aria-hidden="true">延吉</i>
                      by
                      <i>
                        <img src="../assets/headPic/head1.jpg" alt /> 欧阳KK
                      </i>
                      <i class="fa fa-eye" aria-hidden="true">40812/57</i>
                      <i class="fa fa-thumbs-o-up" aria-hidden="true">2445</i>
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
              <div class="card">
                <div class="card-header bg-white">
                  <span>苏州经典一日游</span>
                  <time class="ml-3">最佳季节：3月-5月</time>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-4">
                      <p>
                        路线概览
                        <br />D1拙政园(2小时) → 苏州博物馆(2小时) → 平江路(1小时) → 金鸡湖景区(2小时)
                      </p>
                    </div>
                    <div class="col-8 card-body" id="map01" style="height: 20rem;"></div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header bg-white">
                  <span>苏州经典二日游</span>
                  <time class="ml-3">最佳季节：3月-5月</time>
                  <button class="btn" onclick="day01()">day01</button>
                  <button class="btn" onclick="day02()">day02</button>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-4">
                      <p>
                        路线概览
                        <br />D1拙政园(2小时) → 苏州博物馆(2小时) → 平江路(1小时) → 金鸡湖景区(2小时)
                        <br />D2寒山寺(1小时) → 虎丘山风景区(3小时) → 七里山塘(2小时) → 山塘昆曲馆(2小时)
                      </p>
                    </div>
                    <div class="col-8 card-body" id="map02" style="height: 20rem;"></div>
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
  created() {
    $(function() {
      $("#head").load("head.html");
      $("#foot").load("foot.html");
      $("#outer a").mouseover(function() {
        $("#outer a").css({ "background-color": "rgba(50,50,50,0.1)" });
      });
      $("#outer a").mouseout(function() {
        $("#outer a").css({ "background-color": "rgba(300,300,300,0.1)" });
      });
      $("#weather").load("weather.html");
      //整体修改card组件样式
      $("#middle .card-deck").addClass("flex-column");
      $("#nav-hotScenery .card").addClass(
        "d-flex flex-row mb-2 shadow-sm p-3 bg-white rounded"
      );
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

      // $('.nav-item').css('color','#ff9d00!important')
      // $('.nav-item').mouseover(function(){
      //     $(this).css('color','#ff9d00!important')
      // })
      // $('.nav-item').mouseout(function(){
      //     $(this).css('color','#000')
      // })
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

      //地图加载
      day01();

      var map = new AMap.Map("map01", {
        zoom: 13, //级别
        center: [120.6597518921, 31.3135349296], //中心点坐标
        viewMode: "3D" //使用3D视图
      });
      // 折线的节点坐标数组，每个元素为 AMap.LngLat 对象
      var path = [
        new AMap.LngLat(120.629029, 31.324159),
        new AMap.LngLat(120.627628, 31.323143),
        new AMap.LngLat(120.6337237358, 31.3139015701),
        new AMap.LngLat(120.7009506226, 31.303121742)
      ];
      // 创建点标记
      var marker1 = new AMap.Marker({
        position: [120.629029, 31.324159],
        size: new AMap.Size(40, 50) // 图标尺寸
      });
      var marker2 = new AMap.Marker({
        position: [120.627628, 31.323143]
      });
      var marker3 = new AMap.Marker({
        position: [120.6337237358, 31.3139015701]
      });
      var marker4 = new AMap.Marker({
        position: [120.7009506226, 31.303121742]
      });
      // 多个点实例组成的数组
      var markerList = [marker1, marker2, marker3, marker4];
      map.add(markerList);

      // 创建折线实例
      var polyline = new AMap.Polyline({
        path: path,
        borderWeight: 2, // 线条宽度，默认为 1
        strokeColor: "rgb(255, 123, 0)", // 线条颜色
        lineJoin: "round" // 折线拐点连接处样式
      });
      // 将折线添加至地图实例
      map.add(polyline);
    });

    function day01() {
      var map = new AMap.Map("map02", {
        zoom: 13, //级别
        center: [120.6597518921, 31.3135349296], //中心点坐标
        viewMode: "3D" //使用3D视图
      });

      // 创建点标记
      var marker1 = new AMap.Marker({
        position: [120.629029, 31.324159],
        size: new AMap.Size(40, 50) // 图标尺寸
      });
      var marker2 = new AMap.Marker({
        position: [120.627628, 31.323143]
      });
      var marker3 = new AMap.Marker({
        position: [120.6337237358, 31.3139015701]
      });
      var marker4 = new AMap.Marker({
        position: [120.7009506226, 31.303121742]
      });
      // 多个点实例组成的数组
      var markerList = [marker1, marker2, marker3, marker4];
      map.add(markerList);

      // 折线的节点坐标数组，每个元素为 AMap.LngLat 对象
      var path = [
        new AMap.LngLat(120.629029, 31.324159),
        new AMap.LngLat(120.627628, 31.323143),
        new AMap.LngLat(120.6337237358, 31.3139015701),
        new AMap.LngLat(120.7009506226, 31.303121742)
      ];

      // 创建折线实例
      var polyline = new AMap.Polyline({
        path: path,
        borderWeight: 2, // 线条宽度，默认为 1
        strokeColor: "rgb(255, 123, 0)", // 线条颜色
        lineJoin: "round" // 折线拐点连接处样式
      });

      // 将折线添加至地图实例
      map.add(polyline);
    }

    function day02() {
      var map = new AMap.Map("map02", {
        zoom: 13, //级别
        center: [120.5854225146, 31.3225538729], //中心点坐标
        viewMode: "3D" //使用3D视图
      });
      // 创建点标记
      var marker1 = new AMap.Marker({
        position: [120.56829, 31.31021],
        size: new AMap.Size(40, 50) // 图标尺寸
      });
      var marker2 = new AMap.Marker({
        position: [120.58061, 31.33537]
      });
      var marker3 = new AMap.Marker({
        position: [120.6021165848, 31.3170912827]
      });
      var marker4 = new AMap.Marker({
        position: [120.6011, 31.3181]
      });
      // 多个点实例组成的数组
      var markerList2 = [marker1, marker2, marker3, marker4];
      map.add(markerList2);

      // 折线的节点坐标数组，每个元素为 AMap.LngLat 对象
      var path2 = [
        new AMap.LngLat(120.56829, 31.31021),
        new AMap.LngLat(120.58061, 31.33537),
        new AMap.LngLat(120.6021165848, 31.3170912827),
        new AMap.LngLat(120.6011, 31.3181)
      ];

      // 创建折线实例
      var polyline2 = new AMap.Polyline({
        path: path2,
        borderWeight: 2, // 线条宽度，默认为 1
        strokeColor: "rgb(255, 123, 0)", // 线条颜色
        lineJoin: "round" // 折线拐点连接处样式
      });
      // 将折线添加至地图实例
      map.add(polyline2);
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