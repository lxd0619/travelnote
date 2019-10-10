<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/" tag='li'>首页</router-link> |
      <router-link to="/login" tag='li'>登录</router-link>
      <router-link to="/register" tag='li'>注册</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
html,body,#app{
  width:100%;
  height:100%;
}
li{
  float:left;
  width: 80px;
  height: 30px;
  line-height:30px;
  text-align: center;
  background-color: #ccc;
}
li:hover{
  background-color: #ff0;
}
</style>
