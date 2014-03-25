var moment = require("moment")
var tts = require(__dirname + '/../../core/helpers/tts');

module.exports = exports = function (attr, cb){

	if (!attr.alarm) return cb()

	var d = moment(attr.alarm, "HH:mm")

	if (moment() >= d) d.add('days', 1)
	tts.speak("Your alarm is set for "+attr.alarm+" "+d.fromNow(), "en-US", cb)
}