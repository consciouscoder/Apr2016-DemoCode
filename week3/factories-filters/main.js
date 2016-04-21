angular.module('WillyWonka', [])

angular.module('WillyWonka')
    .controller('snozBerries', ['wonkaFactory', snozBerries])
    
angular.module('WillyWonka')
    .controller('candyControl', ['wonkaFactory', '$timeout', candyControl])

angular.module('WillyWonka')
    .factory('wonkaFactory', [wonkaFactory])

function snozBerries(wonkaFactory){
    // this will be the object exposing data to the view instead of $scope
    // this => $scope
    
    // $scope.greeting = 'Hello'
    // this.greeting = 'Hello'
    
    // Aliasing the value of this into a variable
    var snozCtrl = this
    snozCtrl.search = ''
     snozCtrl.greeting = 'Hello'
     snozCtrl.clicker = function(){
         console.log('Click!')
     }
    
    console.log('Wonka : ', wonkaFactory)
    snozCtrl.candies = wonkaFactory.candies
    // arr.filter(function(arrayEl, elIndex, array){
        
    // })
    snozCtrl.candyFilter = function(arrayEl, elIndex){
        console.log('Filter', arrayEl, elIndex)
        return arrayEl.type.toLowerCase().indexOf(snozCtrl.search.toLowerCase()) > -1
        
    }
}
function candyControl (wonkaFactory, $timeout){
    var candyCtrl = this // will be the object exposing data to the view
    candyCtrl.greeting = 'Yoyoyo'
    console.log('wonkydoo : ', wonkaFactory)
    candyCtrl.candies = wonkaFactory.candies
    // wonkaFactory.myAwesomeUtilityFunction(candies)
    
    // $timeout(function(){
    //     candyCtrl.candies.push({
    //         name : 'Twizzlers',
    //         type : 'Rope',
    //         color : 'Red/Black',
    //         nuts : false
    //     })
    //     candyCtrl.candies[0].name = 'Burrito candies'
    // }, 3000)
    
}

function wonkaFactory (){
    
    var candies = [
        {
            name : 'Choco Balls',
            type : 'Chocolate',
            color : 'Brown',
            nuts : false,
            price : 12.65
            
        },
        {
            name : 'Gobstoppers',
            type : 'Hard',
            color : 'Rainbow',
            nuts : false,
            price : 4.7
            
        },
        {
            name : 'Almond Chocolate Bar',
            type : 'Chocolate',
            color : 'Brown',
            nuts : true,
            price : 1
            
        }
        
        
    ]
    // function myAwesomeUtilityFunction (input){
    //     return output
    // }
    
    // only thing you NEED in a factory is a return statement
    // 99.998% factories return an OBJECT
    return {
        candies : candies,
        // myAwesomeUtilityFunction : myAwesomeUtilityFunction
        // staff : '--',
        // shellCorporations : '--',
        // something : {
            
        // }
        
    }
}