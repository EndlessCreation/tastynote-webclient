angular.module('tastynote').directive('tastynote', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/tastynote/tastynote.html',
        controllerAs: 'tastynote',
        controller: function ($scope, $reactive) {
            //$reactive(this).attach($scope);
        }
    }
});