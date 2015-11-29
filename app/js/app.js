angular.module('flickrApp', [
  'ngRoute',
  'flickrApp.feed'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/feed'});
}]);
