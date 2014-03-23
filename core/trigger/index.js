var db = require('../db'),
	async = require('async'),
	path = require('path')

var trigger = function (){

	db.getPlugins(function (err, result){

		if (!err) {

			async.mapSeries(result, function (pl, cb){
				
				var plugin = require(path.join(__dirname, '../..', 'plugins', pl.name))
				plugin(pl.attr, cb)

			}, function (err, finished){

				console.log(finished)
			})
		}
	})	
}

exports = module.exports = trigger