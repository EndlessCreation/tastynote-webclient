angular.module('tastynoteApp', [
    'angular-meteor',
    'ui.router',
    'ngMaterial',
    'angularUtils.directives.dirPagination',
    'accounts.ui',
    'dndLists',
    'ngDragDrop'
]);

onReady = function () {
    angular.bootstrap(document, ['tastynoteApp']);
};

if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}