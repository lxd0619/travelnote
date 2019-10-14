<template>
    <div>
        <div id="content">
            <table>
                <tr>
                    <th>用户id</th>
                    <th>用户昵称</th>
                    <th>用户电话</th>
                    <th>出生日期</th>
                    <th>邮箱地址</th>
                    <th>个人简介</th>
                    <th>城市</th>
                    <th>性别</th>
                    <th>用户状态</th>
                </tr>
                <tr>
                    <td>001</td>
                    <td>猫熊</td>
                    <td>18852958196</td>
                    <td>1998-03-15</td>
                    <td>1627881936@qq.com</td>
                    <td>滴~国宝卡</td>
                    <td>苏州</td>
                    <td>女</td>
                    <td>正常</td>
                </tr>
                <tr>
                    <td>002</td>
                    <td>猫熊</td>
                    <td>18852958196</td>
                    <td>1998-03-15</td>
                    <td>1627881936@qq.com</td>
                    <td>滴~国宝卡</td>
                    <td>苏州</td>
                    <td>女</td>
                    <td>警告</td>
                </tr>
                <tr>
                    <td>003</td>
                    <td>猫熊</td>
                    <td>18852958196</td>
                    <td>1998-03-15</td>
                    <td>1627881936@qq.com</td>
                    <td>滴~国宝卡</td>
                    <td>苏州</td>
                    <td>女</td>
                    <td>禁言</td>
                </tr>
                <tr>
                    <td>004</td>
                    <td>猫熊</td>
                    <td>18852958196</td>
                    <td>1998-03-15</td>
                    <td>1627881936@qq.com</td>
                    <td>滴~国宝卡</td>
                    <td>苏州</td>
                    <td>女</td>
                    <td>封号</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name:"manage_user"
}
</script>
<style scoped>

body{
    overflow-x: hidden;
}

#content{
    width:1200px;
}
ul {
    list-style: none;
}
#pagesList {
    position: absolute;
    left: 50%;
    bottom: 50px;
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