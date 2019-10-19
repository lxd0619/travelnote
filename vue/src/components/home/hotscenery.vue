<template>
  <div class="card-deck flex-column">
    <!-- 热门景点攻略 -->
    <div v-if="show">
      <div
        class="card d-flex flex-row mb-2 shadow-sm p-3 bg-white rounded"
        v-for="article in ssarticles.slice((currentPage-1)*pagesize,(currentPage)*pagesize)"
        :key="article.strategyId"
      >
        <img
          class="card-img-top"
          :src="getCoverPic(article.cover)"
          alt="Card image cap"
          style="width: 14em;height: 12em;"
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
            <i class="fa fa-eye mr-3" aria-hidden="true">{{article.ssCollectionNum}}</i>
            <i class="fa fa-thumbs-o-up mr-2" aria-hidden="true">{{article.ssLikeNum}}</i>
          </p>
        </div>
      </div>
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
      <h1>暂无数据</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "hotscentery",
  data() {
    return {
      ssarticles: {
        strategyType: ""
      },
      show: false,
      pagesize: 5,
      currentPage: 1,
      allpages: ""
    };
  },
  created() {
    this.ssarticles.strategyType = "scenerystrategy";
    this.$axios
      .post("http://localhost:3000/operation/hotstrategy", this.ssarticles)
      .then(res => {
        if (res.data.data) {
          this.show = true;
          console.log(res);
          this.ssarticles = res.data.data;
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
      if (pic == null) {
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
.card-body{
  padding-bottom: 0;
}
.text-muted{
  margin: 0;
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