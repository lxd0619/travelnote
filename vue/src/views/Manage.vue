<template>
  <div>
    <header>
      <h1>用户后台管理</h1>
    </header>
    <div class="line"></div>
    <div class="main">
      <nav>
        <div class="menu">
          <ul>
            <li>
              <a id="auditing">待审核文章</a>
            </li>
            <li>
              <a id="accusation">被举报文章</a>
            </li>
            <li>
              <a id="ban">被禁文章</a>
            </li>
            <li>
              <a id="normal">正常文章</a>
            </li>
            <li>
              <a id="user">用户管理</a>
            </li>
            <li>
              <a href="login.html">退出</a>
            </li>
          </ul>
          <div id="lump"></div>
        </div>
      </nav>
      <div id="right"></div>
    </div>
    <footer></footer>
  </div>
</template>
<script>
export default {
  name: "manage",
  data() {
    return {};
  },
  create() {
    var currentposition = 0
    $('#right').load('manage_auditing.html')
    $('#auditing').click(function(){
        $('#right').load('manage_auditing.html')
    })
    $('#accusation').click(function(){
        $('#right').load('manage_accusation.html')
    })
     $('#normal').click(function(){
         $('#right').load('manage_normal.html')
    })
    $('#ban').click(function(){
         $('#right').load('manage_ban.html')
     })
    $('#user').click(function(){
        $('#right').load('manage_user.html')
    })
  },
  mounted() {
    var lis = document.getElementsByTagName("li");
    for (let i = 0; i < lis.length; i++) {
      lis[i].onmouseover = function() {
        console.log(this.childNodes);
        this.childNodes[0].style.color = "#c5f0a4";
      };
      lis[i].onmouseout = function() {
        this.childNodes[0].style.color = "white";
      };
      lis[i].onclick = function() {
        document.getElementById("lump").style.top = this.offsetTop + "px";
        currentposition = this.offsetTop;
      };
    }
  },
  methods: {}
};
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
  color: #333333;
  font-family: sans-serif;
}

header {
  width: 100%;
  height: 50px;
  background-color: white;
}
.main {
  position: relative;
  background-color: #eeeeee;
}
h1 {
  color: #00b894;
  float: left;
  width: 500px;
  padding: 5px 100px;
  font-weight: normal;
}
header a {
  color: #00b894;
  text-decoration: none;
  font-size: 20px;
  padding: 10px 20px;
  float: right;
}
.line {
  width: 500px;
  height: 2px;
  margin: 20px auto;
  background-color: #35b0ab;
}
.menu {
  margin-left: 100px;
  position: relative;
  top: 0;
  left: 0;
  width: 200px;
}

#lump {
  width: 200px;
  height: 77.6px;
  background-color: #00b894;
  position: absolute;
  transition: 0.3s all;
  top: 0;
  left: 0;
  z-index: 0;
}

.menu ul {
  height: 690px;
  width: 200px;
  background-color: #226b80;
  padding:0;
}

.menu li {
  /*导航栏*/
  position: relative;
  z-index: 2000;
  padding: 0;
  list-style: none;
  width: 100%;
  text-align: center;
  font-size: 30px;
  line-height: 50px;
}

.menu a {
  text-decoration: none;
  color: white;
  font-size: 17px;
  display: block;
  transition: 0.3s all;
  padding: 14px 0;
}
a {
  text-decoration: none;
  cursor: pointer;
}
#right {
  position: absolute;
  top: 0;
  left: 302px;

  /* background-color: #00b894; */
  /* width: 80%; */
  /* height: 602px; */
}
</style>