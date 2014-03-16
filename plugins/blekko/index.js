var tts = require(__dirname + '/../../core/helpers/tts');
var blekko = require(__dirname + '/blekko');
var async = require('async');

module.exports = function (category, number, summary, cb){
	
	blekko(category, number, function (err, news){

		async.mapSeries(news, function (_new, callback){
			
			if(_new){
				tts.speak(_new.title, 'en', function () {
					if(summary){
						async.mapSeries(_new.summary, function (sentence, callback){

							tts.speak(sentence, 'en', function () {

								callback();

							});

						}, function (){

							callback();

						});
					}

				});
			}	

		}, function (err){
			cb(err);
		});

	});

};

// Test code.
module.exports('popcorn', 5, true, function(err){
	console.log(err);
});