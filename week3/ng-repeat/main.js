var mainController = function($scope){
    console.log('Hello world!')

    $scope.dwarves = [
        'sleepy',
        'dopey',
        'doc',
        'bashful',
        'sneezy',
        'grumpy',
        'codey',

    ]

    $scope.dwarvesObj = {
        'sleepy' : 'the napping one',
        'dopey' : 'the slow one',
        'doc' : 'has glasses',
        'bashful' : 'is shy',
        'sneezy' : 'has allergies',
        'grumpy' : 'is related to matt',
        'codey' : 'loves refactoru',
        
    }

    $scope.cloneDwarves = [
        'sleepy',
        'dopey',
        'doc',
        'doc',
        'bashful',
        'sneezy',
        'sneezy',
        'sneezy',
        'grumpy',
        'codey',

    ]

    $scope.arrObjDwarves = [
        {name : 'sleepy', hobbies : ['sleeping', 'napping']},
        {name : 'doc', hobbies : ['reading', 'trauma surgery']},
        {name : 'dopey', hobbies : ['smoking', 'licking walls']},
    ]
    
    $scope.logDwarf = function(dwarf){
        console.log(dwarf)
    }
}

angular.module('app', [])
    .controller('mainController', ['$scope', mainController])
