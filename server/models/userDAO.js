var DAO = require('./DAO')
//针对用户数据操作的模块对象
var userDAO = {
    /**根据Id查询用户信息*/
    getUserInfo: function (userTel, callback) {
        DAO('select userName,sex,tel,headPic,email,address,registerTime from users where tel = ?', userTel, function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    /**用户修改个人信息 */
    updateUser: function (user, callback) {
        DAO('update users set userName = ?,sex =?,email=?,address=?,registerTime =? where tel = ?',
            [user.userName, user.sex, user.email, user.address, user.registerTime, user.userTel]
            , function (err, results) {
                if (err) {
                    callback(err, null)
                } else {
                    callback(null, results)
                }
            })
    },
    /**修改用户手机号 */
    updataTel:function (newTel, userId, callback) {
        console.log(newTel, userId)
        DAO('update users set tel = ? where userId = ?', [newTel, userId], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    /**上传头像 */
    headPic: function (userHead, callback) {
        DAO('update users set headPic = ? where tel = ?', [userHead.headPic, userHead.userTel], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    /**个人攻略列表列表 */
    userArticle: function (userTel, callback) {
        DAO('select type,title,ssInfo,ssLikeNum,ssCollectionNum,ssTime,ssStatus,userName,cover from scenerystrategy join users on scenerystrategy.userId = users.userId where users.tel = ?'
        +' UNION '+
        'select type,title,fsInfo,fsLikeNum,fsCollectionNum,fsTime,fsStatus,userName,cover from foodstrategy join users on foodstrategy.userId = users.userId where users.tel = ?'
        +' UNION '+
        'select type,title,prInfo,prLikeNum,prCollectionNum,prTime,prStatus,userName,cover from personalrow join users on personalrow.userId = users.userId where users.tel = ?',[userTel,userTel,userTel], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    /**上传攻略 */
    commitArticle: function (sqlstr, ins, callback) {
        DAO(sqlstr, ins, function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    /**修改攻略 */
    updateArticle: function (sqlstr, upd, callback) {
        DAO(sqlstr, upd, function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    /**删除攻略 */
    delArticle: function (sqlstr, strategyId, callback) {
        DAO(sqlstr, strategyId, function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    /**景点收藏查询 */
    /**攻略收藏查询 */
    collectArticle: function (userTel, callback) {
        DAO('select * from collections where userId = (select userId from users where tel = ?)', userTel, function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    /**关注列表添加 */
    addFriends: function (userTel, relationUserId, callback) {
        DAO('insert into relationship (userId,relationUserId) values ((select userId from users where tel = ?),?)', [userTel, relationUserId], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    /**粉丝列表查询 */
    fans: function (userId, callback) {
        DAO('select relationUserId from relationship where userId = ?', userId, function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    /**关注列表查询 */
    attentions: function (userId, callback) {
        DAO('select userId from relationship where relationUserId = ?', userId, function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    /**查询用户评论 */
    comments: function (userTel, callback) {
        DAO('select * from comments where userId = (select userId from users where tel = ?)', userTel, function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    /**查询用户评论回复 */
    replys: function (userTel, callback) {
        DAO('select * from replys where userId = (select userId from users where tel = ?)', userTel, function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    /**系统消息查询 */
    sysMessage: function (userTel, callback) {
        DAO('select * from sysmessage where userId = (select userId from users where tel = ?)', userTel, function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    }
}
module.exports = userDAO