<template>
<div>
    <div class="big">
    
   

       <div class="contain"> 
                <div class="leftfix ">
                       <h2>关于华北</h2>
                           <br>
                           <h2>舌尖上的华北地区 </h2>
                    
                     <div class="left_font ">
                         <div v-for="val in msg" :key="val.number">
                            <img :src="val.img" alt="">
                             <p >{{val.food}}</p>
                         </div>                       
                    </div>
                    <div class="fix-sider">
                        <div class="trip-catalog " style="position: fixed;">
                            <h3>  美食目录</h3>
                            <ul class="catalog-list" style="width: 250px; ">
                                <li><a href="javascript:; "><span class="li-nav ">01</span><span class="li-cont ">广式早茶</span></a></li>
                                <li><a href="javascript:; "><span class="li-nav ">02</span><span class="li-cont ">牛肉丸</span></a></li>
                                <li><a href="javascript:; "><span class="li-nav ">03</span><span class="li-cont ">蟹膏</span></a></li>
                                <li><a href="javascript:; "><span class="li-nav ">04</span><span class="li-cont ">龟苓膏</span></a></li>
                                <li><a href="javascript:; "><span class="li-nav ">05</span><span class="li-cont ">福鼎肉片</span></a></li>
                                <li><a href="javascript:; "><span class="li-nav ">06</span><span class="li-cont ">福州鱼丸</span></a></li>
                            </ul>
                        </div>
                    </div>
                  
                </div> 
                <div class="clearfix "></div>  
            </div>             
        </div>
</div>



    
</template>
<script>
export default {
    name:'food_huabei',
    data: function() {
                    return {
                        msg: [{
                            'food': '现在在全国各地的大街小巷上面，都可以看到卖驴肉火烧的，可以说驴肉火烧已经走向全国，但是河间驴肉火烧才是最正宗的，当地人有句俗语叫：“常赶集还怕看不见卖大火烧的”可见驴肉火烧在当地人心中的位置',
                            "number":'1',
                            "img":require('../assets/specilimg/驴肉火烧.jpg')
                        }, {
                            'food': ' 北京烤鸭大家应该都知道。作为一道世界闻名的北京美食，据记载，烤鸭起源于南北朝时期，在当时是一道宫廷菜肴。正宗的北京烤鸭原材料为北京鸭，用果木炭火烤制，这样烤出来的烤鸭，色泽红润，肥而不腻，外酥里嫩，带有一股果木的香气。吃的时候，烤鸭会片成薄片，夹几片烤鸭，几根大葱丝，几根黄瓜丝，蘸点甜面酱，用荷叶饼卷起来，美味无比。',
                            "number":'2',
                             "img":require('../assets/specilimg/北京烤鸭.jpg')
                        }, {
                            'food': ' 驴打滚的原料有大黄米面、黄豆面、澄沙、白糖、香油、桂花、青红丝和瓜仁。做好的驴打滚最后要在黄豆面里面滚一下，让外面均匀沾满黄豆面，就像野驴在黄土地上打滚一样，因此得名“驴打滚”。驴打滚香甜可口，口感软糯，是一道老少皆宜的甜点。',
                            "number":'3',
                              "img":require('../assets/specilimg/驴打滚.jpg')
                        }, {
                            'food': ' 狗不理包子采用“半发面，水打馅”制作工艺。皮子薄而带韧劲；馅以精肉斩得细而匀，加姜、酱油、香油、味精、排骨汤等。做出的包子要求不走形，不掉底，不漏油，个个呈菊花形状。',
                            "number":'4',
                              "img":require('../assets/specilimg/包子.jpg')
                        }, {
                            'food': '  十八街麻花是经过反复探索进行创新，在白条和麻条中间夹一条含有桂花、闵姜、桃仁、瓜条等多种小料的酥馅，使炸出的麻花酥软香甜与众不同，创造出的什锦夹馅大麻花。其特点是香、酥、脆、甜，在干燥通风处放置数月不走味，不绵软、不变质。来天津旅游的国内外宾客，临走时都要带上几盒麻花，送亲朋好友。',
                            "number":'5',
                              "img":require('../assets/specilimg/麻花.jpg')
                        }, {
                            'food': ' 平遥古城的牛肉干很出名，已有百年传承的历史。平遥牛肉干的前身是“源盛昌肉店”，是当时平遥牛肉唯一的肉业经营作坊，也是现在有名的百年老字号。平遥牛肉干味道纯正，鲜香四溢，肉质劲道口感好，美味十足。',
                            "number":'6',
                              "img":require('../assets/specilimg/牛肉干.jpg')
                        }, {
                            'food': '烤全羊是蒙古民族的餐中之尊。相传是成吉思汗出征时的犒劳将士的食物，但是烤全羊的确很适合游牧民族，在晚上点起篝火，人们围坐在篝火周围，宰杀整只羊进行烘烤，让后大口喝酒大口吃肉，羊肉营养丰富，经过烤制的味道尤为独特，它既能提供大量的能量又能饱腹，所以很受当地人喜欢',
                            "number":'7',
                              "img":require('../assets/specilimg/烤全羊.jpg')
                        }]
                        
                    }

                }
    
}
</script>
<style scoped>
       body {
            margin: 0;
            padding: 0;
            
        }
        .big{
            width: 100%;
            height: 100%;
         background-color: rgb(238, 237, 237);
        }
  
        .contain {
            width: 1500px;
            margin: 0px auto;
           background-color:rgb(255,255,255);
         position: relative;
        }
    

  .li-nav {
            color: #d1d1d1;
            margin-right: 11px;
            font-size: 30px;
        }
    .li-cont{
        font-size: 20px;
    }
        .list {
            width: 1200px;
            height: 300px;
            overflow: hidden;
            position: absolute;
            left: 50%;
            margin-left: -600px;
        }
        
        .btn {
            position: absolute;
            top: 50%;
            margin-top: -50px;
            width: 60px;
            height: 100px;
            line-height: 100px;
            font-size: 30px;
            color: white;
            text-decoration: none;
            text-align: center;
            background: rgba(0, 255, 0, .5);
            cursor: pointer;
        }
    
    .h3{
        font-size:30px;
      

    }

        .trip-catalog .catalog-list li a .li-cont {
            color: rgb(122, 122, 122);
            text-align: justify;
        }
        
        .fix-sider {
            width: 300px;
            height: 400px;
            position: absolute;
            right: 0px;
            top:80px;
        }
        
        .trip-catalog .catalog-list li {
            list-style: none;
            padding: 10px 0;
        }
        .trip-catalog ul{
            padding-left: 10px;
            
        }
        .leftfix {
            width: 1000px;
            
        }
        
       h2 {
            font-size: 60px;
            font-family: 楷体;
            color: #4e4e4e;
            margin-top: 10px;
            text-align: center;
        }
      
      
        
        .clearfix::after {
            content: " ";
            display: block;
            clear: both;
        }
       
       
        .left_font {
            margin-top: 40px;
            margin-bottom: 10px;
        }
        
      
      
      .left_font img{
          width: 900px;
          height: 400px;
          margin-left: 10px
         
         
      }
   
        .left_font p {
            font-family: Georgia, 'Times New Roman', Times, serif;
            font-size: 25px; 
            margin-left: 50px;
             margin-top: 40px;
            margin-bottom: 10px;
        }
</style>