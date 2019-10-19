var DAO = require('./DAO')

var aimDAO = {
    hotAim: function (callback) {
        DAO('select distinct cityName from scenery order by likeNum desc limit 3', null, function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })

    },
    season: function (month,callback) {
        DAO('select distinct cityName,season from scenery where season between ? and ? order by likeNum desc limit 3', [month.before,month.next], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },

    // aimDetail: function (callback) {
    //     DAO('select sceneryAddress from scenery order by likeNum desc limit 1', null, function (err, results) {
    //         if (err) {
    //             callback(err, null)
    //         } else {
    //             callback(null, results)
    //         }
    //     })
    // },

    aimScenic: function (hotScenery,callback) {
        DAO('select sceneryName,likeNum from scenery where sceneryName like ? order by likeNum desc limit 3', [hotScenery.sceneryName], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    aimPersonalRow: function (strategy,callback) {
        DAO('select * from personalrow where personalrow.cityName like ? order by strategyId desc limit 6', [strategy.cityName], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    aimSceneryStrategy: function (strategy,callback) {
        DAO('select * from scenerystrategy where scenerystrategy.cityName like ? order by strategyId desc', [strategy.cityName], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    aimFoodStrategy: function (strategy,callback) {
        DAO('select * from foodstrategy where foodstrategy.cityName like ? order by strategyId desc limit 6', [strategy.cityName], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
}

module.exports = aimDAO