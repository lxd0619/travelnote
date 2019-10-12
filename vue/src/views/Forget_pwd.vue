<template>
  <div>
    <div id="bg"></div>
    <div id="content">
      <article>通过手机号找回</article>
      <aside>
        <input type="text" placeholder="请输入手机号" size="50px" />
        <div>
          <input type="text" placeholder="请输入验证码" size="30px" />
          <input type="button" value="发送验证码" />
        </div>
        <input type="button" value="找回密码" />
      </aside>
    </div>
  </div>
</template>
<script>
export default {
  name: "Forget_pwd",
  data: function() {
    return {};
  }
};
</script>
<style scoped>
#bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(../assets/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  /* filter: blur(2px);  */
}
#content {
  width: 900px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
article {
  font-size: 40px;
  float: left;
  color: white;
  margin-right: 50px;
  font-weight: lighter;
}
aside {
  float: left;
}
aside div {
  margin-top: 20px;
}
[type="text"] {
  color:#ac8daf;
  margin-top: 15px;
  height: 32px;
  background-color: transparent;
  outline-style: none;
  border: 0;
  border-bottom: 2px solid #ddb6c6;
}
aside [type='button'] {
  height: 37px;
  width: 130px;
  margin-left: 10px;
  border: 1px solid #484c7f;
  border-radius: 3px;
  background-color: #484c7f;
  color: white;
  outline: none;
}
input::-webkit-input-placeholder { /* WebKit browsers 适配谷歌 */
    color: #eee;
}
aside div ~ [type="button"] {
  margin-left: 0;
  height: 50px;
  width: 250px;
  margin-top: 50px;
}
</style>