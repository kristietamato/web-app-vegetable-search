var vegetableControllers = angular.module('vegetableControllers', ['ngAnimate']);

vegetableControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('resources/data/vegetables.json').success(function(data) {
    $scope.vegetables = data;
    $scope.vegetableOrder = 'name';
  });
}]);

vegetableControllers.controller('InfoController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('resources/data/vegetables.json').success(function(data) {
    $scope.vegetables = data;
    $scope.whichItem = $routeParams.itemId;

    if($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId) - 1;
    } else {
      $scope.prevItem = $scope.vegetables.length - 1; // set to the last item
    }
    if($routeParams.itemId < $scope.vegetables.lenq - 1) {
      $scope.nextItem = Number($routeParams.itemId) + 1;
    } else {
      $scope.nextItem = 0; // set to the first item
    }
  });
}]);
