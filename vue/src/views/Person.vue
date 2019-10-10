<template>
  <div class="person">
    <h1>个人中心</h1>
    <a href="/index/home" @click.prevent = 'goHome'>去首页</a>
  </div>
</template>
<script>
export default {
    methods:{
        goHome(){
            this.$router.push('/index/home')
        }
    }
}
</script>script
