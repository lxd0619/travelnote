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
router.get('/terraceLine',function(req,res,next){
    lineController.terraceLine(req,res)
})
/**几日游路线筛选 *//**人群路线筛选 *//**季节路线筛选 */
router.post('/lineClassify',function(req,res,next){
    lineController.LineClassify(req,res)
})
// /**路线详情查询 */
// router.post('/lineDetail',function(req,res,next){
//     lineController.LineDetail(req,res)
// })
// // 查询攻略中全部评论
// router.post('/selectDiscuss',function(req,res,next){
//     lineController.selectDiscuss(req,res)
// })
// //查询某评论全部回复
// router.post('/selectReply',function(req,res,next){
//     lineController.selectReply(req,res)
// })

module.exports=router