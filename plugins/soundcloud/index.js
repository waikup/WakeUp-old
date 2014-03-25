var Player = require('player'),
	http = require('http')

module.exports = function (attr, callback) {

	console.log('SOUNDCLOUD SPEAKING')
	// Does this, because the awesome module, player, doesn't work with redirections.
	if (!attr.id) {
		if (cb) cb(new Error("No attributes"))
		return
	}

	http.get('http://api.soundcloud.com/tracks/' + attr.id + '/stream?client_id=5a8edbed865ed2b31acf4d9720696e7f', function (res) {

		var player = new Player(res.headers.location)
		player.play()

		player.on('playend',function(item){
			callback(null, item);
		})

		// event: on error
		player.on('error', callback)
	})
	
}