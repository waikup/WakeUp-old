var API = function() {

}

API.prototype.getActivePlugins = function() {
	$.getJSON('/api/plugins/active', function(plugins) {
		console.log(plugins)
	})
}

API.prototype.getAllPlugins = function() {
	$.getJSON('/api/plugins/all', function(allPlugins) {
		console.log(allPlugins)
	})
}

API.prototype.setOrder = function(array) {
	$.post('/api/plugins/order', {'plugins': array})
}

API.prototype.setHour = function(hour) {
	$.post('/api/plugins/hour', {'hour': hour})
}