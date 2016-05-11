// Requires \\
var express = require('express');

// Create Express App Object \\
var app = express();

// GET to /about

var middlewareFunction = function(request, response, next){
    request.extraData = 'look at all this data!'
    response.resData = 'response data?'
    console.log('middleware!')
    next()
}

app.use('/about', middlewareFunction)

app.get('/', function(request, response){
    console.log('the home page!')
    console.log(request.extraData)
    response.send('hi')
});

app.get('/about', middlewareFunction, middlewareFunction, middlewareFunction, middlewareFunction, middlewareFunction, middlewareFunction, middlewareFunction, middlewareFunction, middlewareFunction, middlewareFunction, middlewareFunction, middlewareFunction, function(request, response){
    console.log('this is the about page')
    response.send('this is the about page')
    console.log(response.resData)
});

app.use('/about', function(){})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})