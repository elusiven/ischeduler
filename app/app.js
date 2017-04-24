(function() {
    
    var app = angular.module("myApp", ['ngRoute']);
    
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
            controller : "dashboardController"
        });
    }
    
    
    app.config(['$routeProvider', router]);
    
}());