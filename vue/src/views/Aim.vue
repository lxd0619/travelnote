<template>
  <div>
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

        <div id="con-top-main">
          <div class="con-dl">
            <div class="first-span">直辖市</div>
            <span @click="go('北京')">北京</span>
            <span @click="go('上海')">上海</span>
            <span @click="go('重庆')">重庆</span>
            <span @click="go('天津')">天津</span>
          </div>
          <div class="con-dl">
            <div class="first-span">
              <span class="title" @click="go()">云南</span>
            </div>
            <span @click="go()">丽江</span>
            <span @click="go()">大理</span>
            <span @click="go()">昆明</span>
            <span @click="go()">香格里拉</span>
            <span @click="go()">泸沽湖</span>
            <span @click="go()">双廊</span>
            <span @click="go()">西双版纳</span>
            <span @click="go()">束河</span>
            <span @click="go()">腾冲</span>
            <span @click="go()">雨崩</span>
          </div>
          <div class="con-dl">
              <div class="first-span">
              <span class="title" @click="go()">四川</span>
            </div>
            <span @click="go()">成都</span>
            <span @click="go()">九寨沟</span>
            <span @click="go()">稻城</span>
            <span @click="go()">色达</span>
            <span @click="go()">若尔盖</span>
            <span @click="go()">都江堰</span>
            <span @click="go()">亚丁</span>
            <span @click="go()">阿贝</span>
            <span @click="go()">峨眉山</span>
            <span @click="go()">牛背山</span>
          </div>
          <div class="con-dl">
              <div class="first-span">
              <span class="title" @click="go()">浙江</span>
            </div>
            <span @click="go('杭州')">杭州</span>
            <span @click="go()">乌镇</span>
            <span @click="go()">西塘</span>
            <span @click="go()">千湖岛</span>
            <span @click="go()">普陀山</span>
            <span @click="go()">东极岛</span>
            <span @click="go()">南浔</span>
          </div>
          <div class="con-dl">
            <div class="first-span">
              <span class="title" @click="go()">海南</span>
              <span class="title" @click="go()">福建</span>
            </div>
            <span @click="go()">三亚</span>
            <span @click="go()">蜈支洲岛</span>
            <span @click="go()">海口</span>
            <span @click="go()">厦门</span>
            <span @click="go()">鼓浪屿</span>
            <span @click="go()">武夷山</span>
            <span @click="go()">泉州</span>
          </div>
          <div class="con-dl">
              <div class="first-span">
              <span class="title" @click="go()">江苏</span>
            </div>
            <span @click="go()">南京</span>
            <span @click="go()">苏州</span>
            <span @click="go()">无锡</span>
            <span @click="go()">扬州</span>
            <span @click="go()">周庄</span>
            <span @click="go()">常州</span>
            <span @click="go()">连云港</span>
            <span @click="go()">同里</span>
          </div>
          <div class="con-dl">
              <div class="first-span">
              <span class="title" @click="go()">广东</span>
              <span class="title" @click="go()">广西</span>
            </div>
            <span @click="go()">广州</span>
            <span @click="go()">深圳</span>
            <span @click="go()">珠江</span>
            <span @click="go()">桂林</span>
            <span @click="go()">阳塑</span>
            <span @click="go()">北海</span>
            <span @click="go()">黄姚古镇</span>
            <span @click="go()">龙脊梯田</span>
          </div>
          <div class="con-dl">
              <div class="first-span">
              <span class="title" @click="go()">山东</span>
              <span class="title" @click="go()">山西</span>
            </div>
            <span @click="go()">青岛</span>
            <span @click="go()">泰山</span>
            <span @click="go()">日照</span>
            <span @click="go()">威海</span>
            <span @click="go()">烟台</span>
            <span @click="go()">长岛</span>
            <span @click="go()">蓬莱</span>
            <span @click="go()">平遥</span>
            <span @click="go()">大同</span>
            <span @click="go()">五台山</span>
            <span @click="go()">壶口瀑布</span>
          </div>
          <div class="con-dl">
              <div class="first-span">
              <span class="title" @click="go()">湖南</span>
              <span class="title" @click="go()">湖北</span>
            </div>
            <span @click="go()">张家界</span>
            <span @click="go()">凤凰</span>
            <span @click="go()">郴州</span>
            <span @click="go()">武汉</span>
            <span @click="go()">恩施</span>
            <span @click="go()">神农架</span>
          </div>
          <div class="con-dl">
            <div class="first-span">
              <span class="title" @click="go()">安徽</span>
              <span class="title" @click="go()">江西</span>
            </div>
            <span @click="go()">黄山</span>
            <span @click="go()">宏村</span>
            <span @click="go()">婺源</span>
            <span @click="go()">景德镇</span>
            <span @click="go()">庐山</span>
            <span @click="go()">三清山</span>
            <span @click="go()">南昌</span>
          </div>
          <div class="con-dl">
            <div class="first-span">
              <span class="title" @click="go()">河北</span>
              <span class="title" @click="go()">河南</span>
            </div>
            <span @click="go()">北戴河</span>
            <span @click="go()">秦皇岛</span>
            <span @click="go()">承德</span>
            <span @click="go()">张北</span>
            <span @click="go()">少林寺</span>
            <span @click="go()">洛阳</span>
            <span @click="go()">龙门石窟</span>
          </div>
          <div class="con-dl">
             <div class="first-span">
              <span class="title" @click="go()">内蒙古</span>
              <span class="title" @click="go()">东北</span>
            </div>
            <span @click="go()">呼伦贝尔</span>
            <span @click="go()">阿尔山</span>
            <span @click="go()">海拉尔</span>
            <span @click="go()">哈尔滨</span>
            <span @click="go()">漠河</span>
            <span @click="go()">雪乡</span>
            <span @click="go()">大连</span>
            <span @click="go()">丹东</span>
            <span @click="go()">盘锦</span>
          </div>
          <div class="con-dl">
             <div class="first-span">
              <span class="title" @click="go()">台湾</span>
              <span class="title" @click="go()">香港</span>
              <span class="title" @click="go()">澳门</span>
            </div>
            <span @click="go()">台北</span>
            <span @click="go()">垦丁</span>
            <span @click="go()">花莲</span>
            <span @click="go()">高雄</span>
            <span @click="go()">台中</span>
            <span @click="go()">九份</span>
            <span @click="go()">南投</span>
            <span @click="go()">阿里山</span>
          </div>
        </div>
      </div>

      <div class="tenpx-line"></div>
      <!-- <div id="con-recommend">
        <div class="con-title">当季推荐</div>
        <div class="tenpx-line"></div>

        <div id="con-bottom-main">
          <el-tabs v-model="activeName2" @tab-click="handleClick2">
            <el-tab-pane label="1月" name="first">
              <div id="line-row">
                <div class="item-list clearfix row" style="justify-content: space-around">
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="2月" name="second">
              <div id="line-row">
                <div class="item-list clearfix row" style="justify-content: space-around">
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="3月" name="third">
              <div id="line-row">
                <div class="item-list clearfix row" style="justify-content: space-around">
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="4月" name="fourth">
              <div id="line-row">
                <div class="item-list clearfix row" style="justify-content: space-around">
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="5月" name="fifth">
              <div id="line-row">
                <div class="item-list clearfix row" style="justify-content: space-around">
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="6月" name="sixth">
              <div id="line-row">
                <div class="item-list clearfix row" style="justify-content: space-around">
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="7月" name="seventh">
              <div id="line-row">
                <div class="item-list clearfix row" style="justify-content: space-around">
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="8月" name="eighth">
              <div id="line-row">
                <div class="item-list clearfix row" style="justify-content: space-around">
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="9月" name="ninth">
              <div id="line-row">
                <div class="item-list clearfix row" style="justify-content: space-around">
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="10月" name="tenth ">
              <div id="line-row">
                <div class="item-list clearfix row" style="justify-content: space-around">
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="11月" name="eleventh ">
              <div id="line-row">
                <div class="item-list clearfix row" style="justify-content: space-around">
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="12月" name="twelfth ">
              <div id="line-row">
                <div class="item-list clearfix row" style="justify-content: space-around">
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-coat J_item box-shadow">
                    <div class="item">
                      <img src="../assets/aim/two1.png" width="200px" height="150px" alt />
                      <div class="totalPart">
                        <a href="#" target="_blank" class="detail">
                          <p class="title">最美杭州自由行必备打卡地</p>
                        </a>
                        <div class="ext-r row" style="justify-content:space-around;">
                          <div>
                            <img src="../assets/aim/shou.png" width="15px" height="15px" />
                            <span>收藏</span>
                          </div>

                          <div>
                            <img src="../assets/aim/zan.png" width="15px" height="15px" />
                            <span>点赞</span>
                          </div>
                          <div>
                            <img
                              src="../assets/aim/browsing-history.png"
                              width="20px"
                              height="15px"
                            />
                            <span>浏览量</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div> -->
    </div>

    <!-- <div id="footer"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName1: "first",
      activeName2: "first",
      cityName:'',//go方法返回的一个城市名
    };
  },
  methods: {
    handleClick1(tab, event) {
      console.log(tab, event);
    },
    handleClick2(tab, event) {
      console.log(tab, event);
    },

    go(city) {
      var cityName = JSON.stringify(city);
      sessionStorage.setItem("cityName", cityName);
      // this.$router.push("/index/index/aimline");
       window.open("/index/aimline");
    },

  }
};
</script>
<style scoped>
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
  position: relative;
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
  width: 300px;
  padding: 10px;
  outline-style: none;
  border: 0px solid;
  border-radius: 5px;
}
#loopImg #headImg #searchForm [type="button"] {
  background-color: darkorange;
  padding: 10px 10px;
  margin-left: 10px;
  border: 0px solid;
  border-radius: 5px;
  cursor: pointer;
}

#container {
  width: 80%;
  margin: 0 auto;
}
#con-hotplace {
  margin: 0 auto;
  clear: both;
}
.con-title {
  font-size: 30px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  text-align: center;
}
#con-top-main {
  width: 80%;
  margin: 0 auto;
}
#con-bottom-main {
  width: 80%;
  margin: 0 auto;
}

.con-dl {
  border-bottom: 1px dashed #eee;
  padding-top: 20px;
  padding-bottom: 20px;
}
.con-dl .first-span {
  margin-right: 40px;
  font-weight: 500;
  color: #111;
  text-decoration: none;
  display: inline-block;
}
.con-dl .first-span .title{
   font-weight: 500;
  color: #111;
}
.con-dl .first-span .title:hover{
 color: #ff8a00;
}

.con-dl span {
  color: #777;
  margin-right: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
}

.con-dl span:hover {
  color: #ff8a00;
  text-decoration: underline;
}

#con-recommend {
  margin: 0 auto;
}
</style>
