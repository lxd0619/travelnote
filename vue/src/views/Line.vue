<template>
  <div>
    <div id="loopImg">
      <img src="../assets/line/head5.png" alt />
    </div>
    <div id="container">
      <div id="platformRecommend">
        <div class="con-title">平台推荐</div>
        <div id="con-platformRecommend-main">
          <br />
          <div class="line-row">
            <div class="item-list clearfix row" style="justify-content: space-around" v-if="show01">
              <div
                class="item-coat J_item box-shadow"
                @click="go(strategy.type,strategy.strategyId)"
                v-for="strategy in platformRecommendstrategy"
                :key="strategy.strategyId"
              >
                <div class="item">
                  <img :src="getCoverPic(strategy.cover)" width="280px" height="200px" alt />
                  <div class="totalPart">
                    <a href="#" target="_blank" class="detail">
                      <p class="title">{{strategy.title}}</p>
                    </a>
                    <div class="ext-r row" style="justify-content:space-around;">
                      <div>
                        <img src="../assets/line/shou.png" width="15px" height="15px" />
                        <span>({{strategy.prCollectionNum}})</span>
                      </div>

                      <div>
                        <img src="../assets/line/zan.png" width="15px" height="15px" />
                        <span>({{strategy.prLikeNum}})</span>
                      </div>
                      <div>
                        <img src="../assets/line/browsing-history.png" width="20px" height="15px" />
                        <!-- <span>浏览量</span> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="nonedata">暂无平台推荐攻略</div>
          </div>
        </div>
      </div>

      <div id="personalRecommend">
        <div class="con-title">个人推荐</div>
        <div id="con-personalRecommend-main">
          <br />
          <div class="line-row">
            <div class="item-list clearfix row" style="justify-content: space-around" v-if="show02">
              <div
                class="item-coat J_item box-shadow"
                @click="go(strategy.type,strategy.strategyId)"
                v-for="strategy in personalrecommendstrategy.slice(0,8)"
                :key="strategy.strategyId"
              >
                <div class="item">
                  <img :src="getCoverPic(strategy.cover)" width="280px" height="200px" alt />
                  <div class="totalPart">
                    <a href="#" target="_blank" class="detail">
                      <p class="title">{{strategy.title}}</p>
                    </a>
                    <div class="ext-r row" style="justify-content:space-around;">
                      <div>
                        <img src="../assets/line/shou.png" width="15px" height="15px" />
                        <span>({{strategy.prCollectionNum}})</span>
                      </div>
                      <div>
                        <img src="../assets/line/zan.png" width="15px" height="15px" />
                        <span>({{strategy.prLikeNum}})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="nonedata">暂无个人推荐攻略</div>
          </div>
        </div>
      </div>

      <br />
      <div class="con-content">
        <!-- 左边广告 -->
        <div id="con-left">
          <div class="left-card">
            <div class="card-txt">
              <p>Northern Lights in Norway</p>
            </div>
            <img src="../assets/line/two7.png" alt />
          </div>
          <div class="left-card">
            <div class="card-txt">
              <p>Northern Lights in Norway</p>
            </div>
            <img src="../assets/line/two7.png" alt />
          </div>
          <div class="left-card">
            <div class="card-txt">
              <p>Northern Lights in Norway</p>
            </div>
            <img src="../assets/line/two7.png" alt />
          </div>
        </div>

        <div id="con-line">
          <div id="con-line-nav">
            <!-- 第1行导航 -->
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  class="nav-item nav-link active"
                  id="nav-default-tab"
                  data-toggle="tab"
                  href="#nav-default"
                  role="tab"
                  aria-controls="nav-default"
                  aria-selected="true"
                >综合排序</a>
                <a
                  class="nav-item nav-link"
                  id="nav-people-tab"
                  data-toggle="tab"
                  href="#nav-people"
                  role="tab"
                  aria-controls="nav-people"
                  aria-selected="false"
                  @click="lineClass='crowdType',lineType='活力行',lineClassify()"
                >人群划分</a>
                <a
                  class="nav-item nav-link"
                  id="nav-time-tab"
                  data-toggle="tab"
                  href="#nav-time"
                  role="tab"
                  aria-controls="nav-time"
                  aria-selected="false"
                  @click="lineClass='dayNum',lineType='1',lineClassify()"
                >时间长度</a>
                <a
                  class="nav-item nav-link"
                  id="nav-season-tab"
                  data-toggle="tab"
                  href="#nav-season"
                  role="tab"
                  aria-controls="nav-season"
                  aria-selected="false"
                  @click="lineClass='season',lineType='春',lineClassify()"
                >季节</a>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <!-- 综合排序内容 -->
              <div
                class="tab-pane fade show active"
                id="nav-default"
                role="tabpanel"
                aria-labelledby="nav-default-tab"
              >
                <div class="main_news" v-if="show03">
                  <ul>
                    <li
                      @click="go(strategy.type,strategy.strategyId)"
                      v-for="strategy in personalrecommendstrategy.slice(8)"
                      :key="strategy.strategyId"
                    >
                      <a href="#" target="_blank">
                        <img :src="getCoverPic(strategy.cover)" />
                        <div class="txt">
                          <h3>{{strategy.title}}</h3>
                          <span>{{strategy.prInfo}}</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="nonedata" v-else>暂无综合推荐攻略</div>
              </div>

              <div
                class="tab-pane fade"
                id="nav-people"
                role="tabpanel"
                aria-labelledby="nav-people-tab"
              >
                <!-- 第2行人群划分导航 -->
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      class="nav-item nav-link active"
                      id="nav-people1-tab"
                      data-toggle="tab"
                      href="#nav-people1"
                      role="tab"
                      aria-controls="nav-people1"
                      aria-selected="true"
                      @click="lineClass='crowdType',lineType='活力行',lineClassify()"
                    >活力行</a>
                    <a
                      class="nav-item nav-link"
                      id="nav-people2-tab"
                      data-toggle="tab"
                      href="#nav-people2"
                      role="tab"
                      aria-controls="nav-people2"
                      aria-selected="false"
                      @click="lineClass='crowdType',lineType='夕阳游',lineClassify()"
                    >夕阳游</a>
                    <a
                      class="nav-item nav-link"
                      id="nav-people3-tab"
                      data-toggle="tab"
                      href="#nav-people3"
                      role="tab"
                      aria-controls="nav-people3"
                      aria-selected="false"
                      @click="lineClass='crowdType',lineType='亲子游',lineClassify()"
                    >亲子游</a>
                    <a
                      class="nav-item nav-link"
                      id="nav-people4-tab"
                      data-toggle="tab"
                      href="#nav-people4"
                      role="tab"
                      aria-controls="nav-people4"
                      aria-selected="false"
                      @click="lineClass='crowdType',lineType='情侣游',lineClassify()"
                    >情侣游</a>
                    <a
                      class="nav-item nav-link"
                      id="nav-people5-tab"
                      data-toggle="tab"
                      href="#nav-people5"
                      role="tab"
                      aria-controls="nav-people5"
                      aria-selected="false"
                      @click="lineClass='crowdType',lineType='蜜月行',lineClassify()"
                    >蜜月行</a>
                    <a
                      class="nav-item nav-link"
                      id="nav-people6-tab"
                      data-toggle="tab"
                      href="#nav-people6"
                      role="tab"
                      aria-controls="nav-people6"
                      aria-selected="false"
                      @click="lineClass='crowdType',lineType='伙伴游',lineClassify()"
                    >伙伴游</a>
                  </div>
                </nav>
                <!-- 第2行人群划分内容 -->
                <div class="tab-content" id="nav-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="nav-people1"
                    role="tabpanel"
                    aria-labelledby="nav-people1-tab"
                  >
                    <!-- 活力行 -->
                    <div class="main_news" v-if="people01">
                      <ul>
                        <li
                          @click="go(strategy.type,strategy.strategyId)"
                          v-for="strategy in people"
                          :key="strategy.strategyId"
                        >
                          <a href="#" target="_blank">
                            <img :src="getCoverPic(strategy.cover)" />
                            <div class="txt">
                              <h3>{{strategy.title}}</h3>
                              <span>{{strategy.prInfo}}</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                     <div class="nonedata" v-else>暂无攻略</div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-people2"
                    role="tabpanel"
                    aria-labelledby="nav-people2-tab"
                  >
                    <!-- 夕阳游 -->
                    <div class="main_news" v-if="people01">
                      <ul>
                        <li
                          @click="go(strategy.type,strategy.strategyId)"
                          v-for="strategy in people"
                          :key="strategy.strategyId"
                        >
                          <a href="#" target="_blank">
                            <img :src="getCoverPic(strategy.cover)" />
                            <div class="txt">
                              <h3>{{strategy.title}}</h3>
                              <span>{{strategy.prInfo}}</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="nonedata" v-else>暂无攻略</div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-people3"
                    role="tabpanel"
                    aria-labelledby="nav-people3-tab"
                  >
                    <!-- 亲子游 -->
                    <div class="main_news" v-if="people01">
                      <ul>
                        <li
                          @click="go(strategy.type,strategy.strategyId)"
                          v-for="strategy in people"
                          :key="strategy.strategyId"
                        >
                          <a href="#" target="_blank">
                            <img :src="getCoverPic(strategy.cover)" />
                            <div class="txt">
                              <h3>{{strategy.title}}</h3>
                              <span>{{strategy.prInfo}}</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="nonedata" v-else>暂无攻略</div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-people4"
                    role="tabpanel"
                    aria-labelledby="nav-people4-tab"
                  >
                    <!-- 情侣游 -->
                    <div class="main_news" v-if="people01">
                      <ul>
                        <li
                          @click="go(strategy.type,strategy.strategyId)"
                          v-for="strategy in people"
                          :key="strategy.strategyId"
                        >
                          <a href="#" target="_blank">
                            <img :src="getCoverPic(strategy.cover)" />
                            <div class="txt">
                              <h3>{{strategy.title}}</h3>
                              <span>{{strategy.prInfo}}</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="nonedata" v-else>暂无攻略</div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-people5"
                    role="tabpanel"
                    aria-labelledby="nav-people5-tab"
                  >
                    <!-- 蜜月行 -->
                    <div class="main_news" v-if="people01">
                      <ul>
                        <li
                          @click="go(strategy.type,strategy.strategyId)"
                          v-for="strategy in people"
                          :key="strategy.strategyId"
                        >
                          <a href="#" target="_blank">
                            <img :src="getCoverPic(strategy.cover)" />
                            <div class="txt">
                              <h3>{{strategy.title}}</h3>
                              <span>{{strategy.prInfo}}</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="nonedata" v-else>暂无攻略</div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-people6"
                    role="tabpanel"
                    aria-labelledby="nav-people6-tab"
                  >
                    <!-- 伙伴游 -->
                    <div class="main_news" v-if="people01">
                      <ul>
                        <li
                          @click="go(strategy.type,strategy.strategyId)"
                          v-for="strategy in people"
                          :key="strategy.strategyId"
                        >
                          <a href="#" target="_blank">
                            <img :src="getCoverPic(strategy.cover)" />
                            <div class="txt">
                              <h3>{{strategy.title}}</h3>
                              <span>{{strategy.prInfo}}</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="nonedata" v-else>暂无攻略</div>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="nav-time"
                role="tabpanel"
                aria-labelledby="nav-time-tab"
              >
                <!-- 第2行时间长度导航 -->
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      class="nav-item nav-link active"
                      id="nav-time1-tab"
                      data-toggle="tab"
                      href="#nav-time1"
                      role="tab"
                      aria-controls="nav-time1"
                      aria-selected="true"
                      @click="lineClass='dayNum',lineType='1',lineClassify()"
                    >一日游</a>
                    <a
                      class="nav-item nav-link"
                      id="nav-time2-tab"
                      data-toggle="tab"
                      href="#nav-time2"
                      role="tab"
                      aria-controls="nav-time2"
                      aria-selected="false"
                      @click="lineClass='dayNum',lineType='2',lineClassify()"
                    >二日游</a>
                    <a
                      class="nav-item nav-link"
                      id="nav-time3-tab"
                      data-toggle="tab"
                      href="#nav-time3"
                      role="tab"
                      aria-controls="nav-time3"
                      aria-selected="false"
                      @click="lineClass='dayNum',lineType='3',lineClassify()"
                    >三日游</a>
                    <a
                      class="nav-item nav-link"
                      id="nav-time4-tab"
                      data-toggle="tab"
                      href="#nav-time4"
                      role="tab"
                      aria-controls="nav-time4"
                      aria-selected="false"
                      @click="lineClass='dayNum',lineType='4',lineClassify()"
                    >四日游</a>
                    <a
                      class="nav-item nav-link"
                      id="nav-time5-tab"
                      data-toggle="tab"
                      href="#nav-time5"
                      role="tab"
                      aria-controls="nav-time5"
                      aria-selected="false"
                      @click="lineClass='dayNum',lineType='5',lineClassify()"
                    >五日游</a>
                    <a
                      class="nav-item nav-link"
                      id="nav-time6-tab"
                      data-toggle="tab"
                      href="#nav-time6"
                      role="tab"
                      aria-controls="nav-time6"
                      aria-selected="false"
                      @click="lineClass='dayNum',lineType='6',lineClassify()"
                    >七日游</a>
                    <a
                      class="nav-item nav-link"
                      id="nav-time7-tab"
                      data-toggle="tab"
                      href="#nav-time7"
                      role="tab"
                      aria-controls="nav-time7"
                      aria-selected="false"
                      @click="lineClass='dayNum',lineType='0',lineClassify()"
                    >多日游</a>
                  </div>
                </nav>
                <!-- 第2行时间长度内容 -->
                <div class="tab-content" id="nav-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="nav-time1"
                    role="tabpanel"
                    aria-labelledby="nav-time1-tab"
                  >
                    <!-- 一日游 -->
                    <div class="main_news" v-if="people01">
                      <ul>
                        <li
                          @click="go(strategy.type,strategy.strategyId)"
                          v-for="strategy in people"
                          :key="strategy.strategyId"
                        >
                          <a href="#" target="_blank">
                            <img :src="getCoverPic(strategy.cover)" />
                            <div class="txt">
                              <h3>{{strategy.title}}</h3>
                              <span>{{strategy.prInfo}}</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="nonedata" v-else>暂无攻略</div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-time2"
                    role="tabpanel"
                    aria-labelledby="nav-time2-tab"
                  >
                    <!-- 二日游 -->
                    <div class="main_news" v-if="people01">
                      <ul>
                        <li
                          @click="go(strategy.type,strategy.strategyId)"
                          v-for="strategy in people"
                          :key="strategy.strategyId"
                        >
                          <a href="#" target="_blank">
                            <img :src="getCoverPic(strategy.cover)" />
                            <div class="txt">
                              <h3>{{strategy.title}}</h3>
                              <span>{{strategy.prInfo}}</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="nonedata" v-else>暂无攻略</div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-time3"
                    role="tabpanel"
                    aria-labelledby="nav-time3-tab"
                  >
                    <!-- 三日游 -->
                    <div class="main_news" v-if="people01">
                      <ul>
                        <li
                          @click="go(strategy.type,strategy.strategyId)"
                          v-for="strategy in people"
                          :key="strategy.strategyId"
                        >
                          <a href="#" target="_blank">
                            <img :src="getCoverPic(strategy.cover)" />
                            <div class="txt">
                              <h3>{{strategy.title}}</h3>
                              <span>{{strategy.prInfo}}</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="nonedata" v-else>暂无攻略</div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-time4"
                    role="tabpanel"
                    aria-labelledby="nav-time4-tab"
                  >
                    <!-- 四日游 -->
                    <div class="main_news" v-if="people01">
                      <ul>
                        <li
                          @click="go(strategy.type,strategy.strategyId)"
                          v-for="strategy in people"
                          :key="strategy.strategyId"
                        >
                          <a href="#" target="_blank">
                            <img :src="getCoverPic(strategy.cover)" />
                            <div class="txt">
                              <h3>{{strategy.title}}</h3>
                              <span>{{strategy.prInfo}}</span>
                            </div>
      
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="nonedata" v-else>暂无攻略</div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-time5"
                    role="tabpanel"
                    aria-labelledby="nav-time5-tab"
                  >
                    <!-- 五日游 -->
                    <div class="main_news" v-if="people01">
                      <ul>
                        <li
                          @click="go(strategy.type,strategy.strategyId)"
                          v-for="strategy in people"
                          :key="strategy.strategyId"
                        >
                          <a href="#" target="_blank">
                            <img :src="getCoverPic(strategy.cover)" />
                            <div class="txt">
                              <h3>{{strategy.title}}</h3>
                              <span>{{strategy.prInfo}}</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="nonedata" v-else>暂无攻略</div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-time6"
                    role="tabpanel"
                    aria-labelledby="nav-time6-tab"
                  >
                    <!-- 七日游 -->
                    <div class="main_news" v-if="people01">
                      <ul>
                        <li
                          @click="go(strategy.type,strategy.strategyId)"
                          v-for="strategy in people"
                          :key="strategy.strategyId"
                        >
                          <a href="#" target="_blank">
                            <img :src="getCoverPic(strategy.cover)" />
                            <div class="txt">
                              <h3>{{strategy.title}}</h3>
                              <span>{{strategy.prInfo}}</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="nonedata" v-else>暂无攻略</div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-time7"
                    role="tabpanel"
                    aria-labelledby="nav-time7-tab"
                  >
                    <!-- 多日游 -->
                    <div class="main_news" v-if="people01">
                      <ul>
                        <li
                          @click="go(strategy.type,strategy.strategyId)"
                          v-for="strategy in people"
                          :key="strategy.strategyId"
                        >
                          <a href="#" target="_blank">
                            <img :src="getCoverPic(strategy.cover)" />
                            <div class="txt">
                              <h3>{{strategy.title}}</h3>
                              <span>{{strategy.prInfo}}</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="nonedata" v-else>暂无攻略</div>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="nav-season"
                role="tabpanel"
                aria-labelledby="nav-season-tab"
              >
                <!-- 第2行季节导航 -->
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      class="nav-item nav-link active"
                      id="nav-season1-tab"
                      data-toggle="tab"
                      href="#nav-season1"
                      role="tab"
                      aria-controls="nav-season1"
                      aria-selected="true"
                      @click="lineClass='season',lineType='春',lineClassify()"
                    >浪漫春日</a>
                    <a
                      class="nav-item nav-link"
                      id="nav-season2-tab"
                      data-toggle="tab"
                      href="#nav-season2"
                      role="tab"
                      aria-controls="nav-season2"
                      aria-selected="false"
                      @click="lineClass='season',lineType='夏',lineClassify()"
                    >活力盛夏</a>
                    <a
                      class="nav-item nav-link"
                      id="nav-season3-tab"
                      data-toggle="tab"
                      href="#nav-season3"
                      role="tab"
                      aria-controls="nav-season3"
                      aria-selected="false"
                      @click="lineClass='season',lineType='秋',lineClassify()"
                    >金秋时节</a>
                    <a
                      class="nav-item nav-link"
                      id="nav-season4-tab"
                      data-toggle="tab"
                      href="#nav-season4"
                      role="tab"
                      aria-controls="nav-season4"
                      aria-selected="false"
                      @click="lineClass='season',lineType='冬',lineClassify()"
                    >冬日热旅</a>
                  </div>
                </nav>
                <!-- 第2行季节内容 -->
                <div class="tab-content" id="nav-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="nav-season1"
                    role="tabpanel"
                    aria-labelledby="nav-season1-tab"
                  >
                    <!-- 春 -->
                    <div class="main_news" v-if="people01">
                      <ul>
                        <li
                          @click="go(strategy.type,strategy.strategyId)"
                          v-for="strategy in people"
                          :key="strategy.strategyId"
                        >
                          <a href="#" target="_blank">
                            <img :src="getCoverPic(strategy.cover)" />
                            <div class="txt">
                              <h3>{{strategy.title}}</h3>
                              <span>{{strategy.prInfo}}</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="nonedata" v-else>暂无攻略</div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-season2"
                    role="tabpanel"
                    aria-labelledby="nav-season2-tab"
                  >
                    <!-- 夏 -->
                    <div class="main_news" v-if="people01">
                      <ul>
                        <li
                          @click="go(strategy.type,strategy.strategyId)"
                          v-for="strategy in people"
                          :key="strategy.strategyId"
                        >
                          <a href="#" target="_blank">
                            <img :src="getCoverPic(strategy.cover)" />
                            <div class="txt">
                              <h3>{{strategy.title}}</h3>
                              <span>{{strategy.prInfo}}</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="nonedata" v-else>暂无攻略</div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-season3"
                    role="tabpanel"
                    aria-labelledby="nav-season3-tab"
                  >
                    <!-- 秋 -->
                    <div class="main_news" v-if="people01">
                      <ul>
                        <li
                          @click="go(strategy.type,strategy.strategyId)"
                          v-for="strategy in people"
                          :key="strategy.strategyId"
                        >
                          <a href="#" target="_blank">
                            <img :src="getCoverPic(strategy.cover)" />
                            <div class="txt">
                              <h3>{{strategy.title}}</h3>
                              <span>{{strategy.prInfo}}</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="nonedata" v-else>暂无攻略</div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-season4"
                    role="tabpanel"
                    aria-labelledby="nav-season4-tab"
                  >
                    <!-- 冬 -->
                    <div class="main_news" v-if="people01">
                      <ul>
                        <li
                          @click="go(strategy.type,strategy.strategyId)"
                          v-for="strategy in people"
                          :key="strategy.strategyId"
                        >
                          <a href="#" target="_blank">
                            <img :src="getCoverPic(strategy.cover)" />
                            <div class="txt">
                              <h3>{{strategy.title}}</h3>
                              <span>{{strategy.prInfo}}</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="nonedata" v-else>暂无攻略</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
      <!-- 最后div清除浮动 -->
      <div class="lastdiv"></div>
    </div>
  </div>
