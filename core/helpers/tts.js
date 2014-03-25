var pico = require('picotts')

var exec = require('child_process').exec

module.exports.speak = function (text, lang, callback) {

	// This blocks allows to call speak without lang and callback. No lang defaults to English

	// Valid languages: de-DE en-US en-GB es-ES fr-FR it-IT

	lang = lang || "en-US"
	text = text || "No text"

	// On Mac Users, uses say command to reproduce sound, speaker seam buggy. Temporal solution

	if(false && process.platform == 'darwin')
		exec('say ' + text, callback)
	else
		pico.say(text, lang, callback)
};