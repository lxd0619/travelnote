var DAO = require('./DAO')

var lineDAO = {
    terraceLine: function (callback) {
        DAO('select distinct * from personalrow where userId=1 and (prStatus=0 or prStatus=1) order by prTime desc', null, function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    LineClassify: function (lineInfo, callback) {
        console.log(lineInfo)
        var sql = ' select users.userId, users.userName,users.headPic,personalrow.* from personalrow  left join users on users.userId=personalrow.userId  where (prStatus=0 or prStatus=1) and '
        switch (lineInfo.lineClass) {
            case 'dayNum': sql += ' dayNum='; break;
            case 'season': sql += ' season='; break;
            case 'crowdType': sql += ' crowdType='; break;
        }
        sql += ' ? '
        console.log(sql)
        DAO(sql, lineInfo.lineType, function (err, results) {
            console.log(sql)
            console.log(lineInfo.lineType)
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
  
}

module.exports = lineDAO