<template>
  <div id="content" class="mb-5">
    <div v-if="show">
      <div class="card-deck flex-column" id="collectArticle">
        <div
          class="card d-flex flex-row mb-2 shadow-sm p-3 bg-white rounded"
          v-for="collection in collections.slice((currentPage-1)*pagesize,(currentPage)*pagesize)"
          :key="collection.index"
          @click="go(article.type,article.strategyId)"
        >
          <img class="card-img-top" :src="getPic(collection.cover)" alt="collectionArticlePic" />
          <div class="card-body">
            <h5 class="card-title">{{collection.title}}</h5>
            <p
              class="card-text overflow-hidden"
              style="height: 4em;text-overflow:ellipsis;"
              v-html="collection.ssInfo"
            ></p>
            <p class="text-muted">
              <i class="fa fa-map-marker mr-2" aria-hidden="true"> {{collection.cityName}}</i>
              <i class="el-icon-star-off mr-2"> {{collection.ssCollectionNum}}</i>
              <i class="fa fa-thumbs-o-up mr-2 float-right" aria-hidden="true"> {{collection.ssLikeNum}}</i>
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
          :total="allpages"
          @current-change="current_change"
        ></el-pagination>
      </div>
    </div>
    <div v-else>
      <h3>暂无收藏攻略，快去看看吧~</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserCollection",
  data() {
    return {
      collections: [],
      currentPage: 1,
      allpages: null,
      pagesize: 5,
      show: false
    };
  },
  created() {
    // 查询用户收藏
    this.$axios
      .post("http://localhost:3000/userCenter/collectArticle")
      .then(res => {
        console.log("用户收藏查询结果" + res.data.data);
        if (res.data.data) {
          this.show = true;
          this.collections = res.data.data;
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
    getPic(pic) {
      //给图片名加上服务器端访问路径
      if (pic == "cover" || pic == null) {
        pic = "primaryCover.jpg";
      }
      let path = "http://localhost:3000/coverPic/" + pic;
      return path;
    },getHeadPic(pic) {
      //给图片名加上服务器端访问路径
      let path = "";
      if (pic == null || pic == "" || pic =="headPic") {
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
#collectArticle img:first-child {
  width: 12rem;
  height: 10rem;
}
.card-body{
  padding-bottom: 0;
  width: 10rem;
  height: 5rem;
}
.text-muted{
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
</style>