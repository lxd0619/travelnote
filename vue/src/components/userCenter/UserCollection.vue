<template>
  <div id="content">
    <div v-if="show">
      <div class="card-deck flex-column">
        <div
          class="card d-flex flex-row mb-2 shadow-sm p-3 bg-white rounded"
          v-for="collection in collections.slice((currentPage-1)*pagesize,(currentPage)*pagesize)"
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
      // let path = "http://localhost:3000/coverPic/" + pic;
      // return path;
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
</style>