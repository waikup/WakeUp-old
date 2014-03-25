var toDisable = ['linkBindingEnabled', 'hashListeningEnabled', 'pushStateEnabled', 'changePage.defaults.changeHash']
for (var i in toDisable)
	eval('$.mobile["'+toDisable[i]+'"] = false')

var attr = Plugin.getConfig()['attr']

$(document).on('ready', function() {
	$('#category').val(attr['category'])
	$('#number').val(attr['number']).slider('refresh')
})

$('button').on('tap', function() {
	Plugin.sendConfig({category: $('#category').val(), number: parseInt($('#number').val())})
})