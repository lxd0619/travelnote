var operationDAO = require('../models/operationDAO')

var operationController = {
    Like: function (req, res) {
        var sql = 'select * from likes where strategyId=? and strategyType=? and userId=?' //判断是否点赞过
        var likeInfo = {
            strategyId: req.body.strategyId,
            strategyType: req.body.strategyType,
            userId: req.body.userId
        }
        console.log(likeInfo)
        operationDAO.TestLike(sql, likeInfo, function (err, results1) {
            if (err) {
                console.log(err)
                res.json({ code: 500, data: 0, msg: '搜索攻略点赞错误！' })
            } else {
                console.log('results1:' + results1)
                if (results1 == null || results1.length == 0) {
                    console.log('有数据')
                    sql = "insert into likes(strategyId,strategyType,userId) values (?,?,?)" //添加
                    operationDAO.AddLike(sql, likeInfo, function (err, results) {
                        if (err) {
                            res.json({ code: 500, data: 0, msg: '添加攻略点赞错误！' + err.message })
                        } else {
                            if (results.affectedRows == 0) {
                                res.json({ code: 200, data: 0, msg: '添加攻略点赞错误,影响行数为0！' })
                            } else {
                                sql = " update personalrow SET prLikeNum = (prLikeNum+1) where personalrow.strategyId=?"//更新personalrow的数据
                                operationDAO.UpdatePrLike(sql, likeInfo, function (err, results) {
                                    if (err) {
                                        res.json({ code: 500, data: 0, msg: '增加prLikeNum错误！' + err.message })
                                    } else {
                                        if (results.affectedRows == 0) {
                                            res.json({ code: 200, data: 0, msg: '增加prLikeNum错误,影响行数为0！' })
                                        } else {
                                            res.json({ code: 200, data: 1, msg: '增加prLikeNum成功！' })
                                        }
                                    }
                                })
                                // res.json({ code: 200, data: 1, msg: '添加攻略点赞成功！' })
                            }
                        }
                    })
                } else {
                    sql = "delete from likes where strategyId=? and strategyType=?  and userId=?" //删除
                    operationDAO.DelLike(sql, likeInfo, function (err, results) {
                        if (err) {
                            res.json({ code: 500, data: 0, msg: '取消攻略点赞错误！' })
                        } else {
                            if (results.affectedRows == 0) {
                                res.json({ code: 200, data: 0, msg: '取消攻略点赞错误，影响行数为0！' })
                            } else {
                                sql = " update personalrow SET prLikeNum = (prLikeNum-1) where personalrow.strategyId=?"//更新personalrow的数据
                                operationDAO.UpdatePrLike(sql, likeInfo, function (err, results) {
                                    if (err) {
                                        res.json({ code: 500, data: 0, msg: '减小prLikeNum错误！' + err.message })
                                    } else {
                                        if (results.affectedRows == 0) {
                                            res.json({ code: 200, data: 0, msg: '减小prLikeNum错误,影响行数为0！' })
                                        } else {
                                            res.json({ code: 200, data: -1, msg: '减小prLikeNum成功！' })
                                        }
                                    }
                                })
                                // res.json({ code: 200, data: 1, msg: '取消攻略点赞成功！' })
                            }
                        }
                    })
                }
            }
        })
    },
    Collect: function (req, res) {
        var sql = 'select * from collections where strategyId=? and strategyType=? and userId=?' //判断是否收藏过
        var collectInfo = {
            strategyId: req.body.strategyId,
            strategyType: req.body.strategyType,
            userId: req.body.userId
        }
        operationDAO.TestCollect(sql, collectInfo, function (err, results1) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '搜索攻略收藏错误！' })
            } else {
                console.log('results1:' + results1)
                if (results1 == null || results1.length == 0) {
                    console.log('没有数据')
                    sql = "insert into collections(strategyId,strategyType,userId)values(?,?,?)" //添加
                    operationDAO.AddCollect(sql, collectInfo, function (err, results) {
                        if (err) {
                            res.json({ code: 500, data: 0, msg: '添加攻略收藏错误！' + err.message })
                        } else {
                            if (results.affectedRows == 0) {
                                res.json({ code: 200, data: 0, msg: '添加攻略收藏错误,影响行数为0！' })
                            } else {
                                sql = " update personalrow SET prCollectionNum = (prCollectionNum+1) where personalrow.strategyId=?"//更新personalrow的数据
                                operationDAO.UpdatePrCollect(sql, collectInfo, function (err, results) {
                                    if (err) {
                                        res.json({ code: 500, data: 0, msg: '增加prCollectionNum错误！' + err.message })
                                    } else {
                                        if (results.affectedRows == 0) {
                                            res.json({ code: 200, data: 0, msg: '增加prCollectionNum错误,影响行数为0！' })
                                        } else {
                                            res.json({ code: 200, data: 1, msg: '增加prCollectionNum成功！' })
                                        }
                                    }
                                })
                                // res.json({ code: 200, data: 1, msg: '添加攻略收藏成功！' })

                            }
                        }
                    })

                } else {
                    console.log('取消收藏')
                    sql = "delete from collections where strategyId=? and strategyType=?  and userId=?" //删除
                    operationDAO.DelCollect(sql, collectInfo, function (err, results) {
                        if (err) {
                            res.json({ code: 500, data: 0, msg: '取消攻略收藏错误！' })
                        } else {
                            if (results.affectedRows == 0) {
                                res.json({ code: 200, data: 0, msg: '取消攻略收藏错误，影响行数为0！' })
                            } else {
                                sql = " update personalrow SET prCollectionNum = prCollectionNum-1 where personalrow.strategyId=?"//更新personalrow的数据
                                operationDAO.UpdatePrCollect(sql, collectInfo, function (err, results) {
                                    console.log(1)
                                    if (err) {
                                        res.json({ code: 500, data: 0, msg: '减小prCollectionNum错误！' + err.message })
                                    } else {
                                        if (results.affectedRows == 0) {
                                            res.json({ code: 200, data: 0, msg: '减小prCollectionNum错误,影响行数为0！' })
                                        } else {
                                            res.json({ code: 200, data: -1, msg: '减小prCollectionNum成功！' })
                                        }
                                    }
                                })
                                // res.json({ code: 200, data: 1, msg: '取消攻略收藏成功！' })
                            }
                        }
                    })


                }
            }
        })
    },
    // Discuss: function (req, res) {
    //     var sql = 'select * from comments where commentId=? and strategyId=? and strategyType=? and userId=?' //判断是否收藏过
    //     var commentTime = new Date()
    //     var DiscussInfo = {
    //         commentId: req.body.commentId,
    //         commentContent: req.body.commentContent,
    //         userId: req.body.userId,
    //         strategyType: req.body.strategyType,
    //         strategyId: req.body.strategyId,
    //         commentTime: commentTime,
    //     }
    //     operationDAO.TestDiscuss(sql, DiscussInfo, function (err, results1) {
    //         if (err) {
    //             res.json({ code: 500, data: 0, msg: '搜索攻略评论错误！' })
    //         } else {
    //             if (results1 == null || results1.length == 0) {
    //                 console.log('有数据')
    //                 sql = "insert into comments(commentContent,strategyId,userId,commentTime,strategyType) values(?,?,?,?,?)" //添加
    //                 operationDAO.AddDiscuss(sql, DiscussInfo, function (err, results) {
    //                     if (err) {
    //                         res.json({ code: 500, data: 0, msg: '添加攻略评论错误！' })
    //                     } else {
    //                         if (results.affectedRows == 0) {
    //                             res.json({ code: 200, data: 0, msg: '添加攻略评论错误,影响行数为0！' })
    //                         } else {
    //                             res.json({ code: 200, data: 1, msg: '添加攻略评论成功！' })
    //                         }
    //                     }
    //                 })
    //             } else {
    //                 sql = "delete from comments where commentId=? and strategyId=? and strategyType=? and userId=?" //删除
    //                 operationDAO.DelDiscuss(sql, DiscussInfo, function (err, results) {
    //                     if (err) {
    //                         console.log(err)
    //                         res.json({ code: 500, data: 0, msg: '删除攻略评论错误！' })
    //                     } else {
    //                         if (results.affectedRows == 0) {
    //                             res.json({ code: 200, data: 0, msg: '删除攻略评论错误，影响行数为0！' })
    //                         } else {
    //                             res.json({ code: 200, data: 1, msg: '删除攻略评论成功！' })
    //                         }
    //                     }
    //                 })
    //             }
    //         }
    //     })
    // },

    //评论
    AddDiscuss: function (req, res) {
        var sql = ''
        var commentTime = new Date()
        var DiscussInfo = {
            commentContent: req.body.commentContent,
            userId: req.user.userId,
            strategyType: req.body.strategyType,
            strategyId: req.body.strategyId,
            commentTime: commentTime,
        }
        console.log(DiscussInfo)
        console.log(1)
        sql = " insert into comments(commentContent,strategyId,userId,commentTime,strategyType) values(?,?,?,?,?)" //添加
        operationDAO.AddDiscuss(sql, DiscussInfo, function (err, results) {
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
    },
    DelDiscuss: function (req, res) {
        var sql = ''
        var DiscussInfo = {
            commentId: req.body.commentId,
            strategyId: req.body.strategyId,
            strategyType: req.body.strategyType,
            userId: req.user.userId
        }
        sql = " delete from comments where commentId=? and strategyId=? and strategyType=? and userId=?" //添加
        console.log('DiscussInfo内容:')
        console.log(DiscussInfo)
        operationDAO.DelDiscuss(sql, DiscussInfo, function (err, results) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '删除攻略评论错误！' })
            } else {
                if (results.affectedRows == 0) {
                    res.json({ code: 200, data: 0, msg: '删除攻略评论错误,影响行数为0！' })
                } else {
                    res.json({ code: 200, data: 1, msg: '删除攻略评论成功！' })
                }
            }
        })
    },
    SelDiscuss: function (req, res) {
        var sql = ''
        var DiscussInfo = {
            strategyId: req.body.strategyId,
            strategyType: req.body.strategyType,
            // commentId:req.body.userId,
        }
        console.log(DiscussInfo)
        sql = " select users.userId,users.userName,users.headPic,comments.* from users,comments where strategyId=? and strategyType=? and comments.userId=users.userId" //筛选
        operationDAO.SelDiscuss(sql, DiscussInfo, function (err, results) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '筛选攻略评论错误！' })
            } else {
                if (results == null || results.length == 0) {
                    res.json({ code: 200, data: 0, msg: '筛选攻略评论错误,影响行数为0！' })
                } else {
                    res.json({ code: 200, data: results, msg: '筛选攻略评论成功！' })
                }
            }
        })
    },
    // Reply: function (req, res) {
    //     var sql = 'select * from replys where replyId=? and userId=? and commentId=?' //判断是否回复过
    //     var replyTime = new Date()
    //     var replyInfo = {
    //         replyId: req.body.replyId,
    //         replyContent: req.body.replyContent,
    //         userId: req.body.userId,
    //         replyTime: replyTime,
    //         commentId: req.body.commentId,
    //     }
    //     operationDAO.TestReply(sql, replyInfo, function (err, results1) {
    //         if (err) {
    //             res.json({ code: 500, data: 0, msg: '搜索回复错误！' })
    //         } else {
    //             console.log('results1:' + results1)
    //             if (results1 == null || results1.length == 0) {
    //                 console.log('有数据')
    //                 sql = "insert into replys(replyContent,userId,replyTime,commentId) values(?,?,?,?)" //添加
    //                 operationDAO.AddReply(sql, replyInfo, function (err, results) {
    //                     if (err) {
    //                         res.json({ code: 500, data: 0, msg: '添加攻略回复错误！' })
    //                     } else {
    //                         if (results.affectedRows == 0) {
    //                             res.json({ code: 200, data: 0, msg: '添加攻略回复错误,影响行数为0！' })
    //                         } else {
    //                             res.json({ code: 200, data: 1, msg: '添加攻略回复成功！' })
    //                         }
    //                     }
    //                 })
    //             } else {
    //                 sql = "delete from replys where replyId=? and  userId=? and commentId=?" //删除
    //                 operationDAO.DelReply(sql, replyInfo, function (err, results) {
    //                     if (err) {
    //                         console.log(err)
    //                         res.json({ code: 500, data: 0, msg: '删除攻略回复错误！' })
    //                     } else {
    //                         if (results.affectedRows == 0) {
    //                             res.json({ code: 200, data: 0, msg: '删除攻略回复错误，影响行数为0！' })
    //                         } else {
    //                             res.json({ code: 200, data: 1, msg: '删除攻略回复成功！' })
    //                         }
    //                     }
    //                 })
    //             }
    //         }
    //     })
    // },
    //回复评论
    // AddReply: function (req, res) {
    //     var sql = '' //判断是否回复过
    //     var replyTime = new Date()
    //     var replyInfo = {
    //         replyId: req.body.replyId,
    //         replyContent: req.body.replyContent,
    //         userId: req.body.userId,
    //         replyTime: replyTime,
    //         commentId: req.body.commentId,
    //     }
    //     console.log(1)
    //     sql = "insert into replys(replyContent,userId,replyTime,commentId) values(?,?,?,?)" //添加
    //     operationDAO.AddReply(sql, replyInfo, function (err, results) {
    //         if (err) {
    //             res.json({ code: 500, data: 0, msg: '添加攻略回复错误！' })
    //         } else {
    //             if (results.affectedRows == 0) {
    //                 res.json({ code: 200, data: 0, msg: '添加攻略回复错误,影响行数为0！' })
    //             } else {
    //                 res.json({ code: 200, data: 1, msg: '添加攻略回复成功！' })
    //             }
    //         }
    //     })
    // },
    // DelReply: function (req, res) {
    //     var sql = '' //判断是否回复过
    //     var replyInfo = {
    //         replyId: req.body.replyId,
    //         userId: req.body.userId,
    //         commentId: req.body.commentId,
    //     }
    //     sql = " delete from replys where replyId=? and  userId=? and commentId=?" //删除
    //     operationDAO.DelReply(sql, replyInfo, function (err, results) {
    //         if (err) {
    //             console.log(err)
    //             res.json({ code: 500, data: 0, msg: '删除攻略回复错误！' })
    //         } else {
    //             if (results.affectedRows == 0) {
    //                 res.json({ code: 200, data: 0, msg: '删除攻略回复错误，影响行数为0！' })
    //             } else {
    //                 res.json({ code: 200, data: 1, msg: '删除攻略回复成功！' })
    //             }
    //         }
    //     })
    // },
    // SelReply: function (req, res) {
    //     var sql = ''
    //     var DiscussInfo = {
    //         // replyId: req.body.replyId,
    //         // userId: req.body.userId,
    //         commentId: req.body.commentId,
    //     }
    //     sql = "	select users.userId,users.userName,users.headPic,replys.* from replys join users on users.userId=replys.userId where commentId=?" //筛选
    //     operationDAO.SelReply(sql, DiscussInfo, function (err, results) {
    //         if (err) {
    //             res.json({ code: 500, data: 0, msg: '筛选攻略回复错误！' })
    //         } else {
    //             if (results == null || results.length == 0) {
    //                 res.json({ code: 200, data: 0, msg: '筛选攻略回复错误,影响行数为0！' })
    //             } else {
    //                 res.json({ code: 200, data: results, msg: '筛选攻略回复成功！' })
    //             }
    //         }
    //     })
    // },

    Report: function (req, res) {
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
        operationDAO.Report(sql, reportInfo, function (err, results) {
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
    normalStrategy: function (req, res) {
        var normalStrategyInfo = {
            strategyType: req.body.strategyType
        }
        var sql = ''
        switch (normalStrategyInfo.strategyType) {
            case 'scenerystrategy':
                sql = ' select distinct users.userId, users.userName,users.headPic ,scenerystrategy.* from users join scenerystrategy on users.userId=scenerystrategy.userId where (ssStatus=0 or ssStatus=1) order by ssTime desc';
                break;
            case 'foodstrategy':
                sql = ' select distinct users.userId, users.userName,users.headPic ,foodstrategy.* from users join foodstrategy on users.userId=foodstrategy.userId where (fsStatus=0 or fsStatus=1) order by fsTime desc ';
                break;
            case 'personalrow':
                sql = ' select distinct users.userId, users.userName,users.headPic ,personalrow.* from users join personalrow on users.userId=personalrow.userId where (prStatus=0 or prStatus=1) order by prTime desc  ';
                break;
        }
        operationDAO.normalStrategy(sql, function (err, results) {
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
    hotStrategy: function (req, res) {
        var hotStrategyInfo = {
            strategyType: req.body.strategyType,
        }
        var sql = ''
        switch (hotStrategyInfo.strategyType) {
            case 'scenerystrategy':
                sql = ' select distinct users.userId, users.userName,users.headPic ,scenerystrategy.* from users join scenerystrategy on users.userId=scenerystrategy.userId where (ssStatus=0 or ssStatus=1) order by ssLikeNum desc,ssCollectionNum desc';
                break;
            case 'foodstrategy':
                sql = ' select distinct users.userId, users.userName,users.headPic ,foodstrategy.* from users join foodstrategy on users.userId=foodstrategy.userId where (fsStatus=0 or fsStatus=1) order by fslikenum desc,fscollectionnum desc ';
                break;
            case 'personalrow':
                sql = ' select distinct users.userId, users.userName,users.headPic ,personalrow.* from users join personalrow on users.userId=personalrow.userId where (prStatus=0 or prStatus=1) order by personalrow.prLikeNum desc ';
                break;
        }
        operationDAO.hotStrategy(sql, function (err, results) {
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
    strategyDetail: function (req, res) {
        var strategyInfo = {
            strategyType: req.body.strategyType,
            strategyId: req.body.strategyId
        }
        console.log(strategyInfo)
        var sql = ''
        switch (strategyInfo.strategyType) {
            case 'scenerystrategy':
                sql = ' select users.userId,users.userName,users.headPic,scenerystrategy.* from scenerystrategy left join users on users.userId=scenerystrategy.userId where scenerystrategy.strategyId = ?';
                break;
            case 'foodstrategy':
                sql = ' select users.userId,users.userName,users.headPic,foodstrategy.strategyId,foodstrategy.type,foodstrategy.title,foodstrategy.cover,foodstrategy.fsInfo ssInfo, foodstrategy.fsLikeNum,foodstrategy.fsCollectionNum,foodstrategy.cityName,foodstrategy.userId,foodstrategy.fsTime ssTime,foodstrategy.fsStatus ssStatus from foodstrategy left join users on users.userId=foodstrategy.userId  where foodstrategy.strategyId =?	';
                break;
            case 'personalrow':
                sql = ' select  users.userId,users.userName,users.headPic,personalrow.strategyId,personalrow.type,personalrow.title,personalrow.cover,personalrow.prInfo ssInfo, personalrow.prLikeNum,personalrow.prCollectionNum,personalrow.city,personalrow.userId,personalrow.prTime ssTime,personalrow.prStatus ssStatus from personalrow left join users on users.userId=personalrow.userId  where personalrow.strategyId =? ';
                break;
        }
        operationDAO.strategyDetail(sql, strategyInfo, function (err, results) {
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