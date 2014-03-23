var db = require('../db'),
	trigger = require('../trigger')

var alarms = []

var getDateString = function (){

	var d = new Date()
	var h = d.getHours()
	var m = d.getMinutes()

	var str = ((h<10) ? '0':'')+h+':'+((m<10) ? '0':'')+m
	return str
}
var timetick = function (){

	var date = getDateString()

	for (var i in alarms){

		var alarm = alarms[i]
		
		if (alarm == date){

			trigger()
			alarms.pop(i)
		}
		else if (date == "00:00"){

			fetchAlarm()
		}
	}
}

var init = function (){

	if (alarms.length == 0) fetchAlarm()

	setInterval(timetick, 1*1000);
	
}

var fetchAlarm = function (cb){

	alarms = []
	db.db.get('time', function (err, t){

		if (!err && t){

			alarms.push(t)
			console.log('NEW ALARM')
			if (cb) cb(t)
		}
	})
}

exports = module.exports = init
exports.fetchAlarm = fetchAlarm