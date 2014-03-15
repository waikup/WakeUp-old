var Speaker = require('speaker');
var lame = require('lame');
var request = require("request");


module.exports.speak = function (text, lang, callback) {

	if(typeof lang == 'undefined' || !lang) lang = "en;"
	var platform = process.platform;
	var isWin32 = (platform == "win32");

	var url = "http://translate.google.com/translate_tts?tl="+lang+"&q=" + text;

	var decoder = new lame.Decoder();
	var speaker = new Speaker();
	var r = request({uri:url});
	var length = 5000;
	var timer;

	//request.get({uri : "http://translate.google.com/translate_tts?tl=en&q=hello%20world"}).pipe(new lame.Decoder()).pipe(new Speaker());
	r.on('complete', function(e) {
		length = e.socket.bytesRead/2;
		if(isWin32) {
			timer = setTimeout(function() {
				speaker.close();
				callback()
			}, length);
		}
	});

	speaker.on('close', function() {
		callback();
	});

	r.pipe(decoder).pipe(speaker);
};