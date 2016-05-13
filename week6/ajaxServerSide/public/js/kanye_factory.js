(function() {
  'use strict';
    angular.module('kanyeFactory',[])
      .factory('kanyeRest', kanyeRest)

      function kanyeRest($http){
        var kFact = {}

        kFact.getAlbums = function(albumName){
          return $http.get('/api/kanye/' + albumName)
        }

        kFact.getTrack = function(trackName){
          return $http.get('/api/kanye/track/' + trackName)
        }

        return kFact
      }
}());
