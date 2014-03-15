var Utils = {}

Utils.getArgs = function() {
	var hashes = window.location.hash.split('#')[1].split('&'),
		args = {}

	hashes.forEach(function(val) {
		var v = val.split('=')
		args[v[0]] = decodeURIComponent(v[1])
	})

	return args
}

Utils.sendArgs = function(data) {
	var encoded = '#'
	for (var key in data) {
		encoded += (key + '=' + encodeURIComponent(data[key]) + '&')
	}
	encoded = encoded.substring(0, encoded.length - 1);
	return encoded
}