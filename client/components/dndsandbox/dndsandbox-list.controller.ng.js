'use strict'

angular.module('tastynoteApp')
.controller('DndsandboxListCtrl', function($scope) {
  $scope.page = 1;
  $scope.perPage = 3;
  $scope.sort = {name_sort : 1};
  $scope.orderProperty = '1';
  
  $scope.helpers({
    dndsandbox: function() {
      return Dndsandbox.find({}, {
        sort: $scope.getReactively('sort') 
      });
    },
    dndsandboxCount: function() {
      return Counts.get('numberOfDndsandbox');
    }
  });
                  
  $scope.subscribe('dndsandbox', function() {
    return [{
      sort: $scope.getReactively('sort'),
      limit: parseInt($scope.getReactively('perPage')),
      skip: ((parseInt($scope.getReactively('page'))) - 1) * (parseInt($scope.getReactively('perPage')))
    }, $scope.getReactively('search')];
  });

  $scope.save = function() {
    if ($scope.form.$valid) {
      Dndsandbox.insert($scope.newDndsandbox);
      $scope.newDndsandbox = undefined;
    }
  };
                  
  $scope.remove = function(dndsandbox) {
    Dndsandbox.remove({_id:dndsandbox.id});
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