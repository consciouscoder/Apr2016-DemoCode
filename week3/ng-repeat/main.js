var mainController = function($scope){
    console.log('Hello world!')
    $scope.dwarves = [
        'sleepy',
        'dopey',
        'doc'
    ]
    $scope.dwarvesObj = {
        sleepy : 'the one with the floppy hat',
        dopey : `he's a little slow`,
        doc   : 'the educated one'
    }

    $scope.cloneDwarves = [
        'sleepy',
        'dopey',
        'dopey',
        'doc',
        'dopey',
    ]

    // dont have to worry about track by $index
    $scope.arrObjDwarves = [
        {name : 'sleepy' , hobbies : ['sleeping', 'not working']},
        {name : 'dopey'  , hobbies : ['not studying', 'being dumb']},
        {name : 'doc'    , hobbies : ['reading books', 'trauma surgery']},
        {name : 'sleepy' , hobbies : ['sleeping', 'not working']},
    ]

    $scope.logDwarf = function(dwarf){
        console.log('dwarf? ', dwarf)
    }
}

angular.module('app', [])
    .controller('mainController', ['$scope', mainController])
