var myApp = angular.module('myApp', [
  'ngRoute',
  'vegetableControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  when('/info/:itemId', {
    templateUrl: 'partials/info.html',
    controller: 'InfoController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);