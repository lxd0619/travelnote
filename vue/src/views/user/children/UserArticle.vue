<template>
  <div>
    <div v-if="show">
      <div class="card-deck flex-column" id="article">
        <div
          class="card d-flex flex-row mb-2 shadow-sm p-3 bg-white rounded  "
          v-for="article in articles.slice(
            (currentPage - 1) * pagesize,
            currentPage * pagesize
          )"
          :key="article.strategyId"
        >
          <img
            class="card-img-top"
            :src="getPic(article.cover)"
            alt="article image"
          />
          <div class="unread" v-if="article.ssStutas == -4">
            <i class="el-icon-lock"></i>
          </div>
          <div class="card-body">
            <a
              @click="go(article.type, article.strategyId)"
              class="card-title"
              style="cursor:pointer;"
              >{{ article.title }} {{ article.ssStatus }}</a
            >
            <el-button
              type="danger"
              icon="el-icon-delete"
              @click="delArticle(article.type, article.strategyId)"
              circle
              class="float-right"
              id="delBtn"
            ></el-button>
            <p
              class="card-text overflow-hidden"
              style="display:-webkit-box;-webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden;height:100px;"
              v-html="article.ssInfo"
            ></p>
            <p class="text-muted">
              <i class="fa fa-map-marker mr-2" aria-hidden="true">{{
                article.cityName
              }}</i>
              <i class="el-icon-star-off mr-2">{{ article.ssCollectionNum }}</i>
              <i
                class="fa fa-thumbs-o-up mr-2 float-right"
                aria-hidden="true"
                >{{ article.ssLikeNum }}</i
              >
            </p>
          </div>
        </div>
      </div>
      <!-- 分页 -->
      <div class="block">
        <el-pagination
          :page-size="pagesize"
          :pager-count="11"
          layout="prev, pager, next"
          :total="allPage"
          @current-change="current_change"
        ></el-pagination>
      </div>
    </div>
    <div v-else>
      <h3>快去分享你的快乐吧~</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserArticle",
  data() {
    return {
      articles: [{}],
      currentPage: 1,
      allPage: 0,
      pagesize: 4,
      show: true
    };
  },
  created() {
    // 查询用户攻略
    this.$axios
      .post("http://localhost:3000/userCenter/userArticle")
      .then(res => {
        if (res.data.data) {
          this.show = true;
          this.articles = res.data.data;
          this.allPage = res.data.data.length;

          console.log(this.articles);
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
    getPic(pic) {
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
    },
    delArticle(type, strategyId) {
      this.$axios
        .post("http://localhost:3000/userCenter/delArticle", {
          type: type,
          strategyId: strategyId
        })
        .then(res => {
          this.$message({
            showClose: true,
            message: "删除攻略成功！",
            type: "success"
          });
          for (var i = 0; i < this.articles.length; i++) {
            if (this.articles[i].strategyId == strategyId) {
              this.articles.splice(i, 1);
              this.allPage = this.articles.length;
            }
          }
          if (this.articles.length == 0) {
            this.show = false;
          }
        })
        .catch(err => {
          console.log("错误信息" + err);
          this.$message({
            showClose: true,
            message: "出错啦！删除失败！",
            type: "error"
          });
        })
        .finally(function() {
          // always executed
        });
    }
  }
};
</script>
<style scoped>
.unread {
  width: 825px;
  height: 210px;
  background: rgba(19, 19, 19, 0.5);
  margin: 8px 0px;
  margin-top: 0;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 100px;
}
.unread i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(246, 245, 236);
}
.unread:hover {
  background: rgba(0, 0, 0, 0.5);
}
h3 {
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
#article img:first-child {
  width: 13rem;
  height: 11rem;
}
.card-body {
  padding-bottom: 0;
  width: 10rem;
  height: 5rem;
}
.text-muted {
  margin: 0;
}
/* .text-muted img {
  width: 20px;
  height: 20px;
} */
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
#delBtn {
  position: relative;
  top: -1rem;
}
</style>
