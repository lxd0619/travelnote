var express = require('express');
var router = express.Router();
var deliciousController=require('../controllers/deliciousController')
var passport=require('passport')


/**美食攻略分类筛选 */
router.post('/deliciousClassify',function(req,res,next){
    deliciousController.DeliciousClassify(req,res)
})

module.exports=router