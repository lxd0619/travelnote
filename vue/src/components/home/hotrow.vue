<template>
  <div class="card-deck flex-column mb-5">
    <div v-if="show">
      <div
        class="card d-flex flex-row mb-2 shadow-sm p-3 bg-white rounded"
        v-for="article in prarticles.slice((currentPage-1)*pagesize,(currentPage)*pagesize)"
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
          >{{article.prInfo}}</p>
          <p class="text-muted">
            <i class="fa fa-map-marker mr-2" aria-hidden="true"> {{article.city}}</i>
            by {{article.userName}}
            <img
              :src="getHeadPic(article.headPic)"
              alt="head"
              class="mr-3"
              circle
            />
            <i class="fa fa-clock-o mr-2" aria-hidden="true"> {{article.dayNum}}天</i>
            <i class="fa fa-leaf mr-2" aria-hidden="true"> {{article.season}}</i>
            <i class="fa fa-users mr-2" aria-hidden="true"> {{article.crowdType}}</i>
            <i class="el-icon-star-off mr-2"> {{article.prCollectionNum}}</i>
            <i class="fa fa-thumbs-o-up mr-2 float-right" aria-hidden="true"> {{article.prLikeNum}}</i>
          </p>
        </div>
      </div>
      <div class="block">
        <el-pagination
          :page-size="pagesize"
          :pager-count="11"
          layout="prev, pager, next"
          :total="allpage"
          @current-change="current_change"
        ></el-pagination>
      </div>
    </div>
    <div v-else>
      <h1>暂无个性路线</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "hotrow",
  data() {
    return {
      prarticles: {
        strategyType: ""
      },
      show: false,
      allpage: "",
      currentPage: 1,
      pagesize: 5
    };
  },
  created() {
    this.prarticles.strategyType = "personalrow";
    this.$axios
      .post("http://localhost:3000/operation/hotstrategy", this.prarticles)
      .then(res => {
        if (res.data.data) {
          this.show = true;
          this.prarticles = res.data.data;
          this.allpage = res.data.data.length;
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
    },getHeadPic(pic) {
      //给图片名加上服务器端访问路径
      let path = "";
      if (pic == null || pic == "" || pic =="headPic") {
        pic = "primaryHead.jpeg";
      }
      path = "http://localhost:3000/uploadHeadPic/" + pic;
      return path;
    },
    //页面跳转并传送攻略类型和id
    go(type, id) {
      var strategy = { type, id };
      var info = JSON.stringify(strategy);
      sessionStorage.setItem("info", info);
      window.open("/index/linestrategy");
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
  width: 10rem;
  height: 5rem;
}
.text-muted{
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
.card:hover {
  box-shadow: 0px 5px 5px #eee;
  background-color: rgb(252, 255, 255);
  transform: 0.3s all;
}
.card a {
  font-size: 20px;
  color: #333;
}
.card:hover a {
  color: #ff9d00;
}
</style>