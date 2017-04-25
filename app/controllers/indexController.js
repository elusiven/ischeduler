(function() {
    
    'use strict';
    var app = angular.module("myApp");
    app.controller('indexController', ['$scope', '$location', 'authService', function($scope, $location, authService) {
        $scope.logOut = function() {
            authService.logOut();
            $location.path('/');
        }
        
        $scope.authentication = authService.authentication;
        
        $scope.$on('$routeChangeStart', function(angularEvent, newUrl, authService) {
            if (newUrl.requireAuth == true && $scope.authentication.isAuth == false) {
                // user is not authenticated, redirect him!
                $location.path("/login");
            };
        });
        
    }]);
    
}());