(function(){
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope', '$timeout'];
	function CounterController($scope, $timeout) {
		$scope.counter = 0;

		// Not a really good way.
		// Try not to use it
		// $scope.upCounter = function(){
		// 	setTimeout(function(){
		// 		$scope.counter++;
		// 		console.log("Counter incremented");

		// 		$scope.$digest();
		// 	}, 2000);
		// };

		// Also not a good way
		// $scope.upCounter = function(){
		// 	setTimeout(function(){
		// 		$scope.$apply(function(){
		// 			$scope.counter++;
		// 			console.log("Counter incremented");	
		// 		})
		// 	}, 2000);
		// };


		// There is always angular alternative
		// Try to use if it exists
		$scope.upCounter = function(){
			$timeout(function(){
				$scope.counter++;
				console.log("Counter incremented");	
			}, 2000);
		};
	}


})();