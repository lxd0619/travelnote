<template>
  <div>
    <div class="contain">
      <div id="head"></div>
      <h2 >美食攻略</h2>
      <div class="total">
        <section id="timeline">
          <div class="totalcontainer">
            <div class="mine-item">
              <div class="figcaption">
                <div class="bg bg1"></div>
                <div class="name">
                  <p>记忆</p>
                </div>
                <div class="content">
                  <p>品尝到一份别致的美食，会让你久久不能忘记。一份精致的美食，如一份可爱的礼物一样，当你拿到手的时候，除了珍惜，就是赞叹。</p>
                </div>
              </div>
            </div>

            <div class="mine-item">
              <div class="figcaption">
                <div class="bg bg2"></div>
                <div class="name">
                  <p>味道</p>
                </div>
                <div class="content">
                
                  <p>果汁新鲜，酸甜，当你倦怠不堪时，刺激你的味蕾和感觉神经，让你新鲜难以忘怀，在心中留下了特别的味道</p>
                </div>
              </div>
            </div>
            <div class="mine-item">
              <div class="figcaption">
                <div class="bg bg3"></div>
                <div class="name">
                  <p>传承</p>
                </div>
                <div class="content">
                  <p>寻常的衣食住行中，传统日复一日地延续</p>
                </div>
              </div>
            </div>
            <div class="mine-item">
              <div class="figcaption">
                <div class="bg bg4"></div>
                <div class="name">
                  <p>相逢</p>
                </div>
                <div class="content">
                  <p>
                    人们用五味杂陈形容人生，因为懂得，味道是每个心中固守的乡愁
                  </p>
                </div>
              </div>
            </div>
            <div class="mine-item">
              <div class="figcaption">
                <div class="bg bg5"></div>
                <div class="name">
                  <p>流年</p>
                </div>
                <div class="content">
                  <p>当你的掌纹静静地滑过这些旧物的骨架，时光酿造的陈酒便会悄然擦过舌尖的味蕾</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="headline container-fluid">
        <h2>特色美食</h2>
      </div>
      <div class="specialFood">
        <div
          class="stragyespecail"
          v-for="fsarticle in fsarticles.slice(0,8)"
          :key="fsarticle.strategyId"  @click="went(fsarticle.type,fsarticle.strategyId)">
          <img :src="getCoverPic(fsarticle.cover)" width="219px" height="200px" />
          <div class="intro_box">
            <h3>{{fsarticle.title}}</h3>
            <p>{{fsarticle.fsInfo}}</p>
            <span>点赞({{fsarticle.fsLikeNum}})</span>
            <span>收藏({{fsarticle.fsCollectionNum}})</span>
          </div>
        </div>
      </div>
      <div class="gonglve_wrap clearfix">
        <div class="cont-main _j_feed_list">
          <div class="gl-post">
            <div data-cs-t="gonglve_feed" class="_j_feed_data">
              <div class="bar clearfix" style="margin-top: 10px;margin-bottom: 23px;">
                <span class="type">
                  <strong>推荐攻略</strong>
                  <router-link to="/index/FoodDetail"><span>更多>></span> </router-link>
                </span>
                  <router-view></router-view>
              </div>

              <div
                class="feed-item _j_feed_item"
                v-for="recommend in rearticles.slice(0,3)"
                :key="recommend.strategyId" @click="went(recommend.type,recommend.strategyId)"
                style="cursor:pointer"
              >
                <hr />
                <div class="title">{{recommend.title}}</div>

                <dl class="art clearfix">
                  <dt>
                    <img :src="getCoverPic(recommend.cover)" style="width: 220px height:200px;" id="artCover"/>
                  </dt>
                  <dd>
                    <div class="info overflow">{{recommend.fsInfo}}</div>
                    <div class="ext-r">
                      <span class="author">
                        <span class="nums">
                          作者：
                          <img src="../assets/headPic/head2.jpg" width="35px" height="35px" class="rounded-circle"/>
                        </span>
                        <img src="../assets/food/收藏_line.png" width="20px" height="20px" />
                        收藏({{recommend.fsCollectionNum}})
                      </span>
                      <img src="../assets/food/点赞_line.png" width="20px" height="20px" />

                      点赞({{recommend.fsLikeNum}})
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div style="width: 300px">
          <span class="type-div">
            <strong>热门排行</strong>
          </span>

          <div class="top" >
            <ul v-for="li in rearticles.slice(0,1)" :key="li.strategyId" @click="went(li.type,li.strategyId)">
              <li class="gl_list">
                <a href="#">
                  <img :src="getCoverPic(li.cover)" width="180px" height="200px" />
                </a>
              </li>
            </ul>
            <ul v-for="li in rearticles" :key="li.strategyId"  @click="went(li.type,li.strategyId)">
              <li>
              <span class="num"></span>
              <a href="#" title="京都">{{li.cityName}}</a>
            </li>
            </ul>
            

           
          </div>
        </div>
      </div>
    </div>
  
    <div id="foot"></div>
    <el-backtop :bottom="100"></el-backtop>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fsarticles: [],
      rearticles: [],
      strategyType: "foodstrategy"
    };
  },

  created() {
    console.log(this.strategyType);
    // 普通攻略
    this.$axios
      .post("http://localhost:3000/operation/normalstrategy", {
        strategyType: this.strategyType
      })
      .then(res => {
        console.log(res);
        console.log("查询结果" + res.data.data);
        this.fsarticles = res.data.data;
      })
      .catch(err => {
        console.log("错误信息" + err);
      });
    this.$axios
      .post("http://localhost:3000/operation/hotStrategy", {
        strategyType: this.strategyType
      })
      .then(res => {
        console.log(res);
        console.log(1, res.data.data);
        this.rearticles = res.data.data;
      })
      .catch(err => {
        console.log("错误信息" + err);
      });
  },
   methods:{
   getCoverPic(pic) {
      //给图片名加上服务器端访问路径
      if (pic == "cover" || pic == null || pic =="") {
        pic = "primaryCover.jpg";
      }
      let path = "http://localhost:3000/coverPic/" + pic;
      return path;
    },
      went(type, id) {
      var strategy = { type, id };
      var info = JSON.stringify(strategy);
      sessionStorage.setItem("info", info);
      this.$router.push("/index/fvstrategy");
    },
  }
};
</script>
<style scoped>
#artCover{
  height: 13rem;
  width: 18rem;
}
#centerNav > ul > li > a {
  color: #fff;
  font-size: 20px;
}

