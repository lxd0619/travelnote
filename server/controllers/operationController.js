var operationDAO = require('../models/operationDAO')

var operationController = {
    Like: function(req, res) {
        var sql = 'select * from likes where strategyId=? and strategyType=? and userId=?' //判断是否点赞过
        var likeInfo = {
            strategyId: req.body.strategyId,
            strategyType: req.body.strategyType,
            userId: req.body.userId
        }
        console.log(likeInfo)
        operationDAO.TestLike(sql, likeInfo, function(err, results1) {
            if (err) {
                console.log(err)
                res.json({ code: 500, data: 0, msg: '搜索攻略点赞错误！' })
            } else {
                console.log('results1:' + results1)
                if (results1 == null || results1.length == 0) {
                    console.log('有数据')
                    sql = "insert into likes(strategyId,strategyType,userId) values (?,?,?)" //添加
                    operationDAO.AddLike(sql, likeInfo, function(err, results) {
                        if (err) {
                            res.json({ code: 500, data: 0, msg: '添加攻略点赞错误！' + err.message })
                        } else {
                            if (results.affectedRows == 0) {
                                res.json({ code: 200, data: 0, msg: '添加攻略点赞错误,影响行数为0！' })
                            } else {
                                res.json({ code: 200, data: 1, msg: '添加攻略点赞成功！' })
                            }
                        }
                    })
                } else {
                    sql = "delete from likes where strategyId=? and strategyType=?  and userId=?" //删除
                    operationDAO.DelLike(sql, likeInfo, function(err, results) {
                        if (err) {
                            res.json({ code: 500, data: 0, msg: '取消攻略点赞错误！' })
                        } else {
                            if (results.affectedRows == 0) {
                                res.json({ code: 200, data: 0, msg: '取消攻略点赞错误，影响行数为0！' })
                            } else {
                                res.json({ code: 200, data: 1, msg: '取消攻略点赞成功！' })
                            }
                        }
                    })
                }
            }
        })
    },
    Collect: function(req, res) {
        var sql = 'select * from collections where strategyId=? and strategyType=? and userId=?' //判断是否收藏过
        var collectInfo = {
            strategyId: req.body.strategyId,
            strategyType: req.body.strategyType,
            userId: req.body.userId
        }
        operationDAO.TestCollect(sql, collectInfo, function(err, results1) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '搜索攻略收藏错误！' })
            } else {
                console.log('results1:' + results1)
                if (results1 == null || results1.length == 0) {
                    console.log('有数据')
                    sql = "insert into collections(strategyId,strategyType,userId)values(?,?,?)" //添加
                    operationDAO.AddCollect(sql, collectInfo, function(err, results) {
                        if (err) {
                            res.json({ code: 500, data: 0, msg: '添加攻略收藏错误！' + err.message })
                        } else {
                            if (results.affectedRows == 0) {
                                res.json({ code: 200, data: 0, msg: '添加攻略收藏错误,影响行数为0！' })
                            } else {
                                res.json({ code: 200, data: 1, msg: '添加攻略收藏成功！' })
                            }
                        }
                    })
                } else {
                    sql = "delete from collections where strategyId=? and strategyType=?  and userId=?" //删除
                    operationDAO.DelCollect(sql, collectInfo, function(err, results) {
                        if (err) {
                            res.json({ code: 500, data: 0, msg: '取消攻略收藏错误！' })
                        } else {
                            if (results.affectedRows == 0) {
                                res.json({ code: 200, data: 0, msg: '取消攻略收藏错误，影响行数为0！' })
                            } else {
                                res.json({ code: 200, data: 1, msg: '取消攻略收藏成功！' })
                            }
                        }
                    })
                }
            }
        })
    },
    Discuss: function(req, res) {
        var sql = 'select * from comments where commentId=? and strategyId=? and strategyType=? and userId=?' //判断是否收藏过
        var commentTime = new Date()
        var DiscussInfo = {
            commentId: req.body.commentId,
            commentContent: req.body.commentContent,
            userId: req.body.userId,
            strategyType: req.body.strategyType,
            strategyId: req.body.strategyId,
            commentTime: commentTime,
        }
        operationDAO.TestDiscuss(sql, DiscussInfo, function(err, results1) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '搜索攻略评论错误！' })
            } else {
                if (results1 == null || results1.length == 0) {
                    console.log('有数据')
                    sql = "insert into comments(commentContent,strategyId,userId,commentTime,strategyType) values(?,?,?,?,?)" //添加
                    operationDAO.AddDiscuss(sql, DiscussInfo, function(err, results) {
                        if (err) {
                            res.json({ code: 500, data: 0, msg: '添加攻略评论错误！' })
                        } else {
                            if (results.affectedRows == 0) {
                                res.json({ code: 200, data: 0, msg: '添加攻略评论错误,影响行数为0！' })
                            } else {
                                res.json({ code: 200, data: 1, msg: '添加攻略评论成功！' })
                            }
                        }
                    })
                } else {
                    sql = "delete from comments where commentId=? and strategyId=? and strategyType=? and userId=?" //删除
                    operationDAO.DelDiscuss(sql, DiscussInfo, function(err, results) {
                        if (err) {
                            console.log(err)
                            res.json({ code: 500, data: 0, msg: '删除攻略评论错误！' })
                        } else {
                            if (results.affectedRows == 0) {
                                res.json({ code: 200, data: 0, msg: '删除攻略评论错误，影响行数为0！' })
                            } else {
                                res.json({ code: 200, data: 1, msg: '删除攻略评论成功！' })
                            }
                        }
                    })
                }
            }
        })
    },
    Reply: function(req, res) {
        var sql = 'select * from replys where replyId=? and userId=? and commentId=?' //判断是否回复过
        var replyTime = new Date()
        var replyInfo = {
            replyId: req.body.replyId,
            replyContent: req.body.replyContent,
            userId: req.body.userId,
            replyTime: replyTime,
            commentId: req.body.commentId,
        }
        operationDAO.TestReply(sql, replyInfo, function(err, results1) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '搜索回复错误！' })
            } else {
                console.log('results1:' + results1)
                if (results1 == null || results1.length == 0) {
                    console.log('有数据')
                    sql = "insert into replys(replyContent,userId,replyTime,commentId) values(?,?,?,?)" //添加
                    operationDAO.AddReply(sql, replyInfo, function(err, results) {
                        if (err) {
                            res.json({ code: 500, data: 0, msg: '添加攻略回复错误！' })
                        } else {
                            if (results.affectedRows == 0) {
                                res.json({ code: 200, data: 0, msg: '添加攻略回复错误,影响行数为0！' })
                            } else {
                                res.json({ code: 200, data: 1, msg: '添加攻略回复成功！' })
                            }
                        }
                    })
                } else {
                    sql = "delete from replys where replyId=? and  userId=? and commentId=?" //删除
                    operationDAO.DelReply(sql, replyInfo, function(err, results) {
                        if (err) {
                            console.log(err)
                            res.json({ code: 500, data: 0, msg: '删除攻略回复错误！' })
                        } else {
                            if (results.affectedRows == 0) {
                                res.json({ code: 200, data: 0, msg: '删除攻略回复错误，影响行数为0！' })
                            } else {
                                res.json({ code: 200, data: 1, msg: '删除攻略回复成功！' })
                            }
                        }
                    })
                }
            }
        })
    },
    Report: function(req, res) {
        // update personalrow set prStatus=1 where strategyId=? and (prStatus=0 or prStatus=1)
        var reportInfo = {
            strategyType: req.body.strategyType,
            strategyId: req.body.strategyId,
        }
        var sql = ''
        switch (reportInfo.strategyType) {
            case 'scenerystrategy':
                sql = '  update scenerystrategy set ssStatus=1 where strategyId=? and (ssStatus=0 or ssStatus=1)';
                break;
            case 'foodstrategy':
                sql = '  update foodstrategy set fsStatus=1 where strategyId=? and (fsStatus=0 or fsStatus=1)';
                break;
            case 'personalrow':
                sql = ' update personalrow set prStatus=1 where strategyId=? and (prStatus=0 or prStatus=1)';
                break;
        }
        operationDAO.Report(sql, reportInfo, function(err, results) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '攻略举报错误！' })
            } else {
                if (results.affectedRows == 0) {
                    res.json({ code: 200, data: 0, msg: '攻略举报失败,未找到攻略数据!' })
                } else {
                    res.json({ code: 200, data: 1, msg: '攻略举报成功！' })
                }
            }
        })
    },
    normalStrategy: function(req, res) {
        var normalStrategyInfo = {
            strategyType: req.body.strategyType
        }
        var sql = ''
        switch (normalStrategyInfo.strategyType) {
            case 'scenerystrategy':
                sql = ' select * from scenerystrategy where (ssStatus=0 or ssStatus=1) order by ssTime desc ';
                break;
            case 'foodstrategy':
                sql = ' select * from foodstrategy where (fsStatus=0 or fsStatus=1) order by fsTime desc ';
                break;
            case 'personalrow':
                sql = '  select  * from  personalrow  where (prStatus=0 or prStatus=1) order by prTime desc ';
                break;
        }
        operationDAO.normalStrategy(sql, function(err, results) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '普通攻略查询错误！' })
            } else {
                if (results == null || results.length == 0) {
                    res.json({ code: 200, data: 0, msg: '普通攻略查询失败,未找到攻略数据!' })
                } else {
                    res.json({ code: 200, data: results, msg: normalStrategyInfo.strategyType + '普通攻略查询成功！' })
                }
            }
        })
    },
    hotStrategy: function(req, res) {
        var hotStrategyInfo = {
            strategyType: req.body.strategyType,
        }
        console.log(req.body.strategyType)
        var sql = ''
        switch (hotStrategyInfo.strategyType) {
            case 'scenerystrategy':
                sql = ' select * from scenerystrategy where ssStatus=0 order by ssLikeNum desc,ssCollectionNum desc';
                break;
            case 'foodstrategy':
                sql = ' select * from foodstrategy order by fslikenum desc,fscollectionnum desc';
                break;
            case 'personalrow':
                sql = '  select distinct * from users join personalrow on users.userId=personalrow.userId where (prStatus=0 or prStatus=1) order by personalrow.prLikeNum desc limit 3';
                break;
        }
        operationDAO.hotStrategy(sql, function(err, results) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '热门攻略查询错误！' })
            } else {
                if (results == null || results.length == 0) {
                    res.json({ code: 200, data: 0, msg: '热门攻略查询失败,未找到攻略数据!' })
                } else {
                    res.json({ code: 200, data: results, msg: hotStrategyInfo.strategyType + '热门攻略查询成功！' })
                }
            }
        })
    },
    strategyDetail: function(req, res) {
        var strategyInfo = {
            strategyType: req.body.strategyType,
            strategyId: req.body.strategyId
        }
        console.log(strategyInfo)
        var sql = ''
        switch (strategyInfo.strategyType) {
            case 'scenerystrategy':
                sql = 'select * from scenerystrategy left join comments on scenerystrategy.strategyId = comments.strategyId  and comments.strategyType="scenerystrategy" left join replys on comments.commentId = replys.commentId where scenerystrategy.strategyId = ? ';
                break;
            case 'foodstrategy':
                sql = ' select * from foodstrategy left join comments on foodstrategy.strategyId = comments.strategyId  and comments.strategyType="foodstrategy" left join replys on comments.commentId = replys.commentId where foodstrategy.strategyId = ?';
                break;
            case 'personalrow':
                sql = ' select * from personalrow left join comments on personalrow.strategyId = comments.strategyId  and comments.strategyType="personalrow" left join replys on comments.commentId = replys.commentId where personalrow.strategyId = ?';
                break;
        }
        operationDAO.strategyDetail(sql, strategyInfo, function(err, results) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '攻略详情查询错误！' })
            } else {
                if (results == null || results.length == 0) {
                    res.json({ code: 200, data: 0, msg: '攻略详情查询失败,未找到攻略数据!' })
                } else {
                    res.json({ code: 200, data: results, msg: strategyInfo.strategyType + '攻略详情查询成功！' })
                }
            }
        })
    },
}
module.exports = operationController