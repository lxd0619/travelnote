var DAO = require('./DAO')

var scenicSpotDAO = {

    scenicSpotClassify: function(cityName, callback) {
        DAO('select sceneryName,sceneryInfo,sceneryAddress,sceneryPic,from scenery join scenerystrategy on scenery.sceneryId=scenerystrategy.sceneryId where ssStatus=0 and cityName=?', cityName, function(err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    viewstrategyClassify: function(cityName, callback) {
        console.log(cityName)
        DAO('select * from scenerystrategy where cityName like "%+?+%"', cityName, function(err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },

}

module.exports = scenicSpotDAO