#centerNav > ul > li {
  width: 20%;
}
.type span{
  margin-left: 700px;
  font-size: 20px;
}
.left {
  height: 300px;
  background-color: bisque;
  margin: 0;
}

.headline {
  margin: 50px auto;
}

.headline h2 {
  text-align: center;
}

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
  background: rgb(233, 220, 200);
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

.bg{
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
 .bg1{
   background-image:url(../assets/food/2.jpg)}
 .bg2{
   background-image:url(../assets/food/3.jpg)}
  .bg3{
   background-image:url(../assets/food/timg.jpg)}
 .bg4{
   background-image:url(../assets/food/food11.jpg)}
  .bg5{
   background-image:url(../assets/food/food6.jpg)}
h2{
  text-align: center;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.tab_title ul {
  float: left;
  margin: 10px 0 0 50px;
}

.container #content a {
  height: 100%;
  display: block;
}

* {
  padding: 0;
  margin: 0;
}
a {
  color: #005bb5;
  text-decoration: none;
  outline: 0;
}

.contain {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.gonglve_wrap {
  margin-top: 15px;
  padding-bottom: 20px;
}

.cont-main {
  float: right;
  width: 900px;
  margin-bottom: 20px;
}
.feed-item a {
  display: block;
}

a {
  background-color: transparent;
  text-decoration: none;
  color: #ff9d00;
  cursor: pointer;
}
.cont-main .hr {
  margin-top: 20px;
  height: 1px;
  background-color: #e5e5e5;
  overflow: hidden;
}

.feed-item .stat {
  float: right;
  padding: 0 15px;
  line-height: 30px;
  border: 1px solid #ff9d00;
  border-radius: 15px;
  font-size: 14px;
  background-color: #fff;
  color: #666;
}

.feed-item .stat .num {
  color: #ff9d00;
}

.type strong {
  font-size: 30px;
}

.feed-item .icon-cart {
  width: 16px;
  background-position: -20px -116px;
}

.feed-item .icon-hand,
.feed-item .icon-cart {
  display: inline-block;
  margin-left: 10px;
  width: 15px;
  height: 15px;
  background: url(/images/zr.png) no-repeat -40px -40px;
  overflow: hidden;
  vertical-align: -2px;
}

.cont-main .type {
  display: inline-block;
  line-height: 20px;
  font-size: 12px;
  color: #666;
}

.cont-main .type i {
  float: left;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  background: url(/images/zr.png) no-repeat 0 0;
  overflow: hidden;
}

.feed-item .title {
  margin-bottom: 15px;
  font-size: 20px;
  color: #333;
  margin-top: 20px;
}

.feed-item {
  font-size: 14px;
  line-height: 24px;
}

.feed-item .txt {
  margin-bottom: 15px;
  color: #666;
}

dl {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

a:hover {
  outline: 0;
  text-decoration: underline;
  color: #ff8a00;
}

a {
  background-color: transparent;
  text-decoration: none;
  color: #ff9d00;
  cursor: pointer;
}

.feed-item .art dt {
  display: inline;
  margin-right: 20px;
}

dl,
dt,
dd,
form {
  margin: 0;
  padding: 0;
}

.feed-item .art dd {
  overflow: hidden;
}

dd {
  display: block;
  margin-inline-start: 40px;
}

.feed-item .art .info {
  height: 30px;
  padding-top: 10px;
  margin-bottom: 16px;
  color: #666;
}

.feed-item .ext-r {
  float: right;
  color: #999;
  line-height: 22px;
  font-size: 12px;
}

.feed-item .author {
  display: inline-block;
  margin-right: 10px;
  font-size: 12px;
}

.navSearch {
  float: left;
  width: 40px;
  font-size: 14px;
}

.drop-pop {
  margin-top: 20px;
  padding-bottom: 20px;
}

.drop-item .trigger {
  padding: 10px 0;
  height: 22px;
  cursor: pointer;
}

.drop-open .drop-pop {
  display: block;
  z-index: 1;
}

.drop-item .trigger i {
  float: right;
  margin-top: 10px;
  border-top: 4px solid #999;
  border-left: 4px dashed transparent;
  border-right: 4px dashed transparent;
  font-size: 0;
  overflow: hidden;
}

.drop-pop ul {
  margin-left: -15px;
}

.drop-pop li {
  float: left;
  margin: 0 15px;
}

.top .num {
  float: left;
  margin-right: 20px;
  font-size: 30px;
  color: #ff9d00;
}

.top li + li {
  border-top: 1px solid #f7f7f7;
  line-height: 24px;
}

.top li {
  padding: 20px 0;
}

.top a {
  color: #333;
  font-size: 20px;
  margin-top: 10px;
}

.type-div {
  font-size: 30px;
  font-weight: bolder;
  color: gray;
  display: inline-block;
  color: #666;
}
li {
  list-style: none;
}

.stragyespecail {
  display: inline-block;
  width: 220px;
  height: 300px;
  overflow: hidden;
  margin-left: 18px;
  margin-bottom: 30px;
}
.stragyespecail:hover{
   box-shadow: 0px 5px 5px #eee;
   background-color: rgb(252, 255,255);
   transition: 0.3s all;
}
.stragyespecail img:hover{
  width: 225px;
  height: 203px;
   transition: 0.3s all;
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
  font-size: 16px;
  color: #666;
  width: 220px;
  height: 20px;
  overflow: hidden;
  text-align: center;
}
.stragyespecail span {
  padding-left: 25px;
  width: 220px;
  overflow: hidden;
  height: 10px;
  font-family: 宋体;
}
.overflow {
  width: 500px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>