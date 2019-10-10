var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController')

///////login.js
/*登录 */
router.post('/login',function(req,res,next){
    loginController.login(req,res)
})

/**忘记密码 */
router.post('/forgetPwd',function(req,res,next){
    loginController.forgetPwd(req,res)
})
module.exports=router