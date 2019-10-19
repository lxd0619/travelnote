<template>
  <div>
    <div class="container-fluid" style="background-color: #fafafa;">
      <div class="container">
        <span class="con-span">目的地</span>
        <span>></span>
        <span>{{cityName}}</span>
        <div>
          <h1>{{cityName}}</h1>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- 路线 -->
      <div class="line">
        <h3>{{cityName}}经典路线</h3>
        <div
          class="line-map"
          v-for="strategy in personalRowStrategy"
          :key="strategy.strategyId"
        >
          <a href>
            <h5 @click="go(strategy.type,strategy.strategyId)">{{strategy.title}}</h5>
          </a>
          <img class id="map01" :src="require('../assets/line/'+strategy.cover)" style="width: 340px;height: 180px;">
          <p>
            <span>{{strategy.firstchoice}}</span>
            初次访问{{cityName}}的蜂蜂会选择这条线路
          </p>
          <hr />
          {{strategy.prinfo}}
          <br />
          <a href class="map-last-a" @click="go(strategy.type,strategy.strategyId)">查看详情></a>
        </div>
      </div>

      <!-- 景点 -->
      <div class="view">
        <hr />
        <h3>{{cityName}}景点攻略</h3>
        <div class="main_news">
          <ul>
            <li v-for="strategy in sceneryStrategy.slice((currentPage-1)*pagesize,(currentPage)*pagesize)" :key="strategy.strategyId">
              <a href="./linehelp/linestrategy.html" target="_blank">
                <img src="../assets/aimstrategy/two1.png" />
                <div class="txt">
                  <h3>{{strategy.title}}</h3>
                  <span>{{strategy.ssInfo}}</span>
                </div>
              </a>
            </li>
          </ul>
           <!-- 清除浮动 -->
        <div class="clearboth"></div>
        <!-- 分页 -->
        <div class="block">
          <el-pagination
          background
            :page-size="pagesize"
            :pager-count="11"
            layout="prev, pager, next"
            :total="allpages"
            @current-change="current_change"
          ></el-pagination>
        </div>
        </div>
      </div>

      <!-- 美食 -->
      <div class="foods">
        <hr />
        <h3>{{cityName}}美食攻略</h3>
        <div class="main-show" v-for="strategy in foodStrategy" :key="strategy.strategyId">
          <div class="show-img">
            <img src="../assets/aimstrategy/food1.jpeg" alt />
            <span class="img-span">{{strategy.title}}</span>
            <div class="d-txt">
              <p class="p-left">{{strategy.fsInfo}}</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>

    <div class="clearboth"></div>
  </div>
</template>
<script>
export default {
  name: "aimline",
  data: function() {
    return {
      //城市名
      cityName: "",

      personalRowStrategy: [],
      sceneryStrategy: [],
      foodStrategy: [],

      //分页
      allpages: null,//有多少条数据，攻略
      currentPage: 1, //当前页面
      pagesize: 6 //每页有几条攻略
    };
  },
  created() {
    //获取传来cityName
    var cityName = JSON.parse(sessionStorage.getItem("cityName"));
    this.cityName = cityName;
    // console.log(this.cityName);
    //加载路线攻略
    this.$axios
      .post("http://localhost:3000/aim/aimpersonalrow", {
        cityName: this.cityName
      })
      .then(res => {
        // console.log(1,res);
        this.personalRowStrategy = res.data.data;
      })
      .catch(err => {
        console.log("错误信息" + err);
      });
    //加载景点攻略
    this.$axios
      .post("http://localhost:3000/aim/aimscenerystrategy", {
        cityName: this.cityName
      })
      .then(res => {
        // console.log(1,res);
        this.sceneryStrategy = res.data.data;
        this.allpages = res.data.data.length;
         console.log(1, this.allpages);
      })
      .catch(err => {
        console.log("错误信息" + err);
      });
    // 加载美食攻略
    this.$axios
      .post("http://localhost:3000/aim/aimfoodstrategy", {
        cityName: this.cityName
      })
      .then(res => {
        // console.log(1, res);
        this.foodStrategy = res.data.data;
      })
      .catch(err => {
        console.log("错误信息" + err);
      });
  },
  methods: {
    //页面跳转并传送攻略类型和id
    go(type, id) {
      var strategy = { type, id };
      var info = JSON.stringify(strategy);
      sessionStorage.setItem("info", info);
      if (strategy.type == "personalrow") {
        window.open("/index/linestrategy");
      }
    },
    current_change: function(currentPage) {
      this.currentPage = currentPage;
    }
  }
};
</script>

 <style scoped>
.container-fluid .container .con-span {
  color: #888;
  font-size: 12px;
}

.container-fluid .container .con-span:hover {
  color: #ff9d00;
}

.container h3 {
  padding: 20px;
  padding-left: 0px;
}

.container .line {
  width: 100%;
  position: relative;
  clear: both;
}

.line .line-map {
  border: 1px solid #eee;
  float: left;
  margin: 10px;
  position: relative;
}

.line-map a {
  color: black;
}

.line-map a:hover {
  color: #ff9d00;
  text-decoration: none;
}

.line-map > a h5 {
  padding: 12px;
}

.line-map p {
  padding: 10px;
}

.line-map p > span {
  font-size: 24px;
  color: #ff9d00;
}

.line-map .map-last-a {
  position: absolute;
  bottom: 0;
  right: 10px;
}

.container .dividepage {
  clear: both;
  float: right;
  margin-right: 30px;
}

.container .view {
  clear: both;
  margin: 0 auto;
}

.container .view .main_news ul {
  list-style: none;
}

.main_news ul li {
  padding-bottom: 10px;
  width: 800px;
  border-bottom: 1px dotted #cbcbcb;
  margin-bottom: 10px;
}

.main_news ul li:hover {
  background-color: #eeeeee;
}

.main_news ul li a {
  text-decoration: none;
}

.main_news ul li a > img {
  float: left;
  width: 260px;
  height: 150px;
}

.main_news ul li a .txt {
  /* display: block; */
  padding-left: 15px;
  /* width: 520px; */
  height: 150px;
  overflow: hidden;
}

.main_news ul li a .txt h3 {
  font-size: 18px;
  font-weight: 700;
  color: #454545;
}

.main_news ul li a .txt span {
  font-size: 14px;
  line-height: 18px;
  color: #737373;
}

.container .foods {
  clear: both;
}

.container .foods .main-show {
  margin: 0 auto;
  position: relative;
}

.main-show .show-img {
  background-color: white;
  margin: 25px;
  float: left;
  width: 300px;
}

.main-show .show-img:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.main-show .show-img img {
  width: 300px;
  height: 200px;
}

.main-show .show-img .img-span {
  font-size: 24px;
  position: relative;
  top: -42px;
  left: 12px;
  color: white;
}

.main-show .show-img .d-txt {
  text-align: center;
  padding: 10px 10px;
  padding-top: 0;
}

.clearboth {
  clear: both;
}
</style>