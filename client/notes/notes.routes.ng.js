'use strict'

angular.module('tastynoteApp')
.config(function($stateProvider) {
  $stateProvider
  .state('notes-list', {
    url: '/notes',
    templateUrl: 'client/notes/notes-list.view.ng.html',
    controller: 'NotesListCtrl',
    resolve: {
      currentUser: ['$meteor', function($meteor) {
        return $meteor.requireUser();
      }]
    }
  })
  .state('note-detail', {
    url: '/notes/:noteId',
    templateUrl: 'client/notes/note-detail.view.ng.html',
    controller: 'NoteDetailCtrl',
    resolve: {
      currentUser: ['$meteor', function($meteor) {
        return $meteor.requireUser();
      }]
    }
  });
});