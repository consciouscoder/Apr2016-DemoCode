// server.js

// Require http so we can access it
var http = require('http')
var requester = require('request')

var server = http.createServer(
    function(request, response){
        
        requester.get({
            url : 'http://xkcd.com/'
        }, function(err, res, body){
            // console.log('Err', err)
            // console.log('Res', res)
            // console.log('Body', body)
            
            response.writeHead(200, {'Content-Type' : 'text/html'})
            response.end(body)
    
            
        })
        
    }
)

server.listen(process.env.PORT || 3000)
// localhost:3000 for local machines
// click the Run button for c9