var tts = require(__dirname + '/tts');
var blekko = require(__dirname + '/blekko');
var async = require('async');

module.exports = function (category, number, summary){
	
	blekko(category, number, function (err, news){

		async.mapSeries(news, function (_new, callback){

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

		}, function (err){
			callback(err);
		});

	});

};