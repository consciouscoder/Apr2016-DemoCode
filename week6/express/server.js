// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose')

// Create Express App Object \\
var app = express();

// Application Configuration \\
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// console.log(__dirname)
app.use(express.static(__dirname + '/public'));
// Routes \\

app.get('/', function(request, response){
    response.sendFile('html/index.html', {root : './public'})
    // console.log(request)
});

app.post('/form-submit', function(request, response){
    console.log('body? ', request.body)
    
    // response.redirect prompts the client to send another get request to the provided url
    // this is a very common pattern called POST-REDIRECT-GET
    response.redirect('/')
})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})