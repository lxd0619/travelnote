<template>
  <div class="Detail">
    <div class="head"></div>
     <div v-if="show1">
    <div class="contain">
      <div class="pub_wrap termini">
        <div class="title clearfix">
          <span class="right_more">
            <a href="#" target="_blank"></a>
          </span>
          <h2 class="clearfix">
            <a class="pr10" href="#" target="_blank">地方筛选</a>
          </h2>
        </div>
        <div class="termini_com">
          <ul class="termini_list">
            <li class="br1 bt1 pb15">
              <div class="termini_img termini_img4">
                <span></span>
              </div>
              <dl class="termini_name">
                <dt>华北地区</dt>
                <dd data-events="click">
                  <a href="#" target="_blank" @click="go('北京')">北京市</a>
                </dd>
                <dd data-events="click">
                  <a href="#" target="_blank" @click="go('河北省')">河北省</a>
                </dd>
                <dd data-events="click">
                  <a href="#" target="_blank" @click="go('山西省')">山西省</a>
                </dd>
                <dd data-events="click">
                  <a href="#" target="_blank" @click="go('内蒙古自治区')">内蒙古自治区</a>
                </dd>
              </dl>
            </li>
            <li class="br1 bt1 pb15">
              <div class="termini_img termini_img6">
                <span></span>
              </div>
              <dl class="termini_name">
                <dt>东北地区</dt>
                <dd>
                  <a href="#" target="_blank" @click="go('黑龙江省')">黑龙江省</a>
                </dd>
                <dd>
                  <a href="#" target="_blank" @click="go('吉林省')">吉林省</a>
                </dd>
                <dd>
                  <a href="#" target="_blank" @click="go('辽宁省')">辽宁省</a>
                </dd>
              </dl>
            </li>
            <li class="bt1 pb15">
              <div class="termini_img termini_img3">
                <span></span>
              </div>
              <dl class="termini_name">
                <dt>华东地区</dt>
                <dd data-events="click">
                  <a href="#" target="_blank" @click="go('上海市')">上海市</a>
                </dd>
                <dd data-events="click">
                  <a href="#" target="_blank" @click="go('山东省')">山东省</a>
                </dd>
                <dd data-events="click">
                  <a href="#" target="_blank" @click="go('江苏省')">江苏省</a>
                </dd>
                <dd data-events="click">
                  <a href="#" target="_blank" @click="go('浙江省')">浙江省</a>
                </dd>
                <dd data-events="click">
                  <a href="#" target="_blank" @click="go('安徽省')">安徽省</a>
                </dd>
                <dd data-events="click">
                  <a href="#" target="_blank" @click="go('福建省')">福建省</a>
                </dd>
                <dd data-events="click">
                  <a href="#" target="_blank" @click="go('江西省')">江西省</a>
                </dd>
                <dd data-events="click">
                  <a href="#" target="_blank" @click="go('台湾省')">台湾省</a>
                </dd>
              </dl>
            </li>
            <li class="br1 pt15">
              <div class="termini_img termini_img5">
                <span></span>
              </div>
              <dl class="termini_name">
                <dt>中南地区</dt>
                <dd data-events="click">
                  <a href="#" target="_blank" @click="go('河南省')">河南省</a>
                </dd>
                <dd data-events="click">
                  <a href="#" target="_blank" @click="go('湖北省')">湖北省</a>
                </dd>
                <dd data-events="click">
                  <a href="#" target="_blank " @click="go('湖南省')">湖南省</a>
                </dd>
                <dd data-events="click ">
                  <a href="# " target="_blank " @click="go('广东省')">广东省</a>
                </dd>
                <dd data-events="click ">
                  <a href="# " target="_blank " @click="go('广西省')">广西省</a>
                </dd>
                <dd data-events="click ">
                  <a href="# " target="_blank " @click="go('海南省')">海南省</a>
                </dd>
                <dd data-events="click ">
                  <a href="# " target="_blank " @click="go('香港')">香港特别行政区</a>
                </dd>
                <dd data-events="click ">
                  <a href="# " target="_blank " @click="go('澳门')">澳门特别行政区</a>
                </dd>
              </dl>
            </li>
            <li class="br1 pt15">
              <div class="termini_img termini_img2">
                <span></span>
              </div>
              <dl class="termini_name">
                <dt>西南地区</dt>
                <dd data-events="click ">
                  <a href="# " target="_blank " @click="go('重庆市')">重庆市</a>
                </dd>
                <dd data-events="click ">
                  <a href="# " target="_blank " @click="go('四川省')">四川省</a>
                </dd>
                <dd data-events="click ">
                  <a href="# " target="_blank " @click="go('贵州省')">贵州省</a>
                </dd>
                <dd data-events="click ">
                  <a href="# " target="_blank " @click="go('云南省')">云南省</a>
                </dd>
                <dd data-events="click ">
                  <a href="# " target="_blank " @click="go('西藏')">西藏自治区</a>
                </dd>
              </dl>
            </li>
            <li class="pt15">
              <div class="termini_img termini_img1">
                <span></span>
              </div>
              <dl class="termini_name">
                <dt>西北地区</dt>
                <dd data-events="click ">
                  <a href="# " target="_blank " @click="go('陕西省')">陕西省</a>
                </dd>
                <dd data-events="click ">
                  <a href="# " target="_blank " @click="go('甘肃省')">甘肃省</a>
                </dd>
                <dd data-events="click ">
                  <a href="# " target="_blank " @click="go('青海省')">青海省</a>
                </dd>
                <dd data-events="click ">
                  <a href="# " target="_blank " @click="go('新疆')">新疆维吾尔自治区</a>
                </dd>
                <dd data-events="click ">
                  <a href="# " target="_blank " @click="go('宁夏')">宁夏回族自治区</a>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
       <section id="timeline">
        <div class="totalcontainer">
          <div class="mine-item">
            <div class="figcaption">
              <div class="bg bg1"></div>
            </div>
            <div class="content">
               <p>一缕青烟，一串爱意，美味串串香</p>
                </div>
             
          </div>

          <div class="mine-item">
            <div class="figcaption">
              <div class="bg bg2"></div>
               <div class="content">
                    <p>能一起吃火锅的人，一定是一个世界的</p>
                  
                </div>
            </div>
          </div>
          <div class="mine-item">
            <div class="figcaption">
              <div class="bg bg3"></div>
               <div class="content">
             <p>观看世间奇景，烤出人生百味</p>
                </div>
            </div>
           
          </div>
          <div class="mine-item">
            <div class="figcaption">
              <div class="bg bg4"></div>
               <div class="content">
                  <p> 吊炉慢烤玉金锣，卤水熬熟瘦胾坨，香脆激活舌味蕾，非常诱惑肉夹馍</p>
                </div>
            </div>
           
          </div>
          <div class="mine-item">
            <div class="figcaption">
              <div class="bg bg5"></div>
            </div>
             <div class="content">
             <p>一缕青烟，一串爱意，美味串串香</p>
                </div>
          </div>
        </div>
      </section>
      <div class="domestic">
        <span class="more">
          <h3>
            江苏省
            <a href="javascript;" @click="go('江苏省')">
              <em>更多&gt;&gt;</em>
            </a>
          </h3>
        </span>
        <div class="total" >
            <div class="detailtitle" @click="go(message.type,message.strategyId)" v-for="message in messages.slice(0,2)" :key="message.index" >
            <img :src="getCoverPic(message.cover)" width="250px" height="250px" />
              <h3>“{{message.title}}”</h3>
            </div>
         
          </div>
        </div>
     
      <div class="domestic">
        <span class="more">
          <h3>
            湖南省
            <a href="javascript;" @click="go('湖南省')">
              <em>更多&gt;&gt;</em>
            </a>
          </h3>
        </span>
        <div class="total">
         <div class="detailtitle" v-for="message in messages1.slice(0,2)" :key="message.strategyId" @click="went(message.type,message.strategyId)">
            <img :src="getCoverPic(message.cover)" width="250px" height="250px" />
              <h3>“{{message.title}}”</h3>
            </div>
        </div>
      </div>
      <div class="domestic">
        <span class="more">
          <h3>
            上海市
            <a href="javascript;" @click="go('上海市')">
              <em>更多&gt;&gt;</em>
            </a>
          </h3>
        </span>

  <div class="total">
         <div class="detailtitle" v-for="message in messages2.slice(0,2)" :key="message.strategyId" @click="went(message.type,message.strategyId)">
            <img :src="getCoverPic(message.cover)" width="250px" height="250px" />
              <h3>“{{message.title}}”</h3>
            </div>
        </div>
        </div>
      </div>
        <div class="block">
          <el-pagination
            :page-size="1"
            :pager-count="11"
            layout="prev, pager, next"
            :total="allpages"
            @current-change="current_change"
          ></el-pagination>
        </div>
      <div id="foot"></div>
    </div>
    
     <div v-else id="content">
      <h1>暂无数据呢~</h1>
     
    </div>
    
  </div>
