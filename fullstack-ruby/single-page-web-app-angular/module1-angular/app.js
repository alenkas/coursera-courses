(function(){
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope){
	$scope.name = "Sam";
	$scope.sayHello = function(){
		return "Hello";
	}
});

})();