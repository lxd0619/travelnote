var userDAO = require('../models/userDAO')
var formidable = require('formidable')
var path = require('path')
var bcrypt = require('bcrypt')

var userController = {
    /**根据Id查询用户信息*/
    getUserInfo: function (req, res) {
        var userTel = req.user.userTel
        userDAO.getUserInfo(userTel, function (err, results) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '用户信息查询失败' })
            } else {
                if (results == null || results.length == 0) {
                    res.json({ code: 200, data: 0, msg: '暂无用户信息' })
                } else {
                    res.json({ code: 200, data: results, msg: '用户信息查询成功' })
                }
            }
        })
    },
    /**用户修改个人信息 */
    updateUser: function (req, res) {
        var date = new Date()
        var user = { userName: req.body.userName, sex: req.body.sex, email: req.body.email, address: req.body.address, registerTime: date, userTel: req.user.userTel }
        userDAO.updateUser(user, function (err, results) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '用户信息修改失败' })
            } else {
                if (results.affectedRows == 0) {
                    res.json({ code: 200, data: 0, msg: '用户名修改失败！' })
                } else {
                    res.json({ code: 200, data: 1, msg: '用户名修改成功！' })
                }
            }
        })
    },
    /**修改用户手机号 */
    updataTel: function (req, res) {
        var newTel = req.body.newTel
        var userTel = req.user.userTel
        console.log('userTel:'+userTel)
        if (newTel.length == 11) {
            userDAO.updataTel(newTel, userTel, function (err, results) {
                if (err) {
                    res.json({ code: 500, data: 0, msg: '用户手机号修改失败' })
                } else {
                    if (results.affectedRows == 0) {
                        res.json({ code: 200, data: 0, msg: '用户手机号修改失败！' })
                    } else {
                        res.json({ code: 200, data: 1, msg: '用户手机号修改成功！' })
                    }
                }
            })
        } else {
            res.json({ code: 500, msg: '用户手机号必须是11位' })
        }
    },
    /**上传头像 */
    headPic: function (req, res) {
        var form = new formidable.IncomingForm()      //创建上传表单对象
        form.uploadDir = path.join(__dirname, '../public/uploadHeadPic')           //设置上传文件的路径
        form.keepExtensions = true                      //设置保留上传文件的扩展名
        form.parse(req, function (err, fields, files) {
            if (err) {
                console.log('文件上传错误！')
            }
            //fields是常温的表单字段数组，files是上传的文件列表
            //保存图片路径到数据库
            //1.获取当前用户编号
            var userTel = req.user.userTel
            //1.获取当前用户的图片名称
            var headPic = files.img.name
            var userHead = { headPic: headPic, userTel: userTel }
            userDAO.headPic(userHead, function (err, results) {
                if (err) {
                    res.json({ code: 500, data: 0, msg: '上传头像文件失败！' })
                } else {
                    if (results.affectedRows == 0) {
                        res.json({ code: 200, data: 0, msg: '上传头像文件失败！' })
                    } else {
                        res.json({ code: 200, data: 1, msg: '上传头像文件成功！' })
                    }
                }
            })
        })
    },
    /**个人攻略列表列表 */
    userArticle: function (req, res) {
        var userTel = req.user.userTel
        userDAO.userArticle(userTel, function (err, results) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '个人攻略查询失败' })
            } else {
                if (results == null || results.length == 0) {
                    res.json({ code: 200, data: 0, msg: '暂无个人攻略' })
                } else {
                    res.json({ code: 200, data: results, data: results, msg: '个人攻略查询成功' })
                }
            }
        })
    },
    /**上传攻略 */
    uploadArticle: function (req, res) {
        //定义一个对象results，用于返回wangeditor
        var results = {
            "errno": 0,
            "data": []
        }
        var form = new formidable.IncomingForm()      //创建上传表单对象
        form.uploadDir = path.join(__dirname, '../public/uploadArticlePic')           //设置上传文件的路径
        form.keepExtensions = true                      //设置保留上传文件的扩展名
        //当每个文件上传时都会触发的事件方法，用于多文件上传
        form.on('file', function (err, file) {
            console.log(file)
            results.data.push('http://localhost:3000/userCenter/uploadArticle/' + path.parse(file.path).base)
        })
        form.parse(req, function (err, fields, files) {
            if (err) {
                res.json({
                    "errno": -1,
                    "data": []
                })
            }
            res.send(results)
        })
    },
    /**上传攻略到数据库 */
    commitArticle: function (req, res) {
        console.log(123)
        console.log('req'+req)
        var form = new formidable.IncomingForm()      //创建上传表单对象
        form.uploadDir = path.join(__dirname, '../public/coverPic')           //设置上传文件的路径
        form.keepExtensions = true                      //设置保留上传文件的扩展名
        form.parse(req, function (err, fields, files) {
            if (err) {
                console.log('文件上传错误！')
            }
            //fields是常温的表单字段数组，files是上传的文件列表
            console.log('req:' + req)
            var cover = path.parse(files.cover.path).base
            var tableName = req.body.tableName
            var type = req.body.type
            var title = req.body.title
            var article = fields.article
            var userTel = req.user.userTel
            var insertTime = new Date()
            var sceneryId = req.body.sceneryId
            var cityName = req.body.cityName
            var dayNum = req.body.dayNum
            var season = req.body.season
            var crowdType = req.body.crowdType
            var sqlstr = ''
            switch (tableName) {
                case 'scenerystrategy': sqlstr = "insert into scenerystrategy (type,title,cover,ssInfo,sceneryId,userId,ssTime) values (?,?,?,?,?,(select userId from users where tel = ?),?)"; var ins = [type, title, cover, article, sceneryId, userTel, insertTime]; break;
                case 'foodstrategy': sqlstr = 'insert into foodstrategy (type,title,cover,fsInfo,cityName,userId,fsTime) values (?,?,?,?,?,(select userId from users where tel = ?),?)'; var ins = [type, title, cover, article, cityName, userTel, insertTime]; break;
                case 'personalrow': sqlstr = 'insert into personalrow (type,title,cover,dayNum,season,crowdType,prInfo,userId,prTime) values (?,?,?,?,?,?,?,(select userId from users where tel = ?),?)'; var ins = [type, title, cover, dayNum, season, crowdType, article, userTel, insertTime]; break;
                default: console.log('没有该类型的表');
            }
            console.log('ins:'+ins)
            userDAO.commitArticle(sqlstr, ins, function (err, results) {
                if (err) {
                    res.json({ code: 500, data: 0, msg: '攻略上传失败' })
                } else {
                    if (results.affectedRows == 0) {
                        res.json({ code: 200, data: 0, msg: '攻略上传失败！' })
                    } else {
                        res.json({ code: 200, data: 1, msg: '攻略上传成功' })
                    }
                }
            })
        })
    },
    /**修改攻略(标题，内容，修改时间) */
    updateArticle: function (req, res) {
        var form = new formidable.IncomingForm()      //创建上传表单对象
        form.uploadDir = path.join(__dirname, '../public/coverPic')           //设置上传文件的路径
        form.keepExtensions = true                      //设置保留上传文件的扩展名
        form.parse(req, function (err, fields, files) {
            if (err) {
                console.log('文件上传错误！')
            }
            //fields是常温的表单字段数组，files是上传的文件列表
            var cover = path.parse(files.cover.path).base
            var strategyId = fields.strategyId
            var tableName = fields.tableName
            var type = fields.type
            var title = fields.title
            var article = fields.article
            var updTime = new Date()
            var cityName = fields.cityName
            var dayNum = fields.dayNum
            var season = fields.season
            var crowdType = fields.crowdType

            var sqlstr = ''
            switch (tableName) {
                case 'scenerystrategy': sqlstr = 'update scenerystrategy set type = ?, title = ?,cover = ?,ssInfo = ?,ssTime = ? where strategyId = ?'; var upd = [type, title, cover, article, updTime, strategyId]; break;
                case 'foodstrategy': sqlstr = 'update foodstrategy set type = ?, title = ?,cover = ?,fsInfo = ?,cityName = ?,fsTime = ? where strategyId = ?'; var upd = [type, title, cover, article, cityName, updTime, strategyId]; break;
                case 'personalrow': sqlstr = 'update personalrow set type = ?, title = ?,cover = ?,dayNum = ?,season = ?,crowdType = ?,prInfo = ?,prTime = ? where strategyId = ?'; var upd = [type, title, cover, dayNum, season, crowdType, article, updTime, strategyId]; break;
                default: console.log('没有该类型的表');
            }

            userDAO.updateArticle(sqlstr, upd, function (err, results) {
                if (err) {
                    res.json({ code: 500, data: 0, msg: '攻略修改失败' })
                } else {
                    if (results.affectedRows == 0) {
                        res.json({ code: 200, data: 0, msg: '攻略修改失败！' })
                    } else {
                        res.json({ code: 200, data: 1, msg: '攻略修改成功' })
                    }
                }
            })
        })
    },
    /**删除攻略 */
    delArticle: function (req, res) {
        var tableName = req.body.tableName
        var strategyId = req.body.strategyId
        var sqlstr = ''
        switch (tableName) {
            case 'scenerystrategy': sqlstr = 'delete from scenerystrategy where strategyId = ?'; break;
            case 'foodstrategy': sqlstr = 'delete from foodstrategy where strategyId = ?'; break;
            case 'personalrow': sqlstr = 'delete from personalrow where strategyId = ?'; break;
            default: console.log('没有该类型的表');
        }
        userDAO.delArticle(sqlstr, strategyId, function (err, results) {
            if (err) {
                res.json({ code: 500, data: 0, msg: tableName + '攻略删除失败' })
            } else {
                if (results.affectedRows == 0) {
                    res.json({ code: 200, data: 0, msg: '攻略删除失败！' })
                } else {
                    res.json({ code: 200, data: 1, msg: tableName + '攻略删除成功' })
                }
            }
        })
    },
    /**景点收藏查询 */
    /**攻略收藏查询 */
    collectArticle: function (req, res) {
        var userTel = req.user.userTel
        userDAO.collectArticle(userTel, function (err, results) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '收藏攻略查询失败' })
            } else {
                if (results == null || results.length == 0) {
                    res.json({ code: 200, data: 0, msg: '暂无收藏' })
                } else {
                    res.json({ code: 200, data: results, msg: '收藏攻略查询成功' })
                }
            }
        })
    },
    /**关注列表添加 */
    addFriends: function (req, res) {
        var userTel = req.user.userTel
        var relationUserId = req.body.relationUserId
        userDAO.addFriends(userTel, relationUserId, function (err, results) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '关联用户添加失败' })
            } else {
                if (results == null || results.length == 0) {
                    res.json({ code: 200, data: 0, msg: '关联用户添加失败' })
                } else {
                    res.json({ code: 200, data: results, msg: '关联用户添加成功' })
                }
            }
        })
    },
    /**关注列表查询 */
    /**粉丝列表查询 */
    friends: function (req, res) {
        var userTel = req.user.userTel
        userDAO.friends(userTel, function (err, results) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '关联用户查询失败' })
            } else {
                if (results == null || results.length == 0) {
                    res.json({ code: 200, data: 0, msg: '关联用户查询失败' })
                } else {
                    res.json({ code: 200, data: results, msg: '关联用户查询成功' })
                }
            }
        })
    },
    /**查询用户评论 */
    comments: function (req, res) {
        var userTel = req.user.userTel
        userDAO.comments(userTel, function (err, results) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '用户评论查询失败' })
            } else {
                if (results == null || results.length == 0) {
                    res.json({ code: 200, data: 0, msg: '暂无用户评论' })
                } else {
                    res.json({ code: 200, data: results, msg: '用户评论查询成功' })
                }
            }
        })
    },
    /**查询用户评论回复 */
    replys: function (req, res) {
        var userTel = req.user.userTel
        userDAO.replys(userTel, function (err, results) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '用户评论回复查询失败' })
            } else {
                if (results == null || results.length == 0) {
                    res.json({ code: 200, data: 0, msg: '暂无用户回复评论' })
                } else {
                    res.json({ code: 200, data: results, msg: '用户评论回复查询成功' })
                }
            }
        })
    },
    /**系统消息查询 */
    sysMessage: function (req, res) {
        var userTel = req.user.userTel
        userDAO.sysMessage(userTel, function (err, results) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '系统消息查询失败' })
            } else {
                if (results == null || results.length == 0) {
                    res.json({ code: 200, data: 0, msg: '暂无系统消息' })
                } else {
                    res.json({ code: 200, data: results, msg: '系统消息查询成功' })
                }
            }
        })
    }
}
module.exports = userController