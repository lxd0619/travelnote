<template>
  <div>
    <div class="container-fluid" style="background-color: #fafafa;">
      <div class="container">
        <div class="headerpic"><img src="../assets/view/index.jpg" alt=""></div>
        <a href="#">景点攻略</a>
        <span>></span>
        <a href="#">{{cityName}}</a>
        <span>></span>
        <span>我心目中最原味的江南水乡</span>
        <div id="title">
          <h2>{{cityName}}</h2>
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
                <h5>南浔古镇</h5>
                <div class="main-show">
                  <hr />
                  <p>
                    南浔古镇，地处浙江湖州市，太湖的南岸，与江苏的苏州吴江区相接壤。
                    全长约33公里的京杭大运河支流“頔塘”，穿过南浔古镇，东与苏州平望运河段相连，最终进入上海黄浦江，而向北，则可以抵达湖州市
                  </p>

                  <div class="show-img">
                    <img src="../assets/stategyDetail/jn.jpg" alt />
                    <div class="d-txt">
                      <p></p>
                    </div>
                  </div>
                  <div class="show-img">
                    <img src="../assets/stategyDetail/jn1.jpg" alt />
                    <div class="d-txt">
                      <p></p>
                    </div>
                  </div>
                  <div class="show-img">
                    <img src="../assets/stategyDetail/jn5.jpg" alt />
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
  
    </div>
    
  </div>
</template>
<script>
export default {
  name: "jn",
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
.headerpic img{
width: 1200px;
height: 450px;


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
