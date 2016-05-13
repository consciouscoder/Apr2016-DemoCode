// Server.js

// Requires -> pulling in the modules we need
var express    = require('express')
var bodyParser = require('body-parser')
var morgan     = require('morgan')

// Creates our express app object
var app = express()

// Set up initial config / middleware mounting
app.use( morgan('dev') ) 
app.use( bodyParser.urlencoded({extended : true}) ) 
app.use( bodyParser.json() ) 
app.use( express.static( __dirname + '/public' ) )


// Routes

// Index/home route
app.get('/', function(req, res){
    console.log(req.query.name)
    res.sendFile('main.html', {root : './public/html'})
})

app.post('/createUser', function(req, res){
    console.log(req.body)
    res.redirect('/users/' + req.body.username + '/' + req.body.password)
})
//https://refactoru-devaio.c9users.io/users/Ninjas/dragons
app.get('/users/:name/:password', function(req, res){
    console.log(req.params)
    res.send('<h1> Welcome back, ' + req.params.name + '!</h1><h3>' + req.params.password + '</h3>')
})

// Listen for connections
var port = process.env.PORT || 3000
app.listen(port, function(){
    console.log("Server listening at " + port)
})
