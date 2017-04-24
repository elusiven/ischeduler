(function () {
    
    'use strict';
    app.factory('appointmentsService', ['$http', function($http) {
        
        var serviceBase = '';
        var appointmentsServiceFactory = {};
        
        var _getAppointments = function () {
            
            return $http.get(serviceBase + 'api/appointments')
                .then(function (results) {
                    return results;
            });
        };
        
        appointmentsServiceFactory.getAppointments = _getAppointments;
        
        return appointmentsServiceFactory;
        
    }]);
    
}());