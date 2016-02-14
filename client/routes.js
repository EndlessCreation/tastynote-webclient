angular.module('socially')
    .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('parties', {
                url: '/parties',
                template: '<parties-list></parties-list>'
            })
            .state('partyDetails', {
                url: '/parties/:partyId',
                template: '<party-details></party-details>',
                resolve: {
                    currentUser: ($q) => {
                        if (Meteor.userId() == null) {
                            return $q.reject('AUTH_REQUERED');
                        }
                        else {
                            return $q.resolve();
                        }
                    }
                }
            });

        $urlRouterProvider.otherwise("/parties");

    })
    .run(function ($rootScope, $state) {
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            if (error == 'AUTH,REQUIRED') {
                $state.go('parties');
            }
        });
    });