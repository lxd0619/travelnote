<template>
  <div>
    <div class="card-deck flex-column">
      <div
        class="card d-flex flex-row mb-2 shadow-sm p-3 bg-white rounded"
        v-for="collection in collections"
        :key="collection.index"
      >
        <img class="card-img-top" src alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{{collection.title}}</h5>
          <p
            class="card-text overflow-hidden"
            style="height: 4em;text-overflow:ellipsis;"
          >{{collection.ssInfo}}}</p>
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
  name: "UserCollection",
  data() {
    return {
      collections: []
    };
  },
  created() {
    // 查询用户收藏
    this.$axios
      .post("http://localhost:3000/userCenter/collectArticle")
      .then(res => {
        console.log("用户收藏查询结果" + res.data.data);
        this.collections = res.data.data;
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
      // let path = "http://localhost:3000/coverPic/" + pic;
      // return path;
    }
  }
};
</script>
<style scoped>
</style>