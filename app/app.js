(function() {
    
    var app = angular.module("myApp", ['ngRoute', 'LocalStorageModule', 'ejangular']);
    
    function router($routeProvider) {
        
        $routeProvider
        .when("/", {
            templateUrl : "app/views/home.html",
            controller : "mainController"
        })
        .when("/login", {
            templateUrl : "app/views/login.html",
            controller : "loginController"
        })
        .when("/register", {
            templateUrl : "app/views/register.html",
            controller : "registerController"
        })
        .when("/dashboard", {
            templateUrl : "app/views/dashboard.html",
            controller : "dashboardController",
            requireAuth: true
        }).otherwise({ redirectTo: "/"});
    }
    
    
    app.config(['$routeProvider', router]);
    
    app.config(function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    });
    
    app.run(['authService', function (authService) {
        authService.fillAuthData();
    }]);

}());