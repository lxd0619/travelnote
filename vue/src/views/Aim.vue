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
          <el-tabs v-model="activeName1" @tab-click="handleClick1">
            <el-tab-pane label="华北" name="first">
              <div class="con-dl">
                <dl>
                  <dt>北京景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天安门广场</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">南锣鼓巷</a>
                    <a href="#" target="_blank">恭王府</a>
                    <a href="#" target="_blank">什刹海</a>
                    <a href="#" target="_blank">清华大学</a>
                    <a href="#" target="_blank">北京大学</a>
                    <a href="#" target="_blank">雍和宫</a>
                    <a href="#" target="_blank">前门大街</a>
                    <a href="#" target="_blank">北京动物园</a>

                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>

                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>天津景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>河北景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>山西景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>内蒙古景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
              </div>
            </el-tab-pane>
            <el-tab-pane label="华南" name="second">
              <div class="con-dl">
                <dl>
                  <dt>广东景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>广西景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>

                <dl>
                  <dt>海南景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>香港景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>澳门景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
              </div>
            </el-tab-pane>
            <el-tab-pane label="华中" name="third">
              <div class="con-dl">
                <dl>
                  <dt>河南景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>湖北景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>

                <dl>
                  <dt>湖南景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>江西景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
              </div>
            </el-tab-pane>
            <el-tab-pane label="华东" name="fourth">
              <div class="con-dl">
                <dl>
                  <dt>上海景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>江苏景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>

                <dl>
                  <dt>浙江景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>安徽景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>福建景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>山东景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>台湾景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
              </div>
            </el-tab-pane>
            <el-tab-pane label="西北" name="fiveth">
              <div class="con-dl">
                <dl>
                  <dt>陕西景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>甘肃景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>

                <dl>
                  <dt>青海景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>宁夏景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>新疆景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
              </div>
            </el-tab-pane>
            <el-tab-pane label="西南" name="sixth">
              <div class="con-dl">
                <dl>
                  <dt>四川景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>贵州景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>

                <dl>
                  <dt>云南景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>重庆景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>西藏景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
              </div>
            </el-tab-pane>
            <el-tab-pane label="东北" name="seventh">
              <div class="con-dl">
                <dl>
                  <dt>黑龙江景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>吉林景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>

                <dl>
                  <dt>辽宁景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>山西景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
                <dl>
                  <dt>内蒙古景点</dt>
                  <dd>
                    <a href="#" target="_blank">故宫</a>
                    <a href="#" target="_blank">颐和园</a>
                    <a href="#" target="_blank">八达岭长城</a>
                    <a href="#" target="_blank">天坛公园</a>
                    <a href="#" target="_blank">慕田峪长城</a>
                    <a href="#" target="_blank">景山公园</a>
                    <a href="#" target="_blank">圆明园</a>
                    <a href="#" target="_blank">鸟巢</a>
                    <a href="sanya.html" target="_blank">三亚</a>
                  </dd>
                </dl>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>

      <div class="tenpx-line"></div>
      <div id="con-recommend">
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
      </div>
    </div>

    <div id="footer"></div>
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
#con-bottom-main{
  width: 80%;
  margin: 0 auto;
}

.con-dl a {
  color: #777;
  margin-left: 10px;
  margin-bottom: 115px;
  text-decoration: none;
}

.con-dl a:hover {
  color: #ff8a00;
  text-decoration: underline;
}

.con-dl dl {
  border-bottom: 1px dashed #eee;
}

#con-recommend {
  margin: 0 auto;
}
</style>
<script>
export default {
  data() {
    return {
      activeName1: "first",
      activeName2: "first"
    };
  },
  methods: {
    handleClick1(tab, event) {
      console.log(tab, event);
    },
    handleClick2(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>