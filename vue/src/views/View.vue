<template>
  <div>
    <div id="head"></div>
    <div class="contain">
      <div class="total">
        <section id="timeline">
          <div class="totalcontainer">
            <div class="mine-item">
              <div class="figcaption">
                <div class="bg bg1"></div>
                <div class="name">
                  <p>旅行</p>
                </div>
                <div class="content">
                  <p>人生至少要有两次冲动，一为奋不顾身的爱情，一为说走就走的旅行</p>
                </div>
              </div>
            </div>

            <div class="mine-item">
              <div class="figcaption">
                <div class="bg bg2"></div>
                <div class="name">
                  <p>眼界</p>
                </div>
                <div class="content">
                  <p>如果你不出去走走，你就会以为这就是世界</p>
                </div>
              </div>
            </div>
            <div class="mine-item">
              <div class="figcaption">
                <div class="bg bg3"></div>
                <div class="name">
                  <p>自我</p>
                </div>
                <div class="content">
                  <p>在路上，不为旅行，不因某人，只为在未知的途中遇见未知的自己</p>
                </div>
              </div>
            </div>
            <div class="mine-item">
              <div class="figcaption">
                <div class="bg bg4"></div>
                <div class="name">
                  <p>感动</p>
                </div>
                <div class="content">
                  <p>人生最好的旅行，就是你在一个陌生的地方，发现一种久违的感动</p>
                </div>
              </div>
            </div>
            <div class="mine-item">
              <div class="figcaption">
                <div class="bg bg5"></div>
                <div class="name">
                  <p>时光</p>
                </div>
                <div class="content">
                  <p>流转的时光，都会成为命途中美丽的点缀，看天，看雪，安安静静，不言不语都是好风景</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="container-fluid waveline">
        <img src="../assets/view/line2.png" width="100%" />
      </div>

      <div class="ViewProduce">View Produce</div>
      <div class="sheadsecond">景点攻略</div>
      <div class="specialFood">
        <div class="stragyespecail" v-for="article in articles.slice(0,8)" :key="article.index">
          <img :src="getCoverPic(article.cover)" width="260px" height="240px" />
          <div class="intro_box">
            <h3>{{article.title}}</h3>
            <p>{{article.ssInfo}}</p>
            <span>
              <img src="../assets/food/收藏_line.png" width="17px" height="17px" />
              点赞({{article.fsLikeNum}})
            </span>
            <span>
              <img src="../assets/food/点赞_line.png" width="17px" height="17px" />
              收藏({{article.fsCollection}})
            </span>
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
              <p style="overflow:hidden">{{hostarticle.ssInfo}}</p>

             <div class="tripb_pic">
              <em></em>
              
          <img :src="getCoverPic(hostarticle.cover)" height="230px" width="250px" />
            </div> 
            </div>
            
          </a>
        </div>
        <div class="main_news trips_con">
          <ul v-for="hotarticle in hotarticles.slice(1,5)" :key="hotarticle.index">
            <li>
              <a href="#" target="_blank">
                <img :src="getCoverPic(hotarticle.cover)" />
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
          <router-link to="/index/ViewDetail">MORE>></router-link>
        </div>
        <router-view></router-view>
        <div class="contain strategy">
          <ul style="display: flex;flex-direction: row;justify-content:space-between">
            <li v-for="bottom in articles.slice(1,5)" :key="bottom.index">
              <a href="#" target="_blank">
                <img :src="getCoverPic(bottom.cover)" />
                <div class="strategy_msk"></div>
                <div class="strategy_txt tit">
                  <div class="strategy_tit">{{bottom.title}}</div>
                </div>
              </a>
            </li>
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
  },
  methods:{
    getCoverPic(pic) {
      //给图片名加上服务器端访问路径
      let path = "http://localhost:3000/coverPic/" + pic;
      return path;
    }
  }
};
</script>
<style scoped>
.contain {
  width: 1200px;
  margin: 0 auto;
}
.container-fluid {
  margin-top: 50px;
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
  margin-bottom: 20px;
}

