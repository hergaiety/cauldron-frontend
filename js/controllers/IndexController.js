angular.module('cauldron')
.controller('IndexController', ['cauldronAPI','$scope','$q', function(cauldronAPI, $scope, $q){
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
  };

  $scope.deleteEntry = function(id){
    var promise = cauldronAPI.removeEntry(id);
    promise.then(function(response){
      console.log('Entry Deleted');
      setIndexEntries();
    },
    function(response) {
      console.log('deletion went wrong', response);
    });
  };

}]);
