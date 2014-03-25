var say = require('say')
var request = require("request");

var exec = require('child_process').exec;

module.exports.speak = function (text, voice, callback) {

	// This blocks allows to call speak without lang and callback. No lang defaults to English

	if(typeof voice == 'function'){
		callback = voice;
		voice = "Alex"
	} else {
		voice = voice || "Alex"
	}

	if(!callback){
		callback = function (){
			return true;
		}
	}
	


	// On Mac Users, uses say command to reproduce sound, speaker seam buggy. Temporal solution
	if(text){
		say.speak('Alex', text, callback);
	}

};