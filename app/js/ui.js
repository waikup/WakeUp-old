var UI = {}

UI.bind = function() {
	$('#list button').on('click', function() {
		UI.showSection('#add')
	})
	$('header span').on('click', function() {
		UI.showSection('#list')
	})
}

UI.showSection = function (id) {
	$('.current').hide()
	$(id).show()
}