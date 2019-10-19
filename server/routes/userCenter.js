var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
var passport=require('passport')

////users.js
/**根据Id查询用户信息*/
router.get('/getUserInfo',passport.authenticate('jwt',{session:false}), function (req, res, next) {
    userController.getUserInfo(req, res)
})
/**用户修改个人信息 */
router.post('/updateUser',passport.authenticate('jwt',{session:false}), function (req, res, next) {
    userController.updateUser(req, res)
})
/**修改用户手机号 */
router.post('/updataTel',passport.authenticate('jwt',{session:false}), function (req, res, next) {
    userController.updataTel(req, res)
})
/**上传头像 */
router.post('/headPic', passport.authenticate('jwt',{session:false}),function (req, res, next) {
    userController.headPic(req, res)
})
/**个人攻略列表列表 */
router.post('/userArticle',passport.authenticate('jwt',{session:false}), function (req, res, next) {
    userController.userArticle(req, res)
})

/**上传攻略(接收富文本框上传的图片) */
router.post('/uploadArticle',passport.authenticate('jwt',{session:false}), function (req, res, next) {
    userController.uploadArticle(req, res)
});
/**上传攻略(保存富文本框提交内容) */
router.post('/commitArticle',passport.authenticate('jwt',{session:false}), function (req, res, next) {
    userController.commitArticle(req, res)
});

/**修改攻略 */
router.post('/updateArticle',passport.authenticate('jwt',{session:false}), function (req, res, next) {
    userController.updateArticle(req, res)
})
/**删除攻略 */
router.post('/delArticle',passport.authenticate('jwt',{session:false}), function (req, res, next) {
    userController.delArticle(req, res)
})
/**景点收藏查询 */
/**攻略收藏查询 */
router.post('/collectArticle',passport.authenticate('jwt',{session:false}), function (req, res, next) {
    userController.collectArticle(req, res)
})
/**关注、粉丝列表添加 */
router.post('/addFriends',passport.authenticate('jwt',{session:false}), function (req, res, next) {
    userController.addFriends(req, res)
})
/**粉丝列表查询 */
router.post('/fans',passport.authenticate('jwt',{session:false}), function (req, res, next) {
    userController.fans(req, res)
})
/**关注列表查询 */
router.post('/attentions',passport.authenticate('jwt',{session:false}), function (req, res, next) {
    userController.attentions(req, res)
})
/**查询用户评论 */
router.post('/comments',passport.authenticate('jwt',{session:false}), function (req, res, next) {
    userController.comments(req, res)
})
/**查询用户评论回复 */
router.post('/replys', passport.authenticate('jwt',{session:false}),function (req, res, next) {
    userController.replys(req, res)
})
/**系统消息查询 */
router.post('/sysMessage', passport.authenticate('jwt',{session:false}),function (req, res, next) {
    userController.sysMessage(req, res)
})
router.post('/sysMessageNum', passport.authenticate('jwt',{session:false}),function (req, res, next) {
    userController.sysMessageNum(req, res)
})
router.post('/sysMessage_change', passport.authenticate('jwt',{session:false}),function (req, res, next) {
    userController.sysMessage_change(req, res)
})


module.exports = router;