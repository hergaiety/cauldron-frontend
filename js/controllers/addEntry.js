angular.module('cauldron')
.controller('addEntry', ['cauldronAPI','$scope','$q', function(cauldronAPI, $scope, $q){
  var tagsList = cauldronAPI.getTags();

  var submitEntry = function(){
    var newEntry = $scope.entryData;
    newEntry.author =  {
      username: 'Megaman  '+ Math.random(),
      display_name: 'The_dude' + Math.random(),
      email:'Mega' + Math.random() + '@fakemeail.com'
    };
    newEntry.version = '1.0';
    newEntry.links =  ['megaLinks.com', 'UltimateLink.org'];
    var promise = cauldronAPI.addEntry(newEntry);

    promise.then(function(response){
      console.log('Entry Added, redirecting back to index');
    },
    function(response) {
      console.log('something went wrong', response);
    });
  }
}]);
