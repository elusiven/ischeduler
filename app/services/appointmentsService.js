(function () {
    
    'use strict';
    
    var app = angular.module("myApp");
    
    app.factory('appointmentsService', ['$http', function($http) {
        
        var serviceBase = 'http://localhost:63185/';
        var appointmentsServiceFactory = {};
        
        var _getAppointments = function () {
             return $http.get(serviceBase + 'api/appointments').then(function (results) {
                 return results;
             });
        };
        
        appointmentsServiceFactory.getAppointments = _getAppointments;
        
        return appointmentsServiceFactory;
        
    }]);
    
}());