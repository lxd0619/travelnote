<template>
  <div>
    <div id="head"></div>
    <div class="contain">
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
            <img class="d-block w-100" src="../assets/view/景色背景图片.jpg" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/view/景色背景图片2.jpg" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/view/景色图片3.jpg" />
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

      <div class="ViewProduce">View Produce</div>
      <div class="sheadsecond">景点攻略</div>
      <div class="specialFood">
        <div class="stragyespecail" v-for="article in articles.slice(0)" :key="article.index">
          <img src="../assets/bg.jpg" width="260px" height="240px" />
          <div class="intro_box">
            <h3>{{article.title}}</h3>
            <p>{{article.fsInfo}}</p>
            <span>点赞({{article.fsLikeNum}})</span>
            <span>收藏({{article.fsCollection}})</span>
          </div>
        </div>
      </div>
      <hr />

      <div class="sTrip">
        <h2>榜单热搜</h2>

        <div class="tripb">
          <a href="#" target="_blank">
            <div class="tit" v-for="hostarticle in hotarticles.slice(0,1)" :key="hostarticle.index">
              <h3>
                <em>01</em>
                {{hostarticle.title}}
              </h3>
              <p style="overflow:hidden">{{ hostarticle.ssInfo}}</p>
            </div>
            <div class="tripb_pic">
              <em></em>
              <img src="../assets/view/leftPic1.jpg" height="220px" width="250px" />
            </div>
          </a>
        </div>
        <div class="main_news trips_con">
          <ul v-for="hotarticle in hotarticles.slice(1,5)" :key="hotarticle.index">
            <li>
              <a href="#" target="_blank">
                <img src="../assets/view/leftPic2.jpg" />
                <div class="txt">
                  <h3>
                    <em></em>
                    {{hotarticle.title}}
                  </h3>
                  <p style="overflow:hideen">{{hotarticle.ssInfo}}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="bottom" style="margin-top: 550px">
          <h1 class="tit-line mb5">游记攻略</h1>
          <div class="tit_sub">独行或同游，聪明的人与你在一起</div>
        </div>

        <div class="tit_more">
          <router-link to="/index/Detail">MORE>></router-link>
        </div>
        <router-view></router-view>
        <div class="contain strategy">
          <ul style="display: flex;flex-direction: row;justify-content:space-between">
            <router-link to="/index/Jn">
              <li>
                <a href="#" target="_blank">
                  <img src="../assets/view/leftPic3.jpg" />
                  <div class="strategy_msk"></div>
                  <div class="strategy_txt tit">
                    <div class="strategy_tit">江南水乡</div>
                  </div>

                  <div class="strategy_txt pos">
                    <div class="strategy_pos">古镇之美</div>
                  </div>
                </a>
              </li>
            </router-link>
            <router-view></router-view>
             <router-link to="/index/Nm">
            <li>
              <a href target="_blank">
                <img src="../assets/stategyDetail/内蒙古1.jpg" />
                <div class="strategy_msk"></div>
                <div class="strategy_txt tit">
                  <div class="strategy_tit">草原上的内蒙</div>
                </div>
                <div class="strategy_txt pos">
                  <div class="strategy_pos">内蒙古</div>
                </div>
              </a>
            </li>
             </router-link>
              <router-view></router-view>
               <router-link to="/index/Xa">
            <li>
              <a href target="_blank">
                <img src="../assets/stategyDetail/西安.jpg" />
                <div class="strategy_msk"></div>
                <div class="strategy_txt tit">
                  <div class="strategy_tit">历史古都</div>
                </div>
                <div class="strategy_txt pos">
                  <div class="strategy_pos">西安</div>
                </div>
              </a>
            </li>
             </router-link>
               <router-view></router-view>
           
           
          </ul>
        </div>
      </div>
    </div>
    <div id="foot"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [],
      hotarticles: [],
      strategyType: "scenerystrategy"
    };
  },
  created() {
    console.log(this.strategyType);
    this.$axios
      .post("http://localhost:3000/operation/normalStrategy", {
        strategyType: this.strategyType
      })
      .then(res => {
        console.log(res);
        this.articles = res.data.data;
      })
      .catch(error => {
        console.log("错误信息" + error);
      });
    this.$axios
      .post("http://localhost:3000/operation/hotStrategy", {
        strategyType: this.strategyType
      })
      .then(res => {
        console.log(1, res);
        this.hotarticles = res.data.data;
      })
      .catch(err => {
        console.log("错误信息" + err);
      });
  }
};
</script>
<style scoped>
.contain {
  width: 1200px;
  margin: 0 auto;
}

* {
  margin: 0px;
  padding: 0px;
}

.ViewProduce {
  text-align: center;
  color: rgba(36, 35, 35, 0.4);
  font-size: 50px;
}
.sheadsecond {
  text-align: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 40px;
}
.item p {
  margin-left: 7px;
}
.feed-item .author {
  display: inline-block;
  margin-right: 10px;
  font-size: 12px;
  color: #ff9d00;
}

.feed-item .art dd {
  overflow: hidden;
}

