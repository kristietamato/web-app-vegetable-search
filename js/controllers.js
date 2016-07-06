var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http', function($scope, $http) {
  $http.get('resources/data/vegetables.json').success(function(data) {
    $scope.vegetables = data;
    $scope.vegetableOrder = 'name';
  });
}]);