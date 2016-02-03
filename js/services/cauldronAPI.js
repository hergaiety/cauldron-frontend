angular.module('cauldron')
.service('cauldronAPI',[ '$http','$q', function($http, $q){
  var backendURL = 'http://localhost:1337';

  var connect = function(){
    console.log("Connected!");
  };

  var getTags = function(){
    console.log('Tags backend not implemented');
  }

  var addEntry = function(params){

    if(typeof params === 'undefined'){
      var params = {
        title: 'Test Title ' + Math.random(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        author: {
          username: 'Jim Beam '+ Math.random(),
          display_name: 'Jimmy' + Math.random(),
          email:'Jim' + Math.random() + '@fakemeail.com'
        },
        version: '1.0',
        links: ['fakelink.com'],
        //system: ['Pathfinder'],
        //tags: ['Scenario'],
      };
    }
    return $http({
      method: 'POST',
      url: backendURL +'/brew',
      data: {
        title: params.title,
        description: params.description,
        author: params.author,
        version: params.version,
        links: params.links,
        system: params.system,
        tags: params.tags
      }
    }).then(function successCallback(response) {
      return response.data;
    }, function errorCallback(response) {
      console.log('FAIL!', response);
    });
  };

  var getEntries = function(){
    return $http({
      method: 'GET',
      url: backendURL+'/brew',
    }).then(function(response){
      return response.data;
    });
  };

  return {
    connect: connect,
    addEntry:addEntry,
    getEntries:getEntries,
  }
}]);
