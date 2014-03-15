var UI = {}

UI.bind = function() {
	$('#list button').on('click', function() {
		UI.showSection('#add')
	})
	$('header span').on('click', function() {
		UI.showSection('#list')
	})
	$('#add ul').on('click', 'li', function() {
		// call new
		//$('iframe').attr('/plugin/' + name + '/index.html')
		//UI.showSection('#plugin')
	})
	$('#list ul').on('click', 'li', function() {
		$('iframe').attr('/plugin/' + name + '/index.html')
		UI.showSection('#plugin')
	})

	var data = {
		'name': 'SoundCloud',
		'uuid': '09875648v4y7q576'
	}
	UI.addAvailablePlugin(data)
	UI.addInstalledPlugin(data)
}

UI.showSection = function (id) {
	$('.current').removeClass('current')
	$(id).addClass('current')
}

UI.addAvailablePlugin = function (data) {
	var li = $('<li>').data('name', data['name']).text(data['name'])
	$('#list ul').append(li)
}

UI.addInstalledPlugin = function (data) {
	var li = $('<li>').data('name', data['name']).data('uuid', data['uuid']).text(data['name'])
	$('#add ul').append(li)
}