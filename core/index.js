var start = function (){

	var PORT = 8888;
	require('./server').listen(PORT, function(){

  		console.log('Express server listening on port ' + PORT +' env: '+process.env.NODE_ENV);
	});
}

exports = module.exports = start