angular.module('app').controller('app_details', app_details);
function app_details($scope, app) {
    'use strict';
    console.log("inside details controller"+$scope.details);
    
    app.init($scope);
}