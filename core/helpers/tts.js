var pico = require('picotts')

var exec = require('child_process').exec

module.exports.speak = function (text, lang, callback) {

	// This blocks allows to call speak without lang and callback. No lang defaults to English
	if(typeof lang == 'function') {
		callback = lang
		lang = "en-US"
	}

	// Valid languages: de-DE en-US en-GB es-ES fr-FR it-IT

	lang = lang || "en-US"
	text = text || "No text"

	if(process.platform == 'darwin')
		exec('say ' + text, callback)
	else
		pico.say(text, lang, callback)

};
