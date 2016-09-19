(function () {

'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.items = "";
	$scope.checkQty = function () {
		$scope.message = $scope.items.split(",").length <= 3 ? "Enjoy!" : "Too much!";
	}
};

})();