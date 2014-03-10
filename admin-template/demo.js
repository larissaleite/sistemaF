var app = angular.module('sysFinance', []);

app.controller('addExpensesController', function($scope) {
	$scope.destArray = [
		{name:'Subway'},
		{name:'McDonalds'}	
	];

	$scope.dest = $scope.destArray[0];

	$scope.addToSelectBox = function(destinationText) {
		$scope.destArray = $scope.destArray.concat([{name:destinationText}]);
	}

});

app.directive('selectPicker', function() {
	return function(scope, element, attributes){
        element.selectpicker();

        scope.$watch(function () {
          return element[0].length;
         }, function () {
          element.selectpicker('rebuild');
         }); 

          // Watch for any changes from outside the directive and refresh
        scope.$watch(function () {
          return scope.destArray;
         }, function () {
          element.selectpicker('refresh');
        }, true);
    }
});