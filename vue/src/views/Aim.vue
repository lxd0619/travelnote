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
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}

#loopImg {
  position: relative;
}
#loopImg #headImg {
  width: 100%;
  height: 400px;
  background-size: cover;
  background: url(../assets/aim/head1.png);
  position: absolute;
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
}
</style>