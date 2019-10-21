var DAO = require('./DAO')

var homeDAO = {
    search: function (keyWord, callback) {
        var sql = "select strategyId,type,title,ssInfo,cityName,ssLikeNum,ssCollectionNum,ssTime,ssStatus,cover,users.userId,userName,headPic from scenerystrategy s join users on s.userId = users.userId where title like '%" + keyWord + "%' "
            + " union all " +
            " select strategyId,type,title,fsInfo,cityName,fsLikeNum,fsCollectionNum,fsTime,fsStatus,cover,users.userId,userName,headPic from foodstrategy f join users on f.userId = users.userId where title like '%" + keyWord + "%' "
            + " union all " +
            "select strategyId,type,title,prInfo,cityName,prLikeNum,prCollectionNum,prTime,prStatus,cover,users.userId,userName,headPic from personalrow p join users on p.userId = users.userId where title like '%" + keyWord + "%' "
        DAO(sql, null, function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    collection: function (sqlArguments, callback) {
        DAO('insert into collections(strategyId,strategyType,sceneryId,userId) values(?,?,?,?)', sqlArguments, function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    }
}

module.exports = homeDAO