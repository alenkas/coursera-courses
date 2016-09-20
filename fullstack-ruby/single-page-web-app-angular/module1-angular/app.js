(function(){
'use strict';

angular.module('DIApp', [])

.controller('DIController', DICOntroller);

function DICOntroller($scope, $filter){
	$scope.name = "Sam";
	
	$scope.upper = function(){
		var upCase = $filter('uppercase');
		$scope.name = upCase($scope.name);
	};
}

function AnnonateMe(name, job, blah){
	return "blah";
}

console.log(AnnonateMe.toString());

})();