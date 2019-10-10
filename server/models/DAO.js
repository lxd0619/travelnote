//数据访问对象
var mysql=require('mysql')
var dbconfig=require('../config/dbconfig')
// var connection=mysql.createConnection(dbconfig)
//通用的数据库操作方法
function commonQuery(sql,sqlArguments,callback){
    var connection=mysql.createConnection(dbconfig)
    connection.connect()
    connection.query(sql,sqlArguments,function(err,results,fileds){
        if(err){
            callback(err,null)
        }else{
            console.log('数据库:'+results)
            callback(null,results)
        }
    connection.end()
    console.log('数据库连接关闭')
    })
}
module.exports=commonQuery