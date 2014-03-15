var express = require('express'),
	path = require('path')

var api = require('./api'),
	middleware = require('./middleware')

var app = express()

//App config

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride())

app.use('/app',express.static(path.join(__dirname, '..', '..', 'app'))); //APP

app.use(app.router);
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Routes

app.get('/', api.redirect)
app.get('/api', api.api)



module.exports = exports = app