var UI = {}

UI.bind = function() {

	$("#timePicker").DateTimePicker()

    $('#list ul').sortable({
    	delay: 750,
    	containment: 'parent',
    	update: function(event, ui) {
            API.setOrder(UI.getOrder())
        }
    })
    $('#list ul').disableSelection()
    $('#list ul').bind( "sortstop", function(event, ui) {
      	$('#list ul').listview('refresh')
    })

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
		var data = {
			uuid: $(this).data('uuid'),
			attr: $(this).data('attr')
		}
		var parsed = API.encodeConfig(data)
		$('iframe').attr('src', '/plugin/' + $(this).data('name') + '/index.html'+parsed)
		$('#plugin').data('name', $(this).data('name'))
		$('#plugin h1').text($(this).data('name'))
		UI.showSection('#plugin')
	})
	$('#timePicker').on('click', '.dtpicker-buttonSet', function() {
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
	var li = $('<li>').data('name', data['name']).data('uuid', data['uuid']).data('attr', JSON.stringify(data['attr'])).append('<a>'+data['name']+'</a>')
	$('#list ul').append(li).listview('refresh')
}

UI.getOrder = function() {
	var arr = []
	$('#list ul li').each(function(i, li) {
		arr.push($(li).data('uuid'))
	})
	return arr
}