(function() {
  angular.module('pokeApp',[])
    // .controller('pokeController', ['$scope', '$log', function($log, $scope){}])
    .controller('pokeController', pokeCtrl)

    pokeCtrl.$inject = ['$scope','$http']

    function pokeCtrl($scope,$http){
      var pCtrl = this
      pCtrl.text = 'PokeApp'


      pCtrl.searchPokedex = function(){
        console.log('searching for pokemon....');
        $http.get('http://pokeapi.co/api/v2/pokemon/' + pCtrl.pokeName)
        .then(function(response){
          console.log("Response from pokeApi", response.data)
          pCtrl.pokemon = response.data
        })
      }

      $http.get('http://pokeapi.co/api/v2/pokedex/1')
      .then(function(response){
        pCtrl.pokedex = response.data.pokemon_entries
        console.log(pCtrl.pokedex);
      })

    }


}());
