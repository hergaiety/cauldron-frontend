angular.module("cauldron", ['ngRoute'])
.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.when('/',{
      templateUrl:'/views/indexView.html',
    })
    .otherwise({
      redirectTo: '/',
    });
  }
])
