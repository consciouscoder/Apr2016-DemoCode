;(function () {
  angular.module('myRouterApp', ['ui.router','controllers'])
    .config(routerConfig)

    function routerConfig($stateProvider,$urlRouterProvider){

      $stateProvider
        .state('home',{
          url: '/',
          templateUrl: 'home.html',
          controller: 'homeController as hCtrl'
        })
        .state('login',{
          url: '/login',
          templateUrl: 'login.html'
        })

        $urlRouterProvider.otherwise('/')

    }

}())
