var API = {}

API.getActivePlugins = function() {
	$.getJSON('/api/plugins/active', function(plugins) {
		console.log(plugins)
	})
}

API.getAllPlugins = function() {
	$.getJSON('/api/plugins/all', function(allPlugins) {
		console.log(allPlugins)
	})
}

API.setOrder = function(array) {
	$.post('/api/plugins/order', {'plugins': array})
}

API.setHour = function(hour) {
	$.post('/api/plugins/hour', {'hour': hour})
}