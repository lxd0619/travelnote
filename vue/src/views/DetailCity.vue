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
            <a class="pr10" href="#" target="_blank">的攻略</a>
          </h2>
        </div>
      </div>
      <div class="domestic"  @click="went(message.type,message.strategyId)" v-for="message in messages.slice((currentPage-1)*1,(currentPage)*1)" :key="message.strategyId">
       <div class="total">
          <div class="leftimg">
            <img :src="getCoverPic(message.cover)" width="320px" height="130px" />
          </div>
          <div class="rightfont">
            <div class="detailtitle">
              <h3>“{{message.title}}”</h3>
            </div>
            <div class="detail_p">
              <p>{{message.ssInfo}}</p>
            </div>
            <div class="likecollection">
              <span>
                <img src="../assets/food/收藏_line.png" width="17px" height="17px" />
                点赞({{message.ssLikeNum}})
              </span>
              <span>
                <img src="../assets/food/点赞_line.png" width="17px" height="17px" />
                收藏({{message.ssCollection}})
              </span>
            </div>
          </div>
        </div>
          <hr/>
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
      <hr />
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
  name: "detailcity",
  data: function() {
    return {
      messages: [],
       currentPage: 1,
      allpages: 0,
      show1: true
    };
  },
  created() {
    var city_name = JSON.parse(sessionStorage.getItem("city_name"));
    console.log(city_name);
    this.$axios
      .post("http://localhost:3000/scenic/viewstrategyClassify", {
        cityName: city_name
      })
      .then(res => {
        if (res.data.data) {
          this.messages = res.data.data;
          this.allpages = res.data.data.length;
          console.log(this.allpages);
        } else {
           this.show1=false
        }

      })
      .catch(err => {
        console.log(err);
      });
  },
    methods: {
    current_change(currentPage) {
      this.currentPage = currentPage;
    },
    getCoverPic(pic) {
      //给图片名加上服务器端访问路径
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

.tab_theme {
  overflow: hidden;
  width: 1220px;
  height: 202px;
}

.tab_theme li {
  float: left;
  width: 293px;
  margin: 0 10px 0 0;
  overflow: hidden;
  position: relative;
}

.tab_theme li a {
  display: block;
  width: 100%;
}

.tab_theme li .pic_add {
  height: 160px;
  width: 100%;
  overflow: hidden;
}

.tab_theme li img {
  display: block;
  width: 100%;
  margin-top: -20px;
  position: relative;
  bottom: 0;
  -webkit-transiton: bottom 0.3s;
  transition: bottom 0.3s;
}

.tab_theme li .city_name {
  position: absolute;
  font: 24px/30px Microsoft yahei;
  color: #fff;
  top: 124px;
  left: 0;
  text-indent: 0.5em;
  text-shadow: 1px 1px 7px #000;
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
  _background: #b2b2b2;
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
.block {
  width: 400px;
  margin: 0px auto;
  padding-left: 50px;
}
.total {
  background-color: rgb(255, 255, 255);
  margin-top: 20px;
  margin-bottom: 15px;
}
.total::after {
  content: "";
  display: block;
  clear: both;
}
.leftimg {
  border-right: 1px solid #333;
  width: 335px;
  float: left;
  margin-top: 20px;
}
.leftimg {
  margin-left: 40px;
  margin-bottom: 15px;
}
.rightfont {
  float: right;
  height: 130px;
  width: 800px;
  margin-top: 20px;
}
.rightfont p {
  width: 400px;
  overflow: hidden;
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
.detailtitle h3 {
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #333;
}
.likecollection {
  margin-top: 40px;
  margin-left: 600px;
}
</style>



