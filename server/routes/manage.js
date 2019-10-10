var express = require('express');
var router = express.Router();
var manageController = require('../controllers/manageController')
var passport=require('passport')

////manage.js
/**未审核攻、举报、正常景点攻略列表查询*/
/**未审核攻、举报、正常美食攻略列表查询*/
/**未审核攻、举报、正常个性路线攻略列表查询*/
router.post('/List',passport.authenticate('jwt',{session:false}), function (req, res, next) {
    manageController.List(req, res)
})
/*景点攻略状态修改*/
/*美食攻略状态修改*/
/*个性路线攻略状态修改*/
router.post('/Status',passport.authenticate('jwt',{session:false}), function (req, res, next) {
    manageController.Status(req, res)
})
/**用户查询 */
router.post('/usersSelect',passport.authenticate('jwt',{session:false}), function (req, res, next) {
    manageController.usersSelect(req, res)
})
/**向用户发出警告 */
router.post('/sendMessage',passport.authenticate('jwt',{session:false}), function (req, res, next) {
    manageController.sendMessage(req, res)
})
/**用户状态修改 禁言、封号、正常 */
router.post('/userStatus',passport.authenticate('jwt',{session:false}), function (req, res, next) {
    manageController.userStatus(req, res)
})

module.exports = router