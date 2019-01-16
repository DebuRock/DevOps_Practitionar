var DevOpsDemoApp = angular.module("DevOpsDemoApp.controllers", []);

DevOpsDemoApp.controller("homeController", function ($scope, $http, $location, devOpsService) {
	debugger;
	$scope.user = {};
	$scope.login = function() {
		debugger;
		devOpsService.login($scope.user).then(function(response){
			
		})
	}
});