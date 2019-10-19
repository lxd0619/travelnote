<template>
  <div class="card-deck flex-column">
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
            <a href="#" class="card-link" @click="go(article.type,article.strategyId)">{{article.title}}</a>
          </h5>
          <p
            class="card-text overflow-hidden"
            style="height: 4em;text-overflow:ellipsis;"
          >{{article.prInfo}}</p>
          <p class="text-muted">
            <i class="fa fa-map-marker mr-2" aria-hidden="true">{{article.city}}</i>
            by {{article.userName}}
            <i>
              <img src alt />
            </i>
            <i class="fa fa-clock-o mr-2" aria-hidden="true">{{article.dayNum}}天</i>
            <i class="fa fa-leaf mr-2" aria-hidden="true">{{article.season}}</i>
            <i class="fa fa-users mr-2" aria-hidden="true">{{article.crowdType}}</i>
            <i class="fa fa-eye mr-2" aria-hidden="true">{{article.prCollectionNum}}</i>
            <i class="fa fa-thumbs-o-up mr-2" aria-hidden="true">{{article.prLikeNum}}</i>
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
      if(pic == "cover" || pic == null){
        pic = "primaryCover.jpg"
      }
      let path = "http://localhost:3000/coverPic/" + pic;
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
</style>