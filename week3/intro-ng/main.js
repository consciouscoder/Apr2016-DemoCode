// First we need to create a module
angular.module('StartUp', []) // Creating a module called StartUp
// Need to use ng-app directive


// Then, create a controller
angular.module('StartUp') // Retrieves the already created module
    .controller('potatoTroller', ['$scope', '$timeout', potato])
// Need to use ng-controller directive

// Function that represents our controller
// Needs paramaters that match the injected dependencies
function potato ($scope, $timeout) {
    // console.log('This is the controller', $scope)
    
    // $scope is the object that passes data to the view/html
    
    $scope.greeting = "Hola, brah"
    $scope.sombrero = 'http://vignette2.wikia.nocookie.net/clubpenguin/images/2/2f/Mini_Sombrero.png/revision/latest?cb=20140408163249'
    
    $scope.buttonTime = function(){
        console.log('I was clicked!')
        $scope.makeItFancy = !$scope.makeItFancy
    }
    $scope.showUnicorn = function(){
        console.log('dis da unicorn, ', $scope.unicorn)
    }
    // $timeout(function(){
    //      $scope.sombrero = "https://upload.wikimedia.org/wikipedia/commons/0/0f/Diana's_wet_burrito.jpg"
    //      $scope.greeting = 'NOOOOOOOOO'
    // }, 2000)
}