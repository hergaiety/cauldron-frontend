angular.module("cauldron", ['ngRoute'])
.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.when('/',{
      templateUrl:'/views/indexView.html',
      controller:'indexView'
    })
    .when('/addEntry',{
      templateUrl:'/views/addEntry.html',
      controller:'addEntry'
    })
    .otherwise({
      redirectTo: '/',
    });
  }
])
