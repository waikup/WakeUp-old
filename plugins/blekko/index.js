var tts = require(__dirname + '/tts');

module.exports = function (){

	tts.speak('Retard alert. Retard alert', 'en', function () {
		console.log('bye');
	});

};