(function() {
    
    'use strict';
    
    var app = angular.module("myApp");
    
    app.factory('authService', ['$http', '$q', 
                'localStorageService', function ($http, $q, localStorageService) {

    var serviceBase = 'http://localhost:63185/api/identity/';
    var authServiceFactory = {};

    var _authentication = {
        isAuth: false,
        userName : ""
    };

    var _saveRegistration = function (registration) {

        _logOut();

        return $http.post(serviceBase + 'create', registration).then(function (response) {
            return response;
        });
    };

    var _login = function (loginData) {

        //var data = "grant_type=password&userName=" + 
        //loginData.userName + "&password=" + loginData.password;
        
        var loginDat = {
            "username": loginData.userName,
            "password": loginData.password
        };

        var data = angular.toJson(loginDat);
        
        console.log(data);

        var deferred = $q.defer();
        
        $http.post(serviceBase + 'token', data, {headers:{ 'Content-Type': 'application/json'}}).then(function successCallback(response) {
            
            localStorageService.set('authorizationData', 
            { token: response.access_token, userName: loginData.userName });

            _authentication.isAuth = true;
            _authentication.userName = loginData.userName;

            deferred.resolve(response);
            
        }, function errorCallback(err, status) {
            _logOut();
            deferred.reject(err);
          });
        
        return deferred.promise; 
    };

    var _logOut = function () {

        localStorageService.remove('authorizationData');

        _authentication.isAuth = false;
        _authentication.userName = ""; 
    };

    var _fillAuthData = function () {

        var authData = localStorageService.get('authorizationData');
        if (authData)
        {
            _authentication.isAuth = true;
            _authentication.userName = authData.userName;
        }  
    }

    authServiceFactory.saveRegistration = _saveRegistration;
    authServiceFactory.login = _login;
    authServiceFactory.logOut = _logOut;
    authServiceFactory.fillAuthData = _fillAuthData;
    authServiceFactory.authentication = _authentication;

    return authServiceFactory;
}]);
    
}());