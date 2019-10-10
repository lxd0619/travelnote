var DAO = require('./DAO')

var manageDAO = {
     /**未审核攻、举报、正常景点攻略列表查询*/
      /**未审核攻、举报、正常美食攻略列表查询*/
       /**未审核攻、举报、正常个性路线攻略列表查询*/
       List: function (sql,ssStatus,callback) {
        DAO(sql,ssStatus,function(err,results){
            if(err){
                callback(err,null)
            }else{
                callback(null,results)
            }
        })
    },
   
    /*景点攻略状态修改*/ 
    Status: function (sql,sqlArguments,callback) {
        DAO(sql,sqlArguments,function(err,results){
            if(err){
                callback(err,null)
            }else{
                callback(null,results)
            }
        })
    },
    
    /**用户查询 */
    usersSelect: function (callback) {
        DAO('select * from users',null,function(err,results){
            if(err){
                callback(err,null)
            }else{
                callback(null,results)
            }
        })
    },
    /**向用户发出警告 */
    sendMessage: function (sqlArguments,callback) {
        console.log(sqlArguments)
        DAO('Insert into sysmessage(sysMsgContent,userId,msgTime) values(?,?,?)',sqlArguments,function(err,results){
            if(err){
                callback(err,null)
            }else{
                callback(null,results)
            }
        })
    },
    /**用户状态修改 禁言、封号、正常 */
    userStatus: function (sqlArguments,callback) {
        DAO('update users set userStatus=? where userId=?',sqlArguments,function(err,results){
            if(err){
                callback(err,null)
            }else{
                callback(null,results)
            }
        })
    }
}

module.exports = manageDAO