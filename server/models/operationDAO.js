var DAO = require('../models/DAO')
var operationDAO = {
    //点赞功能
    TestLike: function(sql, likeInfo, callback) {
        DAO(sql, [likeInfo.strategyId, likeInfo.strategyType, likeInfo.userId], function(err, results1) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results1)
            }
        })
    },
    AddLike: function(sql, likeInfo, callback) {
        DAO(sql, [likeInfo.strategyId, likeInfo.strategyType, likeInfo.userId], function(err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    DelLike: function(sql, likeInfo, callback) {
        DAO(sql, [likeInfo.strategyId, likeInfo.strategyType, likeInfo.userId], function(err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    UpdatePrLike: function(sql, likeInfo, callback) {
        DAO(sql, [likeInfo.strategyId], function(err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    //收藏功能
    TestCollect: function(sql, collectInfo, callback) {
        DAO(sql, [collectInfo.strategyId, collectInfo.strategyType, collectInfo.userId], function(err, results1) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results1)
            }
        })
    },
    AddCollect: function(sql, collectInfo, callback) {
        DAO(sql, [collectInfo.strategyId, collectInfo.strategyType, collectInfo.userId], function(err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    DelCollect: function(sql, collectInfo, callback) {
        DAO(sql, [collectInfo.strategyId, collectInfo.strategyType, collectInfo.userId], function(err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    UpdatePrCollect: function(sql, collectInfo, callback) {
        DAO(sql, [collectInfo.strategyId], function(err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    
    AddDiscuss: function(sql, DiscussInfo, callback) {
        DAO(sql, [DiscussInfo.commentContent, DiscussInfo.strategyId, DiscussInfo.userId, DiscussInfo.commentTime, DiscussInfo.strategyType], function(err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    DelDiscuss: function(sql, DiscussInfo, callback) {
        DAO(sql, [DiscussInfo.commentId, DiscussInfo.strategyId, DiscussInfo.strategyType, DiscussInfo.userId], function(err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    SelDiscuss: function(sql, DiscussInfo, callback) {
        DAO(sql, [DiscussInfo.strategyId, DiscussInfo.strategyType], function(err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },

    //回复功能
    TestReply: function(sql, replyInfo, callback) {
        DAO(sql, [replyInfo.replyId, replyInfo.userId, replyInfo.commentId], function(err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },

    //举报
    Report: function(sql, reportInfo, callback) {
        console.log('举报')
        console.log(reportInfo)
        DAO(sql, [reportInfo.strategyId], function(err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    //查询用户是否举报
    selectReport:function(req,callback){
        console.log("查询用户是否举报")
        console.log(req)
        DAO('select * from reports where strategyType=? and strategyId=? and userId=?',[req.strategyType,req.strategyId,req.userId],function(err,results){
            if(err){
                callback(err,null)
            }else{
                callback(null,results)
            }
        })
    },
    //插入举报用户
    insertReport:function(req,callback){
        console.log('插入举报用户')
        console.log(req)
      DAO('INSERT into reports(strategyType,strategyId,userId) values(?,?,?)',[req.strategyType,req.strategyId,req.userId],function(err,results){
          if(err){
              callback(err,null)
          }else{
              callback(null,results)
          }
      })
    },
    //更改用户状态
    changeUser:function(userId,callback){
        console.log('更改用户状态')
        console.log(userId)
        DAO('update users set userStatus=userStatus+1 where userId=?',userId,function(err,results){
            if(err){
            callback(err,null)
            }else{
                callback(null,results)
            }
        })
    },

    normalStrategy: function(sql, callback) {
        DAO(sql, function(err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    hotStrategy: function(sql, callback) {
        DAO(sql, function(err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    strategyDetail: function(sql, strategyInfo, callback) {
        DAO(sql, [strategyInfo.strategyId], function(err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
}
module.exports = operationDAO