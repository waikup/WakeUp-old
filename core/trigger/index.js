var db = require('../db'),
	async = require('async')

var trigger = function (){

	db.getPlugins(function (err, result){

		if (!err) {

			async.mapSeries(result, function (pl, cb){

				console.log(pl)
				cb(null, pl)

			}, function (err, finished){

				console.log(finished)
			})
		}
	})	
}

exports = module.exports = trigger