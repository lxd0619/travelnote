<template>
  <div>
    <h1>目的地</h1>

    <div id="loopImg">
      <div id="head"></div>
      <div id="headImg">
        <form action="#" id="searchForm">
          <div id="formDiv">
            <p>Don't fear the unknow</p>
            <input type="text" placeholder="我想去..." />
            <input type="button" value="搜索" />
            <p>苏州 上海 北京 陕西</p>
          </div>
        </form>
      </div>
    </div>
    <div id="container">
      <div id="con-hotplace">
        <div class="con-title">热门目的地</div>
        <div class="tenpx-line"></div>
        <div>
          <ul id="con-top-ul">
            <li>华北</li>
            <li>华南</li>
            <li>华中</li>
            <li>华东</li>
            <li>西北</li>
            <li>西南</li>
            <li>东北</li>
          </ul>
        </div>
        <div class="tenpx-line"></div>
        <div id="con-top-main"></div>
      </div>
      <div class="tenpx-line"></div>
      <div id="con-recommend">
        <div class="con-title">当季推荐</div>
        <div class="tenpx-line"></div>
        <ul id="con-bottom-ul">
          <li>1月</li>
          <li>2月</li>
          <li>3月</li>
          <li>4月</li>
          <li>5月</li>
          <li>6月</li>
          <li>7月</li>
          <li>8月</li>
          <li>9月</li>
          <li>10月</li>
          <li>11月</li>
          <li>12月</li>
        </ul>
        <div id="con-bottom-main"></div>
      </div>
    </div>

    <div id="footer"></div>
  </div>
</template>
<style scoped>
/*
#loopImg #headImg {
  width: 100%;
  height: 400px;
  background-size: cover;
  background: url(../assets/aim/head1.png);
  float: left;
}
#loopImg #headImg #searchForm {
  width: 400px;
  height: 120px;
  position: relative;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -200px;
  background-color: rgba(49, 49, 40, 0.3);
  border-radius: 10px;
}
#loopImg #headImg #searchForm #formDiv {
  margin-left: 20px;
}
#loopImg #headImg #searchForm #formDiv p {
  color: #fff;
  height: 35px;
  line-height: 35px;
}
#loopImg #headImg #searchForm [type="text"] {
  width: 280px;
  height: 50px;
  line-height: 50px;
  font-size: 17px;
  padding-left: 15px;
  outline-style: none;
  border: 0px solid;
  border-radius: 5px;
}
#loopImg #headImg #searchForm [type="button"] {
  background-color: darkorange;
  width:50px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  margin-left: 10px;
  border: 0px solid;
  border-radius: 5px;
  cursor: pointer;
} */

* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
.tenpx-line {
  width: 100%;
  height: 10px;
}
#loopImg {
  background-color: #23a393;
  position: relative;
}
#loopImg #headImg {
  width: 100%;
  height: 400px;
  background-size: cover;
  background: url(../assets/aim/head1.png);
}
#loopImg #headImg #searchForm {
  width: 400px;
  height: 120px;
  position: relative;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -200px;
  background-color: rgba(49, 49, 40, 0.3);
  border-radius: 10px;
}
#loopImg #headImg #searchForm #formDiv {
  margin-left: 20px;
}
#loopImg #headImg #searchForm #formDiv p {
  color: #fff;
}
#loopImg #headImg #searchForm [type="text"] {
  width: 300px;
  padding: 10px;
  outline-style: none;
  border: 0px solid;
  border-radius: 5px;
}
#loopImg #headImg #searchForm [type="button"] {
  background-color: darkorange;
  padding: 10px 10px;
  border: 0px solid;
  border-radius: 5px;
}
#container {
  width: 80%;
  margin: 0 auto;
}
#con-hotplace {
  margin: 0 auto;
}
.con-title {
  font-size: 30px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  text-align: center;
}
#con-top-ul {
  width: 80%;
  height: 50px;
  margin: 0 auto;
  text-align: center;
}
#con-top-ul li {
  width: 14%;
  height: 50px;
  line-height: 50px;
  float: left;
  border-bottom: 1px solid #aaa;
}
#con-top-ul li:hover {
  font-size: 16px;
  color: darkorange;
  border-bottom: 2px solid darkorange;
}
#con-bottom-ul {
  width: 100%;
  height: 50px;
  margin: 0 auto;
  text-align: center;
}
#con-bottom-ul li {
  font-size: 14px;
  width: 8%;
  height: 50px;
  line-height: 50px;
  float: left;
  border-bottom: 1px solid #aaa;
}
#con-bottom-ul li:hover {
  font-size: 16px;
  color: darkorange;
  border-bottom: 2px solid darkorange;
}

#con-recommend {
  margin: 0 auto;
}
</style>