(function() {

  angular.module('controllers', [])
  .controller('homeController', hController)
    // $scope syntax bellow============
    // function homeController ($scope) {
    //   $scope.name = 'Home Controller'
    // }
    //==============================
    //controller as syntax
  function hController() {
    var hCtrl = this
    hCtrl.name = 'Home Controller'
  }

}());
