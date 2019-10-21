<template>
  <div>
    <div class="contain">
      <div class="total">
        <div class="left">
            <p>{{articles}}</p>
          <ul class="strategy">
            <li class="title">
              <h3>这是标题</h3>
              <em>来自于：</em>
              <span>哪个攻略？</span>
            </li>
            <hr />
            <li class="pic">
              <img src="../assets/food/东京美食.jpeg" alt width="200px" height="200px" />
              <img src="../assets/food/东京美食.jpeg" alt width="200px" height="200px" />
              <img src="../assets/food/东京美食.jpeg" alt width="200px" height="200px" />
            </li>
            <hr />
            <li class="pra">
              <p>这是内容</p>
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="rightTitle">
            <h4>达人分享秀</h4>
          </div>
          <div class="rightPic">
            <div class="partPic">
              <img src="../assets/view/leftPic1.jpg" alt width="200px" height="110px" /> 描述neirshjsjhjdkkjd
            </div>
          </div>
          <div class="rightPic">
            <div class="partPic">
              <img src="../assets/view/leftPic1.jpg" alt width="200px" height="110px" /> 描述neirshjsjhjdkkjd
            </div>
          </div>
          <div class="rightPic">
            <div class="partPic">
              <img src="../assets/view/leftPic1.jpg" alt width="200px" height="110px" /> 描述neirshjsjhjdkkjd
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyWord: "",
      articles:[]
    };
  },
  created() {
    this.keyWord = this.$route.params.keyWord;
    console.log("keyword:"+this.keyWord)
    this.$axios
      .post("http://localhost:3000/home/search", this.keyWord)
      .then(res => {
        console.log(res.data.data)
        this.articles = res.data.data
      })
      .catch(err => {
        console.log("错误信息" + err);
      })
      .finally(function() {
        // always executed
      });
  }
};
</script>
<style scoped>
.contain {
  width: 1200px;
  margin: 0 auto;
}

.total::after {
  content: "";
  display: block;
  clear: both;
}

.left {
  /* background-color: bisque; */
  float: left;
  width: 900px;
  height: 500px;
}

.right {
  /* background-color: burlywood; */
  float: right;
  width: 200px;
  height: 500px;
}

li {
  list-style: none;
}

.pic {
  display: inline-block;
  margin: 0 auto;
}

h3 {
  font-size: 25px;
  font-family: 宋体;
  margin-bottom: -20px;
  display: block;
}

h4 {
  text-align: center;
}

.title em {
  margin-left: 700px;
  font-size: 12px;
}

.pic {
  margin-left: 20px;
}

.partPic {
  background-color: cornsilk;
  height: 135px;
  margin-top: 30px;
}
</style>