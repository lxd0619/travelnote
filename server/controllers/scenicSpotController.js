var scenicSpotDAO = require('../models/scenicSpotDAO')

var scenicSpotController = {
    scenicSpotClassify: function(req, res) {
        var cityName = req.body.cityName
        scenicSpotDAO.scenicSpotClassify(cityName, function(err, results) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '分类查询失败' })
            } else {
                if (results == null || results.length == 0) {
                    res.json({ code: 200, data: 0, msg: '暂无数据' })
                } else {
                    res.json({ code: 200, data: results, msg: '分类查询成功' })
                }
            }
        })
    },
    viewstrategyClassify: function(req, res) {
        var cityName = req.body.cityName
        console.log(1, cityName)

        scenicSpotDAO.viewstrategyClassify(cityName, function(err, results) {
            if (err) {
                res.json({ code: 500, data: 0, msg: '分类查询失败' + err.message })
            } else {
                if (results == null || results.length == 0) {
                    res.json({ code: 200, data: 0, msg: '暂无数据' })
                } else {
                    res.json({ code: 200, data: results, msg: '分类查询成功' })
                }
            }
        })
    },

}

module.exports = scenicSpotController