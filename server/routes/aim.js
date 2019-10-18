var express = require('express');
var router = express.Router();
var aimController=require('../controllers/aimController')
////aim.js
/**热门目的地查询 */
router.get('/hotAim',function(req,res,next){
    aimController.hotAim(req,res)
})
/**当季目的地查询 */
router.get('/season',function(req,res,next){
    aimController.season(req,res)
})

/**目的地详情查询  待定中.........*/
// router.get('/aimDetail',function(req,res,next){
//     aimController.aimDetail(req,res)
// })


/**热门景点列表查询 */
router.get('/aimScenic',function(req,res,next){
    aimController.aimScenic(req,res)
})
/**路线详情 */
router.post('/aimpersonalrow',function(req,res,next){
    aimController.aimPersonalRow(req,res)
})
/**景点详情 */
router.post('/aimscenerystrategy',function(req,res,next){
    aimController.aimSceneryStrategy(req,res)
})

module.exports=router




