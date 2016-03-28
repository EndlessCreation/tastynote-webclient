'use strict'

angular.module('tastynoteApp')
.config(function($stateProvider) {
  $stateProvider
  .state('dndsandboxtwo', {
    url: '/dndsandboxtwo',
    templateUrl: 'client/components/dndsandboxtwo/dndsandboxtwo.view.ng.html',
    controller: 'DndsandboxTwoCtrl'
  })
});