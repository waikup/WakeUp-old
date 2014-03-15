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
		API.addPlugin(name, function(plugin) {
			UI.addActivePlugin(plugin)
			UI.showSection('#list')
		})
	})
	$('#list ul').on('click', 'li', function() {
		$('iframe').attr('/plugin/' + name + '/index.html')
		UI.showSection('#plugin')
	})
}

UI.showSection = function (id) {
	$('.current').removeClass('current')
	$(id).addClass('current')
}

UI.addAvailablePlugin = function (name) {
	var li = $('<li>').data('name', name).text(name)
	$('#add ul').append(li)
}

UI.addActivePlugin = function (data) {
	var li = $('<li>').data('name', data['name']).data('uuid', data['uuid']).text(data['name'])
	$('#list ul').append(li)
}

UI.getOrder = function() {
	var arr = []
	$('#list ul li').each(function(i, li) {
		arr.push($(li).data('name'))
	})
	return arr
}