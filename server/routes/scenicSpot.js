var express = require('express');
var router = express.Router();
var scenicSpotController = require('../controllers/scenicSpotController')
var passport = require('passport')


/**景点分类筛选 */
router.post('/scenicSpotClassify', function(req, res, next) {
        scenicSpotController.scenicSpotClassify(req, res)
    })
    /**景点攻略分类筛选 */
router.post('/viewstrategyClassify', function(req, res, next) {
    scenicSpotController.viewstrategyClassify(req, res)
})
module.exports = router