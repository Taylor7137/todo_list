var app = angular.module('ngWeatherList', []);

app.controller('ngWeatherListController', function($scope){
	$scope.locationList = [];
	
	$scope.saveLocation = function(){
		var location = $scope.inputLocation;
		$scope.locationList.push(location)
		$scope.inputLocation = "";
	}
	
	$scope.enter = function($event){
		if ($event.keyCode==13){
			var location = $scope.inputLocation;
			$scope.locationList.push(location)
			$scope.inputLocation = "";
		}
	}
	
	$scope.removeSite = function(aLocation){
		var index= $scope.locationList.indexOf(aLocation);
		$scope.locationList.splice(index, 1);
	}
	
	$scope.editList = function(aLocation){
		$scope.inputLocation = aLocation;
		$scope.removeSite(aLocation);
	}
	
	$scope.moveUp = function(aLocation){
		var index = $scope.locationList.indexOf(aLocation);
		$scope.locationList.splice(index, 1);
		$scope.locationList.splice(index-1, 0, aLocation);
	}
	
	$scope.moveDown = function(aLocation){
		var index = $scope.locationList.indexOf(aLocation);
		$scope.locationList.splice(index,1);
		$scope.locationList.splice(index+1, 0, aLocation);
	}
});
