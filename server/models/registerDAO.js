var DAO = require('./DAO')

var registerDAO = {
    telCheck: function (tel,callback) {
        DAO('select * from users where tel=?',tel,function(err,results){
            if(err){
                callback(err,null)
            }else{
               callback(null,results)
            }
        })
    },
    register: function (user,callback) {
        console.log(user)
        DAO('insert into users(userName,password,tel,registerTime) values(?,?,?,?)',[user.userName,user.password,user.tel,user.registerTime],function(err,results){
            if(err){
                callback(err,null)
            }else{
                callback(null,results)
            }
        })
    }
}

module.exports = registerDAO