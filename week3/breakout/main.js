/*global angular */
// Angular Setup
angular.module('TooMuchPressure', []) // Creates the TooMuchPressure module
// angular.module('NotEnoughPressure', []) // 2nd module

angular.module('TooMuchPressure')
    .controller('pressureControl', ["$scope",function($scope){
        // console.log('hello from the controller')
        var something = 'hello' // inaccessible to the view because it is NOT on $scope

        $scope.fireInstructor = function(index, event){
          console.log('Yafya`d', index, event)
          $scope.instructors.splice(index, 1)
        }
        $scope.addInstructor = function(){
          // console.log($scope.newInstructor)
          $scope.instructors.push($scope.newInstructor)

          // Reset the form by making $scope.newInstructor a brand new object
          $scope.newInstructor = {}
        }
        // List of instructors
        $scope.instructors  = [
          {
            name      : 'Raphael',
            startDate : 'Long, long ago',
            creditCard: 10,
            shirtSize : 10,
            homeTown  : 'Chi-town',
            favoriteHotsHeroes : [
              'Tassadar',
              'Murky'
            ]
          },
          {
            name      : 'Rob',
            startDate : 'Long ago',
            creditCard: 4242424242424242,
            shirtSize : 40,
            homeTown  : 'Tampa',
            favoriteHotsHeroes : [
              'Chen',
              'Dehaka'
            ]
          },
          {
            name      : 'Tony',
            startDate : 'February',
            creditCard: 1234857339483333,
            shirtSize : 2,
            homeTown  : 'Compton',
            favoriteHotsHeroes : [
              'Thrall',
              'Malfurion'
            ]
          }
        ]


    }])
