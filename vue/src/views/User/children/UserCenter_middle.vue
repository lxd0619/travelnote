<template>
  <div>
    <!-- 上部导航 -->
    <ul
      class="nav nav-tabs justify-content-center mb-5"
      id="myTab"
      role="tablist"
    >
      <li class="nav-item">
        <a
          class="nav-link active"
          id="home-tab"
          data-toggle="tab"
          href="#home"
          role="tab"
          aria-controls="home"
          aria-selected="true"
          >个人信息</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="article-tab"
          data-toggle="tab"
          href="#profile"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
          >我的攻略</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="collection-tab"
          data-toggle="tab"
          href="#collection"
          role="tab"
          aria-controls="collection"
          aria-selected="false"
          >我的收藏</a
        >
      </li>
    </ul>
    <!-- 内容 -->
    <div class="tab-content" id="myTabContent">
      <!-- 个人信息 -->
      <div
        class="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <user-info></user-info>
      </div>
      <!-- 我的攻略 -->
      <div
        class="tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="article-tab"
      >
        <user-article></user-article>
      </div>
      <!-- 我的收藏 -->
      <div
        class="tab-pane fade"
        id="collection"
        role="tabpanel"
        aria-labelledby="collection-tab"
      >
        <user-collection></user-collection>
      </div>
    </div>
  </div>
</template>
<script>
import UserInfo from ".//UserInfo";
import UserArticle from "./UserArticle";
import UserCollection from "./UserCollection";

export default {
  name: "UserCenter",
  components: {
    UserInfo,
    UserArticle,
    UserCollection
  }
};
</script>
<style scoped>
#myTabContent {
  height: 900px;
}
</style>
