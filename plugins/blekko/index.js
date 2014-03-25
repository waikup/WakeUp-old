var tts = require(__dirname + '/../../core/helpers/tts');
var blekko = require(__dirname + '/blekko');
var async = require('async');

module.exports = exports = function (attr, _cb){
	
	console.log('NEWS SPEAKING')
	if (!attr.category || !attr.number) {
		var err = new Error("No attributes")
		if (_cb) _cb(err)
		return
	}

	blekko(attr.category, attr.number, function (err, news){

		async.mapSeries(news, function (_new, callback){
			
			if(!_new) return

			tts.speak(_new.title, function () {
				if(/*attr.summary*/true){
					async.mapSeries(_new.summary, function (sentence, callback){

						tts.speak(sentence, "en-US", callback);

					}, callback);
				}

			});

		}, _cb);
	})
}