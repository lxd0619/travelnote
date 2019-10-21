var express = require('express');
var router = express.Router();
var homeController=require('../controllers/homeController')
var passport=require('passport')
////home
/**搜索 */
router.post('/search',function(req,res,next){
    homeController.search(req,res)
})

/**收藏 */
router.post('/collection',passport.authenticate('jwt',{session:false}),function(req,res,next){
    console.log(1)
    homeController.collection(req,res)
})
module.exports=router