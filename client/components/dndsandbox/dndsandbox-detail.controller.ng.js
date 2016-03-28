'use strict'

angular.module('tastynoteApp')
    .controller('DndsandboxDetailCtrl', function ($scope, $stateParams) {
    
        //-- simple drag and drop
        $scope.boardModel = {
            selected: null,
            lists: { "Canvas": []}
        };
        $scope.itemModels = {
            selected: null,
            lists: { "Title": []  }
        }

        // Generate initial model
        for (var i = 1; i <= 3; ++i) {
            $scope.itemModels.lists.Title.push({ label: "Item A" + i });
        }
        //$scope.boardModel.lists.Canvas.push({ label: "Blank" });
        // Model to JSON for demo purpose
        $scope.$watch('boardModel', function (model) {
            $scope.boardModelAsJson = angular.toJson(model, true);
        }, true);
        
         $scope.$watch('itemModels', function (model) {
            $scope.itemModelsAsJson = angular.toJson(model, true);
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