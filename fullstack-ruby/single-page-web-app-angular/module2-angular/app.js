(function(){
'use strict';

angular.module('CounterApp', [])

.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
	function CounterController($scope) {

		$scope.onceCounter = 0;
		$scope.counter = 0;
	
		$scope.showNumbersOfWatchers = function(){
			console.log($scope.$$watchersCount);
		};	

		$scope.countOnce = function(){
			$scope.onceCounter = 1;
		};

		$scope.upCounter = function(){
			$scope.counter++;
		};

		$scope.$watch('onceCounter', function(newValue, oldValue){
			console.log(oldValue);
			console.log(newValue);
		});

		$scope.$watch('counter', function(newValue, oldValue){
			console.log(oldValue);
			console.log(newValue);
		});
	}


})();