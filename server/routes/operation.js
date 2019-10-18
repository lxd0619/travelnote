var express = require('express');
var router = express.Router();
var operationController=require('../controllers/operationController')
var passport=require('passport');

/**点赞 */
router.post('/like',passport.authenticate('jwt',{session:false}),function(req,res,next){
    operationController.Like(req,res)
})
/**收藏*/
router.post('/collect',passport.authenticate('jwt',{session:false}),function(req,res,next){
    operationController.Collect(req,res)
})

/*评论和取消评论*/
// router.put('/discuss',passport.authenticate('jwt',{session:false}),function(req,res,next){
//     operationController.Discuss(req,res)
// })
// 插入评论
router.put('/adddiscuss',passport.authenticate('jwt',{session:false}),function(req,res,next){
    operationController.AddDiscuss(req,res)
})
//删除评论
router.post('/deldiscuss',passport.authenticate('jwt',{session:false}),function(req,res,next){
    operationController.DelDiscuss(req,res)
})
//筛选评论
router.post('/seldiscuss',passport.authenticate('jwt',{session:false}),function(req,res,next){
    operationController.SelDiscuss(req,res)
})



// 回复和取消回复
// router.put('/reply',passport.authenticate('jwt',{session:false}),function(req,res,next){
//     operationController.Reply(req,res)
// })
// 添加回复
// router.put('/addreply',passport.authenticate('jwt',{session:false}),function(req,res,next){
//     operationController.AddReply(req,res)
// })
// // 删除回复
// router.post('/delreply',passport.authenticate('jwt',{session:false}),function(req,res,next){
//     operationController.DelReply(req,res)
// })
// // 筛选回复
// router.post('/selreply',passport.authenticate('jwt',{session:false}),function(req,res,next){
//     operationController.SelReply(req,res)
// })


/*举报 */
router.post('/report',passport.authenticate('jwt',{session:false}),function(req,res,next){
    operationController.Report(req,res)
})
/*普通攻略查询 */
router.post('/normalstrategy',function(req,res,next){
    operationController.normalStrategy(req,res)
})
/*热门攻略 */
router.post('/hotstrategy',function(req,res,next){
    operationController.hotStrategy(req,res)
})

/*攻略详情+本攻略全部评论+本攻略全部回复 */
router.post('/strategydetail',function(req,res,next){
    operationController.strategyDetail(req,res)
})
  module.exports=router