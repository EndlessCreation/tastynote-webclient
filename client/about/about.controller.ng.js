'use strict';

angular.module('tastynoteApp')
    .controller('AboutCtrl', function ($scope, $http) {
        var req={
            method : 'GET',
            url:'https://www.googleapis.com/drive/v3/about'
        };
        $http.get(req).then(function(response){
            $scope.aboveData = response;
            console.log(response);
        });
        $scope.viewName = 'About';
    });