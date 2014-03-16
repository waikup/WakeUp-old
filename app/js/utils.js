var Utils = {}

Utils.getConfig = function() {
	var hashes = window.location.hash.split('#')[1].split('&'),
		args = {}

	hashes.forEach(function(val) {
		var v = val.split('=')
		args[v[0]] = decodeURIComponent(v[1])
	})

	return args
}

Utils.parseConfig = function(data) {
	var encoded = '#'
	for (var key in data) {
		encoded += (key + '=' + encodeURIComponent(data[key]) + '&')
	}
	encoded = encoded.substring(0, encoded.length - 1);
	return encoded
}

Utils.sendConfig = function(data) {

	// TODO
	window.parent.configChanged(Utils.parseArgs())
}