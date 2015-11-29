describe('Flickr Feed', function() {

  beforeEach(function() {
    browser.get('index.html#/feed');
    feed = element.all(by.repeater('feed in flickrFeed'));

  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Flickr Potato');
  });

  it('displays 20 feed titles', function() {
    expect(feed.count()).toEqual(20);
  });
});
