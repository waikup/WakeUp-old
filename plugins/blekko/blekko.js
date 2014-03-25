//http://blekko.com/ws/music+/date+/json?p=0

var async = require('async');
var request = require('request');

module.exports = function (tag, times, callback){

	request.get('http://blekko.com/ws/' + tag + '+/date+/json?p=0', function (err, res, body){

		if(err) return callback(err);

		var body = JSON.parse(body);

		async.times(times, function (number, callback){

			var _new = body.RESULT[number];

			request.get('http://clipped.me/algorithm/clippedapi.php?url=' + _new.url, function (err, res, summed){

				if(err || !summed) return callback(err);

			    try{
			        var parsed = JSON.parse(summed);
			        callback(null, parsed);
			    }catch(e){
			    	callback()
			    }

			});

		}, callback);

	});

	//http://clipped.me/algorithm/clippedapi.php?url=
};