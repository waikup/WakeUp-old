//http://blekko.com/ws/music+/date+/json?p=0

var async = require('async');
var request = require('request');

module.exports = function (category, times, callback){

	request.get('http://blekko.com/ws/' + category + '+/date+/json?p=0', function (err, res, body){

		if(err){
			callback(err);
		} else {
			var body = JSON.parse(body);

			async.times(times, function (number, callback){

				var _new = body.RESULT[number];

				request.get('http://clipped.me/algorithm/clippedapi.php?url=' + _new.url, function (err, res, summed){

					if(err){
						callback(err);
					} else{
						callback(null, JSON.parse(summed));
					}

				});


			}, function (err, news){
				callback(err, news);
			});

		}

	});







	//http://clipped.me/algorithm/clippedapi.php?url=

};