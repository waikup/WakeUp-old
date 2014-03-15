exports.redirect = function (req, res){

	res.redirect('/app')
}

exports.api = function (req, res){

	res.send('Hallo')
}