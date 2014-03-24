var db = require('../db'),
	async = require('async'),
	path = require('path')

var speaking = false

var trigger = function (start, end){

	if (!speaking){

		speaking = true
		if (start) start()
		db.getPlugins(function (err, result){

			if (!err) {

				console.log('STARTING. TRIGGERED!')
				async.mapSeries(result, function (pl, cb){

					var plugin = require(path.join(__dirname, '../..', 'plugins', pl.name))
					plugin(pl.attr, cb)

				}, function (err, finished){

					console.log(finished)
					speaking = false
					if (end) end()
				})
			}
		})	
	}
	else {

		end()
	}
}

exports = module.exports = trigger
