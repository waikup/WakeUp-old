var toDisable = ['linkBindingEnabled', 'hashListeningEnabled', 'pushStateEnabled', 'changePage.defaults.changeHash']
for (var i in toDisable)
	eval('$.mobile["'+toDisable[i]+'"] = false')

SC.initialize({
    client_id: "5a8edbed865ed2b31acf4d9720696e7f"
})

$(document).on('ready', function() {
	var id = Plugin.getConfig()['attr']['id']
	if (!id) return

	SC.get("/tracks/"+id+".json", null, function(track) {
		appendLi(track)
		$('ul').listview('refresh')
	})
})

function search(query, cb) {
	SC.get("/tracks", {q: query, limit: 5}, cb)
}

function appendLi(track) {
	var a = $('<a>').text(track.title).append('<img src="'+track.artwork_url+'">'),
		li = $('<li>').data('id', track.id).append(a)

	$('ul').append(li)
}

$('[role=main]').on('keypress', 'input', function(e) {
	if (e.which != 13) return

	$('ul').html('')
	search($(this).val(), function(tracks) {
		tracks.forEach(function(track) {
			appendLi(track)
		})
		$('ul').listview('refresh')
	})
})

$('ul').on('tap', 'li', function() {
	Plugin.sendConfig({'id': parseInt($(this).data('id'))})
})