(function () {
    'use strict';
    
    var app = angular.module('myApp');
    
    app.controller('registerController', ['$scope', '$location', 
                '$timeout', 'authService', function($scope, $location, $timeout, authService) {
            
        $scope.savedSuccessfully = false;
        $scope.message = "";
                    
        $scope.registration = {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
                    
        $scope.signUp = function() {
            
            authService.saveRegistration($scope.registration).then(function (response) {
                $scope.savedSuccessfully = true;
                $scope.message = "User has been registered successfully, you will be redirected to login page in 2 seconds.";
                startTimer();
            },
            function (response) {
                $scope.message = response.data.errors;
            });
        };
                    
        var startTimer = function () {
            var timer = $timeout(function () {
                $timeout.cancel(timer);
                $location.path('/login');
            }, 2000);
        };
                    
    }]);
    
}());
