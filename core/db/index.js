var levelup = require('levelup'),
	path = require('path')

var db = levelup(path.join(__dirname, '../..', 'database'))

exports.getPlugins = function (cb){

	db.get('activePlugins', function (err, str) {

		if (!str) cb(null, [])
		else {

			var arr = JSON.parse(str)
			for (i in arr) arr[i] = 'plugin.'+arr[i]
			
			//TODO: use async here, find out why it crashed
			var result = []
			var i = 0;

			var stopityo = function (){
				
				cb(null, result)
			}

			var getityo = function (){

	
				if (arr[i]){
	
					db.get(arr[i], function (err, resa){

						if (err) {cb(err, null); return;}
						result.push(JSON.parse(resa))
						i++
						getityo()
					})
				}
				else stopityo()
			}

			getityo()
		}
		
	})
}

exports.db = db