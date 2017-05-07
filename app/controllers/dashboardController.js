(function () {
    'use strict';
    
    var app = angular.module('myApp');
    
    app.controller('dashboardController', ['$scope', 'appointmentsService', function($scope, appointmentsService) {
        
    $scope.Date = new Date();
    $scope.currentView = "week";
 
    appointmentsService.getAppointments().then(function (results) {
        $scope.appointments = Object.values(results.data);
        console.log($scope.appointments);
    });
        
   
        
    function onAppointmentSave(args) {
        console.log("appointment was saved");
    };
        
    }]);
    
}());
