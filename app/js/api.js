var API = {}

API.getActivePlugins = function(cb) {
	$.getJSON('/api/plugins/active', function(plugins) {
		cb(plugins)
	})
}

API.getAllPlugins = function(cb) {
	$.getJSON('/api/plugins/all', function(allPlugins) {
		cb(allPlugins)
	})
}

API.addPlugin = function(name, cb) {
	$.post('/api/plugin/' + name + '/new', function(data) {
		cb(data['plugin'])
	})
}

API.savePlugin = function(name, uuid, attr) {
	$.post('/api/plugin/' + name + '/' + uuid, attr)
}

API.setOrder = function(array) {
	$.post('/api/order', {'plugins': array})
}

API.getTime = function(cb) {
	$.getJSON('/api/time', function(data) {
		cb(data['time'])
	})
}

API.setTime = function(time) {
	$.post('/api/time', {'time': time})
}

API.encodeConfig = function(data) {
	var encoded = '#'
	for (var key in data) {
		encoded += (key + '=' + encodeURIComponent(JSON.stringify(data[key])) + '&')
	}
	encoded = encoded.substring(0, encoded.length - 1);
	return encoded
}