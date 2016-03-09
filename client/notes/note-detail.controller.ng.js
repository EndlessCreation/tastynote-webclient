'use strict'

angular.module('tastynoteApp')
.controller('NoteDetailCtrl', function($scope, $stateParams) {
  
  $scope.helpers({
    note: function() {
      return Notes.findOne({ _id: $stateParams.noteId }); 
    }
  });
  
  $scope.subscribe('notes');
  
  $scope.save = function() {
    if($scope.form.$valid) {
      delete $scope.note._id;
      Notes.update({
        _id: $stateParams.noteId
      }, {
        $set: $scope.note
      }, function(error) {
        if(error) {
          console.log('Unable to update the note'); 
        } else {
          console.log('Done!');
        }
      });
    }
  };
        
  $scope.reset = function() {
    $scope.note.reset();
  };
});