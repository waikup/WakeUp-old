$.mobile.linkBindingEnabled = false
$.mobile.hashListeningEnabled = false
$.mobile.pushStateEnabled = false
$.mobile.changePage.defaults.changeHash = false

var attr = Plugin.getConfig()['attr']

$(document).on('ready', function() {
	$('#number').val(attr['number']).slider('refresh')
})

$('#category').val(attr['category'])

$('button').on('tap', function() {
	Plugin.sendConfig({category: $('#category').val(), number: parseInt($('#number').val())})
})