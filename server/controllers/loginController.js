var loginDAO = require('../models/loginDAO')
var formidable = require('formidable')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

var loginController = {
    login: function (req, res) {
        var tel = req.body.tel.trim()
        var password = req.body.password
        var user = { userTel: tel, userPwd: password }
        if (tel.length == 0 || password == 0) {
            res.json({ code: 500, data: 0, msg: '用户名 密码不能为空' })
        } else {
            loginDAO.login(tel, function (err, results) {
                if (err) {
                    res.json({ code: 500, data: 0, msg: '数据库查询错误' })
                } else {
                    if (results == null || results.length == 0) {
                        res.json({ code: 200, data: 0, msg: '用户名错误' })
                    } else {
                        bcrypt.compare(user.userPwd, results[0].password, function (err, resPwd) {
                            if (resPwd) {
                                //记录登录成功后的token  expiresIn设置token有效时间
                                jwt.sign({ userTel: user.userTel, userId: results[0].userId, role: results[0].role }, 'privateKey', { expiresIn: 60 * 60 }, function (err, token) {
                                    //注意token的固定格式“Bearer ”前缀
                                    res.status(200).json({data:1, msg: '登录成功', token: 'Bearer ' + token })
                                });
                            } else {
                                res.status(200).json({data:0, msg: '密码错误，登录失败' })
                            }
                        })
                    }
                }
            })
        }

    },
    forgetPwd: function (req, res) {
        var newPwd = req.body.password
        var tel = req.body.tel
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(newPwd, salt, function (err, hash) {
                // hash是加密后的字符
                newPwd = hash
                loginDAO.forgetPwd(newPwd, tel, function (err, results) {
                    if (err) {
                        res.json({ code: 500, data: 0, msg: '修改密码错误' })
                    } else {
                        if (results.affectedRows == 0) {
                            res.json({ code: 200, data: 0, msg: '密码修改失败' })
                        } else {
                            res.json({ code: 200, data: 1, msg: '密码修改成功' })
                        }
                    }
                })
            });
        });
    }
}

module.exports = loginController