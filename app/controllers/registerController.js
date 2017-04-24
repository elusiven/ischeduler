(function () {
    'use strict';
    
    var app = angular.module('myApp');
    
    app.controller('registerController', ['$scope', function($scope) {
    $scope.message = 'Register Controller awesome message!';
    }]);
    
}());
