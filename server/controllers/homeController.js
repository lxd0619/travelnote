var homeDAO = require('../models/homeDAO')

var homeController = {
    search: function (req, res) {
        var keyWord = req.body.keyWord
        homeDAO.search(keyWord, function (err, results) {
            if (err) {
                res.json({ code: 500,data:0, msg: '关键词查询失败' })
                console.log(err)
            } else {
                if(results==null||results.length==0){
                    res.json({code:200,data:0,msg:'查询失败'})
                }else{
                    res.json({ code: 200, data: results, msg: '关键词查询成功' })
                }
                
            }
        })
    },
    // collection: function (req, res) {
    //     console.log(123)
    //     var strategyId = req.body.strategyId
    //     var strategyType = req.body.strategyType
    //     var sceneryId = req.body.sceneryId
    //     var userId = req.body.userId
    //     var sqlArguments=[strategyId,strategyType,sceneryId,userId]
    //     homeDAO.collection(sqlArguments,function(err,results){
    //         if(err){
    //             res.json({code:500,data:0,msg:'数据收藏错误'+err.message})
    //         }else{
    //             if(results.affectedRows==0){
    //                 res.json({code:200,data:0,msg:'收藏失败'})
    //             }else{
    //                 res.json({code:200,data:1,msg:'收藏成功'})
    //             }
    //         }
    //     })
    // }
}
module.exports = homeController