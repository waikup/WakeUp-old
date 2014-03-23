var start = function () {

	var PORT = 8888

	require('./server').listen(PORT, function() {

  		console.log('Express server listening on port ' + PORT +' env: '+process.env.NODE_ENV);
	})

	require('./trigger')()
}

exports = module.exports = start