var operationDAO = require('../models/operationDAO')
var userDAO = require("../models/userDAO")
var manageDAO = require('../models/manageDAO')

var operationController = {
    isLike: function (req, res) {
        var sql = 'select * from likes where strategyId=? and strategyType=? and userId=?' //判断是否点赞过
        var likeInfo = {
            strategyId: req.body.strategyId,
            strategyType: req.body.strategyType,
            userId: req.body.userId
        }
        operationDAO.TestLike(sql, likeInfo, function (err, results1) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '搜索攻略点赞错误！' })
            } else {
                if (results1 == null || results1.length == 0) {
                    res.json({ code: 200, data: 0, msg: '该用户没有点赞该攻略' })
                } else {
                    res.json({ code: 200, data: 1, msg: '该用户赞了这篇攻略' })
                }
            }
        })
    },
    Like: function (req, res) {
        var sql = 'select * from likes where strategyId=? and strategyType=? and userId=?' //判断是否点赞过
        var type = req.body.strategyType
        var likeInfo = {
            strategyId: req.body.strategyId,
            strategyType: req.body.strategyType,
            userId: req.user.userId
        }
        console.log(likeInfo)
        operationDAO.TestLike(sql, likeInfo, function (err, results1) {
            if (err) {
                console.log(err)
                res.json({ code: 500, data: 0, msg: '搜索攻略点赞错误！' })
            } else {
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
                                switch (type) {
                                    case 'scenerystrategy':
                                        sql = "update scenerystrategy SET ssLikeNum = (ssLikeNum+1) where strategyId=?";
                                        break;
                                    case 'personalrow':
                                        sql = "update personalrow SET prLikeNum = (prLikeNum+1) where strategyId=?";
                                        break;
                                    default:
                                        sql = "update foodstrategy SET fsLikeNum = (fsLikeNum+1) where strategyId=?";
                                        break;
                                }
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
                                switch (type) {
                                    case 'scenerystrategy':
                                        sql = "update scenerystrategy SET ssLikeNum = (ssLikeNum-1) where strategyId=?";
                                        break;
                                    case 'personalrow':
                                        sql = "update personalrow SET prLikeNum = (prLikeNum-1) where strategyId=?";
                                        break;
                                    default:
                                        sql = "update foodstrategy SET fsLikeNum = (fsLikeNum-1) where strategyId=?";
                                        break;
                                }
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
    /**判断该用户是否收藏该攻略 */
    isCollect: function (req, res) {
        var sql = 'select * from collections where strategyId=? and strategyType=? and userId=?'
        var collectInfo = {
            strategyId: req.body.strategyId,
            strategyType: req.body.strategyType,
            userId: req.body.userId
        }
        console.log(2, collectInfo)
        operationDAO.TestCollect(sql, collectInfo, function (err, results1) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '搜索攻略收藏错误！' })
            } else {
                if (results1 == null || results1.length == 0) {
                    res.json({ code: 200, data: 0, msg: '该用户没有收藏该攻略' })
                } else {
                    res.json({ code: 200, data: 1, msg: '该用户收藏该攻略了' })
                }
            }
        })
    },
    Collect: function (req, res) {
        var sql = 'select * from collections where strategyId=? and strategyType=? and userId=?' //判断是否收藏过
        var type = req.body.strategyType
        var collectInfo = {
            strategyId: req.body.strategyId,
            strategyType: req.body.strategyType,
            userId: req.user.userId
        }
        console.log(collectInfo)
        operationDAO.TestCollect(sql, collectInfo, function (err, results1) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '搜索攻略收藏错误！' })
            } else {
                console.log(results1)
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
                                switch (type) {
                                    case 'scenerystrategy':
                                        sql = "update scenerystrategy SET ssCollectionNum = (ssCollectionNum+1) where strategyId=?";
                                        break;
                                    case 'personalrow':
                                        sql = "update personalrow SET prCollectionNum = (prCollectionNum+1) where strategyId=?";
                                        break;
                                    default:
                                        sql = "update foodstrategy SET fsCollectionNum = (fsCollectionNum+1) where strategyId=?";
                                        break;
                                }
                                console.log(sql)
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
                                switch (type) {
                                    case 'scenerystrategy':
                                        sql = "update scenerystrategy SET ssCollectionNum = (ssCollectionNum-1) where strategyId=?";
                                        break;
                                    case 'personalrow':
                                        sql = "update personalrow SET prCollectionNum = (prCollectionNum-1) where strategyId=?";
                                        break;
                                    default:
                                        sql = "update foodstrategy SET fsCollectionNum = (fsCollectionNum-1) where strategyId=?";
                                        break;
                                }
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
    //举报
    Report: function (req, res) {
        // update personalrow set prStatus=1 where strategyId=? and (prStatus=0 or prStatus=1)
        var userId = req.user.userId
        var writerId=req.body.writerId
        var reportInfo = {
            strategyType: req.body.strategyType,
            strategyId: req.body.strategyId,
            userId: req.user.userId,
        }

        var sql = ''
        switch (reportInfo.strategyType) {
            case 'scenerystrategy':
                sql = 'update scenerystrategy set ssStatus=ssStatus+1 where strategyId=? and (ssStatus=0 or ssStatus>=1)';
                break;
            case 'foodstrategy':
                sql = 'update foodstrategy set fsStatus=fsStatus+1 where strategyId=? and (fsStatus=0 or fsStatus>=1)';
                break;
            case 'personalrow':
                sql = 'update personalrow set prStatus=prStatus+1 where strategyId=? and (prStatus=0 or prStatus>=1)';
                break;
        }
        console.log(1, reportInfo)
        operationDAO.Report(sql, reportInfo, function (err, results) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '攻略举报错误！' })
            } else {
                if (results.affectedRows == 0) {
                    res.json({ code: 200, data: 0, msg: '攻略举报失败,未找到攻略数据!' })
                } else {
                    console.log(2, reportInfo)
                    operationDAO.selectReport(reportInfo, function (err, results) {                  //查询用户是否举报过
                        if (err) {
                            res.json({ code: 500, data: 0, msg: '举报查询错误' })
                        } else {
                            if (results == null || results.length == 0) {
                                console.log(3, reportInfo)
                                operationDAO.insertReport(reportInfo, function (err, results) {       //为举报,将举报用户插入举报表
                                    if (err) {
                                        res.json({ code: 500, data: 0, msg: '举报插入错误' })
                                    } else {
                                        if (results.affectedRows == 0) {
                                            res.json({ code: 200, data: 0, msg: '插入失败' })
                                        } else {
                                            console.log(4, userId)
                                            operationDAO.changeUser(userId, function (err, results) {
                                                if (err) {
                                                    res.json({ code: 500, data: 0, msg: '用户状态错误' })
                                                } else {
                                                    if (results.affectedRows == 0) {
                                                        res.json({ code: 200, data: 0, msg: '用户修改状态失败' })
                                                    } else {
                                                        console.log(5,userId)
                                                        userDAO.getUserInfo(userId, function (err, results) {
                                                            if (err) {
                                                                res.json({ code: 500, data: 0, msg: '用户信息查询失败' })
                                                            } else {
                                                                if (results == null || results.length == 0) {
                                                                    res.json({ code: 200, data: 0, msg: '暂无用户信息' })
                                                                } else {
                                                                    console.log(7)
                                                                    console.log(results)
                                                                    if (results[0].userStatus >= 10) {
                                                                        console.log(8)
                                                                        var message = "由于您的攻略被多次举报，我们将对您发出警告"
                                                                        var time = new Date()
                                                                        var userId=writerId
                                                                        var sqlArguments = [message, userId, time]
                                                                        console.log(6,sqlArguments)
                                                                        manageDAO.sendMessage(sqlArguments, function (err, results) {
                                                                            if (err) {
                                                                                res.json({ code: 500, data: 0, msg: '数据库错误，信息发送失败' })
                                                                            } else {
                                                                                if (results.affectedRows == 0) {
                                                                                    res.json({ code: 200, data: 0, msg: '信息发送失败' })
                                                                                } else {
                                                                                    res.json({code:200,data:1,msg:'举报成功'})
                                                                                }
                                                                            }
                                                                        })
                                                                    }else{
                                                                        res.json({code:200,data:1,msg:'举报成功'})
                                                                    }
                                                                    // res.json({ code: 200, data: results, msg: '用户信息查询成功' })
                                                                }
                                                            }
                                                        })
                                                        // res.json({ code: 200, data: 1, msg: '举报成功' })
                                                    }

                                                }
                                            })
                                        }
                                    }
                                })
                                // res.json({code:200,data:1,msg:'该用户为举报'})
                            } else {
                                res.json({ code: 200, data: 0, msg: '您已经举报过了' })
                            }
                        }
                    })
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
                sql = ' select distinct users.userId, users.userName,users.headPic ,scenerystrategy.* from users join scenerystrategy on users.userId=scenerystrategy.userId where ssStatus>=0  order by ssTime desc';
                break;
            case 'foodstrategy':
                sql = ' select distinct users.userId, users.userName,users.headPic ,foodstrategy.* from users join foodstrategy on users.userId=foodstrategy.userId where fsStatus>=0  order by fsTime desc ';
                break;
            case 'personalrow':
                sql = ' select distinct users.userId, users.userName,users.headPic ,personalrow.* from users join personalrow on users.userId=personalrow.userId where prStatus>=0  order by prTime desc  ';
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
                sql = ' select distinct users.userId, users.userName,users.headPic ,scenerystrategy.* from users join scenerystrategy on users.userId=scenerystrategy.userId where ssStatus>=0  order by ssLikeNum desc,ssCollectionNum desc ';
                break;
            case 'foodstrategy':
                sql = ' select distinct users.userId, users.userName,users.headPic ,foodstrategy.* from users join foodstrategy on users.userId=foodstrategy.userId where fsStatus>=0  order by fslikenum desc,fscollectionnum desc ';
                break;
            case 'personalrow':
                sql = ' select distinct users.userId, users.userName,users.headPic ,personalrow.* from users join personalrow on users.userId=personalrow.userId where prStatus>=0  order by personalrow.prLikeNum desc limit 20';
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
                sql = ' select users.userId,users.userName,users.headPic,foodstrategy.strategyId,foodstrategy.type,foodstrategy.title,foodstrategy.cover,foodstrategy.fsInfo ssInfo, foodstrategy.fsLikeNum ssLikeNum,foodstrategy.fsCollectionNum ssCollectionNum,foodstrategy.cityName,foodstrategy.userId,foodstrategy.fsTime ssTime,foodstrategy.fsStatus ssStatus from foodstrategy left join users on users.userId=foodstrategy.userId  where foodstrategy.strategyId =?	';
                break;
            case 'personalrow':
                sql = ' select  users.userId,users.userName,users.headPic,personalrow.strategyId,personalrow.type,personalrow.title,personalrow.cover,personalrow.prInfo ssInfo, personalrow.prLikeNum,personalrow.prCollectionNum,personalrow.cityName,personalrow.userId,personalrow.prTime ssTime,personalrow.prStatus ssStatus from personalrow left join users on users.userId=personalrow.userId  where personalrow.strategyId =? ';
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