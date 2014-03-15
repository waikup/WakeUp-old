SC.initialize({
    client_id: "5a8edbed865ed2b31acf4d9720696e7f"
})

function search(query, cb) {

	SC.get("/tracks", {q: query, limit: 5}, function(tracks) {
		cb(tracks)
	})
}

$(document).ready(function() {
	$('input').on('keyup', function() {
		$('#results ul').html('')
		search($(this).val(), function(tracks) {
			tracks.forEach(function(track) {
				console.log(track)
				var li = $('<li>').text(track.title).css('backgroundImage', 'url('+track.artwork_url+')').data('id', track.id)
				$('#results ul').append(li)
			})
		})
	})	
})

console.log(Utils.getArgs())

console.log(Utils.sendArgs({'err': null, 'wheee': 'manolo'}))