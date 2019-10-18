<template>
  <div>
    <div v-for="stra in strategy" :key="stra.strategyId">
      <div class="container-fluid" style="background-color: #fafafa;">
        <div class="container">
          <span class="con-span">目的地</span>
          <span>></span>
          <span class="con-span">{{stra.city}}</span>
          <span>></span>
          <span>{{stra.city}}攻略</span>
          <div id="title">
            <h2>{{stra.title}}</h2>
            <div id="h2-right">
              <div class="ext-r row" style="justify-content:space-around;">
                <div class="img-span" @click="updateCollectionNum(stra.userId)">
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <span>({{stra.prCollectionNum}})</span>
                </div>
                <div class="img-span" @click="updateLikeNum(stra.userId)">
                  <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                  <span>({{stra.prLikeNum}})</span>
                </div>
                <div class="img-span" @click="report()">
                  <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <p>
            <span>42%</span>
            初次访问{{stra.city}}的蜂蜂会选择这条线路
          </p>
        </div>
      </div>

      <div class="container">
        <div class="con-top">
          <div class="con-top-left">
            <h5>路线概览</h5>
            <div class="route">
              {{stra.ssInfo}}
              <!--改名了 -->
            </div>
            <h5>Tips</h5>
            <p>该行程有点费脚力，一定要带双平底鞋以备不时之需 。乌镇的外部交通要提前关注一下，选择适合自己的时间段乘坐。</p>
            <h5>总结</h5>
            <p>此次行程即可看到非常现代化的大都市，又可游览具有江南特色的园林城市，此外，还可以在乌镇留宿赏夜景，行程总体比较轻松。</p>
          </div>
        </div>

        <div class="con-main">
          <hr />
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >D1</button>
                </h5>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <br />
                  <h5>上海</h5>
                  <div class="main-show">
                    <hr />
                    <p>上午抵达上海后，先到酒店办理入住。稍作休息后，前往汇集了上海各种特色小吃的城隍庙品尝美食，然后到达江南古典园林豫园游玩。下午去上海最著名的商业街区逛一逛百货大楼和老字号商店，傍晚去外滩欣赏万国建筑博览群和因《情深深雨蒙蒙》出名的外白渡桥。</p>
                    <div>
                      <span>上海城隍庙旅游区(2小时)</span>
                      <span>→</span>
                      <span>绿波廊(豫园路店)(1小时)</span>
                      <span>→</span>
                      <span>豫园(1小时)</span>
                      <span>→</span>
                      <span>南京路步行街(3小时)</span>
                      <span>→</span>
                      <span>小杨生煎(黄河路)(1小时)</span>
                      <span>→</span>
                      <span>外滩(1小时)</span>
                    </div>

                    <div class="show-img">
                      <img src="../assets/linestrategy/d01.jpeg" alt />
                      <div class="d-txt">
                        <p>上海城隍庙旅游区</p>
                      </div>
                    </div>
                    <div class="show-img">
                      <img src="../assets/linestrategy/d02.jpeg" alt />
                      <div class="d-txt">
                        <p>绿波廊(豫园路店)</p>
                      </div>
                    </div>
                    <div class="show-img">
                      <img src="../assets/linestrategy/d03.jpeg" alt />
                      <div class="d-txt">
                        <p>豫园</p>
                      </div>
                    </div>
                    <div class="show-img">
                      <img src="../assets/linestrategy/d04.jpeg" alt />
                      <div class="d-txt">
                        <p>南京路步行街</p>
                      </div>
                    </div>
                    <div class="show-img">
                      <img src="../assets/linestrategy/d01.jpeg" alt />
                      <div class="d-txt">
                        <p>小杨生煎(黄河路)</p>
                      </div>
                    </div>
                    <div class="show-img">
                      <img src="../assets/linestrategy/d06.jpeg" alt />
                      <div class="d-txt">
                        <p>外滩</p>
                      </div>
                    </div>
                  </div>
                  <div class="traffic">
                    <h5>交通</h5>
                    <hr />
                    <p>
                      如何到达上海：
                      <br />到达上海的交通方式很多，例如：飞机、火车、大巴等，无论从哪个城市出发都很方便到达上海。
                      <br />上海市内交通：
                      <br />上海市内建议地铁或者公交出行，方便快捷且便宜。从豫园到南京路步行街，需乘坐地铁约20分钟，地铁10号线（新江湾城方向）豫园上车，南京东路站下车即可。
                    </p>
                  </div>
                  <br />
                  <div class="foods">
                    <div class="main-show">
                      <h5>餐饮</h5>
                      <hr />
                      <p>上海特色美食：生煎、汤包、小笼包、红烧肉、白斩鸡等。中午推荐在城隍庙小吃街吃饭，晚上可以在南京路和外滩附近任选其一，那里有很多美食可选。</p>
                      <div class="show-img">
                        <img src="../assets/linestrategy/food1.jpeg" alt />
                        <span class="img-span">绿波廊(豫园路店)</span>
                        <div class="d-txt">
                          <p class="p-left">隍庙里的老字号，上海的招牌之一，主打本帮口味地道</p>
                        </div>
                      </div>
                      <div class="show-img">
                        <img src="../assets/linestrategy/food2.jpeg" alt />
                        <span class="img-span">上海老饭店</span>
                        <div class="d-txt">
                          <p class="p-left">隍庙里的老字号，上海的招牌之一，主打本帮口味地道</p>
                        </div>
                      </div>
                      <div class="show-img">
                        <img src="../assets/linestrategy/food3.jpeg" alt />
                        <span class="img-span">绿波廊(豫园路店)</span>
                        <div class="d-txt">
                          <p class="p-left">隍庙里的老字号，上海的招牌之一，主打本帮口味地道</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="rooms">
                    <div class="main-show">
                      <h5>住宿</h5>
                      <hr />
                      <p>推荐入住人民广场/南京路步行街附近，那里交通便捷，周边购物美食云集，为上海最繁华地段。</p>
                      <div class="show-img">
                        <img src="../assets/linestrategy/room1.jpeg" alt />
                        <span class="img-span">人民广场周边</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >D2</button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <br />
                  <h5>苏州</h5>
                  <div class="main-show">
                    <hr />
                    <p>上午先游览因《枫桥夜泊》而闻名遐迩的寒山寺，然后到达“吴中第一名胜”的虎丘。景点附近吃完午饭，下午开始游玩七里山塘，在这里可以赏景品尝美食或者去山塘昆曲馆听评弹、昆曲。另外，山塘的夜景也非常的漂亮。需注意的是评弹：14:00-16:00;昆曲：19:30-22:00。</p>
                    <div>
                      <span>寒山寺(1小时)</span>
                      <span>→</span>
                      <span>虎丘山风景区(2小时)</span>
                      <span>→</span>
                      <span>七里山塘(2小时)</span>
                      <span>→</span>
                      <span>得月楼(老楼店)</span>
                      <span>→</span>
                      <span>山塘昆曲馆(2小时)</span>
                    </div>

                    <div class="show-img">
                      <img src="../assets/linestrategy/d01.jpeg" alt />
                      <div class="d-txt">
                        <p>寒山寺</p>
                      </div>
                    </div>
                    <div class="show-img">
                      <img src="../assets/linestrategy/d01.jpeg" alt />
                      <div class="d-txt">
                        <p>虎丘山风景区</p>
                      </div>
                    </div>
                    <div class="show-img">
                      <img src="../assets/linestrategy/d01.jpeg" alt />
                      <div class="d-txt">
                        <p>七里山塘</p>
                      </div>
                    </div>
                    <div class="show-img">
                      <img src="../assets/linestrategy/d01.jpeg" alt />
                      <div class="d-txt">
                        <p>得月楼</p>
                      </div>
                    </div>
                    <div class="show-img">
                      <img src="../assets/linestrategy/d01.jpeg" alt />
                      <div class="d-txt">
                        <p>山塘昆曲馆</p>
                      </div>
                    </div>
                  </div>
                  <div class="traffic">
                    <h5>交通</h5>
                    <hr />
                    <p>
                      苏州的景点比较集中，交通也比较完善，多数景点乘坐公共交通即可到达。
                      <br />寒山寺到虎丘，从来凤桥站乘坐816路到虎丘路站下车，步行210米到达。虎丘到七里山塘，从虎丘首末站乘坐游1路南线到广济桥站下车，步行830米到达。
                    </p>
                  </div>
                  <br />
                  <div class="foods">
                    <div class="main-show">
                      <h5>餐饮</h5>
                      <hr />
                      <p>
                        苏州有很多名菜，例如碧螺虾仁、笋腌鲜、母油鸡、青鱼甩水等，还有小吃，蜜汁豆腐干、松子糖、玫瑰瓜子等。
                        <br />午餐可以选择虎丘附近的山塘街，可以一边游玩一边品尝美食。晚饭选择在观前街附近，有众多的老字号苏帮菜馆。
                      </p>
                      <div class="show-img">
                        <img src="../assets/linestrategy/food1.jpeg" alt />
                        <span class="img-span">杜三珍(石门总店)</span>
                        <div class="d-txt">
                          <p class="p-left">苏州老字号卤味店，人非常多推荐招牌酱鸭叉烧，三珍酱肉。</p>
                        </div>
                      </div>
                      <div class="show-img">
                        <img src="../assets/linestrategy/food2.jpeg" alt />
                        <span class="img-span">羊肉老店</span>
                        <div class="d-txt">
                          <p class="p-left">老字号</p>
                        </div>
                      </div>
                      <div class="show-img">
                        <img src="../assets/linestrategy/food3.jpeg" alt />
                        <span class="img-span">得月楼</span>
                        <div class="d-txt">
                          <p class="p-left">老字号</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="rooms">
                    <div class="main-show">
                      <h5>住宿</h5>
                      <hr />
                      <p>推荐入住人民广场/南京路步行街附近，那里交通便捷，周边购物美食云集，为上海最繁华地段。</p>
                      <div class="show-img">
                        <img src="../assets/linestrategy/room1.jpeg" alt />
                        <span class="img-span">人民广场周边</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >D3</button>
                </h5>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <br />
                  <h5>乌镇</h5>
                  <div class="main-show">
                    <hr />
                    <p>上午先游览因《枫桥夜泊》而闻名遐迩的寒山寺，然后到达“吴中第一名胜”的虎丘。景点附近吃完午饭，下午开始游玩七里山塘，在这里可以赏景品尝美食或者去山塘昆曲馆听评弹、昆曲。另外，山塘的夜景也非常的漂亮。需注意的是评弹：14:00-16:00;昆曲：19:30-22:00。</p>
                    <div>
                      <span>寒山寺(1小时)</span>
                      <span>→</span>
                      <span>虎丘山风景区(2小时)</span>
                      <span>→</span>
                      <span>七里山塘(2小时)</span>
                      <span>→</span>
                      <span>得月楼(老楼店)</span>
                      <span>→</span>
                      <span>山塘昆曲馆(2小时)</span>
                    </div>

                    <div class="show-img">
                      <img src="../assets/linestrategy/d01.jpeg" alt />
                      <div class="d-txt">
                        <p>寒山寺</p>
                      </div>
                    </div>
                    <div class="show-img">
                      <img src="../assets/linestrategy/d01.jpeg" alt />
                      <div class="d-txt">
                        <p>虎丘山风景区</p>
                      </div>
                    </div>
                    <div class="show-img">
                      <img src="../assets/linestrategy/d01.jpeg" alt />
                      <div class="d-txt">
                        <p>七里山塘</p>
                      </div>
                    </div>
                    <div class="show-img">
                      <img src="../assets/linestrategy/d01.jpeg" alt />
                      <div class="d-txt">
                        <p>得月楼</p>
                      </div>
                    </div>
                    <div class="show-img">
                      <img src="../assets/linestrategy/d01.jpeg" alt />
                      <div class="d-txt">
                        <p>山塘昆曲馆</p>
                      </div>
                    </div>
                  </div>
                  <div class="traffic">
                    <h5>交通</h5>
                    <hr />
                    <p>
                      苏州的景点比较集中，交通也比较完善，多数景点乘坐公共交通即可到达。
                      <br />寒山寺到虎丘，从来凤桥站乘坐816路到虎丘路站下车，步行210米到达。虎丘到七里山塘，从虎丘首末站乘坐游1路南线到广济桥站下车，步行830米到达。
                    </p>
                  </div>
                  <br />
                  <div class="foods">
                    <div class="main-show">
                      <h5>餐饮</h5>
                      <hr />
                      <p>
                        苏州有很多名菜，例如碧螺虾仁、笋腌鲜、母油鸡、青鱼甩水等，还有小吃，蜜汁豆腐干、松子糖、玫瑰瓜子等。
                        <br />午餐可以选择虎丘附近的山塘街，可以一边游玩一边品尝美食。晚饭选择在观前街附近，有众多的老字号苏帮菜馆。
                      </p>
                      <div class="show-img">
                        <img src="../assets/linestrategy/food1.jpeg" alt />
                        <span class="img-span">杜三珍(石门总店)</span>
                        <div class="d-txt">
                          <p class="p-left">苏州老字号卤味店，人非常多推荐招牌酱鸭叉烧，三珍酱肉。</p>
                        </div>
                      </div>
                      <div class="show-img">
                        <img src="../assets/linestrategy/food2.jpeg" alt />
                        <span class="img-span">羊肉老店</span>
                        <div class="d-txt">
                          <p class="p-left">老字号</p>
                        </div>
                      </div>
                      <div class="show-img">
                        <img src="../assets/linestrategy/food3.jpeg" alt />
                        <span class="img-span">得月楼</span>
                        <div class="d-txt">
                          <p class="p-left">老字号</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="rooms">
                    <div class="main-show">
                      <h5>住宿</h5>
                      <hr />
                      <p>推荐入住人民广场/南京路步行街附近，那里交通便捷，周边购物美食云集，为上海最繁华地段。</p>
                      <div class="show-img">
                        <img src="../assets/linestrategy/room1.jpeg" alt />
                        <span class="img-span">人民广场周边</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingFour">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >D4</button>
                </h5>
              </div>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <br />
                  <h5>杭州</h5>
                  <div class="main-show">
                    <hr />
                    <p>上午先游览因《枫桥夜泊》而闻名遐迩的寒山寺，然后到达“吴中第一名胜”的虎丘。景点附近吃完午饭，下午开始游玩七里山塘，在这里可以赏景品尝美食或者去山塘昆曲馆听评弹、昆曲。另外，山塘的夜景也非常的漂亮。需注意的是评弹：14:00-16:00;昆曲：19:30-22:00。</p>
                    <div>
                      <span>寒山寺(1小时)</span>
                      <span>→</span>
                      <span>虎丘山风景区(2小时)</span>
                      <span>→</span>
                      <span>七里山塘(2小时)</span>
                      <span>→</span>
                      <span>得月楼(老楼店)</span>
                      <span>→</span>
                      <span>山塘昆曲馆(2小时)</span>
                    </div>

                    <div class="show-img">
                      <img src="../assets/linestrategy/d01.jpeg" alt />
                      <div class="d-txt">
                        <p>寒山寺</p>
                      </div>
                    </div>
                    <div class="show-img">
                      <img src="../assets/linestrategy/d01.jpeg" alt />
                      <div class="d-txt">
                        <p>虎丘山风景区</p>
                      </div>
                    </div>
                    <div class="show-img">
                      <img src="../assets/linestrategy/d01.jpeg" alt />
                      <div class="d-txt">
                        <p>七里山塘</p>
                      </div>
                    </div>
                    <div class="show-img">
                      <img src="../assets/linestrategy/d01.jpeg" alt />
                      <div class="d-txt">
                        <p>得月楼</p>
                      </div>
                    </div>
                    <div class="show-img">
                      <img src="../assets/linestrategy/d01.jpeg" alt />
                      <div class="d-txt">
                        <p>山塘昆曲馆</p>
                      </div>
                    </div>
                  </div>
                  <div class="traffic">
                    <h5>交通</h5>
                    <hr />
                    <p>
                      苏州的景点比较集中，交通也比较完善，多数景点乘坐公共交通即可到达。
                      <br />寒山寺到虎丘，从来凤桥站乘坐816路到虎丘路站下车，步行210米到达。虎丘到七里山塘，从虎丘首末站乘坐游1路南线到广济桥站下车，步行830米到达。
                    </p>
                  </div>
                  <br />
                  <div class="foods">
                    <div class="main-show">
                      <h5>餐饮</h5>
                      <hr />
                      <p>
                        苏州有很多名菜，例如碧螺虾仁、笋腌鲜、母油鸡、青鱼甩水等，还有小吃，蜜汁豆腐干、松子糖、玫瑰瓜子等。
                        <br />午餐可以选择虎丘附近的山塘街，可以一边游玩一边品尝美食。晚饭选择在观前街附近，有众多的老字号苏帮菜馆。
                      </p>
                      <div class="show-img">
                        <img src="../assets/linestrategy/food1.jpeg" alt />
                        <span class="img-span">杜三珍(石门总店)</span>
                        <div class="d-txt">
                          <p class="p-left">苏州老字号卤味店，人非常多推荐招牌酱鸭叉烧，三珍酱肉。</p>
                        </div>
                      </div>
                      <div class="show-img">
                        <img src="../assets/linestrategy/food2.jpeg" alt />
                        <span class="img-span">羊肉老店</span>
                        <div class="d-txt">
                          <p class="p-left">老字号</p>
                        </div>
                      </div>
                      <div class="show-img">
                        <img src="../assets/linestrategy/food3.jpeg" alt />
                        <span class="img-span">得月楼</span>
                        <div class="d-txt">
                          <p class="p-left">老字号</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="rooms">
                    <div class="main-show">
                      <h5>住宿</h5>
                      <hr />
                      <p>推荐入住人民广场/南京路步行街附近，那里交通便捷，周边购物美食云集，为上海最繁华地段。</p>
                      <div class="show-img">
                        <img src="../assets/linestrategy/room1.jpeg" alt />
                        <span class="img-span">人民广场周边</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 评论内容 -->
        <div class="con-comments">
          <div class="l-comment">
            <div class="com-box">
              <h2>评论</h2>
              <ul id="comments" data-page="1" data-id="0">
                <li
                  class="clearfix comment_item item_1203904"
                  data-id="1203904"
                  data-replied="0"
                  v-for="(dis,index) in discuss"
                  :key="dis.commentId"
                >
                  <div class="img">
                    <img :src="getPic(dis.headPic)" />
                  </div>
                  <div class="info">
                    <h3>{{dis.userName}}</h3>
                    <h4>{{dis.commentTime}}</h4>
                    <span>{{index+1}}楼</span>
                    <div class="com-cont">{{dis.commentContent}}</div>
                    <br />

                    <div class="info-span">
                      <span
                        v-if="dis.userId==userId"
                        @click="delComment(dis.commentId)"
                        :key="dis.commentId"
                      >删除个人评论</span>
                    </div>
              
                  </div>
                </li>
              </ul>
            </div>
            <!-- 最后的插入评论 -->
            <div class="clearfix com-form">
              <div class="fm-tare user-log">
                <textarea
                  class="_j_comment_content"
                  v-model="newcommentContent"
                  placeholder="说点什么吧..."
                ></textarea>
                <el-form>
                  <el-form-item>
                    <el-button type="primary" @click="addComment()">评论</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import jwt_decode from "jwt-decode";

