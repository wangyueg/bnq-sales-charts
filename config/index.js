const url = {
	development: {
		apiUrl: 'http://192.168.251.104:8080',
		port: 8080,
		autoOpenBrowser: true,
		proxyFilter: '/report'
	},
	production: {
		apiUrl: ''
	}
}

module.exports = url;