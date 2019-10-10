var aimDAO = require('../models/aimDAO')

var aimController = {
    hotAim: function (req, res) {
        aimDAO.hotAim(function (err, results) {
            console.log(results)
            if (err) {
                res.json({ code: 500,data:0, msg: '热门目的地查询失败！' })
            } else {
                if(results==null||results.length==0){
                    res.json({code:200,data:0,msg:'未查询到热门目的地'})   
                   }else{
                       res.json({ code: 200, data: results, msg: '热门目的地查询成功' })
                   }
            }
        })
    },
    season: function (req, res) {
        var mon=new Date().getMonth()+1 ;//获取当前月份
        var month={before:mon-1,next:mon+1}
        // console.log(mon)
        aimDAO.season(month,function (err, results) {
            console.log(results)
            if (err) {
                res.json({ code: 500,data:0, msg: '当季目的地查询失败！' })
            } else {
                if(results==null||results.length==0){
                    res.json({code:200,data:0,msg:'未查询到当季目的地'})   
                   }else{
                       res.json({ code: 200, data: results, msg: '当季目的地查询成功' })
                   }
            }
        })
    },
    // aimDetail: function (req, res) {
    //     var scenery={sceneryAddress:req.params.sceneryAddress}
    //     aimDAO.aimDetail(scenery,function(err,results){
    //         console.log(results)
    //         if (err) {
    //             res.json({ code: 500, msg: '目的地详情查询失败！' })
    //         } else {
    //             res.json({ code: 200, data: results, msg: '目的地详情查询成功！' })
    //         }
    //     })

    // },
    aimScenic: function (req, res) {
        var hotScenery = { sceneryName: '%' + req.query.sceneryName + '%' }
        aimDAO.aimScenic(hotScenery, function (err, results) {
            console.log(results)
            if (err) {
                res.json({ code: 500,data:0, msg: '热门景点列表查询失败！' })
            } else {
                if(results==null||results.length==0){
                    res.json({code:200,data:0,msg:'未查询到热门景点'})   
                   }else{
                       res.json({ code: 200, data: results, msg: '热门景点列表查询成功' })
                   }
            }
        })
    },
    aimScenicDetail: function (req, res) {
        var scenery = { sceneryName: '%' + req.query.sceneryName + '%' }
        aimDAO.aimScenicDetail(scenery, function (err, results) {
            console.log(results)
            if (err) {
                res.json({ code: 500,data:0, msg: '景点详情查询失败！' })
            } else {
                if(results==null||results.length==0){
                    res.json({code:200,data:0,msg:'未查询到景点详情'})   
                   }else{
                       res.json({ code: 200, data: results, msg: '景点详情查询成功' })
                   }
                   
            }
        })
    }
}

module.exports = aimController