export default {
  name: "linestrategy",
  data() {
    return {
      info: [],
      strategy: [],
      hotarticles: [],
      // strategyType: "personalrow"
      //登录用户信息
      role: [],
      //全部评论
      discuss: [],
      //插入评论内容
      newcommentContent: "",

      //全部回复
      replys: [],
      //插入回复
      // newReplyContent: "",

      //当前登录用户id
      userId: ""
    };
  },
  created() {
    //获取传来的攻略类型和id
    var info = JSON.parse(sessionStorage.getItem("info")); //info=[type,id]
    var userId = jwt_decode(localStorage.getItem("mytoken")).userId;
    this.userId = userId;

    this.info = info;
    // console.log(this.info); //内容
    //加载攻略数据
    this.$axios
      .post("http://localhost:3000/operation/strategydetail", {
        strategyType: this.info.type,
        strategyId: this.info.id
      })
      .then(res => {
        // console.log(1, res.data.data);
        this.strategy = res.data.data;
      })
      .catch(err => {
        console.log("错误信息" + err);
      });
    //筛选评论
    this.$axios
      .post("http://localhost:3000/operation/seldiscuss", {
        strategyId: this.info.id,
        strategyType: this.info.type
      })
      .then(res => {
        // console.log(2, res);
        this.discuss = res.data.data;
      })
      .catch(err => {
        console.log("错误信息" + err);
      });
  },
  methods: {
    //更新收藏数
    updateCollectionNum(userId) {
      var judge;
      this.$axios
        .post("http://localhost:3000/operation/collect", {
          strategyId: this.info.id,
          strategyType: this.info.type,
          userId: userId
        })
        .then(res => {
          console.log(res);
          judge = parseInt(res.data.data);
          if (judge == 1) {
            this.strategy[0].prCollectionNum =
              parseInt(this.strategy[0].prCollectionNum) + 1;
            // console.log(this.strategy[0].prCollectionNum);
            this.$message("收藏成功！");
          } else if (judge == -1) {
            this.strategy[0].prCollectionNum =
              parseInt(this.strategy[0].prCollectionNum) - 1;
            console.log(this.strategy.prCollectionNum);
            this.$message("取消收藏成功！");
          }
        })
        .catch(err => {
          console.log("错误信息" + err);
        });
    },
    //更新点赞数
    updateLikeNum(userId) {
      var judge;
      this.$axios
        .post("http://localhost:3000/operation/like", {
          strategyId: this.info.id,
          strategyType: this.info.type,
          userId: userId
        })
        .then(res => {
          console.log(res);
          judge = parseInt(res.data.data);
          if (judge == 1) {
            this.strategy[0].prLikeNum =
              parseInt(this.strategy[0].prLikeNum) + 1;
            console.log(this.strategy.prLikeNum);
            this.$message("点赞成功！");
          } else if (judge == -1) {
            this.strategy[0].prLikeNum =
              parseInt(this.strategy[0].prLikeNum) - 1;
            console.log(this.strategy.prLikeNum);
            this.$message("取消点赞成功！");
          }
        })
        .catch(err => {
          console.log("错误信息" + err);
        });
    },
    //举报
    report() {
      var judge;
      this.$axios
        .post("http://localhost:3000/operation/report", {
          strategyId: this.info.id,
          strategyType: this.info.type
        })
        .then(res => {
          console.log(res);
          this.$message("举报成功！");
        })
        .catch(err => {
          console.log("错误信息" + err);
        });
    },

    //获取头像
    getPic(pic) {
      let path = "http://localhost:3000/uploadHeadPic" + pic;
      return path;
    },
    //添加评论
    addComment() {
      this.$axios
        .put("http://localhost:3000/operation/adddiscuss", {
          commentContent: this.newcommentContent,
          strategyId: this.info.id,
          // userId:, 在后台token获取
          strategyType: this.info.type
          // commentContent,strategyId,userId,commentTime,strategyType
        })
        .then(res => {
          console.log(3, res);
          console.log("submit!");
          this.discuss = res.data.data;
        })
        .catch(err => {
          console.log("错误信息" + err);
        });
    },
    // 删除评论
    delComment(commentId) {
      console.log(commentId);
      this.$axios
        .post("http://localhost:3000/operation/deldiscuss", {
          commentId: commentId,
          strategyId: this.info.id,
          // userId:, 在后台token获取
          strategyType: this.info.type
          // commentContent,strategyId,userId,commentTime,strategyType
        })
        .then(res => {
          // console.log(3, res);
          // console.log("删除成功!");
          this.discuss = res.data.data;
        })
        .catch(err => {
          console.log("错误信息" + err);
        });
    },

    //筛选回复
    selReply(commentId, index) {
      var _this = this;
      console.log(index);
      this.$axios
        .post("http://localhost:3000/operation/selreply", {
          // strategyId: this.info.id,
          // strategyType: this.info.type
          commentId: commentId
        })
        .then(res => {
          // console.log("筛选回复", res);
          this.replys = res.data.data;
          // this.commentId=commentId
        })
        .catch(err => {
          console.log("错误信息" + err);
        });
    },
    //添加回复
    // addReply(commentId) {
    //   this.$axios
    //     .post("http://localhost:3000/operation/addreply", {
    //       replyContent: this.newReplyContent,
    //       userId: this.userId,
    //       commentId: commentId
    //       // (replyContent,userId,replyTime,commentId
    //     })
    //     .then(res => {
    //       console.log("回复", res);
    //       this.replys = res.data.data;
    //     })
    //     .catch(err => {
    //       console.log("错误信息" + err);
    //     });
    // },

    //过滤

    //显示提示框
    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "内容可以是 "),
          h("i", { style: "color: teal" }, "VNode")
        ])
      });
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  margin: 0 auto;
}
.container-fluid .container .con-span {
  color: #888;
  font-size: 12px;
}

