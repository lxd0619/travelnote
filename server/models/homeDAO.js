var DAO = require('./DAO')

var homeDAO = {
    search: function (keyWord,callback) {
        DAO("select title,ssInfo from scenerystrategy where title like '%"+keyWord+"%' union all select title,fsInfo from foodstrategy where title like '%"+keyWord+"%'union all select title,prInfo from personalrow where title like '%"+keyWord+"%'", null, function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    collection:function(sqlArguments,callback){
        DAO('insert into collections(strategyId,strategyType,sceneryId,userId) values(?,?,?,?)',sqlArguments,function(err,results){
            if(err){
                callback(err,null)
            }else{
                callback(null,results)
            }
        })
    }
}

module.exports = homeDAO