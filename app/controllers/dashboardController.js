(function () {
    'use strict';
    
    var app = angular.module('myApp');
    
    app.controller('dashboardController', ['$scope', 'appointmentsService', function($scope, appointmentsService) {
        
    var serviceBase = 'http://ischedwebapi.azurewebsites.net/api/';
        
    $scope.Date = new Date();
    $scope.currentView = "week";
 
//    appointmentsService.getAppointments().then(function (results) {
//        $scope.appointments = Object.values(results.data);
//        console.log($scope.appointments);
//    });
        
    $scope.appointments = ej.DataManager({ url: serviceBase + "appointments", crudUrl: serviceBase + "Home/Batch", adaptor: new ej.UrlAdaptor() });
        
    function onAppointmentSave(args) {
        console.log("appointment was saved");
    };
        
    }]);
    
}());
