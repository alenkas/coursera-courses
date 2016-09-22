(function(){
'use strict';

angular.module('BindingApp', [])
.controller('BidingController', BidingController);

BidingController.$inject = ['$scope'];
	function BidingController($scope) {
		$scope.firstName = "Yaakov";
		$scope.fullName = "";

		$scope.showNumbersOfWatchers = function(){
			console.log("# of Watchers: ", $scope.$$watchersCount);
		};

		$scope.setFullName = function(){
			$scope.fullName = $scope.firstName + " " + "Chaikin";
		};

		$scope.logFirstName = function(){
			console.log("First name is: ", $scope.firstName);
		};
		
		$scope.logFullName = function(){
			console.log("Full name is :", $scope.fullName);
		}	
	}
	
})();