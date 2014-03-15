UI.bind()

API.getAllPlugins(function(plugins) {
	for (var plugin in plugins) {
		UI.addAvailablePlugin(plugin)
	}
})

API.getActivePlugins(function(plugins) {
	for (var plugin in plugins) {
		UI.addActivePlugin(plugin)
	}
})