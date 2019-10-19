<template>
  <div>
    <div v-if="show">
      <div class="card-deck flex-column">
        <div
          class="card d-flex flex-row mb-2 shadow-sm p-3 bg-white rounded"
          v-for="article in articles.slice((currentPage-1)*pagesize,(currentPage)*pagesize)"
          :key="article.index"
        >
          <img class="card-img-top" :src="getPic(article.cover)" alt="article image" />
          <div class="card-body">
            <h5 class="card-title">{{article.title}}</h5>
            <p
              class="card-text overflow-hidden"
              style="height: 4em;text-overflow: ellipsis;"
              v-html="article.ssInfo"
            ></p>
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
      articles: [],
      currentPage: 1,
      allPage:0,
      pagesize: 2,
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
      if(pic == "cover" || pic == null){
        pic = "primaryCover.jpg"
      }
      let path = "http://localhost:3000/coverPic/" + pic;
      return path;
    },
    current_change(currentPage) {
      this.currentPage = currentPage;
    },
    delArticle(){
      this.$axios
      .post("http://localhost:3000/userCenter/delArticle",)
      .then(res => {
        if (res.data.data) {
          this.show = true;
          this.articles = res.data.data;
          this.allPage = res.data.data.length;
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
    }
  }
};
</script>
<style scoped>
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
</style>