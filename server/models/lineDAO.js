var DAO = require('./DAO')

var lineDAO = {
    // hotLine: function (callback) {
    //     DAO('select distinct * from users join personalrow on users.userId=personalrow.userId where (prStatus=0 or prStatus=1) order by personalrow.prLikeNum desc limit 3', null, function (err, results) {
    //         if (err) {
    //             callback(err, null)
    //         } else {
    //             callback(null, results)
    //         }
    //     })
    // },
    terraceLine: function (callback) {
        DAO('select distinct * from personalrow where userId=1 and (prStatus=0 or prStatus=1) order by prTime desc limit 2', null, function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    LineClassify: function (lineInfo, callback) {
        console.log(lineInfo)
        var sql = 'select * from personalrow where (prStatus=0 or prStatus=1) and'
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
    // LineDetail: function (lineInfo, callback) {
    //     DAO('select strategyId,prInfo from personalrow where (prStatus=0 or prStatus=1) and strategyId=?', [lineInfo.strategyId], function (err, results) {
    //         if (err) {
    //             callback(err, null)
    //         } else {
    //             callback(null, results)
    //         }
    //     })
    // },
    // selectDiscuss: function (DiscussInfo,callback) {
    //     DAO('select users.userId,users.headPic,comments.commentContent from users,comments where comments.strategyId = ? and comments.strategyType = ? and comments.userId=users.userId',[DiscussInfo.strategyId,DiscussInfo.strategyType], function (err, results) {
    //         if (err) {
    //             callback(err, null)
    //         } else {
    //             callback(null, results)
    //         }
    //     })
    // },
    // selectReply: function (replyInfo,callback) {
    //     DAO('select users.userName,users.headPic,replys.replyContent from users,replys where replys.commentId=? and users.userId=replys.userId ', [replyInfo.commentId], function (err, results) {
    //         if (err) {
    //             callback(err, null)
    //         } else {
    //             callback(null, results)
    //         }
    //     })
    // },
}

module.exports = lineDAO