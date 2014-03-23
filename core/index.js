var start = function () {

	var PORT = 8888

	// http server up
	require('./server').listen(PORT, function() {

  		console.log('Express server listening on port ' + PORT +' env: '+process.env.NODE_ENV);
	})

	// alarm watcher up
	require('./alarm')()
}

exports = module.exports = start