var fs = require('fs'),
	path = require('path')

exports.redirect = function (req, res){

	res.redirect('/app')
}

exports.api = function (req, res){

	res.send('Hallo')
}

//GET all active plugins and their configuration
exports.getPlugins = function (req, res){


}

//GET list of all available plugins in plugins directory
exports.listPlugins = function (req, res){


}

//GET config folder of a given plugin
exports.pluginStatic = function (req, res){

	var plugin = req.params.name,
		fpath = req.params[0]

	if (path == 'css/default.css'){

		res.sendfile(path.join(__dirname, '..', '..', 'app/css/default.css'))
	}
	else {

		var filepath = path.join(__dirname, '..', '..', 'plugins', plugin, 'config', fpath)
		console.log(filepath)
		fs.exists(filepath, function (exists){

			if (!exists){

				res.send(404)
			}
			else {

				res.sendfile(filepath)
			}
		})
	}
}

//POST plugin to add it or edit it
exports.setPlugin = function (req, res){


}

//POST plugin order
exports.setOrder = function (req, res){


}

//POST hour to trigger thing
exports.setHour = function (req, res){


}