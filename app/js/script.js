UI.bind()

API.getAllPlugins(function(data) {
	for (var i in data['plugins']) {
		UI.addAvailablePlugin(data['plugins'][i])
	}
})

/*API.getActivePlugins(function(data) {
	for (var i in data['active']) {
		UI.addActivePlugin(data['active'][i])
	}
})*/