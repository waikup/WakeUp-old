var Plugin = {}

Plugin.getConfig = function() {
	var hashes = window.location.hash.split('#')[1].split('&'),
		args = {}

	hashes.forEach(function(val) {
		var v = val.split('=')
		args[v[0]] = JSON.parse(decodeURIComponent(v[1]))
	})

	Plugin.uuid = args.uuid
	args.attr = JSON.parse(args.attr)

	return args
}

Plugin.sendConfig = function(attr) {
	var data = {uuid: Plugin.uuid, attr: attr}
	parent.postMessage(JSON.stringify(data), "http://localhost:8888")
}