'use strict'

angular.module('tastynoteApp')
    .controller('DndsandboxDetailCtrl', function ($scope, $stateParams) {
    
        //-- simple drag and drop
        $scope.models = {
            selected: null,
            lists: { "A": [], "B": [] }
        };

        // Generate initial model
        for (var i = 1; i <= 3; ++i) {
            $scope.models.lists.A.push({ label: "Item A" + i });
            $scope.models.lists.B.push({ label: "Item B" + i });
        }

        // Model to JSON for demo purpose
        $scope.$watch('models', function (model) {
            $scope.modelAsJson = angular.toJson(model, true);
        }, true);
  
        //--  
  
  
        $scope.helpers({
            dndsandbox: function () {
                return Dndsandbox.findOne({ _id: $stateParams.dndsandboxId });
            }
        });

        $scope.subscribe('dndsandbox');

        $scope.save = function () {
            if ($scope.form.$valid) {
                delete $scope.dndsandbox._id;
                Dndsandbox.update({
                    _id: $stateParams.dndsandboxId
                }, {
                        $set: $scope.dndsandbox
                    }, function (error) {
                        if (error) {
                            console.log('Unable to update the dndsandbox');
                        } else {
                            console.log('Done!');
                        }
                    });
            }
        };

        $scope.reset = function () {
            $scope.dndsandbox.reset();
        };
    });