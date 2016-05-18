(function() {
  angular.module('homeController',[])
    .controller('homeCtrl', homeCtrl)

    function homeCtrl(foodFact){
      var hCtrl = this

      hCtrl.name = "home Controller"

      hCtrl.submitPlate = function(plate){
        foodFact.create(plate)
          .then(function (response) {
            console.log("response from server create method",response)
          })
      }
    }


}());
