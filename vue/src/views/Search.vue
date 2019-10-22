<template>
<el-row type="flex" class="row-bg" justify="center">
  <el-col :span="22">
    <el-container>
      <el-header height class="mt-3"><h5>所查询到的攻略内容如下:</h5></el-header>
      <el-main height>
        <el-row :gutter="40">
          <el-col :span="16">
            <div class="card-deck flex-column mb-5">
              <!-- 热门景点攻略 -->
              <div v-if="show">
                <div
                  class="card d-flex flex-row mb-2 shadow-sm p-3 bg-white rounded"
                  v-for="article in articles.slice((currentPage-1)*pagesize,(currentPage)*pagesize)"
                  :key="article.strategyId"
                >
                  <img
                    class="card-img-top"
                    :src="getCoverPic(article.cover)"
                    alt="Card image cap"
                    style="width: 14rem;height: 11rem;"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      <a
                        href="#"
                        class="card-link"
                        @click="go(article.type,article.strategyId)"
                      >{{article.title}}</a>
                    </h5>
                    <p
                      class="card-text overflow-hidden"
                      style="height: 4em;text-overflow:ellipsis;"
                      v-html="article.ssInfo"
                    ></p>
                    <p class="text-muted">
                      <i class="fa fa-map-marker mr-3" aria-hidden="true">{{article.cityName}}</i>
                      by {{article.userName}}
                      <img
                        :src="getHeadPic(article.headPic)"
                        alt="head"
                        class="mr-3"
                        circle
                      />
                      <i class="el-icon-star-off mr-2">{{article.ssCollectionNum}}</i>
                      <i
                        class="fa fa-thumbs-o-up mr-2 float-right"
                        aria-hidden="true"
                      >{{article.ssLikeNum}}</i>
                    </p>
                  </div>
                </div>
                <div class="block mt-5">
                  <el-pagination
                    :page-size="pagesize"
                    :pager-count="11"
                    layout="prev, pager, next"
                    :total="allpages"
                    @current-change="current_change"
                  ></el-pagination>
                </div>
              </div>
              <div v-else>
                <h1>暂无数据</h1>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="rightTitle">
              <h4>达人分享秀</h4>
            </div>
            <div class="rightPic">
              <div class="partPic">
                <img src="../assets/view/leftPic1.jpg" alt width="200px" height="110px" /> 描述neirshjsjhjdkkjd
              </div>
            </div>
            <div class="rightPic">
              <div class="partPic">
                <img src="../assets/view/leftPic1.jpg" alt width="200px" height="110px" /> 描述neirshjsjhjdkkjd
              </div>
            </div>
            <div class="rightPic">
              <div class="partPic">
                <img src="../assets/view/leftPic1.jpg" alt width="200px" height="110px" /> 描述neirshjsjhjdkkjd
              </div>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
</el-col>
</el-row>
</template>
<script>
export default {
  data() {
    return {
      keyWord: "",
      articles: [],
      show: false,
      pagesize: 5,
      currentPage: 1,
      allpages: ""
    };
  },
  created() {
    this.keyWord = this.$route.params.keyWord;
    this.$axios
      .post("http://localhost:3000/home/search", { keyWord: this.keyWord })
      .then(res => {
        if (res.data.data) {
          this.show = true;
          this.articles = res.data.data;
          this.allpages = res.data.data.length;
        } else {
          this.show = false;
        }
      })
      .catch(err => {
        console.log("错误信息" + err);
      })
      .finally(function() {
        // always executed
      });
  },
  methods: {
    getCoverPic(pic) {
      //给图片名加上服务器端访问路径
      if (pic == "cover" || pic == null) {
        pic = "primaryCover.jpg";
      }
      let path = "http://localhost:3000/coverPic/" + pic;
      return path;
    },
    getHeadPic(pic) {
      //给图片名加上服务器端访问路径
      let path = "";
      if (pic == null || pic == "" || pic == "headPic") {
        pic = "primaryHead.jpeg";
      }
      path = "http://localhost:3000/uploadHeadPic/" + pic;
      return path;
    },
    go(type, id) {
      var strategy = { type, id };
      var info = JSON.stringify(strategy);
      sessionStorage.setItem("info", info);
      window.open("/index/FVstrategy");
    },
    current_change(currentPage) {
      this.currentPage = currentPage;
    }
  }
};
</script>
<style scoped>
.contain {
  width: 1200px;
  margin: 0 auto;
}

.total::after {
  content: "";
  display: block;
  clear: both;
}

.left {
  float: left;
  width: 900px;
}

.right {
  float: right;
  width: 200px;
}

li {
  list-style: none;
}

.pic {
  display: inline-block;
  margin: 0 auto;
}

h3 {
  font-size: 25px;
  font-family: 宋体;
  margin-bottom: -20px;
  display: block;
}

h4 {
  text-align: center;
}

.partPic {
  background-color: cornsilk;
  height: 135px;
  margin-top: 30px;
}
h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ccc;
}
.block {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
.card-body {
  padding-bottom: 0;
  width: 10rem;
  height: 5rem;
}
.text-muted {
  margin: 0;
  height: 1rem;
  line-height: 1rem;
}
.text-muted img {
  width: 20px;
  height: 20px;
}
.card {
  color: #666;
}
.card a {
  font-size: 20px;
  color: #333;
}
.card:hover a {
  color: #ff9d00;
}
</style>