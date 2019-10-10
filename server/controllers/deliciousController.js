var deliciousDAO = require('../models/deliciousDAO')

var deliciousController = {

    //按地区查询分类排序
    DeliciousClassify: function (req, res) {
        var cityName = req.body.cityName
        deliciousDAO.DeliciousClassify(cityName,function(err,results){
            if (err) {
                res.json({ code: 500,data:0, msg: '按地区查询失败' })
            } else {
                if(results==null||results.length==0){
                    res.json({code:200,data:0,msg:'按地区查询失败'})
                   }else{
                       res.json({ code: 200, data: results, msg: '按地区查询成功' })
                   }
            }
        })
    },
 
}

module.exports = deliciousController