var UI = {}

UI.bind = function() {
	$('#addButton').on('click', function() {
		UI.showSection('#add')
	})
	$('header span').on('click', function() {
		UI.showSection('#list')
	})
	$('#add ul').on('click', 'li', function() {
		API.addPlugin($(this).data('name'), function(plugin) {
			UI.addActivePlugin(plugin)
			UI.showSection('#list')
		})
	})
	$('#list ul').on('click', 'li', function() {
		$('iframe').attr('src', '/plugin/' + $(this).data('name') + '/index.html')
		$('#plugin h1').text($(this).data('name'))
		UI.showSection('#plugin')
	})
	$('#saveTime').on('click', function() {
		API.setTime($('#time').val())
	})
}

UI.showSection = function (id) {
	$("body").pagecontainer("change", id)
}

UI.addAvailablePlugin = function (name) {
	var li = $('<li>').data('name', name).text(name)
	$('#add ul').append(li).listview('refresh')
}

UI.addActivePlugin = function (data) {
	var li = $('<li>').data('name', data['name']).data('uuid', data['uuid']).append('<a>'+data['name']+'</a>')
	$('#list ul').append(li).listview('refresh')
}

UI.getOrder = function() {
	var arr = []
	$('#list ul li').each(function(i, li) {
		arr.push($(li).data('name'))
	})
	return arr
}