.info {
  margin-top: 20px;
  width: 1000px;
  overflow: hidden;
}

.feed-item .art {
  height: 340px;
  padding-top: 20px;
  margin-bottom: 16px;
  color: #666;
}

.feed-item .art dt {
  display: inline;
  padding-left: 60px;
  margin-right: 10px;
}

.row {
  display: flex;
  flex-direction: row;
}

.item a:hover {
  text-decoration: none;
}
.item p {
  margin-top: 10px;
  font-family: 楷体;
  width: 200px;
  overflow: hidden;
  height: 25px;
}
.sTrip {
  float: left;
  margin-top: 10px;
  width: 1200px;
  height: 428px;
  background: #fff;
  overflow: hidden;
  margin-top: 50px;
}
.sTrip h2 {
  padding-left: 20px;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background-color: #0062a5;
  margin-bottom: 50px;
}
.tripb {
  float: left;
  width: 260px;
  height: 368px;
}
.tripb .tit {
  padding-left: 15px;
  padding-right: 15px;
  width: 250px;
  height: 100px;
  background-color: #d1e7f4;
}
.tripb_pic {
  position: relative;
  width: 287px;
  height: 242px;
}
.tripb_pic em {
  position: absolute;
  right: 50px;
  width: 30px;
  height: 15px;
}
.tit p {
  font-size: 12px;
  height: 40px;
}
.txt p {
  font-size: 12px;
  height: 55px;
  width: 220px;
  overflow: hidden;
}
.txt h3 {
  overflow: hidden;
}
.tripb .tit h3 em {
  font-family: Arial;
  font-size: 30px;
  font-weight: 700;
  color: #0061a4;
}
.trips_con {
  float: left;
  width: 460px;
  height: 368px;
  overflow: hidden;
}
.trips_con_right {
  float: right;
  width: 460px;
  height: 368px;
  overflow: hidden;
}
ul {
  list-style: disc;
}
.tripb .tit h3 {
  padding: 10px 0px 0px 0px;
  width: 200px;
  height: 40px;
  font-size: 15px;
  color: #333;
  font-weight: 700;
  overflow: hidden;
}
.main_news ul li {
  padding-bottom: 10px;
  width: 595px;
  border-bottom: 1px dotted #cbcbcb;
}
li {
  list-style: none;
}
.main_news ul li a img {
  float: left;
  width: 160px;
  height: 100px;
}
.main_news ul li a div.txt {
  display: block;
  padding-left: 15px;
  width: 420px;
  height: 100px;
  overflow: hidden;
}
.main_news ul li a div.txt h3 {
  font-size: 16px;
  line-height: 36px;
  font-weight: 700;
  color: #454545;
}
h1 {
  margin-bottom: 20px;
  font-size: 30px !important;
  font-weight: 700;
  color: #454545;
  line-height: 50px;
  text-align: center;
  font-family: "Microsoft YaHei", HelveticaNeue, "Helvetica Neue", Arial,
    Helvetica, sans-serif;
}

.mb5 {
  margin-bottom: 5px !important;
}

.tit_sub {
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
  font-style: italic;
}

.tit_more {
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 18px;
  font-style: italic;
}
.tit_more a {
  color: #1d7aae;
}

.strategy {
  height: 400px;
  width: 1200px;
}
.container {
  margin: 0px auto;
  width: 1230px;
}
.strategy ul li {
  float: left;
  width: 285px;
  height: 285px;
  position: relative;
}
.strategy ul li img {
  position: absolute;
  width: 285px;
  height: 285px;
  border-radius: 9em;
}
.strategy_msk {
  position: absolute;
  bottom: -1px;
  width: 285px;
  height: 76px;
  background: url(../assets/download.png) center center no-repeat;
}
.strategy .tit {
  top: 222px;
}

.strategy_txt {
  position: absolute;
  margin: 0 auto;
  width: 285px;
  text-align: center;
}

.strategy_tit {
  margin: 0 auto;
  width: 200px;
  font-size: 16px;
  line-height: 16px;
}

.strategy_pos {
  margin: 0px auto;
  margin-top: 240px;
  padding-top: 10px;
  width: 78px;
  height: 24px;
  text-align: center;
  font-family: 楷体;
  bottom: 0px;
  font-size: 14px;
  color: rgb(151, 151, 151);
}
li {
  list-style: none;
}

.stragyespecail {
  display: inline-block;
  width: 260px;
  margin-left: 18px;
  border: 1px solid rgb(138, 137, 137);
  margin-bottom: 30px;
}
.stragyespecail p {
  font-size: 15px;
  text-align: center;
  color: #666;
  height: 25px;
  overflow: hidden;
  font-family: 宋体;
  margin-top: 5px;
}
.stragyespecail h3 {
  font-family: initial;
  font-size: 18px;
  color: #666;
  width: 260px;
  height: 20px;
  overflow: hidden;
  text-align: center;
}
.stragyespecail span {
  padding-left: 25px;
  width: 260px;
  overflow: hidden;
}
</style>