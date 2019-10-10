var lineDAO = require('../models/lineDAO')

var lineController = {
    // hotLine: function (req, res) {
    //     lineDAO.hotLine(function (err, results) {
    //         if (err) {
    //             res.json({ code: 500, data: results, msg: '热门个性路线查询失败！' })
    //         } else {
    //             if (results == null || results.length == 0) {
    //                 res.json({ code: 200, data: results, msg: '未查询到热门个性路线' })
    //             } else {
    //                 res.json({ code: 200, data: results, msg: '热门个性路线查询成功' })
    //             }
    //         }
    //     })
    // },
    terraceLine: function (req, res) {
        lineDAO.terraceLine(function (err, results) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '平台推荐路线查询失败！' })
            } else {
                if (results == null || results.length == 0) {
                    res.json({ code: 200, data: 0, msg: '未查询到平台推荐路线' })
                } else {
                    res.json({ code: 200, data: results, msg: '平台推荐路线查询成功' })
                }
            }
        })
    },
    LineClassify: function (req, res) {
        var lineInfo = { lineClass: req.body.lineClass, lineType: req.body.lineType }
        lineDAO.LineClassify(lineInfo, function (err, results) {
            // console.log(results)
            if (err) {
                res.json({ code: 500, data: 0, msg: '路线筛选失败！' })
            } else {
                if (results == null || results.length == 0) {
                    res.json({ code: 200, data: 0, msg: '未查询到路线筛选' })
                } else {
                    res.json({ code: 200, data: results, msg: '路线筛选查询成功' })
                }
            }
        })
    },
    // LineDetail: function (req, res) {
    //     var lineInfo = { strategyId: req.body.strategyId }
    //     lineDAO.LineDetail(lineInfo, function (err, results) {
    //         // console.log(results)
    //         if (err) {
    //             res.json({ code: 500, data: results, msg: '路线攻略详情查询失败！' })
    //         } else {
    //             if (results == null || results.length == 0) {
    //                 res.json({ code: 200, data: results, msg: '未查询到路线攻略详情' })
    //             } else {
    //                 res.json({ code: 200, data: results, msg: '路线攻略详情查询成功' })
    //             }
    //         }
    //     })
    // },
    // selectDiscuss: function (req, res) {
    //     var DiscussInfo = {
    //         strategyId: req.body.strategyId,
    //         strategyType: req.body.strategyType
    //     }
    //     console.log(DiscussInfo)
    //     lineDAO.selectDiscuss(DiscussInfo, function (err, results) {
    //         if (err) {
    //             res.json({ code: 500, data: results, msg: '查询评论失败！' })
    //         } else {
    //             if (results == null || results.length == 0) {
    //                 res.json({ code: 200, data: results, msg: '未查询到数据，评论为空' })
    //             } else {
    //                 res.json({ code: 200, data: results, msg: '评论查询成功' })
    //             }
    //         }
    //     })
    // },
    // selectReply: function (req, res) {
    //     var replyInfo = { commentId: req.body.commentId }
    //     lineDAO.selectReply(replyInfo, function (err, results) {
    //         if (err) {
    //             res.json({ code: 500, data: results, msg: '查询评论失败！' })
    //         } else {
    //             if (results == null || results.length == 0) {
    //                 res.json({ code: 200, data: results, msg: '未查询到数据，回复为空' })
    //             } else {
    //                 res.json({ code: 200, data: results, msg: '回复查询成功' })
    //             }
    //         }
    //     })
    // },
}

module.exports = lineController