</template>
<script>
export default {
  name: "fooddetail",
  data() {
    return {
      articles: [],
      messages: [],
      messages1: [],
      messages2: [],
      hotarticles: [],
       show1: true,
      strategyType: "foodstrategy",
      cityName: ["江苏省", "湖南省", "上海市"]
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
      .post("http://localhost:3000/delicious/deliciousClassify", {
        cityName: this.cityName[0]
      })
      .then(res => {
        this.messages = res.data.data;
        console.log(res);
        // console.log("data:"+JSON.stringify(res.data.data))
      })
      .catch(err => {
        console.log(err);
      });
    this.$axios
      .post("http://localhost:3000/delicious/deliciousClassify", {
        cityName: this.cityName[1]
      })
      .then(res => {
        this.messages1 = res.data.data;
        console.log(res);
        // console.log("data:"+JSON.stringify(res.data.data))
      })
      .catch(err => {
        console.log(err);
      });
    this.$axios
      .post("http://localhost:3000/delicious/deliciousClassify", {
        cityName: this.cityName[2]
      })
      .then(res => {
         if (res.data.data) {
        this.messages2 = res.data.data;
        console.log(res);
        // console.log("data:"+JSON.stringify(res.data.data))
         }else {
           this.show1=false
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    go(city) {
      var city_name = JSON.stringify(city);
      sessionStorage.setItem("city_name", city_name);
      this.$router.push("/index/foodcity");
    },
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
      window.open("/index/fvstrategy");
    },
   
  }
};
</script>
<style scoped>
.Detail {
  background-color: rgba(248, 248, 248, 0.952);
}
.contain {
  width: 1200px;
  margin: 0px auto;
}

.pub_wrap {
  width: 1200px;
  margin: 20px auto 0;
}

.pub_wrap .right_more a {
  color: #555;
}

.pub_wrap .right_more b {
  font: 12px Simsun;
}

.pub_wrap .right_more {
  font-size: 14px;
  position: absolute;
  right: 5px;
  top: 15px;
}

.pub_wrap .title {
  position: relative;
}

.termini h2,
.termini h2 a {
  color: #8c2;
}

.pub_wrap h2 a {
  font-size: 24px;
  line-height: 30px;
  text-decoration: none;
}

.termini h2 {
  border-color: #8c2;
}

.termini_list .bt1 {
  border-bottom: 1px solid #f1f1f1;
}

.termini_list .br1 {
  border-right: 1px solid #f1f1f1;
}

.termini_list li {
  width: 33%;
  float: left;
}

.pub_wrap h2 {
  border-bottom: 2px solid;
  padding: 5px 0;
}

.pb15 {
  padding-bottom: 15px;
}

.termini_img4 {
  background-position: -509px 0;
}

.termini_img {
  width: 80px;
  height: 80px;
  float: left;
  margin-left: 15px;
}

.termini_com {
  overflow: hidden;
  margin-top: 18px;
  margin-bottom: 18px;
}

.termini_name {
  margin: 0 15px 0 110px;
  height: 80px;
  overflow: hidden;
}

.termini_name dt {
  color: #8c2;
  margin: 3px 0 5px 4px;
  font-size: 18px;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

.termini_name dd {
  float: left;
  padding: 0 5px;
  cursor: pointer;
  font-size: 14px;
  line-height: 22px;
  margin: 0 5px 4px 0;
}

.termini_name dd a {
  color: #555;
}

.total {
  background-color: rgb(255, 255, 255);
  margin-top: 20px;
  margin-bottom: 15px;
  height: 300px;
}

.termini_img {
  background: url(/img.elongstatic.com/hotel/HotelNewDestRecomm/hotel_index_icon.png)
    no-repeat 0 0;
  display: inline-block;
}

.domestic h3 {
  padding: 10px 0;
}

.domestic h3 .more {
  position: relative;
  top: 6px;
}

.right {
  float: right;
}

.discount h3 .more a {
  color: #555;
  font: 14px/24px Microsoft yahei;
}

.domestic h3 a {
  font: 18px/26px Microsoft yahei;
  color: #555;
}

.left {
  float: left;
}

.pr5 {
  padding-right: 5px;
}

.domestic h3 span {
  font: 14px/22px Microsoft yahei;
  color: #555;
  padding: 1px 10px;
  margin: 4px 10px 0;
  border-radius: 12px;
  cursor: pointer;
  float: left;
}

.more h3 {
  color: rgb(114, 114, 114);
  font-family: Microsoft yahei;
  padding: 0px;
  border-bottom: 2px solid rgb(226, 226, 226);
}

.more em {
  margin-left: 1000px;
  font-style: normal;
  font-family: 宋体;
  font-size: 15px;
}
/* //轮播 */

.fold_wrap {
  width: 1200px;
  overflow: hidden;
  margin: 0px auto;
  margin-bottom: 50px;
}

.fold_wrap ul {
  width: 1200px;
  height: 260px;
  margin: 0 auto;
  overflow: hidden;
}

.fold_wrap ul li {
  float: left;
  width: 160px;
  height: 260px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  -webkit-transition: width 0.5s;
  transition: width 0.5s;
}

.fold_wrap ul li .mask_b {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  background: #b2b2b2;
}

.fold_wrap ul li .mask_b h4 {
  color: #fff;
  width: 30px;
  margin: 0 auto;
  display: block;
  font: 30px/30px Microsoft Yahei;
  position: relative;
  padding: 30px 0 0 0;
}

.pic_auto1 {
  background: url(../assets/view/leftPic1.jpg) no-repeat center 0;
}

.pic_auto2 {
  background: url(../assets/view/leftPic2.jpg) no-repeat center 0;
}

.pic_auto3 {
  background: url(../assets/view/leftPic3.jpg) no-repeat center 0;
}

.pic_auto4 {
  background: url(../assets/view/leftPic4.jpg) no-repeat center 0;
}

.pic_auto5 {
  background: url(../assets/view/leftPic5.jpg) no-repeat center 0;
}

.pic_auto6 {
  background: url(../assets/view/leftPic6.jpg) no-repeat center 0;
}

.pic_auto {
  width: 100%;
  height: 100%;
}

.fold_wrap ul li .adv_intro {
  width: 92%;
  height: 40px;
  padding: 5px 4%;
  position: absolute;
  left: 0;
  bottom: -50px;
  background: #37d;
  color: #fff;
  overflow: hidden;
}

.fold_wrap ul li.active {
  width: 400px;
}

.fold_wrap ul li {
  float: left;
  width: 160px;
  height: 260px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  -webkit-transition: width 0.5s;
  transition: width 0.5s;
}
.detailtitle h3 {
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #333;
}

.detailtitle{
  width: 300px;
  height: 300px;
  display: inline-block;
}
.total{
  box-shadow: 0px 5px 5px #eee;
   background-color: rgb(252, 255,255);
   transition: 0.3s all;
}
.detailtitle img:hover{
  width: 255px;
  height: 253px;
   transition: 0.3s all;
}
.container:hover .mine-item {
  width: 23.5%;
}

.mine-item:hover {
  width: 32.5% !important;
}

.mine-item {
  transform: translate3d(0, 0, 0);
  display: inline-block;
  position: relative;
  width:200px;
  height: 100%;
  min-height: 400px;
  max-height: 800px;
  color: white;
  overflow: hidden;
  transition: width 0.5s ease;
}

.mine-item:hover .figcaption:after {
  opacity: 0;
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
.mine-item:hover .bg {
  filter: grayscale(0);
}

.bg {
  transform: translate3d(0, 0, 0);
  position: absolute;
  width: 500px;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center center;
  transition: filter 0.5s ease;
  filter: graycale(50%);
}
.bg1 {
  background-image: url(../assets/food/广式早茶.jpg);
}
.bg2 {
  background-image: url(../assets/food/火锅.jpg);
}
.bg3 {
  background-image: url(../assets/food/烧烤.jpg);
}
.bg4 {
  background-image: url(../assets/food/肉夹馍.jpg);
}
.bg5 {
  background-image: url(../assets/food/串串香.jpg);
}
.content{
  font-size: 18px;
  color: aliceblue;
  margin-top:130px;
  text-align: center;
  font-family: 宋体;
}
</style>



