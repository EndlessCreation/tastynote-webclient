angular.module('tastynote').directive('addNote', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/add-note/add-note.html',
        controllerAs: 'addNote',
        controller: function () {
        }
    }
});
