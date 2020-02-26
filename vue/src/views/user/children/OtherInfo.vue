<template>
  <div>
    <div v-if="show1">
      <div class="card-deck flex-column" id="article">
        <div
          class="card d-flex flex-row mb-2 shadow-sm p-3 bg-white rounded"
          v-for="article in list.slice(
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
          <div class="card-body">
            <a
              href="#"
              @click="go(article.type, article.strategyId)"
              class="card-title"
              >{{ article.title }}</a
            >

            <p
              class="card-text overflow-hidden"
              style="height: 4em;text-overflow: ellipsis;"
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
      <h2>这个人没有留下什么~</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "otherInfo",
  data() {
    return {
      currentPage: 1,
      allPage: 0,
      pagesize: 3,
      show1: false
    };
  },
  created() {
    var strategyuserId = JSON.parse(sessionStorage.getItem("strategyuserId"));
    this.strategyuserId = strategyuserId;
    this.$axios
      .post("http://localhost:3000/userCenter/Article", {
        userId: this.strategyuserId
      })
      .then(res => {
        console.log(res);
        if (res.data.data) {
          this.show1 = true;
          this.list = res.data.data;
          this.allPage = res.data.data.length;
        } else {
          this.show1 = fasle;
        }
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
    current_change(currentPage) {
      this.currentPage = currentPage;
    },
    go(type, id) {
      var strategy = { type, id };
      var info = JSON.stringify(strategy);
      sessionStorage.setItem("info", info);
      if (type == "personalrow") {
        this.$router.push("/index/LineStrategy");
      }
      this.$router.push("/index/FVstrategy");
    }
  }
};
</script>
<style scoped>
#article img:first-child {
  width: 200px;
  height: 11rem;
}
.block {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ccc;
}
.card-body {
  width: 20rem;
}
.text-muted {
  margin: 0;
}
</style>
