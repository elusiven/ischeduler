(function () {
    'use strict';
    
    var app = angular.module('myApp');
    
    app.controller('dashboardController', ['$scope', function($scope) {
    $scope.message = 'Dashboard Controller awesome message!';
    }]);
    
}());
