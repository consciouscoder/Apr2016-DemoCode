var $http = require('request')

module.exports = {
  kanye: {
    getAlbum: function (req, res) {
      console.log('Getting album form kanye rest api------')
      $http('http://www.kanyerest.xyz/api/album/'+ req.params.album, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.send(body) // Show the HTML for the Google homepage.
        }
      })
    },
    getTrack: function (req, res) {
      console.log('Getting album form kanye rest api------')
      $http('http://www.kanyerest.xyz/api/track/'+ req.params.track, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.send(body) // Show the HTML for the Google homepage.
        }
      })
    },
    getCount: function (req, res) {
      console.log('Getting album form kanye rest api------')
      $http('http://www.kanyerest.xyz/api/counter', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.send(body) // Show the HTML for the Google homepage.
        }
      })
    }
  }
}
