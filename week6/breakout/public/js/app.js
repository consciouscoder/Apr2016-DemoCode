angular.module('Learnin', ['ui.router'])

// Setting up routing
angular.module('Learnin')
    .config(function($stateProvider, $urlRouterProvider){
        
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "/html/home.html",
                controller: "magicSchoolBus as msb"
            })
            .state('about', {
                url: "/about",
                templateUrl: "/html/about.html",
                controller: "aboutController as about"
            })
        
        $urlRouterProvider.otherwise('/')
    })






angular.module('Learnin')
    .controller('magicSchoolBus', ['$http', magicSchoolBus])
    
function magicSchoolBus ($http){
    var msb = this
    msb.greeting = "Get on the bus now!"
}

angular.module('Learnin')
    .controller('aboutController', ['$http', aboutController])
function aboutController($http){
    var aboutCtrl = this
    aboutCtrl.greeting = 'something something something'
}
    