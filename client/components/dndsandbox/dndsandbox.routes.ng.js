'use strict'

angular.module('tastynoteApp')
.config(function($stateProvider) {
  $stateProvider
  .state('dndsandbox-list', {
    url: '/dndsandbox',
    templateUrl: 'client/components/dndsandbox/dndsandbox-list.view.ng.html',
    controller: 'DndsandboxListCtrl'
  })
  .state('dndsandbox-detail', {
    url: '/dndsandbox/:dndsandboxId',
    templateUrl: 'client/components/dndsandbox/dndsandbox-detail.view.ng.html',
    controller: 'DndsandboxDetailCtrl'
  });
});