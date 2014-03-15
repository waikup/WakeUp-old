var fs = require('fs'),
	path = require('path'),
	ids = require('../helpers/ids')

var levelup = require('levelup'),
	async = require('async')

var db = levelup('./db')

exports.redirect = function (req, res) {

	res.redirect('/app')
}

exports.api = function (req, res) {

	res.send('Hallo')
}

//GET all active plugins and their configuration
exports.getPlugins = function (req, res) {

	db.get('activePlugins', function (err, str) {

		if (!str) res.send({active:[]})
		else {

			var arr = JSON.parse(str)
			for (i in arr) arr[i] = 'plugin.'+arr[i]
			
			//TODO: use async here, find out why it crashed
			var result = []
			var i = 0;

			var stopityo = function (){
				res.send({active:result})
			
			}

			var getityo = function (){

	
				if (arr[i]){
	
					db.get(arr[i], function (err, resa){

						if (err) {res.send(500, {}); return;}
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

//GET list of all available plugins in plugins directory
exports.listPlugins = function (req, res) {

	var fpath = path.join(__dirname, '..', '..', 'plugins')
	fs.readdir(fpath, function (err, files) {

		if (err) res.send(500, {})
		else if (files)
			res.send({'plugins':files})
	})
}

//GET config folder of a given plugin
exports.pluginStatic = function (req, res){

	var plugin = req.params.name,
		fpath = req.params[0]

	if (fpath == 'default.css')
		res.sendfile(path.join(__dirname, '..', '..', 'app/css/default.css'))
	else if (fpath == 'utils.js')
		res.sendfile(path.join(__dirname, '..', '..', 'app/js/utils.js'))
	else {

		var filepath = path.join(__dirname, '..', '..', 'plugins', plugin, 'config', fpath)
		fs.exists(filepath, function (exists){

			if (!exists)
				res.send(404, {})
			else 
				res.sendfile(filepath)
		})
	}
}

//POST plugin to add it or edit it
exports.setPlugin = function (req, res){

	if (req.params.uuid == 'new') {

		var uuid = ids()
		var attr = {}

		if (req.body) attr = req.body

		var plugin = {name:req.params.name, attr:attr, uuid:uuid}
		var filepath = path.join(__dirname, '..', '..', 'plugins', plugin.name)
		fs.exists(filepath, function (exists){

			if (!exists)
				res.send(404, {})
			else {

				db.put('plugin.'+uuid, JSON.stringify(plugin), function (err){

					if (err) res.send(500, {})
					else {

						db.get('activePlugins', function(err, str) {

							var arr = []
							if (!str) arr = []
							else arr = JSON.parse(str)

							arr.push(uuid)
							db.put('activePlugins', JSON.stringify(arr), function (err) {

								if (err) res.send(500, {})
								else
									res.send({plugin:plugin})
							})
							
						})
					}
				})
			}
		})

	}
	else {

		var uuid = req.params.uuid

		var attr = {}
		if (req.body) attr = req.body

		var plugin = {name:req.params.name, attr:attr, uuid:uuid}
		var filepath = path.join(__dirname, '..', '..', 'plugins', plugin.name)
		fs.exists(filepath, function (exists){

			if (!exists)
				res.send(404, {})
			else {

				db.put('plugin.'+uuid, JSON.stringify(plugin), function (err){

					if (err) res.send(500, {})
					else {

						res.send({plugin:plugin})
					}
				})
			}
		})
	}
}

//POST plugin order
exports.setOrder = function (req, res){

	var order = req.body.plugins

	db.get('activePlugins', function (err, str) {

		if (err) res.send(500, {})
		else {

			var arr = JSON.parse(str)

			if (arr.length == order.length){

				db.put('activePlugins', JSON.stringify(order), function (err){

					if (err) res.send(500, {})
					else {

						 res.send(200, {})
					}
				})
			}
		}
	})
}

//GET hour to trigger thing
exports.getHour = function (req, res){

	db.get('time', function (err, t){

		if (err || !t) res.send({time:'00:00'})
		else {

			res.send({time:t})
		}
	})
}

//POST hour to trigger thing
exports.setHour = function (req, res){

	var time = req.body['time']
	if (!time) res.send(500, {})
	else {

		db.put('time', time, function (err){
			if (!err) res.send(200, {})
		})
	}
}