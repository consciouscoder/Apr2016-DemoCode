// Comicstrip.js
var request = require('request')

request.get({
    url : 'http://xkcd.com/'
}, function(err, response, body){
    console.log('Err', err)
    // console.log('Res', response)
    console.log('Body', body)
    
})
