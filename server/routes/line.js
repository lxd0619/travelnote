var express = require('express');
var router = express.Router();
var lineController=require('../controllers/lineController')
var passport=require('passport');

// ////line.js
// /**热门个性路线查询 */
// router.get('/hotLine',function(req,res,next){
//     lineController.hotLine(req,res)
// })
/**平台推荐路线查询 */
router.get('/platformrecommend',function(req,res,next){
    lineController.PlatFormRecommend(req,res)
})
/**几日游路线筛选 *//**人群路线筛选 *//**季节路线筛选 */
router.post('/lineclassify',function(req,res,next){
    lineController.LineClassify(req,res)
})


module.exports=router