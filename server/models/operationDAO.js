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
    //评论功能
    // TestDiscuss: function (sql,DiscussInfo,callback) {
    //     DAO(sql, [DiscussInfo.commentId,DiscussInfo.strategyId,DiscussInfo.strategyType,DiscussInfo.userId], function (err, results) {
    //         if (err) {
    //             callback(err, null)
    //         } else {
    //             callback(null, results)
    //         }
    //     })
    // },
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
        console.log(1, DiscussInfo.strategyId, DiscussInfo.strategyType)
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
    // AddReply: function (sql,replyInfo,callback) {
    //     DAO(sql, [replyInfo.replyContent,replyInfo.userId,replyInfo.replyTime,replyInfo.commentId], function (err, results) {
    //         if (err) {
    //             callback(err, null)
    //         } else {
    //             callback(null, results)
    //         }
    //     })
    // },
    // DelReply: function (sql,replyInfo,callback) {
    //     DAO(sql, [replyInfo.replyId,replyInfo.userId,replyInfo.commentId], function (err, results) {
    //         if (err) {
    //             callback(err, null)
    //         } else {
    //             callback(null, results)
    //         }
    //     })
    // },
    // SelReply: function (sql,replyInfo,callback) {
    //     DAO(sql, [replyInfo.commentId], function (err, results) {
    //         if (err) {
    //             callback(err, null)
    //         } else {
    //             callback(null, results)
    //         }
    //     })
    // },

    //举报
    Report: function(sql, reportInfo, callback) {
        DAO(sql, [reportInfo.strategyId], function(err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
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