(function () {
    'use strict';
    
    var app = angular.module('myApp');
    
    app.controller('loginController', ['$scope', function($scope) {
    $scope.message = 'Login Controller awesome message!';
    }]);
    
}());
