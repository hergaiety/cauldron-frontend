angular.module('cauldron')
.controller('indexView', ['cauldronAPI','$scope','$q', function(cauldronAPI, $scope, $q){
  console.log('indexView controller checking in');

  var setIndexEntries = function(){
    var promise = cauldronAPI.getEntries();
    promise.then(function(response){
      $scope.indexEntries = response;
    },
    function(response) {
      console.log('something went wrong', response);
    });

  }
  setIndexEntries();

  $scope.addNew = function(){
    var promise = cauldronAPI.addEntry();
    promise.then(function(response){
      setIndexEntries();
    },
    function(response) {
      console.log('something went wrong', response);
    });
  }
}]);
