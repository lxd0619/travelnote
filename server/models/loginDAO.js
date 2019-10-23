var DAO = require('./DAO')

var loginDAO = {
    login: function (tel,callback) {
        DAO('select password,userId,role,userStatus from users where tel=? ',tel,function(err,results){
            if(err){
                callback(err,null)
            }else{
                callback(null,results)
            }
        })
    },
    forgetPwd: function (newPwd,tel,callback) {
        DAO('update users set password=? where tel=?',[newPwd,tel],function(err,results){
            if(err){
                callback(err,null)
            }else{
                callback(null,results)
            }
        })
    }
}

module.exports = loginDAO