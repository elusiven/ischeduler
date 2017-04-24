(function () {
    'use strict';
    
    var app = angular.module('myApp');
    
    app.controller('mainController', ['$scope', function($scope) {
    $scope.message = 'Main Controller awesome message!';
    }]);
    
}());