</template>

<script>
export default {
  // name: "Line",
  data() {
    return {
      info: [], //要传送给具体攻略的类型和id
      platformRecommendstrategy: [],
      show01: false,

      personalrecommendstrategy: [],
      show02: false,
      show03: false,
      strategyType: "personalrow",
      people01:false,

      lineClass: "",
      lineType: "",
      people: []
    };
  },
  created() {
    // 平台推荐数据
    this.$axios
      .get("http://localhost:3000/line/platformrecommend")
      .then(res => {
        if (res.data.data) {
          this.show01 = true;
          this.platformRecommendstrategy = res.data.data;
        } else {
          this.show01 = false;
        }
      })
      .catch(err => {
        console.log("错误信息" + err);
      });

    // 个人推荐数据
    this.$axios
      .post("http://localhost:3000/operation/hotstrategy", {
        strategyType: this.strategyType
      })
      .then(res => {
        this.personalrecommendstrategy = res.data.data;
        if (res.data.data) {
          this.show02 = true;
          this.personalrecommendstrategy = res.data.data;
          console.log(this.personalrecommendstrategy.length);
          if (this.personalrecommendstrategy.length > 8) {
            this.show03 = true;
          } else {
            this.show03 = false;
          }
        } else {
          this.show02 = false;
          this.show03 = false;
        }
      })
      .catch(err => {
        console.log("错误信息" + err);
      });
  },
  methods: {
    getCoverPic(pic) {
      //给图片名加上服务器端访问路径
      let path = "";
      // if (pic == null || pic=="") {
      //   pic = "primaryHead.jpeg";
      // }
      path = "http://localhost:3000/coverPic/" + pic;
      return path;
    },
    //页面跳转并传送攻略类型和id
    go(type, id) {
      var strategy = { type, id };
      var info = JSON.stringify(strategy);
      sessionStorage.setItem("info", info);
      window.open("/index/linestrategy");
    },
    //人群路线划分
    lineClassify() {
      this.$axios
        .post("http://localhost:3000/line/lineClassify", {
          lineClass: this.lineClass,
          lineType: this.lineType
        })
        .then(res => {
          if (res.data.data) {
            console.log(res);
            this.people = res.data.data;
            this.people01=true
          }
          // console.log(res);//"查询结果"
        })
        .catch(err => {
          console.log("错误信息" + err);
        });
    }
  }
};
</script>

