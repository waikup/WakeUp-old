UI.bind()

API.getTime(function(time) {
	$('#time').val(time)
})

$('#add ul, #list ul').listview()
API.getAllPlugins(function(data) {
	for (var i in data['plugins']) {
		UI.addAvailablePlugin(data['plugins'][i])
	}
})

API.getActivePlugins(function(data) {
	for (var i in data['active']) {
		UI.addActivePlugin(data['active'][i])
	}
})

window.addEventListener("message", function(e) {

	var plugin = JSON.parse(e.data)
	API.savePlugin($('#plugin').data('name'), plugin.uuid, plugin.attr)
	UI.showSection('#list')

},false)