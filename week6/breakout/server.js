// Server.js

// Requires -> pulling in the modules we need
var express    = require('express')
var bodyParser = require('body-parser')
var morgan     = require('morgan')

// Creates our express app object
var app = express()

// Set up initial config / middleware mounting
app.use( morgan('dev') ) // Sets up logging on every request
app.use( bodyParser.urlencoded({extended : true}) ) // takes urlencoded strings (garbage) and turns them into nice JS objects
app.use( bodyParser.json() ) // takes stringified JSON and parses into nice JS objects
app.use( express.static( __dirname + '/public' ) ) // Will look in the public folder and serve files if the route requested matches a filepath


// Routes

// Index/home route
app.get('/', function(req, res){
    console.log('Our first request!')
    // res.send('Welcome back')
    res.sendFile('main.html', {root : './public/html'})
})


// Listen for connections
var port = process.env.PORT || 3000
app.listen(port, function(){
    console.log("Server listening at " + port)
})
