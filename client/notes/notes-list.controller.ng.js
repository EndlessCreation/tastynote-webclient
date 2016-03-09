'use strict'

angular.module('tastynoteApp')
.controller('NotesListCtrl', function($scope) {
  $scope.page = 1;
  $scope.perPage = 3;
  $scope.sort = {name_sort : 1};
  $scope.orderProperty = '1';
  
  $scope.helpers({
    notes: function() {
      return Notes.find({}, {
        sort: $scope.getReactively('sort') 
      });
    },
    notesCount: function() {
      return Counts.get('numberOfNotes');
    }
  });
                  
  $scope.subscribe('notes', function() {
    return [{
      sort: $scope.getReactively('sort'),
      limit: parseInt($scope.getReactively('perPage')),
      skip: ((parseInt($scope.getReactively('page'))) - 1) * (parseInt($scope.getReactively('perPage')))
    }, $scope.getReactively('search')];
  });

  $scope.save = function() {
    if ($scope.form.$valid) {
      Notes.insert($scope.newNote);
      $scope.newNote = undefined;
    }
  };
                  
  $scope.remove = function(note) {
    Notes.remove({_id:note.id});
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