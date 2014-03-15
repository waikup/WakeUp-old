	var Player = require('player');
	var http = require('http');

	module.exports = function (id, callback){

		// Does this, because the awesome module, player, doesn't works with redirections.

		http.get('http://api.soundcloud.com/tracks/' + id + '/stream?client_id=5a8edbed865ed2b31acf4d9720696e7f', function (res){

			var player = new Player(res.headers.location);

			player.play();

			player.on('playend',function(item){
				callback(null, item);
			});

			// event: on error
			player.on('error', function(err){
			    // when error occurs
			    callback(err);
			});

		});

	};