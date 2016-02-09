angular.module('cauldron')
.controller('AddEntryController', ['cauldronAPI','$scope','$q','$location', function(cauldronAPI, $scope, $q, $location){
  $scope.entryData ={
    author: {
      username: 'Megaman  '+ Math.random(),
      display_name: 'The_dude' + Math.random(),
      email:'Mega' + Math.random() + '@fakemeail.com',
    },
    title: 'this is the title for the entry page ' + Math.random(),
    imageURL:'http://www.clipartbest.com/cliparts/9ip/eMR/9ipeMRo7T.png',
    description:'DIS is da Monster!',
  }

  var tagsList = cauldronAPI.getTags();

  $scope.submitEntry = function(){
    var newEntry = $scope.entryData;
    newEntry.version = '1.0';
    newEntry.links =  ['megaLinks.com', 'UltimateLink.org'];
    var promise = cauldronAPI.addEntry(newEntry);

    promise.then(function(response){
      console.log('Entry Added, redirecting back to index');
      $location.path( "/" );
    },
    function(response) {
      console.log('something went wrong', response);
    });
  };

}]);
