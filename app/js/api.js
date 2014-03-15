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

API.addPlugin = function(data, cb) {
	$.postJSON('/api/plugins/' + name + '/new', {}, function(uuid) {
		cb(uuid)
	})
}

API.setOrder = function(array) {
	$.post('/api/plugins/order', {'plugins': array})
}

API.setHour = function(hour) {
	$.post('/api/plugins/hour', {'hour': hour})
}