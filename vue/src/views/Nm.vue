<template>
  <div>
    <div class="container-fluid" style="background-color: #fafafa;">
      <div class="container">
        <a href="#">景点攻略</a>
        <span>></span>
        <a href="#">内蒙古</a>
        <span>></span>
        <span>我心目中的内蒙古</span>
        <div id="title">
          <h2>草原上的民族</h2>
          <div id="h2-right">
            <div class="ext-r row" style="justify-content:space-around;">
              <div>
                <img src="../assets/linestrategy/shou.png" width="15px" height="15px" />
                <span>收藏</span>
              </div>
              <div>
                <img src="../assets/linestrategy/zan.png" width="15px" height="15px" />
                <span>点赞</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="con-top">
        <div class="con-top-left">
          <h5>景点概览</h5>
          <div class="route">
            <a href="#" target="_blank">呼和浩特</a>
            <span>→</span>
            <a href="#" target="_blank">大昭寺</a>
          </div>
          <h5>总结</h5>
          <p>说走就走，我们来到内蒙古大草原！</p>
        </div>
      </div>

      <div class="con-main">
        <div class="accordion" id="accordionExample">
          <div class="card">
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <br />
                <h5>一次说走就走的旅行</h5>
                <div class="main-show">
                  <hr />
                  <p>
                    这是一次说走就走的旅行。小朋友学校临时通知放假，而我们，也安排了高温假。于是，带着妈妈，带着孩子，我们来到了内蒙古大草原。先发几张图。

                  </p>
                    <p>提起内蒙古，很多小伙伴想到的是呼伦贝尔大草原。但是，呼伦贝尔人很多，我们选了一个小众一点的地方——格根塔拉。选择格根塔拉还有一个原因，就是往返呼和浩特的机票不贵整体消费低。格根塔拉旅游中心位于四子王旗境内，杜尔伯特草原的腹地——北临二连浩特、蒙古国，东望锡林浩特，西邻包头市达茂旗，南傍自治区首府呼和浩特。格根塔拉位于杜尔伯特草原深处，距呼和浩特130多公里，当天可以往返。</p>
                  <div class="show-img">
                    <img src="../assets/stategyDetail/内蒙古1.jpg" alt />
                    <div class="d-txt">
                      <p></p>
                    </div>
                  </div>
                    <div class="show-img">
                    <img src="../assets/stategyDetail/内蒙古2.jpg" alt />
                    <div class="d-txt">
                      <p></p>
                    </div>
                  </div>
                    <div class="show-img">
                    <img src="../assets/stategyDetail/内蒙古3.jpg" alt />
                    <div class="d-txt">
                      <p></p>
                    </div>
                  </div>
                    <div class="show-img">
                    <img src="../assets/stategyDetail/内蒙古4.jpg" alt />
                    <div class="d-txt">
                      <p></p>
                    </div>
                  </div>
                  <div class="show-img">
                    <img src="../assets/stategyDetail/内蒙古5.jpg" alt />
                    <div class="d-txt">
                      <p></p>
                    </div>
                  </div>
                  <div class="show-img">
                    <img src="../assets/stategyDetail/内蒙古6.jpg" alt />
                    <div class="d-txt">
                      <p></p>
                    </div>
                  
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>    
      </div>       
        <div class="l-comment">
        <div class="clearfix com-form">
            <div class="fm-tare user-log">
                <textarea class="_j_comment_content">说点什么吧...</textarea>
                <button type="button" class="gotoLogin" data-gtype="1">评论</button>
            </div>
        </div>
        <div class="com-box ">
            <h2>评论（<span class="_comment_num">20</span>）</h2>
            <ul id="comments" data-page="1" data-id="0">
                <li class="clearfix comment_item item_1203904" data-id="1203904" data-replied="0">
                    <div class="img"><img src="https://p1-q.mafengwo.net/s10/M00/77/C5/wKgBZ1oiiAeASaJoAAB6DH0UYHQ72.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"></div>
                    <div class="info">
                        <h3>爱旅游的单身</h3>
                        <h4>2019-08-13 14:41:40</h4>
                        <div class="com-cont">长谷寺门票是400</div>
                        <div class="rep-del op_item_1203904 hide" style="display: none;">
                            <i></i>
                        </div>
                    </div>
                </li>

            </ul>

        </div>
    </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "nm",
  data: function() {
    return {};
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
  margin-top: 40px;
}
.container-fluid .container a {
  color: #888;
  font-size: 12px;
}
.card-body h5 {
  padding-left: 10px;
  margin-bottom: 15px;
}
.main-show p {
  padding-left: 10px;
  margin-top: 15px;
}
.container-fluid .container a:hover {
  color: #ff9d00;
}
.con-top-left {
  margin-left: 10px;
}
.con-top-left p {
  margin-left: 15px;
  margin-top: 10px;
}
.con-top-left .route {
  margin: 15px 10px 10px;
}

#title {
  height: 80px;
  line-height: 80px;
}

#title h2 {
  display: inline-block;
  width: 60%;
  font-family: 楷体;
}

#title > div {
  float: right;
  /* display: inline-block; */
  width: 40%;
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

.container .con-top .con-top-right {
  float: right;
  border: 1px solid #eee;
}

.con-main {
  clear: both;
  margin-top: 40px;
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
/* 评论区style */

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
            border-bottom: 1px solid #e5e5e5;
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
            font-size: 18px;
            color: #333;
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
</style>
