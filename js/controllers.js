var vegetableControllers = angular.module('vegetableControllers', []);

vegetableControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('resources/data/vegetables.json').success(function(data) {
    $scope.vegetables = data;
    $scope.vegetableOrder = 'name';
  });
}]);