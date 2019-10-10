var express = require('express');
var router = express.Router();
var registController=require('../controllers/registController')

/////regist.js

// router.post('/telCheck',function(req,res,next){
  
// })
/*注册 添加用户*/
router.post('/regist',function(req,res,next){
    registController.regist(req,res)
})
/*手机短信验证*//**手机号码查询*/
router.post('/getVode', function (req, res, next) {
    registController.telCheck(req,res)
  })

  module.exports=router