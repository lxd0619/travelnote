var DAO=require('../models/DAO')
var operationDAO={
    TestLike: function (sql,likeInfo,callback) {
        DAO(sql,[likeInfo.strategyId,likeInfo.strategyType,likeInfo.userId], function (err, results1) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results1)
            }
        })
    },
    AddLike: function (sql,likeInfo,callback) {
        DAO(sql,[likeInfo.strategyId,likeInfo.strategyType,likeInfo.userId], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    DelLike: function (sql,likeInfo,callback) {
        DAO(sql,[likeInfo.strategyId,likeInfo.strategyType,likeInfo.userId], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    TestCollect: function (sql,collectInfo,callback) {
        DAO(sql,[collectInfo.strategyId,collectInfo.strategyType,collectInfo.userId], function (err, results1) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results1)
            }
        })
    },
    AddCollect: function (sql,collectInfo,callback) {
        DAO(sql,[collectInfo.strategyId,collectInfo.strategyType,collectInfo.userId], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    AddPrCollect: function (sql,collectInfo,callback) {
        DAO(sql,[collectInfo.strategyId], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    DelCollect: function (sql,collectInfo,callback) {
        DAO(sql,[collectInfo.strategyId,collectInfo.strategyType,collectInfo.userId], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    CutPrCollect: function (sql,collectInfo,callback) {
        DAO(sql,[collectInfo.strategyId], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    TestDiscuss: function (sql,DiscussInfo,callback) {
        DAO(sql, [DiscussInfo.commentId,DiscussInfo.strategyId,DiscussInfo.strategyType,DiscussInfo.userId], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    AddDiscuss: function (sql,DiscussInfo,callback) {
        DAO(sql, [DiscussInfo.commentContent,DiscussInfo.strategyId,DiscussInfo.userId,DiscussInfo.commentTime,DiscussInfo.strategyType], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    DelDiscuss: function (sql,DiscussInfo,callback) {
        DAO(sql, [DiscussInfo.commentId,DiscussInfo.strategyId,DiscussInfo.strategyType,DiscussInfo.userId], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    TestReply: function (sql,replyInfo,callback) {
        DAO(sql, [replyInfo.replyId,replyInfo.userId,replyInfo.commentId], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    AddReply: function (sql,replyInfo,callback) {
        DAO(sql, [replyInfo.replyContent,replyInfo.userId,replyInfo.replyTime,replyInfo.commentId], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    DelReply: function (sql,replyInfo,callback) {
        DAO(sql, [replyInfo.replyId,replyInfo.userId,replyInfo.commentId], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    Report: function (sql,reportInfo,callback) {
        DAO(sql,[reportInfo.strategyId], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    normalStrategy: function (sql,callback) {
        DAO(sql, function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    hotStrategy: function (sql,callback) {
        DAO(sql, function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    strategyDetail: function (sql,strategyInfo,callback) {
        DAO(sql, [strategyInfo.strategyId],function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
}
module.exports=operationDAO