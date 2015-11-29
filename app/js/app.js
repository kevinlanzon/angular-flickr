'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.view1'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
