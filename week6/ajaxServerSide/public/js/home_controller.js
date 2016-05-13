(function() {
  'use strict';
  angular.module('homeController', [])
    .controller('homeCtrl', homeCtrl)

    function homeCtrl(kanyeRest){
      var hCtrl = this

      hCtrl.name = "Home Controller"

      hCtrl.getAlbumInfo = function(albumName){
        kanyeRest.getAlbums(albumName)
        .then(function(response){
          console.log('from my api for album: ',response)
        })

      }

      // kanyeRest.getTrack('famous')
      //   .then(function(response){
      //     console.log('from my api for track: ',response)
      //   })
    }
}());
