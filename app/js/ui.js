var UI = {}

UI.bind = function() {
	$('#list button').on('click', function() {
		UI.showSection('#add')
	})
	$('header span').on('click', function() {
		UI.showSection('#list')
	})
	$('#add ul').on('click', 'li', function() {
		var name = $(this).data('name')
		API.addPlugin(name, function(data) {
			UI.showSection('#list')
		})
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
	UI.addActivePlugin(data)
}

UI.showSection = function (id) {
	$('.current').removeClass('current')
	$(id).addClass('current')
}

UI.addAvailablePlugin = function (data) {
	var li = $('<li>').data('name', data['name']).text(data['name'])
	$('#list ul').append(li)
}

UI.addActivePlugin = function (data) {
	var li = $('<li>').data('name', data['name']).data('uuid', data['uuid']).text(data['name'])
	$('#add ul').append(li)
}

UI.getOrder = function() {
	var arr = []
	$('#list ul li').each(function(i, li) {
		arr.push($(li).data('name'))
	})
	return arr
}