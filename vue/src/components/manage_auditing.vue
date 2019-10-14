<template>
    <div>
        <div id="content">
            <div id="bottom_img">
                <ul>
                    <li><a href="article.html"><img id="imga" src="images/food/food9.jpg" style="width: 200px ;height: 200px;">
                        <p>陕西肉夹馍</p><span>作者：逃之夭夭</span></a>
                    </li>
                </ul>
            </div>
            <div id="bottom_img">
                <ul>
                    <li><a href="article.html"><img id="imga" src="images/food/food9.jpg" style="width: 200px ;height: 200px;">
                        <p>陕西肉夹馍</p><span>作者：逃之夭夭</span></a>
                    </li>
                </ul>
            </div>
            <div id="bottom_img">
                <ul>
                    <li><a href="article.html"><img id="imga" src="images/food/food9.jpg" style="width: 200px ;height: 200px;">
                        <p>陕西肉夹馍</p><span>作者：逃之夭夭</span></a>
                    </li>
                </ul>
            </div>
            <div id="bottom_img">
                <ul>
                    <li><a href="article.html"><img id="imga" src="images/food/food9.jpg" style="width: 200px ;height: 200px;">
                        <p>陕西肉夹馍</p><span>作者：逃之夭夭</span></a>
                    </li>
                </ul>
            </div>
            <div id="bottom_img">
                <ul>
                    <li><a href="article.html"><img id="imga" src="images/food/food9.jpg" style="width: 200px ;height: 200px;">
                        <p>陕西肉夹馍</p><span>作者：逃之夭夭</span></a>
                    </li>
                </ul>
            </div>
            <div id="bottom_img">
                <ul>
                    <li><a href="article.html"><img id="imga" src="images/food/food9.jpg" style="width: 200px ;height: 200px;">
                        <p>陕西肉夹馍</p><span>作者：逃之夭夭</span></a>
                    </li>
                </ul>
            </div>
            <div id="bottom_img">
                <ul>
                    <li><a href="article.html"><img id="imga" src="images/food/food9.jpg" style="width: 200px ;height: 200px;">
                        <p>陕西肉夹馍</p><span>作者：逃之夭夭</span></a>
                    </li>
                </ul>
            </div>
        </div>
        <ul id="pagesList">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>    
    </div>
</template>
<script>
export default {
    name:'manage_auditing'
}
</script>
<style scoped>

body{
    overflow-x: hidden;
}
#bottom_img ul {
    /* width: 1380px; */
    height: 800px；
}
p{
    margin:0
}
#content{
    width:1200px;
}

#bottom_img ul li{
    float: left;
    background-color: white;
    width: 200px;
    height: 266px;
    margin: 10px 20px;
    text-align: center;
    line-height: 30px;
    overflow: hidden;
}
#bottom_img>ul>li>span{
    font-size: 13px;
    position: relative;
    top: 30px;
    left: -50px;
    margin-left: 45px;
}
a{
    text-decoration: none;
}
ul {
    list-style: none;
}
#pagesList {
    position: absolute;
    left: 50%;
    bottom: -50px;
    margin-left: -140px;
}

#pagesList li {
    padding:5px ;
    float: left;
    width: 15px;
    height: 15px;
    border: 1px solid #ccc;
    margin: 10px;
    text-align: center;
    line-height: 15px;
    background-color: #fff;
    cursor: pointer;
}
</style>
