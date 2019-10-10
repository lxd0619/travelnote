var DAO = require('./DAO')

var deliciousDAO = {
   
    DeliciousClassify: function (cityName,callback) {
   DAO('select * from foodstrategy where cityName = ?' ,cityName,function(err,results){
         if(err){
             callback(err,null)
         }else{
             callback(null,results)
         }
     })
    },
  
}

module.exports = deliciousDAO