.intro_box span img {
  margin-bottom: 3px;
  margin-right: 3px;
}
.item a:hover {
  text-decoration: none;
}
.item p {
  margin-left: 7px;
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
  width: 245px;
  height: 100px;
  background-color: #d1e7f4;
}
.tripb_pic {
  position: relative;
  width: 287px;
  height: 242px;
  margin-left: -20px;
  margin-top: 20px;
}
.tripb_pic em {
  position: absolute;
  right: 50px;
  width: 30px;
  height: 15px;
}
.tit p {
  font-size: 12px;
  height: 38px;
}
.txt p {
  font-size: 12px;
  height: 55px;
  width: 220px;
  overflow: hidden;
}
.txt h3 {
  overflow: hidden;
  font-size: 20px;
  font-family: 楷体;
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
  width: 290px;
  height: 45px;
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
  font-size: 20px;
  color: rgb(58, 57, 57);
  font-family: 楷体;
  width: 250px;
  height: 20px;
  overflow: hidden;
  text-align: center;
  margin-top: 5px;
}
.stragyespecail span {
  padding-left: 50px;
  width: 260px;
  overflow: hidden;
}
/* 背景样式 */
.total {
  margin-top: 40px;
}

.totalcontainer {
  display: flex;
  padding: 0;
}

.container:hover .mine-item {
  width: 23.5%;
}

.mine-item:hover {
  width: 32.5% !important;
}

.mine-item {
  transform: translate3d(0, 0, 0);
  position: relative;
  width: 25%;
  height: 100%;
  min-height: 600px;
  max-height: 800px;
  color: white;
  overflow: hidden;
  transition: width 0.5s ease;
}

.mine-item:hover .figcaption:after {
  opacity: 0;
}

.figcaption:after {
  transform: translate3d(0, 0, 0);
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(190, 236, 236);
  opacity: 0.8;
  /*不透明度。0透明1不透明*/
  /* transition: opacity 0.5s ease; */
}

.mine-item:hover .figcaption:before {
  transform: translateY(0);
  opacity: 1;
  transition: all 0.5s ease;
}

.figcaption:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(116, 116, 116, 0) 0%,
    rgba(0, 0, 0, 0) 90%
  );
  z-index: 1;
  opacity: 0;
  transform: translate3d(0, 0, 0) translateY(50%);
}

.mine-item:hover .content {
  opacity: 1;
  transform: translateY(0px);
  transition: all 0.75s ease 0.5s;
}

.content {
  width: 100%;
  transform: translate3d(0, 0, 0) translateY(250px);
  position: absolute;
  top: 55%;
  z-index: 1;
  text-align: center;
  padding: 0 1.618em;
  opacity: 0;
}

.name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  /*相对于自身移动。就相当于把原来左上角的重心移到了正中间*/
  z-index: 2;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}

.name p {
  text-transform: uppercase;
  font-size: 1.728rem;
  line-height: 1;
  margin: 0;
  padding: 3px;
}

.mine-item:hover .bg {
  filter: grayscale(0);
}

.bg {
  transform: translate3d(0, 0, 0);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center center;
  transition: filter 0.5s ease;
  filter: graycale(50%);
}
.bg1 {
  background-image: url(../assets/view/风景背景图1.jpeg);
}
.bg2 {
  background-image: url(../assets/view/景色背景图2.jpg);
}
.bg3 {
  background-image: url(../assets/view/景色背景图片3.jpg);
}
.bg4 {
  background-image: url(../assets/view/景色背景图片4.jpg);
}
.bg5 {
  background-image: url(../assets/view/景色背景图片5.jpg);
}
h2 {
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.tab_title ul {
  float: left;
  margin: 10px 0 0 50px;
}

.container #content a {
  height: 100%;
  display: block;
}
</style>