.container-fluid .container .con-span:hover {
  color: #ff9d00;
}

#title {
  height: 80px;
  line-height: 80px;
}

#title h2 {
  display: inline-block;
  width: 60%;
}

#title > div {
  float: right;
  /* display: inline-block; */
  width: 40%;
}
#title #h2-right .img-span:hover {
  color: #ff9d00;
  cursor: pointer;
}

.container-fluid .container p span {
  background-color: #ff9d00;
}

.container .con-top .con-top-left {
  display: inline-block;
  width: 55%;
}

.con-top-left .route a {
  color: #666;
}

.con-top-left .route a:hover {
  color: #ff9d00;
}

.con-top-left p {
  color: #666;
}

.con-main {
  clear: both;
}

.con-main .main-show {
  margin: 0 auto;
  position: relative;
}

.con-main .main-show .show-img {
  background-color: white;
  margin: 25px;
  float: left;
  width: 300px;
}

.con-main .main-show .show-img:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.con-main .main-show .show-img img {
  width: 300px;
  height: 200px;
}

.con-main .main-show .show-img .img-span {
  font-size: 24px;
  position: relative;
  top: -42px;
  left: 12px;
  color: white;
}

.con-main .main-show .show-img .d-txt {
  text-align: center;
  padding: 10px 10px;
  padding-top: 0;
}

