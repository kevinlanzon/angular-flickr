angular.module('flickrApp.feed', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/feed', {
    templateUrl: 'partials/feed.html',
    controller: 'FeedController'
  });
}])

.controller('FeedController', ['$scope', '$http', function($scope, $http) {

  $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json')
    .success(jsonFlickrFeed = function(data) {

    $scope.data = data;
    $scope.flickrFeed = data.items;

  });
}]);