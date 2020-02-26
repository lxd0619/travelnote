<template>
  <div>
    <nav>
      <div class="nav nav-tabs nav-justified" id="nav-tab" role="tablist">
        <a
          class="nav-item nav-link active text-dark"
          id="nav-hotScenery-tab"
          data-toggle="tab"
          href="#nav-hotScenery"
          role="tab"
          aria-controls="nav-hotScenery"
          aria-selected="true"
          @click="List('scenerystrategy')"
          >景点攻略</a
        >
        <a
          class="nav-item nav-link text-dark"
          id="nav-hotFoods-tab"
          data-toggle="tab"
          href="#nav-hotFoods"
          role="tab"
          aria-controls="nav-hotFoods"
          aria-selected="false"
          @click="List('foodstrategy')"
          >美食攻略</a
        >
        <a
          class="nav-item nav-link text-dark"
          id="nav-hotlines-tab"
          data-toggle="tab"
          href="#nav-hotlines"
          role="tab"
          aria-controls="nav-hotlines"
          aria-selected="false"
          @click="List('personalrow')"
          >个性路线</a
        >
      </div>
    </nav>
    <div v-if="show1">
      <div id="content">
        <div
          id="bottom_img"
          v-for="li in list.slice(
            (currentPage - 1) * pagesize,
            currentPage * pagesize
          )"
          :key="li.strategyId"
        >
          <a @click="strategydetail(li.type, li.strategyId)">
            <img
              id="img"
              :src="getCoverPic(li.cover)"
              style="width: 200px ;height: 200px;"
            />
            <p>{{ li.title }}</p>
            <span>作者：{{ li.userName }}</span>
          </a>
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
    <div v-else id="content">
      <h1>暂无被封的攻略</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "manage_ban",
  data() {
    return {
      list: [],
      allpages: null,
      currentPage: 1,
      show1: false,
      pagesize: 10
    };
  },
  created() {
    this.List("scenerystrategy");
  },
  methods: {
    List(tableName) {
      var tableName = tableName;
      var ssStatus = -3;
      var data = { tableName, ssStatus };
      this.currentPage = 1;
      this.$axios.post("http://localhost:3000/manage/List", data).then(res => {
        console.log(res);
        if (res.data.data) {
          this.show1 = true;
          this.list = res.data.data;
          this.allpages = res.data.data.length;
          console.log(this.allpages);
        } else {
          this.show1 = false;
        }
      });
    },
    current_change: function(currentPage) {
      this.currentPage = currentPage;
    },
    strategydetail(strategyType, strategyId) {
      var strategy = { strategyType, strategyId };
      var strategyInfo = JSON.stringify(strategy);
      sessionStorage.setItem("strategy", strategyInfo);
      this.$router.push("/article");
    },
    getCoverPic(pic) {
      //给图片名加上服务器端访问路径
      if (pic == "cover" || pic == null) {
        pic = "primaryCover.jpg";
      }
      let path = "http://localhost:3000/coverPic/" + pic;
      return path;
    }
  }
};
</script>
<style scoped>
body {
  overflow-x: hidden;
}
#content {
  position: relative;
  width: 1200px;
  height: 640px;
}
h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ccc;
}
#bottom_img {
  /* width: 1380px; */
  height: 200px;
  float: left;
  background-color: white;
  width: 200px;
  height: 270px;
  margin: 10px 20px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
#bottom_img:hover {
  box-shadow: 0px 5px 5px rgb(204, 204, 204);
  transition: 0.3s all;
}
ul {
  list-style: none;
}
p {
  padding: 0 5px;
  display: block;
  width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
}
a {
  text-decoration: none;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  background-color: #00b894;
  color: white;
  transition: 0.3s all;
}
.block {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
