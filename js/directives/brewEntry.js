angular.module('cauldron').directive('brewEntry', function() {

  return {
    templateUrl: '/views/directives/brewEntry.html',
    scope: {
      entryData: '=brew',
    }
  };
});
