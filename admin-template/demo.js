var app = angular.module('sysFinance', []);

app.controller('addExpensesController', function($scope, storageService) {
	$scope.destArray = [
		/*{name:'Subway'},
		{name:'McDonalds'}	*/
	];

	if (storageService.get("destArray") != null) {
		$scope.destArray = storageService.get("destArray");
	}


	$scope.dest = $scope.destArray[0];

	$scope.addToSelectBox = function(destinationText) {

		if (storageService.get("destArray") == null) {
			var jsonArray = [{name:destinationText}];
			storageService.save("destArray", jsonArray);
		} else {
			var jsonArray = {name:destinationText};
			storageService.edit("destArray", jsonArray);
		}
		//$scope.destArray = $scope.destArray.concat([{name:destinationText}]);
		$scope.destArray = storageService.get("destArray");
		$scope.dest = $scope.destArray[$scope.destArray.length-1];
	}


	expenses = [{date:'date', item:'itemName', amount:'amount', destination:'destination', source:'source'}, {...}];

});

app.controller('registrationController', function($scope) {

});

app.directive('selectPicker', function() {
	return function(scope, element, attributes, storageService){
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

app.factory('storageService', function ($rootScope) {

    return {
        
        get: function (key) {
           return JSON.parse(localStorage.getItem(key));
        },

        edit: function(key, data) {
            var array = JSON.parse(localStorage.getItem(key));
            array.push(data);
            localStorage.setItem(key, JSON.stringify(array));    
        },

        save: function (key, data) {
           localStorage.setItem(key, JSON.stringify(data));
        },

        remove: function (key) {
            localStorage.removeItem(key);
        },
        
        clearAll : function () {
            localStorage.clear();
        }
    };
});