'use strict'

angular.module('tastynoteApp')
.directive('toolbar', function() {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/toolbar/toolbar.view.ng.html',
    replace: true
  };
});