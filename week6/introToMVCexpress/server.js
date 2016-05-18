var Express = require('express'),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  app = Express(),
  port = process.env.PORT || 8080,
  apiRoutes = require('./api_routes'),
  path      = require('path'),
  mongoose = require('mongoose')
// 'mongodb://'+ process.env.IP +'/food'
  mongoose.connect('mongodb://localhost/food', function(err){
    if(err) console.log("fix your mongod bro")
  })

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(Express.static(path.join(__dirname, './public')))

app.use('/api', apiRoutes)

app.listen(port, function (err) {
  if (err) console.log('Server Crashed!')
  console.log('Server is listening on port: ' + port)
})