.con-main .traffic {
  clear: both;
}

.con-main .foods {
  clear: both;
}

.con-main .rooms {
  clear: both;
}

.con-main .main-show .show-img .d-txt .p-left {
  text-align: left;
  height: 40px;
}

/* 评论栏 */
.l-comment {
  margin-top: 85px;
}

.com-form .fm-tare textarea {
  height: 200px;
  width: 1000px;
  padding: 14px;
  border: 1px solid #e5e5e5;
  resize: none;
  outline: 0;
  border-radius: 5px;
  font-size: 14px;
  color: #666;
}

.com-form .user-log textarea {
  border: 1px solid #ffa200;
}

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}

.com-box ul li {
  border-top: 1px solid #e5e5e5;
  padding: 30px 0;
}

.com-box h2 {
  font-size: 24px;
  color: #333;
  font-weight: normal;
  line-height: 24px;
  margin: 36px 0;
}

.com-box h2 {
  font-size: 24px;
  color: #333;
  font-weight: normal;
  line-height: 24px;
  margin: 36px 0;
}

.com-box {
  border-top: 1px solid #e5e5e5;
}

.com-form .fm-tare button {
  width: 114px;
  height: 40px;
  background: #ffa200;
  border: 0;
  outline: 0;
  cursor: pointer;
  display: block;
  margin: 20px 0;
  border-radius: 5px;
  font-size: 16px;
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 0;
  line-height: 30px;
  margin-left: 850px;
}

li {
  list-style: none;
}

.com-box li .img {
  overflow: hidden;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  float: left;
}

.com-box .info h3 {
  font-size: 24px;
  color: blue;
  font-weight: normal;
  line-height: 28px;
}
.com-box .info #reply-h3 {
  font-size: 18px;
  color: blue;
  font-weight: normal;
  line-height: 28px;
}

.com-box .info h4 {
  font-size: 12px;
  color: #999;
  font-weight: normal;
  line-height: 14px;
}

.com-box .info .com-cont {
  font-size: 14px;
  color: #666;
  line-height: 28px;
  margin-top: 8px;
}
.com-box .info .info-span {
  float: right;
}
.com-box .info .info-span span {
  margin-right: 20px;
  cursor: pointer;
}
.com-box .info .info-span span:hover {
  color: #ff9d00;
}
.com-box .info ul {
  clear: both;
  margin-left: 80px;
}
.com-box .info #replys li {
  display: none;
}
.com-box .info:hover #replys li {
  display: block;
}
</style>
