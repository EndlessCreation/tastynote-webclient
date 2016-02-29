angular.module('tastynote')
    .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        
        $stateProvider
            .state('addnote', {
                url:'/addnote',
                template: '<add-note></add-note>'
            });
            
        $urlRouterProvider.otherwise("/");
});