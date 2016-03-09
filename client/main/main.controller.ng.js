'use strict'

angular.module('tastynoteApp')
.controller('MainCtrl', function($scope) {
  $scope.page = 1;
  $scope.perPage = 3;
  $scope.sort = {name_sort : 1};
  $scope.orderProperty = '1';
  
  $scope.helpers({
    things: function() {
      return Things.find({}, {
        sort: $scope.getReactively('sort') 
      });
    },
    thingsCount: function() {
      return Counts.get('numberOfThings');
    }
  });
                  
  $scope.subscribe('things', function() {
    return [{
      sort: $scope.getReactively('sort'),
      limit: parseInt($scope.getReactively('perPage')),
      skip: ((parseInt($scope.getReactively('page'))) - 1) * (parseInt($scope.getReactively('perPage')))
    }, $scope.getReactively('search')];
  });

  $scope.save = function() {
    if ($scope.form.$valid) {
      Things.insert($scope.newThing);
      $scope.newThing = undefined;
    }
  };
                  
  $scope.remove = function(thing) {
    Things.remove({_id: thing._id});
  };
                  
  $scope.pageChanged = function(newPage) {
    $scope.page = newPage;
  };
                  
  return $scope.$watch('orderProperty', function() {
    if ($scope.orderProperty) {
      $scope.sort = {
        name_sort: parseInt($scope.orderProperty)
      };
    }
  });
});