angular.module("cauldron", ['ngRoute'])
.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.when('/',{
      templateUrl:'/views/IndexView.html',
      controller:'IndexController'
    })
    .when('/addEntry',{
      templateUrl:'/views/AddEntryView.html',
      controller:'AddEntryController'
    })
    .otherwise({
      redirectTo: '/',
    });
  }
])
