var async = require('async');
var request = require('request');
var xml2js = require('xml2js').parseString;

var tts = require(__dirname + '/../../core/helpers/tts');

module.exports = function (attr, _callback){

	console.log('WEATHER SPEAKING')
	async.waterfall([

		function (callback){
			request.get('http://freegeoip.net/json/', function (err, res, body) {

				try{
				    var parsed = JSON.parse(body);
				    callback(null, parsed);
				}catch(e){
				    callback()
				}

			});
		},

		function (geoIp, callback){

			request.get('http://where.yahooapis.com/v1/places.q(\'' + geoIp.city + ', ' + geoIp.country_code + '\')?appid=axysWTfV34GRxAcSEzD4gbo3A0ImnM.Ztyuk8IFR_0FOyMLl0OML.Qz1xZPW35POuZ5gpIPYLMbO', function (err, res, body){

				xml2js(body, function (err, result){

					if(err) return callback(err);

					callback(null, geoIp, result['places'].place[0].woeid[0]);

				});

			});
			

		}, function (geoIp, woeid, callback){

			request.get('http://weather.yahooapis.com/forecastrss?w='+woeid+'&u=c', function (err, res, body){

				xml2js(body, function (err, result){

					if(err) return callback(err);
					
					callback(null, geoIp, result.rss.channel[0].item[0]['yweather:condition'][0]['$']);

				});

			});

		}

	], function (err, geoIp, weather){

		tts.speak('The weather forecast for ' + geoIp.city + ' is ' + weather.text + ' with temperatures arround '+ weather.temp + ' degrees', _callback);
	});

};

//
// http://weather.yahooapis.com/forecastrss?w=2502265
// 'http://where.yahooapis.com/v1/places.q(\'' + Madrid + '\')?appid=axysWTfV34GRxAcSEzD4gbo3A0ImnM.Ztyuk8IFR_0FOyMLl0OML.Qz1xZPW35POuZ5gpIPYLMbO'