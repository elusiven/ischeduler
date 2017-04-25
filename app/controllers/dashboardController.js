(function () {
    'use strict';
    
    var app = angular.module('myApp');
    
    app.controller('dashboardController', ['$scope', function($scope) {
        
    $scope.Date = new Date();
    $scope.currentView = "week";
        
    var appointmentsCollection = [{
        Id: 1, 
        Subject: "Bering Sea Gold", 
        StartTime: new Date(2017, 4, 5, 5, 30), 
        EndTime: new Date(2017, 4, 5, 7, 30), 
        Description:"", 
        AllDay: false, 
        Recurrence: false
    }];
        
    $scope.appointments = appointmentsCollection;
        
    function onAppointmentSave(args) {
        console.log("appointment was saved");
    };
        
    }]);
    
}());
