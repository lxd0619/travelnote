<template>
  <div>
    <div class="card-deck flex-column">
      <div
        class="card d-flex flex-row mb-2 shadow-sm p-3 bg-white rounded"
        v-for="article in articles"
        :key="article.index"
      >
        <img class="card-img-top" :src="getPic(article.cover)" alt="article image" />
        <span>article:{{article.cover}}</span>
        <div class="card-body">
          <h5 class="card-title">{{article.title}}</h5>
          <p
            class="card-text overflow-hidden"
            style="height: 4em;text-overflow:ellipsis;"
          >{{article.ssInfo}}}</p>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <nav class="justify-content-end align-text-bottom" aria-label="Page navigation example">
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
</template>
<script>
export default {
  name: "UserArticle",
  data() {
    return {
      articles: []
    };
  },
  created() {
    // 查询用户攻略
    this.$axios
      .post("http://localhost:3000/userCenter/userArticle")
      .then(res => {
        console.log("用户攻略查询结果" + res.data.data);
        this.articles = res.data.data;
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
      let path = "http://localhost:3000/coverPic/" + pic;
      return path;
    }
  }
};
</script>
<style scoped>
</style>