<style scoped>
.tenpx-line {
  width: 100%;
  height: 10px;
}
#loopImg {
  background-color: #23a393;
}
#loopImg img {
  width: 100%;
  height: 100%;
}
#container {
  width: 100%;
  background-color: #fff;
}

.con-title {
  font-size: 30px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  text-align: center;
}
#con-platformRecommend-main > a {
  text-decoration: none;
}
#con-personalRecommend-main > a {
  text-decoration: none;
}

.line-row {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
.line-row .nonedata {
  font-size: 36px;
  font-weight: 700px;
  color: #737373;
}
.box-shadow {
  margin: 10px;
}
.box-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.box-shadow a {
  color: #666;
}
.box-shadow a:hover {
  color: #ff9d00;
}

#con-left {
  float: left;
  margin-left: 200px;
}

#con-left .left-card {
  width: 280px;
  background-color: white;
  margin-bottom: 25px;
}
#con-left .left-card .card-txt {
  text-align: center;
  padding: 10px 20px;
}
#con-left .left-card img {
  width: 280px;
  height: 200px;
}

#con-line {
  margin-left: 480px;
}
#con-line-nav {
  width: 60%;
  margin-left: 40px;
}
#con-line-nav .nonedata {
  font-size: 36px;
  font-weight: 700px;
  color: #737373;
  text-align: center;
}

