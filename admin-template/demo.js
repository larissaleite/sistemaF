var app = angular.module('sysFinance', ['ui.bootstrap']);

app.controller('addExpensesController', function($scope) {
	$scope.destArray = ['Subway', 'McDonalds'];

	$scope.addToSelectBox = function() {
        $scope.destArray.push($scope.destinationText);
    }
});