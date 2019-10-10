var manageDAO = require('../models/manageDAO')

var manageController = {
    /**未审核攻、举报、正常景点攻略列表查询*/
    List: function (req, res) {
        if (req.user.role == 0) {
            res.json({ code: 500, data: 0, message: '没有权限' })
        } else {
            var tableName = req.body.tableName
            var ssStatus = req.body.ssStatus
            var sql = ''
            switch (tableName) {
                case 'foodstrategy': sql = 'select * from foodstrategy where fsStatus=?'; break;
                case 'scenerystrategy': sql = 'select * from scenerystrategy where ssStatus=?'; break;
                case 'personalrow': sql = 'select * from personalrow where prStatus=?'; break;
            }
            manageDAO.List(sql, ssStatus, function (err, results) {
                if (err) {
                    res.json({ code: 500, data: 0, msg: '数据查询错误' + err.message })
                } else {
                    if (results == null || results.length == 0) {
                        res.json({ code: 200, data: 0, msg: '暂无数据' })
                    } else {
                        res.json({ code: 200, data: results, msg: '数据查询成功' })
                    }
                }
            })
        }

    },

    /*景点攻略状态修改*/
    Status: function (req, res) {
        if (req.user.role == 0) {
            res.json({ code: 500, data: 0, message: '没有权限' })
        } else {
            var tableName = req.body.tableName
            var ssStatus = req.body.ssStatus
            var strategyId = req.body.strategyId
            var sqlArguments = [ssStatus, strategyId]
            var sql = ''
            switch (tableName) {
                case 'foodstrategy': sql = 'update foodstrategy set fsStatus=? where strategyId=?'; break;
                case 'scenerystrategy': sql = 'update scenerystrategy set ssStatus=? where strategyId=?'; break;
                case 'personalrow': sql = 'update personalrow set prStatus=? where strategyId=?'; break;
            }
            manageDAO.Status(sql,sqlArguments, function (err, results) {
                if (err) {
                    res.json({ code: 500, data: 0, msg: '状态修改错误' })
                } else {
                    if (results.affectedRows == 0) {
                        res.json({ code: 200, data: 0, msg: '状态修改失败' })
                    } else {
                        res.json({ code: 200, data: 1, msg: '状态修改成功' })
                    }
                }
            })
        }
    },
    /**用户查询 */
    usersSelect: function (req, res) {
        if (req.user.role == 0) {
            res.json({ code: 500, data: 0, message: '没有权限' })
        } else {
            manageDAO.usersSelect(function (err, results) {
                if (err) {
                    res.json({ code: 500, data:0, msg: '用户查询错误' })
                } else {
                    if (results == null || results.length == 0) {
                        res.json({ code: 200, data: 0, msg: '暂无用户数据' })
                    } else {
                        res.json({ code: 200, data: results, msg: '用户查询成功!' })
                    }
                }
            })
        }
    },
    /**向用户发出警告 */
    sendMessage: function (req, res) {
        if (req.user.role == 0) {
            res.json({ code: 500, data: 0, message: '没有权限' })
        } else {
            var message = req.body.sysMsgContent
            var userId = req.body.userId
            var time = new Date()
            var sqlArguments = [message, userId, time]
            manageDAO.sendMessage(sqlArguments, function (err, results) {
                if (err) {
                    res.json({ code: 500,data:0, msg: '数据库错误，信息发送失败' })
                } else {
                    if (results.affectedRows == 0) {
                        res.json({ code: 200, data: 0, msg: '信息发送失败' })
                    } else {
                        res.json({ code: 200, data: 1, msg: '信息发送成功' })
                    }
                }
            })
        }
    },
    /**用户状态修改 禁言、封号、正常 */
    userStatus: function (req, res) {
        if (req.user.role == 0) {
            res.json({ code: 500, data: 0, message: '没有权限' })
        } else {
            var userId = req.body.userId
            var userStatus = req.body.userStatus
            var sqlArguments = [userStatus, userId]
            manageDAO.userStatus(sqlArguments, function (err, results) {
                if (err) {
                    res.json({ code: 500, data: 0, msg: '数据修改错误' })
                } else {
                    if (results.affectedRows == 0) {
                        res.json({ code: 200, data: 0, msg: '用户状态修改失败' })
                    } else {
                        res.json({ code: 200, data: 1, msg: '用户状态就该成功' })
                    }
                }
            })
        }
    }
}

module.exports = manageController