// =====START GLOBAL VAR DECLARATION=====
var
  express = require('express'),
  app = express(),
  path = require('path'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  apiRoutes = require('./api_routes.js')

// =======================================
// SETUP MIDDLEWARE FOR API
app.use(logger('dev'))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
// Initialize routes to use
app.use('/api', apiRoutes)
// =======================================
app.use(express.static(path.join(__dirname, './public')))
// =======================================

// SET THE PORT TO RUN
app.listen(3000, function () {
  console.log('Express server listening on port 3000')
})
