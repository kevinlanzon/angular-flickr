describe('flickrApp.feed module', function() {
  var scope, ctrl, $httpBackend;

  beforeEach(module('flickrApp.feed'));

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectJSONP('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json').
      respond([{title: 'D30：grow up', author_id: '68951079@N05'}, {title: 'Chimichurri Potato Salad', author_id: '35137530@N00'}]);

    scope = $rootScope.$new();
    ctrl = $controller('FeedController', {$scope: scope});
    $httpBackend.flush();
  }));

    it('should create a "flickrFeed" model with 2 feeds fetched from xhr', function() {
    expect(scope.data).toEqual([{title: 'D30：grow up', author_id: '68951079@N05'}, {title: 'Chimichurri Potato Salad', author_id: '35137530@N00'}]);
    });
});