.main_news ul {
  list-style: none;
  padding: 0;
  padding-top: 20px;
}
.main_news ul li {
  padding-bottom: 10px;
  width: 800px;
  border-bottom: 1px dotted #cbcbcb;
  margin-bottom: 10px;
}
.main_news ul li:hover {
  background-color: hsl(0, 0%, 93%);
}
.main_news ul li a {
  text-decoration: none;
  /* color: #ff9d00; */
}
.main_news ul li a > img {
  float: left;
  width: 260px;
  height: 150px;
}

.main_news ul li a .txt {
  display: block;
  padding-left: 15px;
  width: 520px;
  height: 150px;
  overflow: hidden;
}

.main_news ul li a .txt h3 {
  font-size: 18px;
  line-height: 36px;
  font-weight: 700;
  color: #454545;
}

.main_news ul li a .txt span {
  font-size: 14px;
  line-height: 18px;
  color: #737373;
}
/* .main_news ul li a .info {
  display: block;
  padding-left: 15px;
  width: 520px;
  height: 30px;
  overflow: hidden;
}
.main_news ul li a .info span {
  padding-left: 10px;
  padding-right: 10px;
}
.main_news ul li a .info .sp1 img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
}
.main_news ul li a .info > span > span {
  padding-left: 5px;
  padding-right: 20px;
  font-size: 16px;
} */

.lastdiv {
  clear: both;
}
</style>